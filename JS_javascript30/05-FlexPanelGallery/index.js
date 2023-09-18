const panels = document.querySelectorAll('.panels .panel');

const siblings = (curElement) => [...curElement.parentNode.children].filter(element => element !== curElement);

const classToggle = (element, className) => element.classList.toggle(className);

const stretchArea = (e) => {
    siblings(e.currentTarget).map(sibling => sibling.classList.remove("active", "open"));

    classToggle(e.currentTarget, "open");
    classToggle(e.currentTarget, "active");
}

[...panels].map(panel => panel.addEventListener("click", stretchArea));
