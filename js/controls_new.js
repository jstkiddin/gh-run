// import Block from './block.js'

const game = document.querySelector('.game')
let game_blocks_one = document.querySelector('.game-blocks.one')
let game_blocks_two = document.querySelector('.game-blocks.two')
let gameBool = false
let odd = false
let start = true
let random_width,width 
let jump_offset_one = 0, jump_offset_two = 0


if(window.screen.width>=1536){
  width = 1536
  random_width = 1500
  adaptive_offset =10
}else if((window.screen.width>1365)&&(window.screen.width<1536)){
  width = 1366
  random_width = 1300
  adaptive_offset = 18
}else if((window.screen.width>1024)&&(window.screen.width<1365)){
  width = 1024
  random_width = 100
  adaptive_offset=30
}

/**
 * Creating blocks:
 *    :element - returns block-div element 
 * 
 *    :type - type of block-element (future div class)
 * 
 *    :setClass() - adds class to div with a type of the block
 * 
 *    :getClass() - returns class of div with a type of the block
 * 
 *    :setNewClass(newClass) - adds new(additional) class to div
 *    :removeNewClass(newClass) - removes new(additional) class from div
 *    : :newClass - new(additional) class of block-div
 * 
 *    :setLeftPosition(random) - sets left positon of block-div with added random value
 *    : :random - random value to add to offset
 * 
 *    :getLeftPosition()- returns left positon of block-div
 */
class Block{
  constructor(type){
    this.element = document.createElement('div')
    this.type = type
  }

  setClass(){
    this.element.classList.add(this.type)
  }

  setNewClass(newClass){
    this.element.classList.add(newClass)
  }

  removeNewClass(newClass){
    this.element.classList.remove(newClass)
  }

  getClass(){
   return this.element.className
  }

  setLeftPosition(random){
    this.element.style.left = this.element.offsetLeft+random + "px";
  }

  getLeftPosition(){
    return this.element.offsetLeft
  }
}

// const hole = new Block('hole')
// const block = new Block('platform')
// const jump_block = new Block('platform')


function createBlocks(game_blocks,flag){

  const hole = new Block('hole')
  const block = new Block('platform')
  const jump_block = new Block('platform')

  let random_hole = Math.floor(Math.random()*random_width)
  let random_jump = Math.floor(Math.random()*random_width)
  // hole white block
  
  hole.setClass()
  hole.setLeftPosition(random_hole)

// main black bloks
  
  block.setClass()

// barrier block that you need to jump over
  
  jump_block.setClass()
  jump_block.setNewClass('jump')

  
  // 
  while((random_jump+25>random_hole)&&(random_jump<random_hole+40)){
    random_jump = Math.floor(Math.random()*random_width)
  }
  
  jump_block.setLeftPosition(random_jump)


  if(!flag){
    game_blocks.appendChild(jump_block.element)
    game_blocks.appendChild(block.element)
    game_blocks.appendChild(hole.element)
  }else{
    game_blocks.replaceChild(jump_block.element, game_blocks.childNodes[0])
    game_blocks.replaceChild(block.element,  game_blocks.childNodes[1])
    game_blocks.replaceChild(hole.element, game_blocks.childNodes[2])
  }
  
  game.appendChild(game_blocks)
}



