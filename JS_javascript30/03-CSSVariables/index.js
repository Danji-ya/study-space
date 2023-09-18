function setValue(e){
    const sizing = e.target.dataset.sizing || '';
    const {name, value} = e.target;

    document.documentElement.style.setProperty(`--${name}`, `${value}${sizing}`);
}


const addListener = (selectors) => {
    const elementList = document.querySelectorAll(selectors);

    [...elementList].map(element => {
        element.addEventListener("input", setValue);
    });
}

addListener('input');
