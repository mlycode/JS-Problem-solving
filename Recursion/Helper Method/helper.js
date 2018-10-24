function collectOddValues(arr) {
    
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1)) //shrinks the array being evaluated
    }

    helper(arr);

    return result;
}

function collectOddValuesRecursive(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValuesRecursive(arr.slice(1)));
    return newArr;
}