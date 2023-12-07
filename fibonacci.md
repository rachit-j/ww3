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

## Fibonacci - Binet's Formula Method

<input type="number" id="binetIndex" placeholder="Enter Fibonacci Index" />
<button onclick="fetchFibonacci('binet', document.getElementById('binetIndex').value)">Calculate</button>
<pre id="binetResult"></pre>