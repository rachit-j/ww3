---
title: Fibonacci Visualization
subtitle: Fibonacci Visualization
layout: page
show_sidebar: false
---
<head>

    <title>Fibonacci Visualization</title>
</head>
<body>
    <!-- Fibonacci - Matrix Method -->
    <h2>Fibonacci - Matrix Method</h2>
    <input type="number" id="matrixIndex" placeholder="Enter Fibonacci Index" />
    <button onclick="fetchFibonacci('matrix', document.getElementById('matrixIndex').value)">Calculate</button>
    <pre id="matrixResult"></pre>
    <div id="matrixResult"></div>
    <!-- Fibonacci - Binet's Formula Method -->
    <h2>Fibonacci - Binet's Formula Method</h2>
    <input type="number" id="binetIndex" placeholder="Enter Fibonacci Index" />
    <button onclick="fetchFibonacci('binet', document.getElementById('binetIndex').value)">Calculate</button><div id="binetResult"></div>
    <pre id="binetResult"></pre>

    <canvas id="fibonacciCanvas" width="800" height="400" style="border:1px solid #000;"></canvas>
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
<script>
        // function to fetch Fibonacci sequence data from the API
        function fetchFibonacci(method, index) {
            // fetch data from the API
            fetch(`http://localhost:8062/api/fibonacci/${method}/${index}`)
            .then(response => response.json())
            .then(data => {
                // display the result in the result div
                document.getElementById(method + 'Result').textContent = JSON.stringify(data);
                // draw the Fibonacci sequence on the canvas
                if (data.fibonacciNumber !== undefined) {
                    drawFibonacci(data.fibonacciNumber, method);
                } else {
                    console.error('Invalid data format received:', data);
                }
            })
            .catch(error => {
                // log any errors to the console
                console.error('Error:', error);
            });
        }
        // get canvas and 2D rendering context
        const canvas = document.getElementById('fibonacciCanvas');
        const ctx = canvas.getContext('2d');

        // function to draw Fibonacci sequence on the canvas
        function drawFibonacci(targetNumber, method) {
            const canvas = document.getElementById('fibonacciCanvas');
            const ctx = canvas.getContext('2d');

            // Function to generate Fibonacci sequence up to targetNumber
            function generateFibonacciSequence(upTo) {
                const sequence = [0, 1];
                while (true) {
                    let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
                    if (nextNumber > upTo) break;
                    sequence.push(nextNumber);
                }
                return sequence;
                let i = 0;
                function drawStep() {
                    if (i < sequence.length) {
                        const nextX = startX + (i + 1) * scale;
                        const nextY = startY - sequence[i] * scale;
                        ctx.lineTo(nextX, nextY);
                        ctx.stroke();

                        i++;
                        requestAnimationFrame(drawStep);
                    }
                }

                ctx.beginPath();
                ctx.moveTo(startX, startY);
                drawStep(); // Start the animation
            }

            // Generate the sequence
            const sequence = generateFibonacciSequence(targetNumber);

            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Display the Fibonacci number
            ctx.font = '16px Arial';
            ctx.fillText(`Fibonacci Sequence up to ${targetNumber} (${method}):`, 10, 20);

            // Drawing logic
            const scale = 5; // Scale for visualization
            const startX = 50; // Starting X-coordinate
            const startY = 200; // Starting Y-coordinate
            let x = startX;
            let y = startY;

            ctx.beginPath();
            ctx.moveTo(x, y);

            for (let i = 0; i < sequence.length; i++) {
                x += scale;
                const height = -sequence[i] * scale;
                ctx.lineTo(x, y + height);
                y = y + height;
            }

            ctx.stroke();
        }

</script>

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
</body>
</html>
