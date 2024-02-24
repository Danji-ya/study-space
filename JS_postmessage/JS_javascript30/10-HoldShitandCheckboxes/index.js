const root = document.querySelector('#root');
root.innerHTML = `
    <div class="item">
        <input type="checkbox">
        <p>This is an inbox layout.</p>
    </div>
    <div class="item">
        <input type="checkbox">
        <p>Check one item</p>
    </div>
    <div class="item">
        <input type="checkbox">
        <p>Hold down your Shift key</p>
    </div>
    <div class="item">
        <input type="checkbox">
        <p>Check a lower item</p>
    </div>
    <div class="item">
        <input type="checkbox">
        <p>Everything in between should also be set to checked</p>
    </div>
    <div class="item">
        <input type="checkbox">
        <p>Try to do it without any libraries</p>
    </div>
    <div class="item">
        <input type="checkbox">
        <p>Just regular JavaScript</p>
    </div>
    <div class="item">
        <input type="checkbox">
        <p>Good Luck!</p>
    </div>
    <div class="item">
        <input type="checkbox">
        <p>Don't forget to tweet your result!</p>
    </div>
`;


window.addEventListener("DOMContentLoaded", () => {

    const checkboxes = document.querySelectorAll("input[type=checkbox]");

    let lastCheckedItem = undefined;
    
    [...checkboxes].map(checkbox => checkbox.addEventListener("click", e => {
        let isStart = false;

        if(e.shiftKey && e.target.checked) {
            
            if(!lastCheckedItem) return;
        
            [...checkboxes].map(checkbox => {
                if(checkbox === lastCheckedItem || checkbox === e.target) {
                    isStart = !isStart;
                }

                if(isStart) checkbox.checked = true;
            });
        }

        lastCheckedItem = e.target;
    }));
});

