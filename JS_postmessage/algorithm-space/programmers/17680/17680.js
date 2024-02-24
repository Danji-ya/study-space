function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  const CACHE_MISS = 5;
  const CACHE_HIT = 1;
  const cities_length = cities.length;
  

  function LRU(city){
      if(cache.includes(city)){
          cache.splice(cache.indexOf(city), 1);
          cache.push(city);
          answer += CACHE_HIT;
      } else {
          if(cache.length >= cacheSize) cache.shift();

          cache.push(city);
          answer += CACHE_MISS;
      }
  }
  
  if(cacheSize === 0) answer = cities_length * CACHE_MISS;
  else {
      for(let i=0; i<cities_length; i+=1){
          const city = cities[i].toLowerCase();
          LRU(city);    
      }
  }
  
  return answer;
}