// let phone = document.getElementById('phone') as HTMLInputElement;
let phone = <HTMLInputElement> document.getElementById('phone');
// HTMLElement 
phone.value 
// There is no type conversion happening under the hood