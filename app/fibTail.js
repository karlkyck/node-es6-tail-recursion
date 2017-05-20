"use strict";

const now = require("performance-now");

const fib = n => {
    const fibTail = (n, a, b) => {
        if (n === 0)
            return a;
        else
            return fibTail(n - 1, b, (a + b));
    };
    return fibTail(n, 0, 1);
};

const n = process.argv[2];
const startTime = now();
const result = fib(n);
const endTime = now();
console.log("Result: " + result + ".\nTook " + (endTime - startTime) + " millis");