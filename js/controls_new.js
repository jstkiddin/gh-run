const ghost = document.querySelector('.ghost-wrapper')
// const ghost = document.querySelector('#ghost')
const game = document.querySelector('.game')
console.log('game offset left:', game.offsetLeft)
console.log('game offset top:', game.offsetTop)
console.log(ghost.offsetLeft)
console.log(ghost.offsetTop)
// const

class Ghost{
  update(){
    ghost.style.left = ghost.offsetLeft + 10 +"px";
  }
}



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

const moveLeft = () =>{
  let left = parseInt(window.getComputedStyle(ghost).getPropertyValue('left'))
  ghost.style.left = ghost.offsetLeft - 10 +"px";
}
const moveLeft = () =>{
  let left = parseInt(window.getComputedStyle(ghost).getPropertyValue('left'))
  ghost.style.left = ghost.offsetLeft + 10 +"px";
}

function moveDown(){
  ghost.style.top= ghost.offsetTop + 20 +"px";
}

addEventListener('keydown', (e)=>{
  e = e || window.event
  if ((e.keyCode == '38')||(e.keyCode =='87')) { 
      ghost.style.top= ghost.offsetTop - 20 +"px";

      console.log('keydown: ',ghost.offsetTop)
      // setTimeout(goDown, 1000);
   }
   else if ((e.keyCode == '37')||(e.keyCode =='65')) {
    console.log(ghost.style.left >= 0 && ghost.style.left <= 1544)
     if(ghost.offsetLeft > 0 ){
       setInterval()
      ghost.style.left = ghost.offsetLeft - 10 +"px";
     }

     console.log(ghost.offsetLeft)
    
    //  if(entity.x >0){
    //   entity.velosity.x = -1*speed
    //  }
   }
   else if ((e.keyCode == '39')||(e.keyCode =='68')) {
    console.log(ghost.style.left >= 0 && ghost.style.left <= 1544)
     if(ghost.offsetLeft <= 1544){
      ghost.style.left = ghost.offsetLeft + 10 +"px";

      console.log(ghost.offsetLeft)
     }
    
    // if(entity.x <canvas.width){
    //   entity.velosity.x = speed
    // } 
  }
  
})

addEventListener('keyup', (e)=>{
  e = e || window.event
  if ((e.keyCode == '38')||(e.keyCode =='87')) { 
      setTimeout(moveDown(), 500)
      console.log('keyup: ',ghost.offsetTop)
   }
})