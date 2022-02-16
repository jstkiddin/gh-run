// import Entity from "entity"
const canvas= document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
const gravity = 0.5
const speed = 5
let doubleJump=0


class Entity{
  constructor(x,y){
    this.x=x
    this.y=y

    this.width = 30
    this.height = 40

    this.velosity={
      x:0,
      y:2
    }
  }

  draw(){
   c.fillStyle = 'red'
   c.fillRect(this.x,this.y, this.width, this.height)
  }

  update(){
    this.draw()
    this.y +=this.velosity.y
    this.x +=this.velosity.x


    if(this.y+this.height+this.velosity.y <=canvas.height){
      this.velosity.y+=gravity
    }else{
      this.velosity.y=0
    }  
  }

  
}


class Platform{
  constructor(x,y){
    this.x=x
    this.y=y

    this.width = 100
    this.height = 40
  }

  draw(){
    c.fillStyle = 'blue'
    c.fillRect(this.x,this.y, this.width, this.height)
   }
}
  
  
const entity = new Entity(0,10)
const platform = new Platform(0,800)
entity.draw()
animate()
  
function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0,0, canvas.width, canvas.height)
  entity.update()
  platform.draw()


  console.log(platform.y)
  console.log(entity.y)
  // &&(entity.x+entity.width < platform.x+platform.width)
  if((entity.y+entity.height >= platform.y)){
    entity.velosity.y = 0
   }


}


addEventListener('keydown', (e)=>{
  e = e || window.event
  console.log(e.keyCode)
  if ((e.keyCode == '38')||(e.keyCode =='87')) { 
        entity.velosity.y -=10
   }
   else if ((e.keyCode == '37')||(e.keyCode =='65')) {
     if(entity.x >0){
      entity.velosity.x = -1*speed
     }
   }
   else if ((e.keyCode == '39')||(e.keyCode =='68')) {
    if(entity.x <canvas.width){
      entity.velosity.x = speed
    } 
  }
  
})


addEventListener('keyup', (e)=>{
  e = e || window.event
   if ((e.keyCode == '37')||(e.keyCode =='65')) {
    entity.velosity.x = 0
   }
   else if ((e.keyCode == '39')||(e.keyCode =='68')) {
    entity.velosity.x = 0
  }
})

   