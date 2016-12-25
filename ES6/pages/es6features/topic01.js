//

function topic01() {

    console.log("\ntopic01...");

    // IIFE
    (function() {
        var food = 'Meow Mix';
    }());
    // console.log(food); // 输出：ReferenceError: food is not defined

    // ES6块级作用域
    {
        let food = 'Meow Mix';
    }
    // console.log(food); // 输出：ReferenceError: food is not defined

    // for...of（数组）
    const arr1 = ['red', 'green', 'blue'];
    for (let s of arr1) {
        console.log(s); // 输出：red green blue
    }

    // for...of（Set）
    var set = new Set(['red', 'green', 'blue', 'green']);
    for (var s of set) {
        console.log(s); // 输出：red green blue
    }

    // for...of
    let names1 = ['zhao', 'qian', 'sun', 'li'];
    for (let name of names1) {
        console.log(name); // 输出：zhao qian sun li
    }

    // for...in
    let names2 = ['zhou', 'wu', 'zheng', 'wang'];
    for (let name in names1) {
        console.log(name); // 输出：0 1 2 3
    }

    // forEach
    let names3 = ['feng', 'chen', 'chu', 'wei'];
    names3.forEach(function(elem, index) {
        console.log(`index = ${index}, elem = ${elem}`); // 输出：index = 0, elem = feng index = 1, elem = chen index = 2, elem = chu index = 3, elem = wei
    });

    // for...of 解构  
    let names4 = ['jiang', 'shen', 'han', 'yang'];
    for (const [index, elem] of names4.entries()) {
        console.log(`index = ${index}, elem = ${elem}`); // 输出：index = 0, elem = jiang index = 1, elem = shen index = 2, elem = han index = 3, elem = yang
    }

    // Swap
    let [a, b] = [10, 20];
    [a, b] = [b, a];
    console.log(`a = ${a}, b = ${b}`); // 输出：a = 20, b = 10

    // Spread Rest
    function sum(x, ...theArgs) {
        let v = x;
        for (let num of theArgs) {
            v += num;
        }
        return v;
    }
    let result = sum(...[3, 4, 5, 6]);
    console.log(`result = ${result}`); // 输出：result = 18

    // Object.is
    console.log(+0 === -0); // 输出：true
    console.log(NaN === NaN); // 输出：false
    console.log(Object.is(+0, -0)); // 输出：false
    console.log(Object.is(NaN, NaN)); // 输出：true

    // Object.assign
    var target = { a: 1, b: 1 };
    var source1 = { b: 2, c: 2 };
    var source2 = { c: 3 };
    Object.assign(target, source1, source2);
    console.log(target); // 输出：Object {a: 1, b: 2, c: 3}



}

module.exports = topic01