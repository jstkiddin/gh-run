const music_btn = document.querySelector("#music")
// const menu_btn = document.querySelector(".btn.m")
const menu_btn = document.querySelector(".menu")
// const icon = document.querySelector("#muisc img")
const main_audio = document.querySelector("#main_audio")
const hover_audio = document.querySelector("#hover_menu")
const click_audio = document.querySelector("#click_menu")
const text = document.querySelector(".text")


  window.addEventListener('load', () => {
    main_audio.pause();
    window.setTimeout(() => {
      text.classList.remove("visible")
    },1000)
   })

music.addEventListener("click", () => {
  if (main_audio.paused) {
    main_audio.volume = 0.2;
    main_audio.play();
    
    // icon.classList.add('fa-volume-mute')

    music.classList.add("pressed")
    // music.classList.add
    
  } else {
    main_audio.pause();
    music.classList.remove("pressed")
    // icon.classList.remove('fa-volume-mute')
  }
  
})

 menu_btn.addEventListener('mouseover', () => {
  hover_audio.volume = 0.3
  hover_audio.play()  
 })

 menu_btn.addEventListener('click', () =>{
   click_audio.volume = .5
   click_audio.play()
 })


 

  

