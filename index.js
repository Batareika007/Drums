let btns = document.querySelectorAll('button');

// detect button clicks via mouse 

for (i of btns) {
  i.addEventListener('click', function () {
    var buttonClicked = this.innerHTML;

    document.querySelector("." + buttonClicked).classList.toggle("whiteColor");
    soundsEffects(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}


// detect keypress by keyboard

document.addEventListener('keydown', function (event) {
  var keyPrest = event.key;
  document.querySelector("." + keyPrest).classList.toggle("whiteColor");
  soundsEffects(keyPrest);
  buttonAnimation(keyPrest);

})

// function for play music

function soundsEffects(targetKey) {
  switch (targetKey) {
    case "w":
      let tom1Sound = new Audio("sounds/tom-1.mp3");
      tom1Sound.play();
      break;

    case "a":
      let tom2Sound = new Audio("sounds/tom-2.mp3");
      tom2Sound.play();
      break;

    case "s":
      let tom3Sound = new Audio("sounds/tom-3.mp3");
      tom3Sound.play();
      break;

    case "d":
      let tom4Sound = new Audio("sounds/tom-4.mp3");
      tom4Sound.play();
      break;

    case "j":
      let snareSound = new Audio("sounds/snare.mp3");
      snareSound.play();
      break;

    case "k":
      let crashSound = new Audio("sounds/crash.mp3");
      crashSound.play();
      break;

    case "l":
      let kickBassSound = new Audio("sounds/kick-bass.mp3");
      kickBassSound.play();
      break;
    default:
      console.log(targetKey);
  }


}


//  animation effect 
function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  // remove style after 100ms
  setTimeout(function(){document.querySelector("." + currentKey).classList.remove("pressed");
  },100);
}