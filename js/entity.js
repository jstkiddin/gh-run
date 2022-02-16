/*
  x - position of entity OX
  y - position of entity OY
  element - for queryselection. Identyfies the element
*/ 

class Entity{
  constructor(x,y,element){
    this.x=x
    this.y=y
    this.el = document.querySelector(element)

    this.setPosition();
    
  }

  setPosition(){
    this.el.setAttribute('x', this.x)
    this.el.setAttribute('y', this.y)
  }

  getPosition(){
    this.el.getAttribute('x')
    this.el.getAttribute('y')

    console.log(this.el.getAttribute('x'))
    console.log(this.el.getAttribute('y'))
  }
}

class Ghost extends Entity{
  constructor(x,y,element){
    super(x,y,element)
  }


  goRight(){
    x++;
    if(x<1850){
      this.el.setAttribute('x', x)
    }
    
  }
  goLeft(){
    x--;
    if(x>5){
      this.el.setAttribute('x', x)
    //   ghost.style.left = left - 2 +'px';
    }
  }
  goUp(){
    y--;
    if(y>6){
      for(let i=0;i<6;i++){
        y--;
        this.el.setAttribute('y', y)
      }
    }
  }
  gravity(){
       this.y=+2;
       this.el.setAttribute('y', this.y)
  }
}


class Boy extends Entity{
  constructor(x,y,element){
    super(x,y,element)
  }


}

let ghost = new Ghost(50,10,'#ghost')
// let boy = new Boy(70,10,'#boy')

ghost.getPosition()
update_gravity();

function update_gravity(){
  ghost.gravity()
  requestAnimationFrame(update_gravity())
}

// class Enemy extends Entity{

// }
