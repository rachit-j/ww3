---
title: Posts
subtitle: Sample Post Requests
layout: page
show_sidebar: false
---

<style>
    .box {
        width: calc(100% / 20);
        height: 30px;
        border: 1px solid #000;
        text-align: center;
        line-height: 30px;
        float: left;
    }

    .row {
        clear: both;
    }

    #bubbleVisualization,
    #insertionVisualization,
    #mergeVisualization,
    #selectionVisualization,
    #analysisVisualization {
        width: 100%;
    }

    .larger-box {
        width: calc(100% / 20);
        height: 40px;
        border: 1px solid #000;
        text-align: center;
        line-height: 40px;
        float: left;
    }

    .larger-row {
        clear: both;
    }

    #bubbleResult,
    #insertionResult,
    #mergeResult,
    #selectionResult,
    #analysisResult {
        width: 100%;
        overflow: auto;
        max-height: 600px; /* Adjust the max-height as needed */
    }
</style>


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

    function visualizeSort(sortType, cardList) {
    const containerId = sortType + 'Result';
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const visualization = document.createElement('div');
    visualization.id = sortType + 'Visualization';

    cardList.forEach((card, index) => {
        const box = document.createElement('div');
        box.className = 'box';
        box.textContent = card.rank; // Display the "rank" value
        visualization.appendChild(box);

        // Create a new row after every 5 boxes
        if ((index + 1) % 5 === 0) {
            const row = document.createElement('div');
            row.className = 'row';
            visualization.appendChild(row);
        }
    });

    container.appendChild(visualization);

    animateSort(sortType, cardList);
}


    async function animateSort(sortType, data) {
        const visualization = document.getElementById(sortType + 'Visualization');
        const length = data.length;

        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                visualization.children[j].style.backgroundColor = 'yellow';
                visualization.children[j + 1].style.backgroundColor = 'yellow';

                await sleep(500);

                if (data[j].rank > data[j + 1].rank) { // Compare using "rank" value
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

        data.forEach((card, index) => {
            const box = document.createElement('div');
            box.className = 'box';
            box.textContent = card.rank; // Display the "rank" value
            visualization.appendChild(box);

            // Create a new row after every 5 boxes
            if ((index + 1) % 5 === 0) {
                const row = document.createElement('div');
                row.className = 'row';
                visualization.appendChild(row);
            }
        });
    }

 async function sendSortRequest(sortType) {
    const url = 'http://localhost:8062/api/card/split';
    const data = await fetchData(url);

    if (data && data.length > 0) {
        const firstList = data[0]; // Access the first list in the array
        visualizeSort(sortType, firstList);
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
