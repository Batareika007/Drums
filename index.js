

let btns = document.querySelectorAll('button');

for (i of btns) {
  i.addEventListener('click', function() {
    alert("You clicked ->" + this.textContent);
  });
}