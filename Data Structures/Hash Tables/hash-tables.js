class HashTable {
    constructor (size = 4) {
        this.keyMap = new Array(size);
    }
    
    _hash(key) {
        let total = 0;
        const primeNumber = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * primeNumber + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return;
    }
    keys() {
        let keysArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
                let key = this.keyMap[i][j][0];
                keysArray.push(key);
            }
        }
        return keysArray;
    }
    values() {
        let valuesArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    let value = this.keyMap[i][j][1];
                    if (!valuesArray.includes(value)) valuesArray.push(value);
                }
            }
        }
        return valuesArray;
    }
}

let ht = new HashTable();
ht.set("hello","goodbye");
ht.set("slow","fast");
ht.set("happy","sad");
ht.set("fun","boring");
ht.set("loud","quiet");
ht.set("tasty","nasty");
ht.set("skinny","fat");
ht.set("pettite","fat");
ht.set("thin","fat");