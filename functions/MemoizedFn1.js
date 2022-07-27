let memoizedAdd = n => {
    let cache = {};
    return n => {


        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        } else {
            console.log('Calculating Result');
            let result = n + 10
            cache[n] = result
            return result
        }
    }
}

let add = memoizedAdd();
add(10);
add(10);
add(10);