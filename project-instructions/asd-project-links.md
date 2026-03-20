## Overview

Follow these instructions to add links to your portfolio for your newly installed ASD projects.

### Locate the FSD Project Links

1. Open the `portfolio.html` file in your codespace.
2. Scroll down to the section where you added your FSD project links. It should look something like this, but with your actual project names and links:

   ```html
   <ul id="portfolio">
     <li><a href="project1.html">Project 1</a></li>
     <li><a href="project2.html">Project 2</a></li>
     <li><a href="project3.html">Project 3</a></li>
   </ul>
   ```

### Add a New Section for ASD Projects

1. Below the closing `</ul>` tag, add a new `<h3>` tag for your ASD projects:

   ```html
   <h3>ASD Projects</h3>
   ```

2. Below the `<h3>` tag, add a new unordered list (`<ul>`) to hold your ASD project links:

   ```html
   <ul id="portfolio">
     <!-- ASD project links will go here -->
   </ul>
   ```

### Add Links to Your ASD Projects

Inside the new `<ul>` tag, add list items (`<li>`) for each of your ASD projects. Copy and paste the section below into your `<ul>` tag.

```html
<li><a href="asd-projects/data-shapes"> Data Shapes: Iteration practice with patterns</a></li>
<li><a href="asd-projects/debugging-exercise"> Debugging Exercise: A debugging exercise</a></li>
<li><a href="asd-projects/snake">Snake: Feed the snake or be fed upon</a></li>
<li><a href="asd-projects/walker">Walker: Practice user input by animating walking boxes</a></li>
<li><a href="asd-projects/image-filtering">Image Filtering: Filter images using loops</a></li>
<li><a href="asd-projects/sorting">Sorting Exercise: An exercise on sorting algorithms</a></li>
```


### Add a Section for Your Mini Projects

Below the closing `</ul>` tag for your ASD projects, copy and paste this code to create a new section for your mini projects:

```html
<h4>Mini Projects</h4>
<ul id ="portfolio">
    <li><a href="asd-projects/dice-app"> Dice App: A simple, interactive dice app built using jQuery</a></li>
</ul>
```