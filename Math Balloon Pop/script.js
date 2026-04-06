let balloonEl=document.createElement("div")
balloonEl.className="balloon"
balloonEl.innerText ="7"
document.body.appendChild(balloonEl)
function createBalloon(number, colour, speed, position){
    let balloonEl=document.createElement("div")
    balloonEl.className="balloon"
    balloonEl.innerText =number    
    document.body.appendChild(balloonEl)
}