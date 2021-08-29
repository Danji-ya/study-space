(function(){

    const typingText = (function(){
        const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");

        const textArr = ["Press Your Key..."];
    
        const typingDelay = 200;
        const erasingDelay = 100;
        const endingDelay = 1000;
    
        let textArrIdx = 0;
        let charIdx = 0;

        return {
            typing: function(){
                if(charIdx < textArr[textArrIdx].length){
                    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
                    typedTextSpan.textContent += textArr[textArrIdx].charAt(charIdx);

                    charIdx++;
                    setTimeout(typingText.typing, typingDelay);
        
                } else {
                    // console.log('typing End...');
                    cursorSpan.classList.remove('typing');

                    // start erasing
                    setTimeout(typingText.erasing, endingDelay);
                }
        
            },
            erasing() {
                if(charIdx > 0) {
                    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
                    typedTextSpan.textContent = textArr[textArrIdx].substring(0, charIdx-1);

                    charIdx--;
                    setTimeout(typingText.erasing, erasingDelay);
                } else {
                    // console.log('erasing End..');
                    cursorSpan.classList.remove('typing');

                    // restart
                    setTimeout(typingText.typing, endingDelay);
                }
            }
        }
    })();


    const checkKey = (function(){
        const myArr = [];
        const secretCode = 'wesbos';

        return function(e){
            myArr.push(e.key);
            
            myArr.splice(-(secretCode.length + 1), myArr.length - secretCode.length);
            if(myArr.join('').includes(secretCode)) {
                cornify_add();
            }
        }
    })();


    window.addEventListener("DOMContentLoaded", function() {
        setTimeout(typingText.typing, 5);
    });

    window.addEventListener("keyup", checkKey);
})();

console.log("%c secretCode: wesbos", "color: red; font-family:sans-serif; font-size: 100px");


