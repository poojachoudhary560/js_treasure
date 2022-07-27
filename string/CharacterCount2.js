// string character count
function characterCount(str) {
    let result = {};
    for(var i=0; i<str.length; i++) {
        var char = str[i].toLowerCase();
        if(/[a-z1-9]/.test(char)) {
            if(result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}

characterCount('12qwqw*i9i9');