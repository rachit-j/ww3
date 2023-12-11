---
title: Analysis
subtitle: Analysis to the sorts
layout: page
show_sidebar: false
---


Bubble Sort
<button onclick="sendSortRequest('bubble')">Sort</button>
<pre id="bubbleResult"></pre>

Insertion Sort
<button onclick="sendSortRequest('insertion')">Sort</button>
<pre id="insertionResult"></pre>

Merge Sort

<button onclick="sendSortRequest('merge')">Sort</button>
<pre id="mergeResult"></pre>

Selection Sort

<button onclick="sendSortRequest('selection')">Sort</button>
<pre id="selectionResult"></pre>

Sorting Analysis

<button onclick="analyzeSorts()">Analyze</button>
<pre id="analysisResult"></pre>

<html lang="en">

<style>
    .box {
      display: inline-block;
      width: 30px;
      height: 30px;
      margin: 0 5px 5px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }

    .row {
      display: flex;
    }
  </style>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  

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

        data.forEach((array, colorIndex) => {
            array.forEach(({ rank }, index) => {
                const box = document.createElement('div');
                box.className = 'box';
                box.textContent = rank;
                box.style.backgroundColor = colorIndex === 0 ? '#add8e6' : 'red'; // Blue for the first array, red for the second
                visualization.appendChild(box);

                // Create a new row after every 5 boxes
                if ((index + 1) % 5 === 0) {
                    const row = document.createElement('div');
                    row.className = 'row';
                    visualization.appendChild(row);
                }
            });
        });

        container.appendChild(visualization);

        animateSort(sortType, data);
    }

    async function animateSort(sortType, data) {
        const visualization = document.getElementById(sortType + 'Visualization');
        const length = Math.max(data[0].length, data[1].length);

        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                visualization.children[j].style.backgroundColor = 'yellow';
                visualization.children[j + 1].style.backgroundColor = 'yellow';

                await sleep(500);

                if (data[0][j].rank > data[0][j + 1].rank && data[1][j].rank > data[1][j + 1].rank) {
                    const temp0 = data[0][j];
                    data[0][j] = data[0][j + 1];
                    data[0][j + 1] = temp0;

                    const temp1 = data[1][j];
                    data[1][j] = data[1][j + 1];
                    data[1][j + 1] = temp1;

                    updateVisualization(sortType, data);
                }

                visualization.children[j].style.backgroundColor = '#add8e6'; // Reset to blue for the first array
                visualization.children[j + 1].style.backgroundColor = 'red'; // Reset to red for the second array
            }
        }

        updateVisualization(sortType, data);
    }

    function updateVisualization(sortType, data) {
        const visualization = document.getElementById(sortType + 'Visualization');
        visualization.innerHTML = '';

        data.forEach((array, colorIndex) => {
            array.forEach(({ rank }, index) => {
                const box = document.createElement('div');
                box.className = 'box';
                box.textContent = rank;
                box.style.backgroundColor = colorIndex === 0 ? '#add8e6' : 'red'; // Blue for the first array, red for the second
                visualization.appendChild(box);

                // Create a new row after every 5 boxes
                if ((index + 1) % 5 === 0) {
                    const row = document.createElement('div');
                    row.className = 'row';
                    visualization.appendChild(row);
                }
            });
        });
    }

    async function sendSortRequest(sortType) {
        const url = 'http://localhost:8062/api/card/split';
        const data = await fetchData(url);

        if (data) {
            visualizeSort(sortType, data);
        }
    }

    async function analyzeSorts() {
        const url = 'http://localhost:8062/api/card/split';
        const data = await fetchData(url);

        if (data) {
            visualizeSort('analysis', data);
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
</script>