// import Block from './block.js'

const game = document.querySelector('.game')


/**
 * Creating blocks:
 *    element - block element
 *    setClass() -
 *    getClass() - returns class of Block element 
 */
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

  setLeftPosition(random){
    this.element.style.left = random + "px;"
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
//getLeftPosition())


let random = Math.floor(Math.random()*360)
console.log('random', random)
hole.setLeftPosition(random)

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
    this.entity.style.top= this.entity.offsetTop - 50 +"px";
  }
  
  moveDown(){
    this.entity.style.top= this.entity.offsetTop + 50 +"px";
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
// console.log('left entity: ',ghost.getLeftPosition())
// console.log('top entity: ',ghost.getTopPosition())

// let gameBool = 1
// while(gameBool <30){
//   setInterval(ghost.moveDown(), 2)
//   gameBool++
// }

const boy = new Entity("#boy")



addEventListener('keydown', (e)=>{
  e = e || window.event
  // console.log(e.keyCode)
  if ((e.keyCode == '38')||(e.keyCode =='87')) { 
      ghost.jump()
      boy.jump()   
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
       
      interval = setInterval(ghost.moveRight(),1000)
     }
    }
  // else if(e.keyCode =='32'){
  //   boy.jump()
  // } 
})

addEventListener('keyup', (e)=>{
  e = e || window.event
  if ((e.keyCode == '38')||(e.keyCode =='87')) { 
      setTimeout(ghost.moveDown(), 500)
      setTimeout(boy.moveDown(), 500)

   }
   else{
     clearInterval(interval)
   }
})