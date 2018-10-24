function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let checkIndex = Math.floor((right + left)/2);
    let check = arr[checkIndex];
    while (check !== val && left <= right) {
            if (check < val) left = checkIndex + 1;
            else right = checkIndex - 1;
            checkIndex = Math.floor((right + left)/2);
            check = arr[checkIndex];
    }
    return check === val ? checkIndex : -1;
}