//

function topic02() {

    console.log("\ntopic02...");

    // Subclassable Built-ins
    class MyArray extends Array {
        constructor(...args) {
            super(...args);
        }
    }

    var arr = new MyArray();
    arr[1] = 12;
    console.log(arr.length == 2); // 输出: true


    // mixin
    const Serializable = Sup => class extends Sup {
        constructor(...args) {
            super(...args);
            if (typeof this.constructor.stringify !== "function") {
                throw new ReferenceError("Please define stringify method to the Class!");
            }
            if (typeof this.constructor.parse !== "function") {
                throw new ReferenceError("Please define parse method to the Class!");
            }
        }
        toString() {
            return this.constructor.stringify(this);
        }
    }

    class Person {
        constructor(name, age, gender) {
            Object.assign(this, { name, age, gender });
        }
    }

    class Employee extends Serializable(Person) {
        constructor(name, age, gender, level, salary) {
            super(name, age, gender);
            this.level = level;
            this.salary = salary;
        }
        static stringify(employee) {
            let { name, age, gender, level, salary } = employee;
            return JSON.stringify({ name, age, gender, level, salary });
        }
        static parse(str) {
            let { name, age, gender, level, salary } = JSON.parse(str);
            return new Employee(name, age, gender, level, salary);
        }
    }

    let person = new Person("john", 22, "m");
    console.log(person); // 输出：Person {name: "john", age: 22, gender: "m"}
    let employee = new Employee("jane", 25, "f", 1, 1000);
    let employee2 = Employee.parse(employee + "");
    console.log(employee2); // 输出：Employee {name: "jane", age: 25, gender: "f", level: 1, salary: 1000}
    console.log(employee2 instanceof Employee); // 输出：true 
    console.log(employee2 instanceof Person); // 输出：true
    console.log(employee == employee2); // 输出：false


    // Private instance members with weakmaps
    var Shape = (function() {
        var privateData = new WeakMap();

        function Shape(name) {
            privateData.set(this, { name: name });
        }

        Shape.prototype.getName = function() {
            return privateData.get(this).name;
        };

        return Shape;
    }());

    var shape = new Shape('Rectangle');
    console.log(shape.getName()); // 输出：Rectangle
    console.log(shape.name); // 输出：undefined
    console.log(shape.privateData); // 输出：undefined

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

module.exports = topic02;