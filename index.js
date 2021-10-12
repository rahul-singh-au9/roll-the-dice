var diceNumber = Math.floor(Math.random() * 6) + 1;
var diceImageSource = "/dice" + diceNumber + ".png";
var image = document.querySelectorAll("img")[0];
image.setAttribute("src", diceImageSource);
var Score = 0;

function rollTheDice(UserGuessedNumber) {
  document.querySelector(
    "#selectedNumber"
  ).innerText = `Selected Variable : ${UserGuessedNumber}`;
  startCounting();
  setTimeout(function () {
    diceNumber = Math.floor(Math.random() * 6) + 1;
    diceImageSource = "/dice" + diceNumber + ".png";

    image = document.querySelectorAll("img")[0];
    image.setAttribute("src", diceImageSource);

    if (diceNumber === UserGuessedNumber) {
      document.querySelector("#result").innerHTML = "🚩 Your Guess was right!";
      Score++;
      document.querySelector("#score").innerText = `Score : ${Score}`;
    } else {
      document.querySelector("#result").innerHTML = "Your Guess was wrong!";
      Score--;
      document.querySelector("#score").innerText = `Score : ${Score}`;
    }
  }, 3000);
}

var timer;
var counter = 4;

function startCounting() {
  timer = window.setTimeout("countDown()", 1000);
}

function countDown() {
  counter = counter - 1;
  if (counter == -1) {
    window.clearTimeout(timer);
    counter = 4;
    timer = null;
  } else {
    timer = window.setTimeout("countDown()", 1000);
    document.querySelector(
      "#timer"
    ).innerText = `The dice will change in ${counter} seconds`;
  }
}
