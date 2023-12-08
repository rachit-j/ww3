---
title: Fibonacci
subtitle: fibonacci visualization
layout: page
show_sidebar: false
---

# Fibonacci Visualization

**Fibonacci Sequence Calculator**

<!--Fibonacci Create 2 additional methods to solve nth result in the Fibonacci Sequence. Build a frontend output to show results and analysis. Sample of Fibonacci Frontend-->

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
        fetch(`https://ww3.stu.nighthawkcodingsociety.com/api/fibonacci/${method}/${index}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(method + 'Result').textContent = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
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
