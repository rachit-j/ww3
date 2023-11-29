var data; // Array to store the numbers to be sorted
var colors; // Array to store the colors of the bars
var sortingInterval; // Interval ID for the sorting process
var currentIndex; // Current index being processed

// Function to generate a random list of numbers and colors
function generateRandomList(size, min, max) {
    var list = []; // Array to store the generated numbers
    var colorList = []; // Array to store the generated colors

    // Generate 'size' random numbers within the range [min, max]
    for (var i = 0; i < size; i++) {
        var number = Math.floor(Math.random() * (max - min + 1)) + min;
        list.push(number); // Add the number to the list

        colorList.push(getRandomColor()); // Add a random color to the color list
    }

    return [list, colorList]; // Return the generated numbers and colors as an array
}

// Function to generate a random color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    // Generate a 6-digit hexadecimal color code
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color; // Return the generated color
}

// Function to visualize the Merge Sort algorithm
function mergeSortVisualization() {
    var n = data.length; // Number of elements in the data array
    var chartContainer = d3.select("#chart-container"); // Select the chart container element
    var barWidth = 30; // Width of each bar
    var barSpacing = 5; // Spacing between bars

    chartContainer.selectAll("*").remove(); // Clear the chart container

    var svg = chartContainer.append("svg")
        .attr("width", (barWidth + barSpacing) * n)
        .attr("height", 400);

    var bars = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d, i) { return i * (barWidth + barSpacing); })
        .attr("y", function(d) { return 400 - d * 10; })
        .attr("width", barWidth)
        .attr("height", function(d) { return d * 10; })
        .attr("fill", function(d, i) { return colors[i]; });

    function updateBars() {
        svg.selectAll("rect")
            .data(data)
            .transition()
            .duration(500)
            .attr("y", function(d) { return 400 - d * 10; })
            .attr("height", function(d) { return d * 10; })
            .attr("fill", function(d, i) { return colors[i]; });
    }

    function merge(arr, l, m, r) {
        var n1 = m - l + 1; // Size of the left subarray
        var n2 = r - m; // Size of the right subarray

        var L = []; // Temporary array for the left subarray
        var R = []; // Temporary array for the right subarray

        var i, j, k;

        // Copy data to the left and right subarrays
        for (i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        i = 0;
        j = 0;
        k = l;

        // Merge the left and right subarrays
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of L[], if any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy the remaining elements of R[], if any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    function mergeSort(arr, l, r) {
        if (l >= r)
            return;

        var m = l + Math.floor((r - l) / 2);

        // Recursively sort the left and right subarrays
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        // Merge the sorted subarrays
        merge(arr, l, m, r);
    }

    function mergeSortWrapper() {
        currentIndex = 0;
        sortingInterval = setInterval(function() {
            if (currentIndex < n) {
                mergeSort(data, 0, currentIndex);
                updateBars();
                currentIndex++;
            } else {
                clearInterval(sortingInterval);
                sortingInterval = null;
            }
        }, 500);
    }

    mergeSortWrapper();
}

// Function to start the sorting process
function startSorting() {
    if (!sortingInterval) {
        if (data.length === 0) {
            resetSorting();
        } else {
            if (data.length > 1) {
                mergeSortVisualization();
            }
        }
    }
}

// Function to pause the sorting process
function pauseSorting() {
    if (sortingInterval) {
        clearInterval(sortingInterval);
        sortingInterval = null;
    }
}

// Function to reset the sorting process
function resetSorting() {
    pauseSorting();
    var generatedData = generateRandomList(10, 1, 50); // Generate a new random list
    data = generatedData[0]; // Update the data array
    colors = generatedData[1]; // Update the colors array
    if (data.length > 1) {
        mergeSortVisualization();
    }
}

// On page load
document.addEventListener("DOMContentLoaded", function(event) {
    var chartContainer = document.getElementById("chart-container");
    if (chartContainer.innerHTML.trim() === "") { // If the chart container is empty
        resetSorting(); // Reset the sorting process
    }
});
