(function(){
    const effects = document.querySelectorAll("a");
    const highlighter = document.querySelector(".highlighter");

    function toggleHighlight() {
        const clientRect = this.getBoundingClientRect();

        highlighter.style.width = `${this.offsetWidth}px`;
        highlighter.style.height = `${this.offsetHeight}px`;
        highlighter.style.transform = `translate(${clientRect.left + window.pageXOffset}px, ${clientRect.top + window.pageYOffset}px)`;
    }


    [...effects].map(effect => effect.addEventListener("mouseenter", toggleHighlight));
})();