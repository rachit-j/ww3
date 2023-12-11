---
title: Fibonacci Visualization
subtitle: Fibonacci Visualization
layout: page
show_sidebar: false
---

<style>
        canvas {
            border: 3px solid #000;
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
// fetchFibonacci function fetches fibonacci data from an API using the provided method and index
function fetchFibonacci(method, index) {
    // make a fetch request to the fibonacci API endpoint with the specified method and index
    fetch(`https://ww3.stu.nighthawkcodingsociety.com/api/fibonacci/${method}/${index}`)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // update the result display with the fetched fibonacci data in string format
        document.getElementById(method + 'Result').textContent = JSON.stringify(data);

        // log fetch data to console        
        console.log('Fetched Fibonacci Data:', data); // Log fetched data to console
        
        // draw a fibonacci swirl using the fetched data and the specified method
        drawFibonacciSwirl(data.result, method);
    })
    .catch(error => {
        // log an error message to the console if there is an issue with the API request
        console.error('Error:', error);
    });
}

// function draws a visual representation of a fibonacci swirl on a canvas
function drawFibonacciSwirl(fibonacciArray, method) {
    const canvas = document.getElementById(`${method}Canvas`);
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radiusFactor = 5;

    // clear the canvas before drawing the new fibonacci swirl
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // check if fibonacciArray is an array before iterating through it
    if (Array.isArray(fibonacciArray)) {

        // animation
        animateSwirl(0);

        function animateSwirl(index) {
            if (index < fibonacciArray.length){
            // retrieve the fibonacci value at the current index
            const value = fibonacciArray[index];
            
            // calculate the angle and radius for each point in the swirl
            const angle = index * 10; // adjust the angle increment for a better swirl
            const radius = value * radiusFactor;

            // calculate the coordinates for each point based on the angle and radius
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            // draw a point on the canvas
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, 2 * Math.PI);
            ctx.fillStyle = 'blue';
            ctx.fill();
            ctx.closePath();

            // displaying fibonacci values next to point
            ctx.fillStyle = 'black';
            ctx.font = '10px Arial';
            ctx.fillText(value, x + 5, y - 5);

            // keep drawing if not stop
            if (animationId !== null) {
            animationId = requestAnimationFrame(() => drawNextPoint(index + 1));
            }
        }
    }
}
//stop and start buttons
    function stopAnimation(canvasId) {
        if (animationId !== null) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    clearCanvas(canvasId);
        }

    function startAnimation(canvasId) {
        if (animationId === null) {
            drawFibonacciSwirl([], canvasId.replace('Canvas', ''));
            }
        }

    function clearCanvas(canvasId) {
            const canvas = document.getElementById(canvasId);
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
</script>
</body>

