function sameNaive(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1) //removing matched value from array 2 before continuing loop
    }
    return true;
}

function sameRefactor(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencycounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    } 
    for (let val of arr2) {
        frequencycounter2[val] = (frequencycounter2[val] || 0) +1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencycounter2)) {
            return false;
        } //does the square exist? (the key)
        if (frequencycounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        } // is the frequency correct? (key value match)
    }
    return true;
}

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let characters1 = {};
    let characters2 = {};
    for (const character of str1) {
        characters1[character] = (characters1[character] || 0) + 1;
    }
    for (const character of str2) {
        characters2[character] = (characters2[character] || 0) + 1;
    }
    for (const key in characters1) {
        if (!(key in characters2)) {
            return false;
        } 
        if (characters2[key] !== characters1[key]) {
            return false;
        }
    }
    return true;
}

function validAnagram2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let character = str1[i];
        lookup[character] ? lookup[character] +=1 : lookup[character] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let character = str2[i];
        if (!lookup[character]) {
            return false;
        } else {
            lookup[character] -= 1;
        }
    }
    return true;
}