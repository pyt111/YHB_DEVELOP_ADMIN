import U from './utils'
export const Particle = (xx, yy, type,context) =>{
  // console.log(this);
  // console.log(xx, yy, type)
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
  let radiuss = document.getElementById("rad");
  let radius = 1.1;
  let  graVal = document.getElementById("gra");
  this.gravity = parseFloat(graVal.value);
  let radVal = parseFloat(radiuss.value);
  let duration = document.getElementById('dur');
  let durVal = parseFloat(duration.value);
  let futurRadius = U.utils.randomInt(radVal, radVal+3); //[1.1,5.1]
  
  let speed = document.getElementById('speed');
  let spdVal = parseFloat(speed.value);
  let resolution = document.getElementById('res');
  let resVal = parseFloat(resolution.value);
  let rebond = U.utils.randomInt(1, 5);
  let x = xx;
  let y = yy;
  // console.log(x,y);
  let dying = false;
  
  let base = [x, y];
// console.log(this.base);
  let vx = 0;
  let vy = 0;
  this.type = type;
  let friction = .99;
  let gravity = graVal;
  let color = colors[Math.floor(Math.random() * colors.length)];

  let getSpeed = function() {
    return Math.sqrt(vx * vx + vy * vy);
  };

  let setSpeed = function(speed) {
    var heading = getHeading();
    vx = Math.cos(heading) * speed;
    vy = Math.sin(heading) * speed;
  };

  let getHeading = function() {
    return Math.atan2(vy,vx);
  };

  let setHeading = function(heading) {
    var speed = getSpeed();
    vx = Math.cos(heading) * speed;
    vy = Math.sin(heading) * speed;
  };

  let update = function(heading) {
    x += vx;
    y += vy;
    vy += graVal;

    vx *= friction;
    vy *= friction;
    
    if(radius < futurRadius && dying === false){
      radius += durVal;
    }else{
      dying = true;
    }
      
    if(dying === true){
      radius -= durVal;
    }
    
    if(type === "ball"){
      context.save();
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.x, this.y,radius, Math.PI * 2, false);
      context.closePath();
      context.fill();
      context.restore();
    }

    if(type === "rect"){
      context.save();
      context.fillStyle = this.color;
      context.beginPath();
      context.fillRect(this.x, this.y, futurRadius, futurRadius)
      context.closePath();
      context.fill();
      context.restore();
    }
    

    if (this.y < 0 || radius < 1) {
      x = this.base[0];
      y = this.base[1];
      dying = false;
      radius = 1.1;
      setSpeed(spdVal);
      futurRadius = U.utils.randomInt(radVal, radVal+3);  
      setHeading(U.utils.randomInt(U.utils.degreesToRads(0), U.utils.degreesToRads(360)));
    }

  }

  setSpeed(U.utils.randomInt(.1, .5));
  setHeading(U.utils.randomInt(U.utils.degreesToRads(0), U.utils.degreesToRads(360)));
  return {base,color,dying,friction,futurRadius,getHeading,getSpeed,gravity,radius,rebond,setHeading,setSpeed,type,update,vx,vy,x,y}
}

