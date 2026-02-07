// Count how many times a string has the letter a or A
let name = "kAmlAuddin form aapnacollege And programming hero";

let a = 0;

for (let i of name) {
    if (i.toLowerCase() === "a") {
        a++;
    }

}
console.log(a);

