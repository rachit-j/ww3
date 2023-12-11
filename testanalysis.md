---
title: Analysis
subtitle: Analysis to the sorts
layout: page
show_sidebar: false
---


Bubble Sort
<p>
<input type="text" id="bubbleInput" placeholder="Enter numbers separated by commas" />
<button onclick="sendSortRequest('bubble')">Sort</button>
<pre id="bubbleResult"></pre>

Insertion Sort

<input type="text" id="insertionInput" placeholder="Enter numbers separated by commas" />
<button onclick="sendSortRequest('insertion')">Sort</button>
<pre id="insertionResult"></pre>

Merge Sort

<input type="text" id="mergeInput" placeholder="Enter numbers separated by commas" />
<button onclick="sendSortRequest('merge')">Sort</button>
<pre id="mergeResult"></pre>

Selection Sort

<input type="text" id="selectionInput" placeholder="Enter numbers separated by commas" />
<button onclick="sendSortRequest('selection')">Sort</button>
<pre id="selectionResult"></pre>

Sorting Analysis

<input type="text" id="analysisInput" placeholder="Enter numbers separated by commas for analysis" />
<button onclick="analyzeSorts()">Analyze</button>
<pre id="analysisResult"></pre>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .box {
      display: inline-block;
      width: 30px; /* Adjusted box size */
      height: 30px; /* Adjusted box size */
      background-color: lightblue;
      margin: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px; /* Adjusted font size */
    }

    .row {
      display: flex;
      flex-wrap: wrap;
    }
  </style>

<script>
    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    function visualizeSort(sortType, data) {
        const containerId = sortType + 'Result';
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        const visualization = document.createElement('div');
        visualization.id = sortType + 'Visualization';

        data.forEach((num, index) => {
            const box = document.createElement('div');
            box.className = 'box';
            box.textContent = num;
            visualization.appendChild(box);

            // Create a new row after every 15 boxes
            if ((index + 1) % 15 === 0) {
                const row = document.createElement('div');
                row.className = 'row';
                visualization.appendChild(row);
            }
        });

        container.appendChild(visualization);

        animateSort(sortType, data);
    }

    async function animateSort(sortType, data) {
        const visualization = document.getElementById(sortType + 'Visualization');
        const length = data.length;

        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                visualization.children[j].style.backgroundColor = 'yellow';
                visualization.children[j + 1].style.backgroundColor = 'yellow';

                await sleep(500);

                if (data[j] > data[j + 1]) {
                    const temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;

                    updateVisualization(sortType, data);
                }

                visualization.children[j].style.backgroundColor = 'lightblue';
                visualization.children[j + 1].style.backgroundColor = 'lightblue';
            }
        }

        updateVisualization(sortType, data);
    }

    function updateVisualization(sortType, data) {
        const visualization = document.getElementById(sortType + 'Visualization');
        visualization.innerHTML = '';

        data.forEach((num, index) => {
            const box = document.createElement('div');
            box.className = 'box';
            box.textContent = num;
            visualization.appendChild(box);

            // Create a new row after every 15 boxes
            if ((index + 1) % 15 === 0) {
                const row = document.createElement('div');
                row.className = 'row';
                visualization.appendChild(row);
            }
        });
    }

    async function sendSortRequest(sortType) {
        const url = 'http://localhost:8062/api/card';
        const data = await fetchData(url);

        if (data) {
            visualizeSort(sortType, data);
        }
    }

    async function analyzeSorts() {
        const url = 'http://localhost:8062/api/card';
        const data = await fetchData(url);

        if (data) {
            visualizeSort('analysis', data);
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
</script>