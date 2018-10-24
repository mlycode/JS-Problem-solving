function linearSearch(arr, num) {
    let index = 0;
    for (let val of arr) {
        if (val === num) {
            return index;
        } else {
            index++;
        }
    }
    return -1;
}