"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Ahoj!');
}
greet(null); // This will give us error 
// By default typescript is very strict about using null values
//# sourceMappingURL=nullableTypes.js.map