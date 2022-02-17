// const ghost = document.querySelector('.ghost-wrapper')
// const ghost = document.querySelector('#ghost')
const game = document.querySelector('.game')
console.log('game offset left:', game.offsetLeft)
console.log('game offset top:', game.offsetTop)
// console.log(ghost.offsetLeft)
// console.log(ghost.offsetTop)

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

  static jump(){
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
      // setTimeout(goDown, 1000);
   }
   else if ((e.keyCode == '37')||(e.keyCode =='65')) {
      if(ghost.getLeftPosition() > 0 ){
        ghost.moveLeft()
      }
    console.log('clsss entity: ', ghost.entity.offsetLeft)
    //  console.log(ghost.offsetLeft)
    
   }
   else if ((e.keyCode == '39')||(e.keyCode =='68')) {
     if(ghost.getLeftPosition() <= 1544){
      ghost.moveRight()

     }
  } 
})

addEventListener('keyup', (e)=>{
  e = e || window.event
  if ((e.keyCode == '38')||(e.keyCode =='87')) { 
      setTimeout(ghost.moveDown(), 500)
      console.log('keyup: ',ghost.offsetTop)
   }
})