/**
 * Start of interval
 * where the magic begins
 * setInterval() - works like loop 
 */

  setInterval(function(){
  
    if(!gameBool){
      createBlocks(game_blocks_one,false)
      game_blocks_one.style.left="0px";
      gameBool =true
      createBlocks(game_blocks_two,false)
      game_blocks_two.style.left = width+'px';   
      game_blocks_two.style.top = "341px"

      jump_offset_one = game_blocks_one.childNodes[0].offsetLeft
      jump_offset_two = game_blocks_two.childNodes[0].offsetLeft
    }else{
      // console.log("left two ",game_blocks_two.offsetLeft)
      if(!odd){
        jump_offset_two -= adaptive_offset;
        // game_blocks.childNodes[0]
        console.log('platform number 2')

        if(game_blocks_two.offsetLeft < 0){
          game_blocks_two.style.top = "405px"
          createBlocks(game_blocks_one,true)
          game_blocks_one.style.left = game_blocks_two.offsetLeft+width+'px';
          game_blocks_one.style.top = "341px"

          hole_offset_one = game_blocks_one.childNodes[1].offsetLeft
          jump_offset_one = game_blocks_one.childNodes[0].offsetLeft
          odd=true
        }
      }else{
        // jump_blcoks logic
        jump_offset_one -= adaptive_offset
        
        if((jump_offset_one>ghost.getLeftPosition())
        &&((ghost.getLeftPosition()+adaptive_offset)>jump_offset_one)){
          
          console.log(`platform : ${jump_offset_one}`)
          console.log(`platform top: ${game_blocks_one.childNodes[0].offsetTop}`)
          console.log(`ghost position: ${ghost.getLeftPosition()}`)
          console.log(`ghost top position: ${ghost.getTopPosition()}`)
          
          
          if(ghost.getTopPosition()<=game_blocks_one.childNodes[0].offsetTop){
            console.log('you lost')
          }
        }

        // hole logic
        if((hole_offset_one<=ghost.getLeftPosition())&&(ghost.getTopPosition()==470)){
          ghost.fall()
          console.log('you lost')
        }

        if(game_blocks_one.offsetLeft < 0){
          game_blocks_one.style.top = "405px"
          createBlocks(game_blocks_two,true)
          game_blocks_two.style.left = game_blocks_one.offsetLeft+width+'px';
          game_blocks_two.style.top = "341px"

          hole_offset_two = game_blocks_two.childNodes[1].offsetLeft
          jump_offset_two = game_blocks_two.childNodes[0].offsetLeft
          odd=false
        }
      }
      
    }
    if(start){
      setTimeout(()=>{
        game_blocks_one.style.left=game_blocks_one.offsetLeft-adaptive_offset+"px";
        game_blocks_two.style.left=game_blocks_two.offsetLeft-adaptive_offset+"px";
        start=false  
      }, 1500)
    }else{
      
      game_blocks_one.style.left=game_blocks_one.offsetLeft-adaptive_offset+"px";
      game_blocks_two.style.left=game_blocks_two.offsetLeft-adaptive_offset+"px";
    }
    
    
    
  },45)







/**
 * there goes characters controls ect.
 * 
 * Entity - basic characters class (for boy and ghost). 
 *    :entity - returns character-div element
 * 
 *    :getTopPosition() - returns character's element top position(offset)
 * 
 *    :getLeftPosition() - returns character's element left position(offset)
 * 
 *    :jump() - changes character's element top position(offset) to 430px, so it seems like a jump
 * 
 *    :moveDown() - returns character's element to its original top position 
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
    this.entity.style.top= "430px";
  }
  
  moveDown(){
    this.entity.style.top= "470px";
  }

  fall(){
    this.entity.style.top = "600px";
  }

}

/**
 * Ghost - child of Entity. Sets new functions for a playable character - ghost
 *    :moveLeft() - function moves ghost element closer from its original left pos
 *    :moveRight() - function moves ghost element further from its original left pos

//  // future feature:
 *    :ghostTransparent() - function makes ghost "transparent" - adds new class to .ghost-wrapper element
 */
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

    ghostTransparent(){
      this.entity.classList.add('transparant')
    }

}

const ghost = new Ghost('.ghost-wrapper')
const boy = new Entity(".boy-wrapper")



addEventListener('keydown', (e)=>{
  e = e || window.event
  // console.log(e.keyCode)
  if ((e.keyCode == '38')||(e.keyCode =='87')) { 
      ghost.jump()  
   }
   else if ((e.keyCode == '37')||(e.keyCode =='65')) {
      if(ghost.getLeftPosition() > 0 ){
        interval = setInterval(ghost.moveLeft(),1) 
      }
    //  console.log(ghost.offsetLeft)
    
   }
   else if ((e.keyCode == '39')||(e.keyCode =='68')) {
     if(ghost.getLeftPosition() <= 1544){
      interval = setInterval(ghost.moveRight(),1)
     }
    }
  else if(e.keyCode =='32'){
    if(!transparent){
      ghost.entity.classList.add('transparent')
    }else(
      ghost.entity.classList.rempve('transparent')
    )

  } 
})

addEventListener('keyup', (e)=>{
  e = e || window.event
  if ((e.keyCode == '38')) { 
      setTimeout(ghost.moveDown(), 500)
    }
    if ((e.keyCode =='87')){
      setTimeout(boy.moveDown(), 500)
   }
   else{
     clearInterval(interval)
   }
})

/**
 * blocks and entities 
 */

