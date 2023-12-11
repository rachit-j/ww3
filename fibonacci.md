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
        // get canvas and 2D rendering context
        const canvas = document.getElementById('fibonacciCanvas');
        const ctx = canvas.getContext('2d');

        // function to draw Fibonacci sequence on the canvas
        function drawFibonacci(sequence, method) {
            const scale = 10; // Scale for better visualization
            const startX = 50; // Starting X-coordinate for the sequence
            const startY = 300; // Starting Y-coordinate for the sequence
            let x = startX;
            let y = startY;

            // clear the canvas before drawing to avoid overlap
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // display Fibonacci sequence text on the canvas
            ctx.font = '12px Arial';
            ctx.fillText(`Fibonacci Sequence (${method}): ${sequence.join(', ')}`, 10, 20);

            // begin drawing the sequence
            ctx.beginPath();
            ctx.moveTo(startX, startY);

            // iterate through the sequence and draw each point
            for (let i = 0; i < sequence.length; i++) {
                x += scale; // move right on X-axis
                const height = -sequence[i] * scale; // calculate height based on the Fibonacci value
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
