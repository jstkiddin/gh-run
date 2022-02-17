// import Block from './block.js'

const game = document.querySelector('.game')

class Block{
  constructor(type){
    this.element = document.createElement('div')
    this.type = type
  }

  setClass(){
    this.element.classList.add(this.type)
  }

  getClass(){
   return this.element.className
  }

  getID(){
    return this.element.getAttribute('id')
   }

  setID(){
    this.element.setAttribute('id', this.type)
  }
}
// .setClass().setID()
const hole = new Block('hole')
hole.setClass()

const block = new Block('platform')
block.setClass()
console.log(block.getClass())

console.log(hole.getClass())

game.appendChild(block.element)
game.appendChild(hole.element)


let random = Math.floor(Math.random()*360)
/**
 * there goes characters controls ect
 */
class Entity{
  constructor(str){
    this.entity = document.querySelector(str)
  }

  getTopPosition(){
    return this.entity.offsetTop
  }

  getLeftPosition(){
    return this.entity.offsetLeft
  }

  jump(){
    this.entity.style.top= this.entity.offsetTop - 20 +"px";
  }
  
  moveDown(){
    this.entity.style.top= this.entity.offsetTop + 20 +"px";
  }

}

class Ghost extends Entity{
    constructor(str){
      super(str)
    }

    moveLeft = () =>{
      let left = parseInt(window.getComputedStyle(this.entity).getPropertyValue('left'))
      this.entity.style.left = this.entity.offsetLeft - 10 +"px";
    }
    moveRight = () =>{
      let left = parseInt(window.getComputedStyle(this.entity).getPropertyValue('left'))
      this.entity.style.left = this.entity.offsetLeft + 10 +"px";
    }
}

const ghost = new Ghost('.ghost-wrapper')
// console.log()
console.log('left entity: ',ghost.getLeftPosition())
console.log('top entity: ',ghost.getTopPosition())

//  while (game){
//   ghost.style.left = ghost.offsetLeft + 10 +"px";
//  }

// function animate(){
//    requestAnimationFrame(animate)
//    ghostClass.update()
//  }




//  
// 
// 

// let game_triger = true;


addEventListener('keydown', (e)=>{
  e = e || window.event
  if ((e.keyCode == '38')||(e.keyCode =='87')) { 
      ghost.jump()
   }
   else if ((e.keyCode == '37')||(e.keyCode =='65')) {
      if(ghost.getLeftPosition() > 0 ){
        interval = setInterval(ghost.moveLeft(),2) 
      }
    console.log('clsss entity: ', ghost.entity.offsetLeft)
    //  console.log(ghost.offsetLeft)
    
   }
   else if ((e.keyCode == '39')||(e.keyCode =='68')) {
     if(ghost.getLeftPosition() <= 1544){
       
      interval = setInterval(ghost.moveRight(),2)
     }
  } 
})

addEventListener('keyup', (e)=>{
  e = e || window.event
  if ((e.keyCode == '38')||(e.keyCode =='87')) { 
      setTimeout(ghost.moveDown(), 500)
   }
   else{
     clearInterval(interval)
   }
})