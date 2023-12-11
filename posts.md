---
title: Posts
subtitle: Sample Post Requests
layout: page
show_sidebar: false
---

## Bubble Sort
<p>
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

</script>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
     .box {
        width: 30px;
        height: 30px;
        margin: 2px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #000;
    }
  </style>

<script>
    function sendSortRequest(sortType) {
        var data = document.getElementById('sortInput').value;
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

        data.forEach((num, index) => {
            const box = document.createElement('div');
            box.className = 'box';
            box.textContent = num;
            box.style.backgroundColor = getBackgroundColor(index);
            visualization.appendChild(box);
        });

        container.appendChild(visualization);

        animateSort(sortType, data);
    }

    function getBackgroundColor(index) {
        if (index % 3 === 0) {
            return 'lightblue';
        } else if (index % 3 === 1) {
            return 'lightgreen';
        } else {
            return 'lightcoral'; // Add light red as the third color
        }
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

                visualization.children[j].style.backgroundColor = getBackgroundColor(j);
                visualization.children[j + 1].style.backgroundColor = getBackgroundColor(j + 1);
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
            box.style.backgroundColor = getBackgroundColor(index);
            visualization.appendChild(box);
        });
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
</script>

