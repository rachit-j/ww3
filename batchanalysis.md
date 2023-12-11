---
title: Batch Analysis
subtitle: Analysis to the sorts -- One list
layout: page
show_sidebar: false
---
<style>
    .scrollable-list {
        max-height: 100px; /* Adjust the max height as needed */
        overflow-y: auto;
    }
</style>
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
    function analyzeSorts() {
        var data = document.getElementById('analysisInput').value;
        var requestData = data.split(',').map(Number);
        fetch('http://localhost:8062/api/sorting/analyze', {
            method: 'POST',
            body: JSON.stringify(requestData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Clear any previous analysis results
            document.getElementById('analysisTable').innerHTML = '';
            // Create a new table to display analysis results
            var table = document.createElement('table');
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>Sort Type</th>
                        <th>Sorted List</th>
                        <th>Time Taken (ms)</th>
                        <th>Iterations</th>
                        <th>Comparisons</th>
                        <th>Swaps</th>
                    </tr>
                </thead>
                <tbody id="analysisTableBody"></tbody>
            `;
            var tableBody = table.querySelector('#analysisTableBody');
            // Iterate through the analysis results and add rows to the table
            data.forEach(result => {
                var row = document.createElement('tr');
                row.innerHTML = `
                    <td>${result.sortType}</td>
                    <td>
                        <div class="scrollable-list">
                            <span>${result.sortedList.join(', ')}</span>
                        </div>
                    </td>
                    <td>${result.timeTakenMs}</td>
                    <td>${result.iterations}</td>
                    <td>${result.comparisons}</td>
                    <td>${result.swaps}</td>
                `;
                tableBody.appendChild(row);
            });
            // Append the table to the analysisResult div
            document.getElementById('analysisTable').appendChild(table);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
</script>
<h1>Sorting Analysis</h1>
<input type="text" id="analysisInput" placeholder="Enter numbers separated by commas for analysis" />
<button onclick="analyzeSorts()">Analyze</button>
<div id="analysisTable"></div>
