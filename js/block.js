class Block{
  constructor(type){
    this.element = document.createElement('div')
    this.type = type
  }

  setClass(){
    this.element.setAttribute('class', this.type)
  }

  getClass(){
   return this.element.getAttribute('class')
  }

  getID(){
    return this.element.getAttribute('id')
   }

  setID(){
    this.element.setAttribute('id', this.type)
  }
}