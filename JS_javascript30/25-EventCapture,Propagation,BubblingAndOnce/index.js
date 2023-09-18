const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
//   e.stopPropagation(); // stop bubbling!
}

[...divs].map(div => div.addEventListener('click', logText, {
  capture: true,
  once: true
}));
