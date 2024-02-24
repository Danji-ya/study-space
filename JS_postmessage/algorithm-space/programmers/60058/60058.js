function solution(p) {
    (p) => {
       let cnt = 0;var answer = '';
   let u,v;
   
   // u, v 분리
   const divideUV =
       let u,v;
       
       for(let i=0; i<p.length; i++){
           p[i] === '(' ? cnt++ : cnt--;
     
           if(cnt === 0){            
               u = p.slice(0,i+1);
               v = p.slice(i+1);
               return [u,v];
           }    
       }
   };
   
   const checkBalence = (u) => {
       let cnt = 0;        
       for(let i=0; i<u.length; i++){
           u[i] === '(' ? cnt++ : cnt--;
           //u가 올바른 괄호문자열이 아닐 때
           if(cnt < 0) return 0;
       }
       return 1;
   };
   
   
   if(p.length ===0) return '';
   
   //2단계
   [u, v] = divideUV(p);
   

   if(checkBalence(u)){
       return u + solution(v);
   } else {
       let makeBalence = '(' + solution(v) + ')';
       answer += makeBalence;

       //첫, 마지막 제거 및 괄호 반대로
       for(let i=1; i<u.length-1; i++){
           answer += u[i] === '(' ? ')' : '(';
       }
       
   }
   
   return answer;
}