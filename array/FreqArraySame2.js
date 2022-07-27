 // freq array and array sq is same 

// [2,3,4,5,6,7] [4,9,90,80,60,50,40,10,88,49]
function freqArraySame(inputArr, squareArr) {
    // if(inputArr.length !== squareArr.length) return false;
    let lengthCheck = inputArr.length > squareArr.length ? inputArr.length : squareArr.length;
    let inputArrSqCount = {};
    let squareArrCount = {};
    for(let i=0; i<lengthCheck; i++) {
        let itemSq = inputArr[i] ** 2;
        inputArrSqCount[itemSq] = ++inputArrSqCount[itemSq] || 1;
        squareArrCount[squareArr[i]] = ++squareArrCount[squareArr[i]] || 1;
    }
    if(inputArrSqCount[NaN]) delete inputArrSqCount[NaN]
    console.log('inputArrSqCount ', inputArrSqCount);
    console.log('squareArrCount ', squareArrCount);

    for(let key of Object.keys(inputArrSqCount)) {
        if(squareArrCount[key]) {
            if(inputArrSqCount[key] !== squareArrCount[key]) {
                return false
            }
        } else {
            return false
        }
    }
    return true;
}

freqArraySame([2,3,7], [4,9,90,80,60,50,40,10,88,49]);

