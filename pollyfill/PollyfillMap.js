let arr = [1,2,3,4];
let sqArr = arr.map(item => item ** 2)
console.log(sqArr);

let fnSq  = item => item ** 2;


Array.prototype.map1 = function(fn) {
    let newArr = [];
    for(let i of this) {
        console.log(i)
        newArr.push(fn(i))
    }
    return newArr;
}

let a2 = [3,4,5]
a2.map1(sqArr);