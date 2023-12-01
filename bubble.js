var data; // Array to store the numbers
var colors; // Array to store the colors corresponding to the numbers
var sortingInterval; // Interval ID for the sorting process
var currentIndex; // Index of the current element being sorted

// Function to generate a random list of numbers and colors
function generateRandomList(size, min, max) {
    var list = []; // Initialize an empty array to store the numbers
    var colorList = []; // Initialize an empty array to store the colors

    for (var i = 0; i < size; i++) {
        var number = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number within the specified range
        list.push(number); // Add the number to the list array
        colorList.push(getRandomColor()); // Generate a random color and add it to the colorList array
    }

    return [list, colorList]; // Return both the list and colorList arrays as a tuple
}

// Function to generate a random color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // Select a random character from the letters string and append it to the color
    }

    return color; // Return the randomly generated color
}

// Function to visualize Bubble Sort
function bubbleSortVisualization() {
    var n = data.length; // Get the length of the data array
    var chartContainer = d3.select("#chart-container"); // Select the chart container element using D3.js
    var barWidth = 30; // Width of each bar in the chart
    var barSpacing = 5; // Spacing between bars

    chartContainer.selectAll("*").remove(); // Clear the chart container

    var svg = chartContainer.append("svg") // Create an SVG element within the chart container
        .attr("width", (barWidth + barSpacing) * n) // Set the width of the SVG element based on the number of bars
        .attr("height", 400); // Set the height of the SVG element

    var bars = svg.selectAll("rect") // Select all rectangle elements within the SVG (there are none initially)
        .data(data) // Bind the data array to the selection
        .enter() // Enter the data array (create placeholder elements for new data)
        .append("rect") // Append a rectangle element for each data point
        .attr("x", function(d, i) { return i * (barWidth + barSpacing); }) // Set the x position of the rectangle based on its index and the spacing
        .attr("y", function(d) { return 400 - d * 10; }) // Set the y position of the rectangle based on its value and scaling factor
        .attr("width", barWidth) // Set the width of the rectangle
        .attr("height", function(d) { return d * 10; }) // Set the height of the rectangle based on its value and scaling factor
        .attr("fill", function(d, i) { return colors[i]; }); // Set the fill color of the rectangle based on its index in the colors array

    function updateBars() {
        svg.selectAll("rect") // Select all existing rectangle elements within the SVG
            .data(data) // Bind the updated data array to the selection
            .transition() // Start a transition animation
            .duration(1000) // Set the duration of the transition
            .attr("y", function(d) { return 400 - d * 10; }) // Update the y position of the rectangles based on the updated data and scaling factor
            .attr("height", function(d) { return d * 10; }) // Update the height of the rectangles based on the updated data and scaling factor
            .attr("fill", function(d, i) { return colors[i]; }); // Update the fill color of the rectangles based on their index in the colors array
    }

    function bubbleSort() {
        currentIndex = 0;
        sortingInterval = setInterval(function() {
            if (currentIndex < n - 1) {
                for (var i = 0; i < n - currentIndex - 1; i++) {
                    if (data[i] > data[i + 1]) {
                        var temp = data[i];
                        data[i] = data[i + 1];
                        data[i + 1] = temp;

                        var tempColor = colors[i];
                        colors[i] = colors[i + 1];
                        colors[i + 1] = tempColor;
                    }
                }

                updateBars();
                currentIndex++;
            } else {
                clearInterval(sortingInterval);
                sortingInterval = null;
            }
        }, 1000); // Increase the interval for slower sorting
    }

    bubbleSort();
}

// Function to start the sorting process
function startSorting() {
    if (!sortingInterval) {
        if (data.length === 0) {
            resetSorting();
        } else {
            if (data.length > 1) {
                bubbleSortVisualization();
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
    var generatedData = generateRandomList(10, 1, 50);
    data = generatedData[0];
    colors = generatedData[1];
    if (data.length > 1) {
        bubbleSortVisualization();
    }
}

// On page load
document.addEventListener("DOMContentLoaded", function(event) {
    var chartContainer = document.getElementById("chart-container");
    if (chartContainer.innerHTML.trim() === "") {
        resetSorting();
    }
});
