// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let name = "my name is x anX Xoure xtreme eXucusion";

let result = name.replaceAll("x", "y").replaceAll("X", "Y");
console.log(result);
