const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let [C, N] = [null, null];
let students = [];
let teachers = [];

rl.on('line', function (line) {
    if(!C) return [C, N] = line.split(' ').map(el => +el);
    if(teachers.length < C) return teachers.push(+line);
    
    students.push(line.split(' ').map(el => +el));
    
    if(students.length === N) rl.close();
}).on('close', function () {
    solution(C, N, teachers, students);
    process.exit();
});
function solution(C, N, teachers, students){
    let answer = 0;
    
    // 선생님들은 가르칠수 있는 시간을 기준으로 오름차순
    teachers.sort((a, b) => a-b);
    
    // 학생들은 끝나는 시간을 기준으로 오름차순
    students.sort((a, b) => a[1] - b[1]);
    
    
    // 현재 선생님이 이 학생을 가르칠 수 있는지 판단한다.
    function isPossibleTeach(startTime, endTime, curTeacher){
        return startTime <= curTeacher && curTeacher <= endTime;
    }
    
    
    for(let i=0; i< teachers.length; i+=1){
        for(let j=0; j< students.length; j+=1){
            if(!isPossibleTeach(students[j][0], students[j][1], teachers[i])) continue;
            
            answer+=1;
            students.splice(j, 1);
            break;
        }
    }
    
    console.log(answer);
}