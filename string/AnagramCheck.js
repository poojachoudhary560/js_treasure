// 'aaaaa' 'aaa'
// 'apple' 'paple'
function isAnagram(str1, str2) {
    let str1Obj = {};
    if(str1.length !== str2.length) {
        return false;
    }

    for(let i=0; i<str1.length; i++) {
        str1Obj[str1[i]] ? str1Obj[str1[i]] += 1 : str1Obj[str1[i]] = 1;
    }

    console.log(str1Obj);

    for(let i=0; i<str2.length; i++) {
        let el = str2[i];

        // can't find letter or if letter is zero
        if(!str1Obj[el]) {
            return false;
        } else {
            str1Obj[el] -= 1;
        }
    }
    return true;
}

isAnagram('apple', 'paple');