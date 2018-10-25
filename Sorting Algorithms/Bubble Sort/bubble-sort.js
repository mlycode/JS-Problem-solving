function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = arr.length -1; i >= 0; i--) {
        let noSwaps = true;
        for (j = 0; j < i; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }

    return arr;
}