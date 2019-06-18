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

// let addP = async() => {
//     let res = await add(4, 5);
//     console.log(res)
// }

// addP();

// let res = await addPr(4, 5); // Await chỉ đi vs async function

let square = async(a, b, h, cb) => {
    try {
        let ab = await add(a, b);
        let abh = await mutiply(ab, h);
        let square = await devide(abh, 2);
        cb(undefined, square);
    } catch (error) {
        cb(error)
    }
}
square(4, "5", 2, (err, result) => {
    if (err) {
        return console.log(err + "")
    }
    return console.log(result);

});

// Async return promise
let square2 = async(a, b, h) => {
    try {
        let ab = await add(a, b);
        let abh = await mutiply(ab, h);
        let square = await devide(abh, 2);
        return Promise.resolve(square)
    } catch (error) {
        return Promise.reject(error)
    }
}
square2(4, "5", 2)
    .then(res => console.log("Result: " + res))
    .catch(err => console.log("Have " + err))