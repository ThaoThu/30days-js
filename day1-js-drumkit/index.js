

let playSound = function (e) {
  let code = e.keyCode
  let audio = document.querySelector(`audio[data-key="${code}"]`)
  if (!audio) return
  let key = document.querySelector(`.key[data-key="${code}"]`)

  key.classList.add('playing')

  audio.currentTime = 0
  audio.play()
}

let removeSound = (e) => {

  if (e.propertyName !== 'transform') {
    e.target.classList.remove('playing')
  }
}


// 
let keys = Array.from(document.querySelectorAll(`.key`))
console.log("🚀 ~ file: index.js ~ line 17 ~ keys", keys)
keys.forEach(key => key.addEventListener('transitionend', removeSound))



document.addEventListener('keydown', playSound)