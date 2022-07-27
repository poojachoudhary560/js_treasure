var ar = [1,2,3,4,5]
let res1 = ar.reduce((a,b) => Math.max(a,b), 8);
console.log(res1);
let res2 = ar.reduce((a,b) => a+b, 8);
console.log(res2);

let maxNo = (a,b) => Math.max(a,b);

Array.prototype.myRed = function(redFn, acc) {
    let reducedVal = acc;
    if(!acc && this.length>0){
        reducedVal = this[0]
    }
    if(!acc && this.length===0){
        throw new Error('Reduce an empty array');
    }
    console.log(this);
    for(let i of this) {
        console.log(i);
        reducedVal = redFn(reducedVal, i);
        console.log(reducedVal);
    }
    return reducedVal;
}

// [].myRed(maxNo, 88);
