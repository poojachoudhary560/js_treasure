function addUptoNFormula(n) {
    return n * (n+1) / 2;
}


var time1 = performance.now();
addUptoNFormula(10000000000);
var time2 = performance.now();

console.log(`Time elapsed ${(t2 - t1) / 1000} seconds`);
