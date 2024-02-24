function solution(citations) {

    let maxValue = citations.sort((a, b) => b - a)[0];

    for (let h = maxValue; h >= 0; h--) {

        let moreThanLength = citations.filter(num => num >= h).length;
        if (moreThanLength >= h && citations.length - moreThanLength <= h) return h;

    }

}