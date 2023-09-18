(function(){
    const bandList = document.querySelector(".bands");
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];  

    const exceptArticle = (word) => {
        const regEx = /^(the |a |an )/i;
        return word.replace(regEx, "");
    }

    bandList.innerHTML = bands
                            .sort((a, b) => exceptArticle(a) > exceptArticle(b) ? 1 : -1)
                            .map(band => `<li>${band}</li>`)
                            .join("");
})();
