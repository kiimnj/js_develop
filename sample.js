// let name = "홍길동";
// let score = 90;

// let student = { //shorthand
//     name,
//     score
// }

// let name1 = student.name;
// let score1 = student.score;

// console.log(student);



let student = {
    name : "홍길동",
    score : 90
}

let {name, score} = student; //destructuring == 파이썬 언패킹

console.log(name, ", ", score);


let student1 = {...student};
let student2 = student;
console.log("student == student1 ?", (student == student1)); //false
console.log("student == student2 ?", (student == student2)); //true


// let student3 = {...student, address:"주소"};
let student3 = {...student, address:"주소", name:"김연아"};
console.log("student = ", student.name);
console.log("student3 = ", student3.name);
console.log("student3 = ", student3.address);




let array = [1,2,3,4,5];

let [a, b, ...rest] = array;

console.log(a+b);
console.log(rest); //[ 3, 4, 5 ] - spread : 배열 및 객체를 일부 복사

let arr1 = [1, 2];
let arr2 = [3, 4];
// let arr3 = arr1.concat(arr2);
let arr3 = [...arr1, ...arr2]; //spread 문법
console.log(arr3);


let arr4 = [...arr3];
console.log("arr3 == arr4 ? " + (arr3 == arr4)); //다른 객체 - 깊은 복사

let arr5 = arr3;
console.log("arr3 == arr5 ? " + (arr3 == arr5)); //같은 객체 - 얕은 복사 (주소만 복사)

let arr6 = [...arr3, 5]; //[ 1, 2, 3, 4, 5 ]
// let arr6 = [arr3, 5]; //[ [ 1, 2, 3, 4 ], 5 ]
console.log(arr6);