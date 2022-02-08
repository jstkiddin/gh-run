

const ghost = document.querySelector("#ghost")
let both =0

// document.onkeydown = checkKey;

document.addEventListener('keydown', (e)=>{
  if(both==0){
    both++
    e = e || window.event
    if (e.keyCode == '38') {
        // up arrow
        interval = setInterval(goUp,1)
        console.log('up')
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log('down')
    }
    else if (e.keyCode == '37') {
      interval = setInterval(goLeft,1)
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
       interval = setInterval(goRight,1)
      //  console.log('right')
       
    }
  }
    
  })

  document.addEventListener('keyup', (e)=>{
    clearInterval(interval)
    both=0;
  })

  console.log(ghost.offsetTop)

  const goRight = (left) => {
    left = ghost.offsetLeft
    if(left<1850){
      ghost.style.left = left + 2 +'px';
    }
    
  }
  const goLeft = (left) => {
    left = ghost.offsetLeft
    if(left>100){
      ghost.style.left = left - 2 +'px';
    }

  }
  const goUp = () => {
    ghost.style.top = ghost.offsetTop - 5 +'px';
    // ghost.style.top = ghost.offsetTop - 20 +'px';
    console.log(ghost.offsetTop)
  }

