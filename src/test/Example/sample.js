"use strict";
function js_isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function js_printPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (js_isPrime(i)) {
            console.log(i);
        }
    }
}
const js_limit = 100; // limit number
js_printPrimes(js_limit);
/*
    素数列挙プログラム for TS
    トランスコンパイル後
*/ 
