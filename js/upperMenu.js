const upperMenuBtn = document.querySelector('.btn.upper')
const upperMenu = document.querySelector('.upper-menu')
let pressed = false;
// const closePopUp = document.querySelector('.popup-close')


// const popUp = document.querySelector('.popup')

upperMenu.addEventListener('click', (e)=>{
  if (!pressed){
    console.log(pressed)
    upperMenuBtn.classList.add('pressed')
    pressed = true
  }else{
    console.log(pressed)
    upperMenuBtn.classList.remove('pressed')
    pressed = false
  }
})
