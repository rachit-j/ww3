---
title: Posts
subtitle: Sample Post Requests
layout: product-category
show_sidebar: false
---

<script>
    function sendSortRequest(sortType) {
        var data = document.getElementById(sortType + 'Input').value;
        var requestData = { input: data }; // Create an object to hold the input data

        fetch('https://ww3.stu.nighthawkcodingsociety.com/api/sorting/' + sortType, {
            method: 'POST', // Change the method to POST
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData), // Send the input data as JSON in the request body
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
        var requestData = { input: data }; // Create an object to hold the input data

        fetch('https://ww3.stu.nighthawkcodingsociety.com/api/sorting/analyze', {
            method: 'POST', // Change the method to POST
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData), // Send the input data as JSON in the request body
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

## Fibonacci - Matrix Method

<input type="number" id="matrixIndex" placeholder="Enter Fibonacci Index" />
<button onclick="fetchFibonacci('matrix', document.getElementById('matrixIndex').value)">Calculate</button>
<pre id="matrixResult"></pre>

## Fibonacci - Binet's Formula Method

<input type="number" id="binetIndex" placeholder="Enter Fibonacci Index" />
<button onclick="fetchFibonacci('binet', document.getElementById('binetIndex').value)">Calculate</button>
<pre id="binetResult"></pre>