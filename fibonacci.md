---
title: Fibonacci Visualization
subtitle: Fibonacci Visualization
layout: page
show_sidebar: false
---

# Fibonacci Visualization

**Fibonacci Sequence Calculator**

## Fibonacci - Matrix Method

<input type="number" id="matrixIndex" placeholder="Enter Fibonacci Index" />
<button onclick="fetchFibonacci('matrix', document.getElementById('matrixIndex').value)">Calculate</button>
<pre id="matrixResult"></pre>
<canvas id="matrixChart" width="400" height="200"></canvas>

## Fibonacci - Binet's Formula Method

<input type="number" id="binetIndex" placeholder="Enter Fibonacci Index" />
<button onclick="fetchFibonacci('binet', document.getElementById('binetIndex').value)">Calculate</button>
<pre id="binetResult"></pre>
<canvas id="binetChart" width="400" height="200"></canvas>

<script>
    function fetchFibonacci(method, index) {
        fetch(`http://localhost:8062/api/fibonacci/${method}/${index}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(method + 'Result').textContent = JSON.stringify(data);
            animateFibonacciSequence(index);

        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
<<<<<<< Updated upstream
        function visualizeFibonacci(sequence, chartId) {
        const ctx = document.getElementById(chartId).getContext('2d');
        const labels = Array.from({ length: sequence.length }, (_, i) => i + 1);

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Fibonacci Sequence',
                    data: sequence,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    pointRadius: 2,
                    fill: false,
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    },
                    y: {
                        type: 'linear',
                        position: 'left'
                    }
                }
            }
        });
    }
</script>
=======
</script>

<div id="fibonacciContainer" class="fibonacci-container"></div>

<!-- Fibonacci calculation and animation script -->
<script>
    function animateFibonacciSequence(index) {
        const container = document.getElementById('fibonacciContainer');
        container.innerHTML = ''; // Clear previous animation

        let a = 0, b = 1, temp;
        for (let i = 0; i <= index; i++) {
            temp = a;
            a = a + b;
            b = temp;

            const item = document.createElement('div');
            item.classList.add('fibonacci-item');
            item.textContent = b;
            container.appendChild(item);

            // Delay each item's appearance
            setTimeout(() => {
                item.style.opacity = 1;
            }, i * 100); // Adjust time as needed
        }
}
</script>
>>>>>>> Stashed changes
