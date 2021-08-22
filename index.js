let btns = document.querySelectorAll('button');
// let j = new Audio("sounds/crash.mp3")

let crashSound = new Audio("sounds/crash.mp3")
let kickBassSound = new Audio("sounds/kick-bass")
let snareSound = new Audio("sounds/snare.mp3")
let tom1Sound = new Audio("sounds/tom-1.mp3")
let tom2Sound = new Audio("sounds/tom-2.mp3")
let tom3Sound = new Audio("sounds/tom-3.mp3")
let tom4Sound = new Audio("sounds/tom-4.mp3")

for (i of btns) {
  i.addEventListener('click', function() {
    console.log(this);
    this.classList.toggle("whiteColor");
    // let soundLetter = this.textContent;
    
    
    
    
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