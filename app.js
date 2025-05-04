let rn;
let score = 0;
let compBtn;
function makebubble() {
  let pbtm = document.querySelector(".pannel-bottom");
  let clutter = "";
  for (let i = 0; i <= 188; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNum}</div>`;
  }
  pbtm.innerHTML = clutter;
}
function getTimer() {
  let timer = 60;
  let initTimer = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector(".timer").innerText = timer;
    } else {
      clearInterval(initTimer);
      document.querySelector('.pannel-bottom').innerHTML = "<h2>Game Over!</h2>"; // Stops the game
    }
  }, 1000);
}
function scoreBox(){
  score += 10; 
  document.querySelector('.score-box').innerText = score
}
function hit(){
  rn = Math.floor(Math.random()*10)
  document.querySelector('.hit-btn').innerText = rn
}
function tapButton() {
  document.querySelector('.pannel-bottom').addEventListener('click', (dets) => {
    compBtn = Number(dets.target.innerText); // Corrected
    if (compBtn === rn) {
      scoreBox();
      hit(); // Update new hit value after correct selection
      makebubble(); // Refresh bubbles after a correct click
    }
  });
}

getTimer();
hit();
makebubble();
tapButton();