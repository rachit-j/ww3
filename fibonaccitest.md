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

## Fibonacci - Binet's Formula Method

<input type="number" id="binetIndex" placeholder="Enter Fibonacci Index" />
<button onclick="fetchFibonacci('binet', document.getElementById('binetIndex').value)">Calculate</button>
<pre id="binetResult"></pre>

<!-- Canvas for Fibonacci Shell Visualization -->
<div id="fibonacciCanvas"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
<script>
    let fibSequence = []; // To store the Fibonacci sequence

    function setup() {
        let canvas = createCanvas(600, 600);
        canvas.parent('fibonacciCanvas');
        noFill();
    }

    function drawFibonacciShell(n) {
        clear();
        let x = width / 2, y = height / 2;
        let angle = 0, radius = 5;

        for(let i = 0; i < n; i++) {
            let currentRadius = radius * sqrt(fibSequence[i]); // Adjust radius based on Fibonacci number
            arc(x, y, currentRadius * 2, currentRadius * 2, angle, angle + PI/2);
            angle += PI / 2;

            if (i % 2 === 0) x += currentRadius / 2;
            else y += currentRadius / 2;
        }
    }

    function fetchFibonacci(method, index) {
        fetch(`https://ww3.stu.nighthawkcodingsociety.com/api/fibonacci/${method}/${index}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(method + 'Result').textContent = JSON.stringify(data);
            fibSequence = data.sequence; // Assuming the API returns the sequence up to that index
            drawFibonacciShell(fibSequence.length); // Draw the shell visualization
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
</script>
