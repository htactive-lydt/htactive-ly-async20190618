let promise = new Promise((resolve, rejects) => {
    setTimeout(() => {
        // resolve("Success");
        rejects(new Error("Can't connect with server"))
    }, 2000);
});

promise.then((msg) => console.log("Executed " + msg), (err) => console.log("Have " + err))


let add = (a, b) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return rejects(new Error("Argument must be number"));
            }
            return resolve(a + b)
        }, 1000)
    })
}

add("4", 9)
    .then((result) => console.log("Result: " + result), (err) => console.log("Have " + err))

// Use promise to readFile
let fs = require("fs");
let read = (fileName) => {
    return new Promise((resolve, rejects) => {
        fs.readFile(fileName, "utf8", (err, result) => {
            if (err) {
                return rejects(err)
            }
            return resolve(result)
        });
    })
}

read("text.txt").then(data => console.log("Data: " + data), err => console.log("Have: " + err))

// Promise liên tiếp

let mutiply = (a, b) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return rejects(new Error("Argument must be number"));
            }
            return resolve(a * b)
        }, 1000)
    })
}

let devide = (a, b) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return rejects(new Error("Argument must be number"));
            }
            if (b == 0) {
                return rejects(new Error("Can't devide 0"));
            }
            return resolve(a / b)
        }, 1000)
    })
}

let square3 = (a, b, h) => {
    return add(a, b)
        .then(res => mutiply(res, h))
        .then(res => devide(res, 2))
}

square3(4, 5, 4).then(res =>
    console.log("Result: " + res)).catch(err => console.log("Have: " + err))

// All, race

Promise.all([add(4, "5"), mutiply(3, 5)])
    .then(res => console.log(res),
        err => console.log(err + '')
    )

Promise.race([add(4, 4), mutiply(3, 5)])
    .then(res => console.log(res),
        err => console.log(err + '')
    )
    // Khác với all, race sẽ trả về kết quả đc trả về đầu tiên