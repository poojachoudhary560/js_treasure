// string character count
function characterCount(str) {
    var result = {};
    for(let i of str) {
        let char = i.toLowerCase();
        if(result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}

characterCount('IamthebeatpersonIhaveevermet');