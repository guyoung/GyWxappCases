//

function topic02() {

    console.log("\ntopic02...");

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
}

module.exports = topic02;