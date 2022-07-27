let cache = {};
let memoizedAdd = n => {
    if(n in cache) {
        console.log('Fetching from cache');
        return cache[n];
    } else {
        console.log('Calculating Result');
        let result = n+10
        cache[n] = result
        return result
    }
}

let add1 = memoizedAdd(10);
console.log(add1);
let add2 = memoizedAdd(10);
console.log(add2);