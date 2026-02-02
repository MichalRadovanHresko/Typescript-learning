function calculateTax(income: number, taxYear = 2020): number { // or void if you dont want to return anything
    if (taxYear < 50_000) 
        return income * 1.5;
    return income * 2;
}

calculateTax(10_000, 2026);