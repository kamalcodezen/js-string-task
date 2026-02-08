// Capitalize Every first Letter of each word in a String

let name = "Im a junior web devloper";

let newArray = name.split(" ");

let score = []
for (let i of newArray) {
    let firstWord = i[0].toUpperCase() + i.slice(1);
    score.push(firstWord);
}

let finalResult = score.join(" ");
console.log(finalResult);