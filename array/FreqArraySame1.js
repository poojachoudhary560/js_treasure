 // freq array and array sq is same using inbuilt functions

 function frqArrSame(ar1, ar2) {
    if(ar1.length !== ar2.length) {
        return false;
    }

    for(let i=0; i<ar1.length; i++) {
        let doesSqExist = ar2.indexOf(ar1[i] ** 2);
        console.log(doesSqExist);
        if(doesSqExist === -1) {
            return false;
        }
        ar2.splice(doesSqExist, 1);
    }
    return true;
}

frqArrSame([2,3,4,5], [25,9,16,4]); 