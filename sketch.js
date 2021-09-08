var apple
var mmImg
var score = 0
var i1,i2,i3,i4,i5,i6
var backgroundImg
var wallleft
var wallright
var flag1 = false,flag2 = false,flag3 = false,flag4 = false,flag5 = false,flag6 = false


function preload() {
  mmImg = loadImage("mm.png")
  backgroundImg = loadImage("kkk.jpg")
  i1Img = loadImage("cash.png")
  i2Img = loadImage("diamonds.png")
}

function setup() {
  createCanvas(1200,800);

  mm = createSprite(200, 400, 50, 50);
  mm.addImage("mm",mmImg)
  mm.scale = 0.3
 
  wallleft = createSprite(345,400,20,800)
  wallright = createSprite(850,400,20,800)

  i1 = createSprite(1150,100)
  i1.addImage("cash",i1Img)
  i1.scale = 0.3
  i1.visible = false

  i2 = createSprite(1150,205)
  i2.addImage("diamonds",i2Img)
  i2.scale = 0.1
  i2.visible = false

  i3 = createSprite(1150,312)
  i3.shapeColor = "white"
  i3.visible = false

  i4 = createSprite(1150,420)
  i4.shapeColor = "white"
  i4.visible = false

  i5 = createSprite(1150,530)
  i5.shapeColor = "white"
  i5.visible = false

  i6 = createSprite(1150,640)
  i6.shapeColor = "white"
  i6.visible = false

}

function draw() {
  background(backgroundImg);
  
  if(flag1 === true ){
    if(frameCount % 70 === 0){
      score = score +1
      }
  }

  
  if(flag2 === true ){
    if(frameCount % 150 === 0){
      score = score +5
      }
  }

  if(flag3 === true ){
    if(frameCount % 220 === 0){
      score = score +10
      }
  }

  if(flag4 === true ){
    if(frameCount % 300 === 0){
      score = score +20
      }
  }

  if(flag5 === true ){
    if(frameCount % 450 === 0){
      score = score +35
      }
  }

  if(flag6 === true ){
    if(frameCount % 500 === 0){
      score = score +550
      }
  }

  if(score >= 10){
    i1.visible = true
  }
   else {
    i1.visible = false
   }

  if(score >= 10){
    i2.visible = true
  }
  else {
    i2.visible = false
   }

  if(score >= 70){
    i3.visible = true
  }
  else {
    i3.visible = false
   }

  if(score >= 80){
    i4.visible = true
  }
  else {
    i4.visible = false
   }

  if(score >= 12){
    i5.visible = true
  }
  else {
    i5.visible = false
   }

  if(score >= 20){
    i6.visible = true
  }
  else {
    i6.visible = false
   }

  

  if(mousePressedOver(i1) && i1.visible === true && score > 10){
      i1.visible = false
      score -= 10
      flag1 = true
  }
  

  if(mousePressedOver(i2) && i2.visible === true && score > 10){
    i2.visible = false
     score -= 10
     flag2 = true
  
  }

  if(mousePressedOver(i3) && i3.visible === true && score > 70){
    i3.visible = false
    score -= 70
    flag3 = true
  }

  if(mousePressedOver(i4) && i4.visible === true && score > 80){
    i4.visible = false
    score -= 80
    flag4 = true
  }

  if(mousePressedOver(i5) && i5.visible === true && score > 12){
    i5.visible = false
    score -= 12
    flag5 = true
  }

  if(mousePressedOver(i6) && i6.visible === true && score > 20){
    i6.visible = false
    score -= 20
    flag6 = true
  }
  
  
  drawSprites();

   fill("white")
   textSize(30)
   text(score,200,50)
   
}

function mouseClicked(){
 var distance = dist(mm.x,mm.y,mouseX,mouseY)
 console.log(distance)
 if(distance <= 75)
     score ++ 

}
