function solution(new_id) {
    let answer = '';
    
    const firstStep = (str) => str.toLowerCase();   
    const secondStep = (str) => {
        const regExp = /[^a-z0-9\-_.]/g;
        
        return str.replace(regExp,'');
    }   
    const thirdStep = str => {
        const regExp = /\.{2,}/g;
        
        return str.replace(regExp,'.');
    }
    
    const fourthStep = str => {
        const regExp = /^\.|\.$/g;
        
        return str.replace(regExp,'');
    }
    const fifthStep = str => str.length > 0 ? str : str.concat('a');
    const sixthStep = str => { 
        str = str.slice(0,15);
        return (fourthStep(str));
    };
    const seventhStep = str => {    
        if(str.length <= 2){       
            for(let i=str.length; i<3; i++){
                str+=str[str.length-1];
            }  
        }
        return str;
    }
    
    answer = firstStep(new_id);
    answer = secondStep(answer);
    answer = thirdStep(answer);
    answer = fourthStep(answer);
    answer = fifthStep(answer);
    answer = sixthStep(answer);
    answer = seventhStep(answer);
    
    return answer;
}