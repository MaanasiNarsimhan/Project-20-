var car, wall;
var speed, weight 

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 100, 25, 25);
  wall = createSprite(400, 100, 25, 80)
  wall.shapeColor = (80,80,80)


  speed =   Math.round(random(55,90))
  weight = Math.round(random(400,1500))

wall.debug = true ;
}

function draw() {
  background(255,255,255); 
  
  car.velocityX = speed

if (car.x >380) {
  car.velocityX = 0
   
  
    
    var deformation = 0.5 * weight * speed *speed / 22500
   

    if (deformation>180) {
      car.shapeColor = "red"
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColor 	="yellow"
    }
    
    if (deformation < 100) {
      car.shapeColor= "green"
    }
  }




  drawSprites();
}
