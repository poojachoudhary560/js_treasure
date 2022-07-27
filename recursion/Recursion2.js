function sumRange(num) {
    if(num === 1) {
        return 1;
    }
    return num + sumRange(num-1);
}

let a = sumRange(3);
console.log(a);