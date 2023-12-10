---
title: Analysis
subtitle: Analysis to the sorts
layout: page
show_sidebar: false
---

<script>
    function sendSortRequest(sortType) {
        fetch('http://localhost:8062/api/card', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            visualizeSort(sortType, data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    function analyzeSorts() {
        fetch('http://localhost:8062/api/card', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            visualizeSort('analysis', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
</script>

<body>
    <script>
        function sendSortRequest(sortType) {
            fetch('http://localhost:8062/api/card', {
                method: 'GET',
            })
            .then(response => response.json())
            .then(data => {
                visualizeSort(sortType, data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }

        function analyzeSorts() {
            fetch('http://localhost:8062/api/card', {
                method: 'GET',
            })
            .then(response => response.json())
            .then(data => {
                visualizeSort('analysis', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
                box.style.backgroundColor = index % 2 === 0 ? 'lightblue' : 'lightred'; // Assign colors based on index
                visualization.appendChild(box);
            });

            container.appendChild(visualization);

            animateSort(sortType, data);
        }

        function updateVisualization(sortType, data) {
            const visualization = document.getElementById(sortType + 'Visualization');
            visualization.innerHTML = '';

            data.forEach((num, index) => {
                const box = document.createElement('div');
                box.className = 'box';
                box.textContent = num;
                box.style.backgroundColor = index % 2 === 0 ? 'lightblue' : 'lightred'; // Preserve colors after sorting
                visualization.appendChild(box);
            });
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

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    </script>
</body>
