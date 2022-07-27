// collect odds in array - pure recursion

function oddsInArr(arr) {
    let newAr = [];

    if(arr.length === 0) {
        return newAr;
    }

    if(arr[0] % 2 !== 0) {
        newAr.push(arr[0]);
    }
    console.log('-----------', arr, newAr, arr.slice(1));

    newAr = newAr.concat(oddsInArr(arr.slice(1)));
    // console.log(arr, newAr, arr.slice(1));
    
    return newAr;
}

oddsInArr([1,2,3,4,66,7])