<!-- Add a table for displaying results -->
<table>
    <thead>
        <tr>
            <th>Sort Type</th>
            <th>Sorted List</th>
            <th>Time Taken (ms)</th>
            <th>Iterations</th>
            <th>Comparisons</th>
            <th>Swaps</th>
            <th>Input</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr id="bubbleRow">
            <td>Bubble Sort</td>
            <td id="bubbleList"></td>
            <td id="bubbleTime"></td>
            <td id="bubbleIterations"></td>
            <td id="bubbleComparisons"></td>
            <td id="bubbleSwaps"></td>
            <td><input type="text" id="bubbleInput" placeholder="Enter numbers separated by commas" /></td>
            <td><button onclick="sendSortRequest('bubble')">Sort</button></td>
        </tr>
        <tr id="insertionRow">
            <td>Insertion Sort</td>
            <td id="insertionList"></td>
            <td id="insertionTime"></td>
            <td id="insertionIterations"></td>
            <td id="insertionComparisons"></td>
            <td id="insertionSwaps"></td>
            <td><input type="text" id="insertionInput" placeholder="Enter numbers separated by commas" /></td>
            <td><button onclick="sendSortRequest('insertion')">Sort</button></td>
        </tr>
        <tr id="mergeRow">
            <td>Merge Sort</td>
            <td id="mergeList"></td>
            <td id="mergeTime"></td>
            <td id="mergeIterations"></td>
            <td id="mergeComparisons"></td>
            <td id="mergeSwaps"></td>
            <td><input type="text" id="mergeInput" placeholder="Enter numbers separated by commas" /></td>
            <td><button onclick="sendSortRequest('merge')">Sort</button></td>
        </tr>
        <tr id="selectionRow">
            <td>Selection Sort</td>
            <td id="selectionList"></td>
            <td id="selectionTime"></td>
            <td id="selectionIterations"></td>
            <td id="selectionComparisons"></td>
            <td id="selectionSwaps"></td>
            <td><input type="text" id="selectionInput" placeholder="Enter numbers separated by commas" /></td>
            <td><button onclick="sendSortRequest('selection')">Sort</button></td>
        </tr>
    </tbody>
</table>

<script>
    function sendSortRequest(sortType) {
        var data = document.getElementById(sortType + 'Input').value;
        var requestData = data.split(',').map(Number);

        fetch('https://ww3.stu.nighthawkcodingsociety.com/api/sorting/' + sortType, {
            method: 'POST',
            body: JSON.stringify(requestData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Update the table with the results
            document.getElementById(sortType + 'List').textContent = data.sortedList.join(', ');
            document.getElementById(sortType + 'Time').textContent = data.timeTakenMs;
            document.getElementById(sortType + 'Iterations').textContent = data.iterations;
            document.getElementById(sortType + 'Comparisons').textContent = data.comparisons;
            document.getElementById(sortType + 'Swaps').textContent = data.swaps;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
</script>
