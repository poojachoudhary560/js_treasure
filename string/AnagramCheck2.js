// 'aaaaa' 'aaa'
// 'apple' 'paple'
function isAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    let str1Obj = {};
    let str2Obj = {};

    for(let el of str1) {
        str1Obj[el] = ( str1Obj[el] || 0 ) + 1;
    }

    for(let el of str2) {
        str2Obj[el] = ( str2Obj[el] || 0 ) + 1;
    }

    console.log(str1Obj);
    console.log(str2Obj);

    for(let key in str1Obj) {
        if(str1Obj[key] !== str2Obj[key]) {
            return false;
        }
    }
    return true;
}

isAnagram('mangot', 'tangom');
isAnagram('mangot', 'tangot');