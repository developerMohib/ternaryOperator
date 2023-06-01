

let number = Number(prompt(`Enter your Number`));

let result = number > 0 ? `positive` : number < 0 ? `negative` : `zero` ;

document.write(`The Number is ${number} ---- ` + result)