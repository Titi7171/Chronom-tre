let hour = 0
let min = 0
let sec = 0
let msec = 0
let interval
let estArrete = true
let hourdiv = document.getElementById("h")
let mindiv = document.getElementById("min")
let secdiv = document.getElementById("s")
let msecdiv = document.getElementById("ms")
const startbtn = document.getElementById("start")
const stopbtn = document.getElementById("stop")
const resetbtn = document.getElementById("reset")

const start = () => {
    if (estArrete)  {
    interval = setInterval(updateTime, 100) 
    estArrete = false 
    }} 

const updateTime = () => {
    msec += 1
    if (msec == 10) {
        sec+=1
        msec = 0
    }
    
    if (sec == 60) {
        min += 1
        sec = 0
    }
    if  (min == 60) {
        hour+=1
        min = 0
    }
    updateDisplay()

}

const updateDisplay = () => {
    let hourdiv = document.getElementById("h")
    let mindiv = document.getElementById("min")
    let secdiv = document.getElementById("s")
    let msecdiv = document.getElementById("ms")
    msecdiv.innerHTML = `${msec}ms`
    secdiv.innerHTML = `${sec}s `
    mindiv.innerHTML = `${min}min `
    hourdiv.innerHTML = `${hour}h `
}

startbtn.addEventListener("click", start)
stopbtn.addEventListener("click", () => {
    clearInterval(interval)
    updateDisplay(interval)
    estArrete = true
})
resetbtn.addEventListener("click", () => {
    clearInterval(interval)
    hour = 0
    min = 0
    sec = 0
    msec = 0
    updateDisplay()
})

