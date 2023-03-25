let $headerTimer = document.querySelector("#header-timer");
let $headerResult = document.querySelector("#header-result");
let $time = document.querySelector("#time");
let $result = document.querySelector("#result");
let $start = document.querySelector("#start");
let $gameField = document.querySelector("#game-field");
let $gameTime = document.querySelector("#game-time");

let result = 0;

$start.addEventListener("click", startGame);
function startGame() {
  $gameTime.setAttribute("disabled", true);
  $start.classList.add("hide");
  $gameField.style.backgroundColor = "grey";
  $time.textContent = $gameTime.value;
  timer();
  // $headerTimer.classList.add('hide')
}

function timer() {
  console.log("start");
//   $time.addEventListener("click", function () {});
let interval = setInterval(function(){
    console.log('hello');
    $time.textContent = (Number($time.textContent) - 0.1).toFixed(2)
    if($time.textContent <= 0){
        clearInterval(interval)
    }
}, 100)
}
