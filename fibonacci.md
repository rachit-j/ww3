---
title: Fibonacci Visualization
subtitle: Fibonacci Visualization
layout: page
show_sidebar: false
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fibonacci Visualization</title>
</head>
<body>
    <!-- Fibonacci - Matrix Method -->
    <h2>Fibonacci - Matrix Method</h2>
    <input type="number" id="matrixIndex" placeholder="Enter Fibonacci Index" />
    <button onclick="fetchFibonacci('matrix', document.getElementById('matrixIndex').value)">Calculate</button>
    <pre id="matrixResult"></pre>
    <!-- Fibonacci - Binet's Formula Method -->
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
            ctx.moveTo(startX, startY);
            // iterate through the sequence and draw each point
            for (let i = 0; i < sequence.length; i++) {
                x += scale; // Move right on X-axis
                const height = -sequence[i] * scale; // salculate height based on the Fibonacci value
                ctx.lineTo(x, y + height); // draw line to the next point
                y = y + height; // update Y-coordinate for the next iteration
            }
            // stroke the path to display the complete sequence
            ctx.stroke();
        }
        // function to fetch Fibonacci sequence data from the API
        function fetchFibonacci(method, index) {
            // fetch data from the API
            fetch(`https://ww3.stu.nighthawkcodingsociety.com/api/fibonacci/${method}/${index}`)
            .then(response => response.json())
            .then(data => {
                // display the result in the pre tag
                document.getElementById(method + 'Result').textContent = JSON.stringify(data);
                // draw the Fibonacci sequence on the canvas
                drawFibonacci(data.sequence, method);
            })
            .catch(error => {
                // log any errors to the console
                console.error('Error:', error);
            });
        }
</script>
</body>
</html>
