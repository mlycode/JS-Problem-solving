function selectionSort(arr) {

    const swap = (arr, idx, idxSmall) => {
        [arr[idx], arr[idxSmall]] = [arr[idxSmall], arr[idx]];
    };

    for (let i = 0; i < arr.length; i++) {
        let noSwap = true;
        let minimumIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minimumIndex]) {
                minimumIndex = j;
                noSwap = false;
            }
        }
        if (i !== minimumIndex) swap(arr, i, minimumIndex);
        if (noSwap) return arr;
    }
    return arr;
}