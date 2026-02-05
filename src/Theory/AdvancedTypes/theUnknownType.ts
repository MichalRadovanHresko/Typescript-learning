function render(document: unknown) {
    // Narrowing
    if (typeof document === 'string')
        document.toUpperCase();
}
// It is prefered to use it instead of any type 

render('yes');