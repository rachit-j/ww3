---
title: Game
subtitle: Check out the game here
layout: page
show_sidebar: false
---

### WW3


<!--Play Button-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<!--Pause Button-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<!--Reset Button-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<!--Script for the Chart JS-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js"></script>
<script src="merge.js"></script>
<!--Loading the Script-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js"></script>


<div class="chart">
<div id="chart-container"></div>
</div>
<div class="button-container">
<button id="start-btn" onclick="startSorting()"><span class="material-symbols-outlined">play_arrow</span></button>
<button id="pause-btn" onclick="pauseSorting()"><span class="material-symbols-outlined">pause</span></button>
<button id="reset-btn" onclick="resetSorting()"><span class="material-symbols-outlined">replay</span></button>
</div>
