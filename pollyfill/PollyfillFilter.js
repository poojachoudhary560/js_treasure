[2,3,4,5].filter(i => i%2 === 0)

Array.prototype.filter1 = function(fn) {
    let newArr = []
    for(let i of this) {
        let result = fn(i);
        if(result) {
            newArr.push(i)
        }
    }
    return newArr;
}

let y6 = [2,3,4,65,78]
y6.filter1(i => i%2===0) // [2, 4, 78]