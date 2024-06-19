
//객체야 안녕?

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "pete";
delete user.name; // undefined

//객체가 비어있는지 확인하기

function isEmpty(obj)
{
    for(key in obj)
        return false;
    return true;
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

//변하지 않는 객체?

// const user = {
//     name: "John"
// };
//   // 아래 코드는 에러 없이 실행될까요? : 객체의 내용을 변경하는건 가능하다
//     user.name = "Pete";

//프로퍼티 합계 구하기

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for(key in salaries)
    sum += salaries[key]; //390


//프로퍼티 값 두 배로 부풀리기

// 함수 호출 전
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') 
            obj[key] *= 2;
    }
}

multiplyNumeric(menu);

// 함수 호출 후
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};