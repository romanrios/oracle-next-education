let ballX, ballY, ballSpeedX, ballSpeedY, ballRadius = 10;
let paddleWidth = 10, paddleHeight = 100;
let playerPaddleY, computerPaddleY;
let playerScore = 0, computerScore = 0;
let particles = [];
let trail = [];
let explosionParticles = [];

function setup() {
  createCanvas(800, 400);
  resetBall();
  playerPaddleY = height / 2 - paddleHeight / 2;
  computerPaddleY = height / 2 - paddleHeight / 2;
}

function draw() {
  background(0);
  
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isFinished()) {
      particles.splice(i, 1);
    }
  }

  for (let i = trail.length - 1; i >= 0; i--) {
    trail[i].display();
    if (trail[i].isFinished()) {
      trail.splice(i, 1);
    }
  }

  for (let i = explosionParticles.length - 1; i >= 0; i--) {
    explosionParticles[i].update();
    explosionParticles[i].display();
    if (explosionParticles[i].isFinished()) {
      explosionParticles.splice(i, 1);
    }
  }

  noStroke();
  fill(255);
  ellipse(ballX, ballY, ballRadius * 2);
  rect(20, playerPaddleY, paddleWidth, paddleHeight);
  rect(width - 30, computerPaddleY, paddleWidth, paddleHeight);
  
  textSize(128);
  fill(150);
  textAlign(CENTER, CENTER);
  text(playerScore, width / 4, height / 2);
  text(computerScore, 3 * width / 4, height / 2);
  
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY < ballRadius || ballY > height - ballRadius) {
    ballSpeedY *= -1;
    createParticles(ballX, ballY);
  }

  if (ballX - ballRadius < 30 && ballY > playerPaddleY && ballY < playerPaddleY + paddleHeight) {
    ballSpeedX *= -1;
    ballX = 30 + ballRadius;
    let deltaY = ballY - (playerPaddleY + paddleHeight / 2);
    ballSpeedY = deltaY * 0.35;
    ballSpeedX *= 1.1;
    ballSpeedY *= 1.1;
    createParticles(ballX, ballY);
  }

  if (ballX + ballRadius > width - 30 && ballY > computerPaddleY && ballY < computerPaddleY + paddleHeight) {
    ballSpeedX *= -1;
    ballX = width - 30 - ballRadius;
    let deltaY = ballY - (computerPaddleY + paddleHeight / 2);
    ballSpeedY = deltaY * 0.35;
    ballSpeedX *= 1.1;
    ballSpeedY *= 1.1;
    createParticles(ballX, ballY);
  }

  if (ballX < 0) {
    computerScore++;
    createExplosion(30, height / 2);
    resetBall();
  } else if (ballX > width) {
    playerScore++;
    createExplosion(width - 30, height / 2);
    resetBall();
  }

  if (keyIsDown(UP_ARROW) && playerPaddleY > 0) {
    playerPaddleY -= 6;
  }
  if (keyIsDown(DOWN_ARROW) && playerPaddleY < height - paddleHeight) {
    playerPaddleY += 6;
  }

  let computerError = random(-15, 15);
  if (ballY > computerPaddleY + paddleHeight / 2 + computerError) {
    computerPaddleY += min(3, ballY - computerPaddleY - paddleHeight / 2);
  } else {
    computerPaddleY -= min(3, computerPaddleY - ballY + paddleHeight / 2);
  }
  computerPaddleY = constrain(computerPaddleY, 0, height - paddleHeight);

  trail.push(new Trail(ballX, ballY));
}

function resetBall() {
  ballX = width / 2;
  ballY = height / 2;
  ballSpeedX = random(4, 6) * (random() > 0.5 ? 1 : -1);
  ballSpeedY = random(3, 5) * (random() > 0.5 ? 1 : -1);
}

function createParticles(x, y) {
  for (let i = 0; i < 10; i++) {
    particles.push(new Particle(x, y));
  }
}

function createExplosion(x, y) {
  for (let i = 0; i < 50; i++) {
    explosionParticles.push(new Particle(x, y, true));
  }
}

class Particle {
  constructor(x, y, isExplosion = false) {
    this.x = x;
    this.y = y;
    this.size = random(5, 10);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.lifespan = 255;
    if (isExplosion) {
      this.size = random(10, 20);
      this.speedX *= 3;
      this.speedY *= 3;
    }
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.lifespan -= 5;
  }

  display() {
    fill(255, this.lifespan);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  isFinished() {
    return this.lifespan < 0;
  }
}

class Trail {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lifespan = 255;
  }

  display() {
    fill(255, this.lifespan);
    noStroke();
    ellipse(this.x, this.y, 10);
    this.lifespan -= 5;
  }

  isFinished() {
    return this.lifespan < 0;
  }
}
