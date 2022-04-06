function solution(N, K){
  const list = Array.from({length: N}, (_v,i) => i+1);

  function combination(arr, l) {
    const result = [];

    if(l === 1) return arr.map(el => [el]);


    arr.forEach((el, index, ori) => {
      const restArr = ori.slice(index+1);
      const combinations = combination(restArr, l-1);
      const resultCombination = combinations.map(combination => [el, ...combination]);


      console.log(el, resultCombination)

      result.push(...resultCombination);
    });

    return result;
  }


  console.log(combination(list, K));
}





const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = null;
let K = null;

rl.on("line", function (x) {
  
  [N, K] = x.split(' ').map(el => +el);
  rl.close();
}).on("close", function () {
  solution(N, K);
  process.exit();
})