// arr and arr sq has same frq

function frqArr(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    let frqCounter1 = {};
    let frqCounter2 = {};

    for(let val of arr1) {
        frqCounter1[val] = (frqCounter1[val] || 0) + 1;
    }

    for(let val of arr2) {
        frqCounter2[val] = (frqCounter2[val] || 0) + 1;
    }

    for(let key in frqCounter1) {
        if(!(key ** 2 in frqCounter2)) {
            return false;
        }

        if(frqCounter2[key ** 2] !== frqCounter1[key]) {
            return false;
        }
    }
    return true;
}

frqArr([2,3,4,5], [25,16,9,4])