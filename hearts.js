const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart(x, y, size, speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
  this.draw = function() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x - this.size / 2, this.y - this.size,
                      this.x - this.size, this.y + this.size / 3,
                      this.x, this.y + this.size);
    ctx.bezierCurveTo(this.x + this.size, this.y + this.size / 3,
                      this.x + this.size / 2, this.y - this.size,
                      this.x, this.y);
    ctx.fillStyle = "rgba(255, 105, 180, 0.7)";
    ctx.fill();
  };
  this.update = function() {
    this.y -= this.speed;
    if (this.y < -10) {
      this.y = canvas.height + 10;
    }
    this.draw();
  };
}

function initHearts() {
  for (let i = 0; i < 50; i++) {
    hearts.push(new Heart(Math.random() * canvas.width, Math.random() * canvas.height, 15, 1 + Math.random() * 1.5));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => h.update());
  requestAnimationFrame(animate);
}

initHearts();
animate();