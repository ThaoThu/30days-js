let setDate = () => {

  let secondTime = new Date().getSeconds()
  let seconDeg = (secondTime * 6) + 90
  let secondHand = document.querySelector('.second-hand')
  secondHand.style.transform = `rotate(${seconDeg}deg)`


  let minuteTime = new Date().getMinutes()
  let minuteDeg = (minuteTime * 6) + 90
  let minuteHand = document.querySelector('.minute-hand')
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`

  let hourTime = new Date().getHours()
  let hourDeg = (hourTime * 15) + 90
  let hourHand = document.querySelector('.hour-hand')
  hourHand.style.transform = `rotate(${hourDeg}deg)`
}
setInterval(setDate, 1000);
