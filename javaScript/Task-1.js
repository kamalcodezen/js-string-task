// Count how many times a string has the letter a

let name = "kamlauddin Aapnaollege";
let letter = 0;
for (let i of name) {
    if (i.toLowerCase() === "a") {
        letter++;
    }
}
console.log(letter);
