const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const request = async (nodeId = '') => {
    try{
        const blob = await fetch(`${endpoint}/${nodeId}`);

        if(!blob.ok){
            throw new Error("Not 2xx response");
        }

        return await blob.json();
    } catch(e) {
        throw new Error(e);
    }
}

(async () => {
    const response = await request();
    cities.push(...response);
})();

const suggestions = document.querySelector(".suggestions");
const searchInput = document.querySelector(".search");


const observer = (function(){

    let restList = undefined;

    function onObserver(rest) {
        restList = rest;
        let li = document.querySelector("li:last-child");
        const DATA_PER_PAGE = 10;
    
        // IntersectionObserver 생성
        const io = new IntersectionObserver(entry => {

            // 타겟이 교차영역에 보일 시
            if (entry[0].isIntersecting) {

                // 타겟 감시 취소
                io.unobserve(li);
    
                suggestions.innerHTML += restList.slice(0, DATA_PER_PAGE).join('')
                restList.splice(0, DATA_PER_PAGE);

                // 새로운 타겟 지정
                if(restList.length !== 0){
                    li = document.querySelector("li:last-child");
                    io.observe(li);
                }
            }
            }, {
                //options
                threshold: 0.5
        });
    
        // 타겟 지정
        if(restList.length !== 0) io.observe(li);

    }

    return {
        onObserver
    }
})();


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function cityComponent(place, regExp) {
    const keyword = regExp.toString().split('/')[1];
    const cityName = place.city.replace(regExp, `<span class="hl">${keyword}</span>`);
    const stateName = place.state.replace(regExp, `<span class="hl">${keyword}</span>`);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
}

function displayList(cities, regExp) {
    const DATA_PER_PAGE = 15;
    
    const list = cities.map(city => cityComponent(city, regExp));

    suggestions.innerHTML = list.slice(0, DATA_PER_PAGE).join('');

    observer.onObserver(list.slice(DATA_PER_PAGE));
}

function searchTohWord(targetWord, cities) {

    if(targetWord.length > 0){
        const regExp = new RegExp(targetWord, 'gi');  
        const result = cities.filter(place => place.city.match(regExp) || place.state.match(regExp));

        return displayList(result, regExp);
    }
}

searchInput.addEventListener("keyup", (e) => {
    searchTohWord(e.target.value, cities);
});
