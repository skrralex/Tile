/*
----- Coding Tutorial by Patt Vira ----- 
Name: Truchet Tiles (Contrasting Triangles)
Video Tutorial: https://youtu.be/9DU5WiNdu74?si=CXopbKgzoZXv5ct7

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let tiles = []; 
let cols; let rows; let size = 20;
let colors; 

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  colors = [color(255,240,1), color(255,1,1), color(1,1,253), color(249)];
  
  cols = width/size;
  rows = height/size;
  for (let i=0; i<cols; i++) {
    tiles[i] = [];
    for (let j=0; j<rows; j++) {
      tiles[i][j] = new Tile(i*size, j*size, floor(random(4)), colors[floor(random(4))]);
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let tile = tiles[i][j];
      
      // Check if the tile is within 200px of the cursor
      let d = dist(mouseX, mouseY, tile.x + size / 2, tile.y + size / 2);
      
      if (d < 200) {
        if (!tile.hovering) {
          // Mouse has just entered the tile area, change it
          tile.type = floor(random(4));
          tile.c = colors[floor(random(4))];
          tile.changed = true;
          tile.hovering = true; // Set hovering to true
        }
      } else {
        // Reset hovering status when the mouse leaves
        tile.hovering = false;
      }

      tile.display();
    }
  }
}