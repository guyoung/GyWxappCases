//


function other() {

    console.log("\nother...");

    // Subclassable Built-ins
    class MyArray extends Array {
        constructor(...args) {
            super(...args);
        }
    }

    var arr = new MyArray();
    arr[1] = 12;
    console.log(arr.length == 2); // 输出: true




    // Tail-call optimization

    'use strict';

    // 计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n)
    function factorial(n) {
        if (n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    console.log(factorial(10)); // 输出: 3628800


    // 改成尾递归调用，只保留一个调用记录，复杂度 O(1)
    function factorial2(n, total = 1) {
        if (n === 1) {
            return total;
        }
        return factorial2(n - 1, n * total);
    }
    console.log(factorial2(10)); // 输出: 3628800


    // fibonacci数列
    function fibonacci(n) {
        if (n <= 1) {
            return 1
        };
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    console.log(fibonacci(10)); // 输出: 89


    // 尾递归优化过的fibonacci数列递归算法
    function fibonacci2(n, ac1 = 1, ac2 = 1) {
        if (n <= 1) {
            return ac2
        };

        return fibonacci2(n - 1, ac2, ac1 + ac2);
    }
    console.log(fibonacci2(10)); // 输出: 89
    console.log(fibonacci2(100)); // 输出: 573147844013817200000
    console.log(fibonacci2(1000)); // 输出: 7.0330367711422765e+208
    console.log(fibonacci2(2000)); // 输出: Infinity

    // console.log(fibonacci2(10000)); // 输出: RangeError: Maximum call stack size exceeded

    // Custom Errors in ES6
    class MyError extends Error {
        constructor(message) {
            super(message);
            this.message = message;
            this.name = 'MyError';
        }
    }
    var error = new Error(" Error occurred");
    console.log(error.message); // 输出: Error occurred
    var myerror = new MyError("Error occurred");
    console.log(myerror.message); // 输出: Error occurred
}

module.exports = other;