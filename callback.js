let add = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != "number" || typeof b != "number") {
            return callback(new Error("Argument must be number"));
        }
        return callback(undefined, a + b);
    }, 1000);
}

let mutiply = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != "number" || typeof b != "number") {
            return callback(new Error("Argument must be number"));
        }
        return callback(undefined, a * b);
    }, 1000);
}
let devide = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != "number" || typeof b != "number") {
            return callback(new Error("Argument must be number"));
        }
        if (b === 0) return callback(new Error("Can't devide 0"));
        return callback(undefined, a / b);
    }, 1000);
}

// add("Ly", 7, (err, result) => {
//     if (err) {
//         return console.log("Lỗi rồi: " + err);
//     }
//     console.log(result);
// });

// Tính diện tích hình thang
let square = (a, b, h) => (a + b) * h / 2;
console.log(square(4, 6, 7));

// Callback hell
let square2 = (a, b, h, cb) => {
    add(a, b, (err, result) => {
        if (err) {
            return cb(err);
        }
        devide(result, h, (err, result) => {
            if (err) {
                return cb(err);
            }
            mutiply(result, 2, (err, result) => {
                if (err) {
                    return cb(err);
                }
                return cb(undefined, result)
            })
        })
    })
}

square2(4, 5, 0, (err, result) => {
    if (err) {
        return console.log("Lỗi nè: " + err);

    }
    console.log(result);

})