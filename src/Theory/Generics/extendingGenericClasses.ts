interface Product {
    name: string,
    price: number
}

class Store<T> {
    private _object: T[] = [];

    add(obj: T): void {
        this._object.push(obj);
    }
}

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() {}
}
let store = new CompressibleStore<Product>();
// store.object = [];
store.compress()