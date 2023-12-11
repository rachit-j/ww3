---
title: Fibonacci Visualization
subtitle: Fibonacci Visualization
layout: page
show_sidebar: false
---

<style>
        canvas {
            border: 1px solid #000;
        }
</style>
<body>
    <h2>Fibonacci - Matrix Method</h2>
    <input type="number" id="matrixIndex" placeholder="Enter Fibonacci Index" />
    <button onclick="fetchFibonacci('matrix', document.getElementById('matrixIndex').value)">Calculate</button>
    <pre id="matrixResult"></pre>
    <canvas id="matrixCanvas" width="500" height="500"></canvas>
    <h2>Fibonacci - Binet's Formula Method</h2>
    <input type="number" id="binetIndex" placeholder="Enter Fibonacci Index" />
    <button onclick="fetchFibonacci('binet', document.getElementById('binetIndex').value)">Calculate</button>
    <pre id="binetResult"></pre>
    <canvas id="binetCanvas" width="500" height="500"></canvas>

<script>
// fetchFibonacci function fetches Fibonacci data from an API using the provided method and index
function fetchFibonacci(method, index) {
    fetch(`https://ww3.stu.nighthawkcodingsociety.com/api/fibonacci/${method}/${index}`)
    .then(response => response.json())
    .then(data => {
        // Update the result display with the fetched Fibonacci data
        document.getElementById(method + 'Result').textContent = JSON.stringify(data);
        
        // draw fibonacci swirl using the fetch data
        drawFibonacciSwirl(data.result, method);
    })
    .catch(error => {
        // log error message if there is an issue with API request
        console.error('Error:', error);
    });
}

// function draws a visual of a fibonacci swirl on a canvas
function drawFibonacciSwirl(fibonacciArray, method) {
    const canvas = document.getElementById('$(method)Canvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radiusFactor = 5;

    // clear the canvas before drawing the new fibonacci swirl
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // check if it is array before iterations
    if (Array.isArray(fibonacciArray)) {

    // iterate through the fibonacci array to draw points on the canvas forming a swirl
    fibonacciArray.forEach((value, index) => {
        // calculate the angle and radius for each point
        const angle = index * 10; // adjust the angle for swirl
        const radius = value * radiusFactor;

        // calculate the coordinates for each point based on the angle and r
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        // draw a point on the canvas
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    });
}
}
    </script>
</body>

