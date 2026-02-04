"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let speed = null;
let ride = {
    // Falsy (undefined, null, '', false, 0)
    // speed: speed !== null ? speed :  30;
    // Nulish Coalescing Operator
    speed: speed ?? 30,
};
console.log(ride);
//# sourceMappingURL=nullishCoaelscingOperator.js.map