class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  checkEdges() {
    if ((this.position.y < 0)) {
      this.velocity.y *= -0.5;
    }
    if ((this.position.y > height)) {
      this.velocity.y *= -0.5;
    }
    if ((this.position.x < 0)) {
      this.velocity.x *= -0.5;
    }
    else if (this.position.x > width) {
      // this.position.x = (width - this.radius);
    }
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.checkEdges();
    this.acceleration.mult(0);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 48);
  }
}