// 

function f17_new_built_in_methods() {

    console.log("\nf17:New Built-In Methods");

    // Object
    // Object.prototype.__proto__
    let Shape = function() {};
    let shape1 = new Shape();
    console.log(shape1.__proto__ === Shape.prototype); // 输出: true

    // Object.assign
    let shape2 = { width: 100, height: 200 };
    let shape3 = Object.assign({}, shape2);
    console.log(shape3); // 输出: Object {width: 100, height: 200}

    // Object.is
    console.log(Object.is('Rectangle', 'Rectangle')); // 输出: true
    console.log(Object.is('Rectangle', 'Circle')); // 输出: false

    // Object.setPrototypeOf
    let shapeProto = {};
    let shape4 = { width: 300, height: 400 };
    Object.setPrototypeOf(shape4, shapeProto);
    shapeProto.x = 10;
    shapeProto.y = 20;
    console.log(`shape4 x is ${shape4.x}, y is ${shape4.y}`); // 输出: shape4 x is 10, y is 20

    // Array
    // Array.from
    console.log(Array.from("foo")); // 输出: ["f", "o", "o"]
    console.log(Array.from([1, 2, 3], x => x + x)); // 输出: [2, 4, 6]

    // Array.of
    console.log(Array.of(1)); // 输出: [1]
    console.log(Array.of(1, 2, 3)); // 输出: [1, 2, 3]

    // Array.prototype.copyWidthin
    console.log([1, 2, 3, 4, 5].copyWithin(-2)); // 输出: [1, 2, 3, 1, 2]
    console.log([1, 2, 3, 4, 5].copyWithin(0, 2, 4)); // 输出: [3, 4, 3, 4, 5]

    // Array.prototype.entries()
    let arr1 = ["a", "b", "c"];
    let arrEntr1 = arr1.entries();
    console.log(arrEntr1.next().value); // 输出: [0, "a"]
    console.log(arrEntr1.next().value); // 输出: [1, "b"]
    console.log(arrEntr1.next().value); // 输出: [2, "c"]

    // Array.prototype.fill
    console.log([1, 2, 3].fill(4)); // 输出: [4, 4, 4]
    console.log([1, 2, 3].fill(4, 1, 2)); // 输出: [1, 4, 3]

    // Array.prototype.find
    console.log([4, 9, -25, 36].find((n) => n < 0)); // 输出: -25

    // Array.prototype.findIndex
    console.log([4, 9, -25, 36].findIndex((n) => n < 0)); // 输出: 2

    // Array.prototype.keys()
    let arr2 = ["a", "b", "c"];
    let iter2 = arr2.keys();
    console.log(iter2.next()); // 输出: { value: 0, done: false }
    console.log(iter2.next()); // 输出: { value: 1, done: false }
    console.log(iter2.next()); // 输出: { value: 2, done: false }
    console.log(iter2.next()); // 输出: { value: undefined, done: true }

    // Array.prototype[@@iterator]
    let arr4 = ["a", "b", "c"];
    let iter4 = arr4[Symbol.iterator]();
    console.log(iter4.next().value); // 输出: a
    console.log(iter4.next().value); // 输出: b
    console.log(iter4.next().value); // 输出: c


    // String
    // String.fromCodePoint
    console.log(String.fromCodePoint(42)); // 输出: *
    console.log(String.fromCodePoint(65, 90)); // 输出: AZ

    //  String.raw
    console.log(String.raw `Hi\n!`); // 输出: Hi\n!
    let str1 = "Zhang san";
    console.log(String.raw `Hi\n${str1}!`); // 输出: Hi\nZhang san!

    // String.prototype.codePointAt
    console.log('ABC'.codePointAt(0)); // 输出: 65
    console.log('ABC'.codePointAt(1)); // 输出: 66

    let str2 = `To be, or not to be, that is the question.`;

    // String.prototype.endsWith    
    console.log(str2.endsWith("question.")); // 输出: true
    console.log(str2.endsWith("to be")); // 输出: false

    // String.prototype.includes
    console.log(str2.includes("question")); // 输出: true
    console.log(str2.includes("To be", 2)); // 输出: false

    // String.prototype.repeat
    console.log("abc".repeat(3)); // 输出: abcabcabc

    // String.prototype.startsWith
    console.log(str2.startsWith("To be")); // 输出: true
    console.log(str2.startsWith("not to be")); // 输出: false
    console.log(str2.startsWith("not to be", 10)); // 输出: true

    // String.prototype[@@iterator]
    let str3 = 'A\uD835\uDC68';
    let strIter3 = str3[Symbol.iterator]();
    console.log(strIter3.next().value); // 输出: A
    console.log(strIter3.next().value); // 输出: 𝑨

    // Number
    // Number.EPSILON
    console.log(Number.EPSILON); // 输出: 2.220446049250313e-16
    console.log(0.1 + 0.2 === 0.3); // 输出: false
    console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // 输出: true

    // Number.isFinite
    console.log(Number.isFinite(2e64)); // 输出: true
    console.log(Number.isFinite(NaN)); // 输出: false

    // Number.isInteger
    console.log(Number.isInteger(0)); // 输出: true
    console.log(Number.isInteger(0.1)); // 输出: false

    // Number.isNaN
    console.log(Number.isNaN(0 / 0)); // 输出: true
    console.log(Number.isNaN(0.1)); // 输出: false

    // Number.isSafeInteger
    console.log(Number.isSafeInteger(3)); // 输出: true
    console.log(Number.isSafeInteger(Math.pow(2, 53))); // 输出: false
    console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); // 输出: true


    // Math
    // Math.acosh
    console.log(Math.acosh(1)); // 输出: 0
    console.log(Math.acosh(2)); // 输出: 1.3169578969248166

    // Math.asinh
    console.log(Math.asinh(1)); // 输出: 0.8813735870195429
    console.log(Math.asinh(0)); // 输出: 0

    // Math.atanh
    console.log(Math.atanh(0)); // 输出: 0
    console.log(Math.atanh(0.5)); // 输出: 0.5493061443340548

    // Math.cbrt
    console.log(Math.cbrt(27)); // 输出: 3
    console.log(Math.cbrt(64)); // 输出: 4

    // Math.cosh
    console.log(Math.cosh(0)); // 输出: 1
    console.log(Math.cosh(1)); // 输出: 1.5430806348152437

    // Math.sign
    console.log(Math.sign(7)); // 输出: 1
    console.log(Math.sign(0)); // 输出: 0
    console.log(Math.sign(-7)); // 输出: -1

    // Math.sinh
    console.log(Math.sinh(0)); // 输出: 0
    console.log(Math.sinh(1)); // 输出: 1.1752011936438014

    // Math.tanh
    console.log(Math.tanh(0)); // 输出: 0
    console.log(Math.tanh(1)); // 输出: 0.7615941559557649

    // Math.trunc
    console.log(Math.trunc(13.37)); // 输出: 13
    console.log(Math.trunc(0.123)); // 输出: 0



    // Array.prototype.values()
    // arr3.values is not a function Page pages/index/index catch error in lifeCycleMethod onLoad function
    // TypeError: arr3.values is not a function
    /*
    let arr3 = ["a", "b", "c"];
    let iter3 = arr3.values();
    console.log(iter3.next());
    console.log(iter3.next());
    console.log(iter3.next());
    console.log(iter3.next());
    */

}

module.exports = f17_new_built_in_methods;