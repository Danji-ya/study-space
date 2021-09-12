const navLists = document.querySelectorAll(".cool > li > div");


function handleEnter() {
    this.classList.add('trigger-enter');

    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
}


[...navLists].map(list => list.addEventListener("mouseenter", handleEnter));
[...navLists].map(list => list.addEventListener("mouseleave", handleLeave));



