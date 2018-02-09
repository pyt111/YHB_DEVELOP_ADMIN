import U from './utils'
export const Particle = (x, y, type) =>{
  console.log(x, y, type)
  let colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722"
];
  let radius = document.getElementById("rad")
  radius = 1.1;
  let gravity = document.getElementById("gra"),
  graVal = parseFloat(gravity.value)
  let radVal = parseFloat(radius.value)
  
  this.futurRadius = U.utils.randomInt(radVal, radVal+3); //[1.1,5.1]
  
  this.rebond = U.utils.randomInt(1, 5);
  this.x = x;
  this.y = y;
  
  this.dying = false;
  
  this.base = [x, y];

  this.vx = 0;
  this.vy = 0;
  this.type = type;
  this.friction = .99;
  this.gravity = graVal;
  this.color = colors[Math.floor(Math.random() * colors.length)];

  this.getSpeed = function() {
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
  };

  this.setSpeed = function(speed) {
    var heading = this.getHeading();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  };

  this.getHeading = function() {
    return Math.atan2(this.vy, this.vx);
  };

  this.setHeading = function(heading) {
    var speed = this.getSpeed();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  };

  let update = function(heading) {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += graVal;

    this.vx *= this.friction;
    this.vy *= this.friction;
    
    if(this.radius < this.futurRadius && this.dying === false){
      this.radius += durVal;
    }else{
      this.dying = true;
    }
      
    if(this.dying === true){
      this.radius -= durVal;
    }
    
    if(type === "ball"){
      context.save();
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.x, this.y, this.radius, Math.PI * 2, false);
      context.closePath();
      context.fill();
      context.restore();
    }

    if(type === "rect"){
      context.save();
      context.fillStyle = this.color;
      context.beginPath();
      context.fillRect(this.x, this.y, this.futurRadius, this.futurRadius)
      context.closePath();
      context.fill();
      context.restore();
    }
    

    if (this.y < 0 || this.radius < 1) {
      this.x = this.base[0];
      this.y = this.base[1];
      this.dying = false;
      this.radius = 1.1;
      this.setSpeed(spdVal);
      this.futurRadius = U.utils.randomInt(radVal, radVal+3);  
      this.setHeading(U.utils.randomInt(U.utils.degreesToRads(0), U.utils.degreesToRads(360)));
    }

  }

  this.setSpeed(U.utils.randomInt(.1, .5));
  this.setHeading(U.utils.randomInt(U.utils.degreesToRads(0), U.utils.degreesToRads(360)));

}

