function solution(clothes) {
    let combinations = 1;
    let closet = new Map();
    clothes.map(cloth => {

        if (!closet.has(cloth[1])) closet.set(cloth[1], 1);
        else closet.set(cloth[1], closet.get(cloth[1]) + 1);
    });

    console.log(...closet);

    [...closet].map(curCloth => {
        combinations *= (curCloth[1] + 1);
    });

    // 종류가 하나일 때
    if (closet.size === 1) return [...closet][0][1];


    return combinations - 1;
}