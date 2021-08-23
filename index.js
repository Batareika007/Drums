let btns = document.querySelectorAll('button');

for (i of btns) {
  i.addEventListener('click', function () {
    let buttonKey = this.innerHTML;
    console.log(buttonKey);
    this.classList.toggle("whiteColor");
    // let soundLetter = this.textContent;

    switch (buttonKey) {
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
        let kickBassSound = new Audio("sounds/kick-bass");
        kickBassSound.play();
        break;
      default:
    }



    // console.log(soundLetter);
  });
}


// tom1Sound.play();
// document.getElementById("crashSound").play();
// if (soundLetter == "j"){
//   crashSound.currentTime = 0;
//   crashSound.play();
// }
// document.getElementsByClassName("w").play();