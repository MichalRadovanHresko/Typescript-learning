"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTax(income, taxYear = 2020) {
    if (taxYear < 50_000)
        return income * 1.5;
    return income * 2;
}
calculateTax(10_000, 2026);
//# sourceMappingURL=functions.js.map