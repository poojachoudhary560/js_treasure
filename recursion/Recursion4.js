// Helper method recursion - collect odds in array

function collectOddsInArr(arr) {
    let results = [];

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0) {
            results.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return results;
}

collectOddsInArr([2,1,66,7,91,93,22])