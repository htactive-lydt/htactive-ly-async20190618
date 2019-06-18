let fs = require("fs");

console.log(fs.readFileSync("text.txt", "utf8")); // readFileSync là tác vụ đồng bộ

console.log("Xinh lắm cơ");


fs.readFile("text.txt", "utf8", (err, result) => {
    if (err) {
        console.log("Error: " + err);
    } else {
        console.log(result);
    }
}); // readFile là tác vụ bất đồng bộ

console.log("Xinh lắm cơ");