let balloonEl=document.createElement("div")
balloonEl.className="balloon"
balloonEl.innerText ="7"
document.body.appendChild(balloonEl)
let position={left:100, top:window.innerHeight}
function createBalloon(number, colour, speed){
    let balloonEl=document.createElement("div")
    balloonEl.className="balloon"
    balloonEl.innerText =number    
    balloonEl.style.color=colour
    position.top-=speed
    balloonEl.style.top=position.top
    balloonEl.style.left=position.left

    document.body.appendChild(balloonEl)
}
setInterval(moveBalloon, 20)
function moveBalloon(){
    createBalloon("8", "red", 2 )
}