// function doubleIt(num){
//     return num * 2;
// }rytu

// const doubleIt= function myFun(num){
//     return num * 2;
// }
// new line 
const doubleIt = num=> num *2;
const add = (x, y) => x+y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(5, 4);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);