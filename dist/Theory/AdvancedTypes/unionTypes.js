"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(25));
console.log(kgToLbs('25kg'));
//# sourceMappingURL=unionTypes.js.map