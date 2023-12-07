---
title: Posts
subtitle: Sample Post Requests
layout: product-category
show_sidebar: false
---
  <style>
    .box {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-color: lightblue;
      margin: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 20px;
    }

    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }
  </style>

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



    // animation for each of the sorts
      <script>
    function sendSortRequest(sortType) {
        var data = document.getElementById(sortType + 'Input').value;
        var requestData = data.split(',').map(Number);

        visualizeSort(sortType, requestData);
    }

    function visualizeSort(sortType, data) {
        const containerId = sortType + 'Result';
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        const visualization = document.createElement('div');
        visualization.id = sortType + 'Visualization';
        visualization.style.display = 'flex';

        data.forEach((num) => {
            const box = document.createElement('div');
            box.className = 'box';
            box.textContent = num;
            visualization.appendChild(box);
        });

        container.appendChild(visualization);

        animateSort(sortType, data);
    }

    async function animateSort(sortType, data) {
        const visualization = document.getElementById(sortType + 'Visualization');
        const length = data.length;

        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // Highlight the elements being compared
                visualization.children[j].style.backgroundColor = 'yellow';
                visualization.children[j + 1].style.backgroundColor = 'yellow';

                await sleep(500); // Adjust the speed of animation

                // Swap elements if they are in the wrong order
                if (data[j] > data[j + 1]) {
                    const temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;

                    updateVisualization(sortType, data);
                }

                // Reset background color
                visualization.children[j].style.backgroundColor = 'lightblue';
                visualization.children[j + 1].style.backgroundColor = 'lightblue';
            }
        }

        updateVisualization(sortType, data);
    }

    function updateVisualization(sortType, data) {
        const visualization = document.getElementById(sortType + 'Visualization');
        visualization.innerHTML = '';

        data.forEach((num) => {
            const box = document.createElement('div');
            box.className = 'box';
            box.textContent = num;
            visualization.appendChild(box);
        });
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
  </script>


