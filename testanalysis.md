---
title: Analysis
subtitle: Analysis to the sorts
layout: page
show_sidebar: false
---

<style>
    .scrollable-list {
        max-height: 100px; /* Adjust the max height as needed */
        overflow-y: auto;
    }
</style>

<table>
    <thead>
        <tr>
            <th>Sort Type</th>
            <th>Sorted List</th>
            <th>Time Taken (ms)</th>
            <th>Iterations</th>
            <th>Comparisons</th>
            <th>Swaps</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr id="bubbleRow">
            <td>Bubble Sort</td>
            <td>
                <div class="scrollable-list">
                    <span id="bubbleList"></span>
                </div>
            </td>
            <td id="bubbleTime"></td>
            <td id="bubbleIterations"></td>
            <td id="bubbleComparisons"></td>
            <td id="bubbleSwaps"></td>
            <td><button onclick="sendSortRequest('bubble')">Sort</button></td>
        </tr>
        <tr id="insertionRow">
            <td>Insertion Sort</td>
            <td>
                <div class="scrollable-list">
                    <span id="insertionList"></span>
                </div>
            </td>
            <td id="insertionTime"></td>
            <td id="insertionIterations"></td>
            <td id="insertionComparisons"></td>
            <td id="insertionSwaps"></td>
            <td><button onclick="sendSortRequest('insertion')">Sort</button></td>
        </tr>
        <tr id="mergeRow">
            <td>Merge Sort</td>
            <td>
                <div class="scrollable-list">
                    <span id="mergeList"></span>
                </div>
            </td>
            <td id="mergeTime"></td>
            <td id="mergeIterations"></td>
            <td id="mergeComparisons"></td>
            <td id="mergeSwaps"></td>
            <td><button onclick="sendSortRequest('merge')">Sort</button></td>
        </tr>
        <tr id="selectionRow">
            <td>Selection Sort</td>
            <td>
                <div class="scrollable-list">
                    <span id="selectionList"></span>
                </div>
            </td>
            <td id="selectionTime"></td>
            <td id="selectionIterations"></td>
            <td id="selectionComparisons"></td>
            <td id="selectionSwaps"></td>
            <td><button onclick="sendSortRequest('selection')">Sort</button></td>
        </tr>
    </tbody>
</table>

<script>
    function sendSortRequest(sortType) {
        fetch('https://ww3.stu.nighthawkcodingsociety.com/api/card', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            var requestData = data.map(card => card.rank);

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
                var sortedListCell = document.getElementById(sortType + 'List');
                var sortedList = data.sortedList.join(', ');

                if (sortedList.length > 50) {
                    // scroll
                    sortedListCell.innerHTML = '<div class="scrollable-list">' + sortedList + '</div>';
                } else {
                    sortedListCell.textContent = sortedList;
                }

                document.getElementById(sortType + 'Time').textContent = data.timeTakenMs;
                document.getElementById(sortType + 'Iterations').textContent = data.iterations;
                document.getElementById(sortType + 'Comparisons').textContent = data.comparisons;
                document.getElementById(sortType + 'Swaps').textContent = data.swaps;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
</script>
