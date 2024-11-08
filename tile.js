class Tile {
  constructor(x, y, type, c) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.c = c;
    this.changed = false; // Tracks if the tile has changed
    this.hovering = false; // Tracks if the mouse is currently over the tile
  }

  display() {
    noStroke();
    push();
    translate(this.x, this.y);

    fill(this.c);
    beginShape();
    if (this.type == 0) {
      vertex(size, 0);
      vertex(size, size);
      vertex(0, size);
    } else if (this.type == 1) {
      vertex(size, 0);
      vertex(0, 0);
      vertex(0, size);
    } else if (this.type == 2) {
      vertex(size, size);
      vertex(0, 0);
      vertex(0, size);
    } else {
      vertex(size, size);
      vertex(0, 0);
      vertex(size, 0);
    }
    endShape();
    pop();
  }
}
