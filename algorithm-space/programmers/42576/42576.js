function solution(participant, completion) {
    // key, value로 객체화
    const objList = participant.reduce((acc, name) => {
        acc[name] = acc[name] ? (acc[name] += 1) : 1;
        return acc;
    }, {});

    completion.map(name => {
        if (objList[name]) objList[name] -= 1;
    });

    return Object.keys(objList).filter(name => objList[name] !== 0)[0];
}
