---
title: Game
subtitle: Check out the game here
layout: page
show_sidebar: false
---

### WW3


<script>
    function sendSortRequest(sortType) {
        var data = document.getElementById(sortType + 'Input').value;
        var requestData = data.split(',').map(Number); // Convert comma-separated input to a list of integers

        fetch('https://ww3.stu.nighthawkcodingsociety.com/api/sorting/' + sortType, {
            method: 'POST',
            body: JSON.stringify(requestData), // Send the list directly as the request body
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById(sortType + 'Result').textContent = JSON.stringify(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    function analyzeSorts() {
        var data = document.getElementById('analysisInput').value;
        var requestData = data.split(',').map(Number); // Convert comma-separated input to a list of integers

        fetch('https://ww3.stu.nighthawkcodingsociety.com/api/sorting/analyze', {
            method: 'POST',
            body: JSON.stringify(requestData), // Send the list directly as the request body
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('analysisResult').textContent = JSON.stringify(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
</script>


## Bubble Sort

<input type="text" id="bubbleInput" placeholder="Enter numbers separated by commas" />
<button onclick="sendSortRequest('bubble')">Sort</button>
<pre id="bubbleResult"></pre>

## Insertion Sort

<input type="text" id="insertionInput" placeholder="Enter numbers separated by commas" />
<button onclick="sendSortRequest('insertion')">Sort</button>
<pre id="insertionResult"></pre>

## Merge Sort

<input type="text" id="mergeInput" placeholder="Enter numbers separated by commas" />
<button onclick="sendSortRequest('merge')">Sort</button>
<pre id="mergeResult"></pre>

## Selection Sort

<input type="text" id="selectionInput" placeholder="Enter numbers separated by commas" />
<button onclick="sendSortRequest('selection')">Sort</button>
<pre id="selectionResult"></pre>

## Sorting Analysis

<input type="text" id="analysisInput" placeholder="Enter numbers separated by commas for analysis" />
<button onclick="analyzeSorts()">Analyze</button>
<pre id="analysisResult"></pre>

<script>
    function fetchFibonacci(method, index) {
        fetch(`https://ww3.stu.nighthawkcodingsociety.com/api/fibonacci/${method}/${index}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(method + 'Result').textContent = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
</script>

