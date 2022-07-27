// Memoized Recursive Factorial Fn

let memoizedFn1 = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        console.log('cache', cache);
        if(n in cache) {
            console.log('returning from cache', n);
            return cache[n]
        } else {
            console.log('calculating new', n);
            let res = fn(n);
            cache[n] = res;
            return res;
        }
    }
}

let fact = n => {
    if(n===0) return 1
    return n*fact(n-1); // replace this fact with 
}

let recurisveFn = memoizedFn1(n => {
    if(n===0) return 1
    return n*recurisveFn(n-1);
}
);
recurisveFn(5);
recurisveFn(6);
