// function echo<T extends number | string>(value: T):T {
//     return value;
// }
function echo<T extends { name: string}> (value: T) {
    return value;
}

echo({ name: 'a'});