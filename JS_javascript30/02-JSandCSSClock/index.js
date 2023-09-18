const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];


function Clock(initState) {
    this.state = initState;

    this.setState = function(nextState) {
        this.state = nextState;

        this.render();
    }

    this.render = function() {
        const hour = this.state.getHours();
        const min = this.state.getMinutes();
        const second = this.state.getSeconds();

        const hourDegree = ((hour/12) * 360);
        const minDegree = ((min/60) * 360);
        const secondDegree = ((second/60) * 360);

        hourHand.style.transform = `rotate(${hourDegree}deg)`;
        minHand.style.transform = `rotate(${minDegree}deg)`;
        secondHand.style.transform = `rotate(${secondDegree}deg)`;

        date.innerText  = `${this.state.getFullYear()} - ${("0"+(this.state.getMonth() + 1)).slice(-2)} - ${("0"+(this.state.getDate())).slice(-2)} - ${dayOfWeek[this.state.getDay()]}`;
        time.innerText = `${("0"+hour).slice(-2)} : ${("0"+min).slice(-2)} : ${("0"+second).slice(-2)}`;
    }

    this.render();
}

const myClock = new Clock(new Date());

setInterval(() => myClock.setState(new Date()), 1000);

