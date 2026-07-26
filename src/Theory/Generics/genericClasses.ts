class KeyValuePairs<K, V>{
    constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePairs<number, string>(1, 'a');