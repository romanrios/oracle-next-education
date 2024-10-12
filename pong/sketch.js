let ball;
let playerPaddle;
let computerPaddle;
let ballX, ballY, ballSpeedX, ballSpeedY, ballRadius = 10;
let paddleWidth = 10, paddleHeight = 100;
let playerPaddleY = 0;
let computerPaddleY = 0;
let playerScore = 0, computerScore = 0;
let particles = [];
let trail = [];
let explosionParticles = [];
let bg;
let bounceSound, gameOverSound, scoreSound;
let gameEnded = false;
let inputBlocked = false;
let gameOverMessage = "";
let gameOverTimer = 0;
let ballAngle = 0;

function preload() {
  ball = loadImage('assets/bola.png');
  playerPaddle = loadImage('assets/barra1.png');
  computerPaddle = loadImage('assets/barra2.png');
  bg = loadImage('assets/fondo1.png');
  bounceSound = loadSound('assets/bounce.wav');
  gameOverSound = loadSound('assets/gameover.wav');
  scoreSound = loadSound('assets/score.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  resetBall();
}

function draw() {
  imageMode(CORNER);
  image(bg, 0, 0, width, height);
  
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

  imageMode(CENTER);
  if (!gameEnded) {
    ballAngle += (abs(ballSpeedX) + abs(ballSpeedY)) * 0.01;
    push();
    translate(ballX, ballY);
    rotate(ballAngle);
    image(ball, 0, 0, ballRadius * 2, ballRadius * 2);
    pop();
  }
  image(playerPaddle, 25, playerPaddleY + paddleHeight / 2, paddleWidth, paddleHeight);
  image(computerPaddle, width - 25, computerPaddleY + paddleHeight / 2, paddleWidth, paddleHeight);
  
  textSize(128);
  fill(255, 150);
  textAlign(CENTER, CENTER);
  text(playerScore, width / 4, height / 2);
  text(computerScore, 3 * width / 4, height / 2);
  
  if (!gameEnded) {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY < ballRadius || ballY > height - ballRadius) {
      ballSpeedY *= -1;
      bounceSound.play();
      createParticles(ballX, ballY);
    }

    if (ballX - ballRadius < 30 && ballY > playerPaddleY && ballY < playerPaddleY + paddleHeight) {
      ballSpeedX *= -1;
      bounceSound.play();
      ballX = 30 + ballRadius;
      let deltaY = ballY - (playerPaddleY + paddleHeight / 2);
      ballSpeedY = deltaY * 0.35;
      ballSpeedX *= 1.1;
      ballSpeedY *= 1.1;
      createParticles(ballX, ballY);
    }

    if (ballX + ballRadius > width - 30 && ballY > computerPaddleY && ballY < computerPaddleY + paddleHeight) {
      ballSpeedX *= -1;
      bounceSound.play();
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
      scoreSound.play();
      resetBall();
    } else if (ballX > width) {
      playerScore++;
      createExplosion(width - 30, height / 2);
      scoreSound.play();
      resetBall();
    }

    if (playerScore === 10) {
      gameEnded = true;
      gameOverSound.play();
      gameOverMessage = "YOU WIN";
      blockInput();
      gameOverTimer = millis();
    } else if (computerScore === 10) {
      gameEnded = true;
      gameOverSound.play();
      gameOverMessage = "YOU LOSE";
      blockInput();
      gameOverTimer = millis();
    }

    if (!gameEnded && !inputBlocked) {
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
  } else {
    if (millis() - gameOverTimer < 3000) {
      textSize(64);
      fill(255, 255, 255, 200);
      textAlign(CENTER, CENTER);
      text(gameOverMessage, width / 2, height / 2);
    } else {
      resetGame();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function resetBall() {
  ballX = width / 2;
  ballY = height / 2;
  ballSpeedX = random(4, 6) * (random() > 0.5 ? 1 : -1);
  ballSpeedY = random(3, 5) * (random() > 0.5 ? 1 : -1);
  ballAngle = 0;
}

function createParticles(x, y) {
  for (let i = 0; i < 10; i++) {
    particles.push(new Particle(x, y));
  }
}

function createExplosion(x, y) {
  for (let i = 0; i < 100; i++) {
    explosionParticles.push(new Particle(x, y, true));
  }
}

function keyPressed() {
  if (gameEnded && !inputBlocked) {
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameEnded = false;
  resetBall();
}

function blockInput() {
  inputBlocked = true;
  setTimeout(() => {
    inputBlocked = false;
  }, 2000);
}

class Particle {
  constructor(x, y, isExplosion = false) {
    this.x = x;
    this.y = y;
    this.size = random(3, 5);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.lifespan = 255;
    this.color = color(random(255), random(255), random(255));
    if (isExplosion) {
      this.size = random(5, 10);
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
    fill(this.color, this.lifespan);
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
    this.alpha = 255;
    this.size = random(5, 10);
  }

  display() {
    fill(255, this.alpha);
    noStroke();
    ellipse(this.x, this.y, this.size);
    this.alpha -= 5;
  }

  isFinished() {
    return this.alpha < 0;
  }
}
