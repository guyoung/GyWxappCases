// 

function f17_new_built_in_methods() {

    console.log("\nf17:New Built-In Methods");

    // Object Property Assignment
    var dst = { quux: 0 };
    var src1 = { foo: 1, bar: 2 };
    var src2 = { foo: 3, baz: 4 };
    Object.assign(dst, src1, src2);
    dst.quux === 0;
    dst.foo === 3;
    dst.bar === 2;
    dst.baz === 4;

    /*
    // Array Element Finding
        [1, 3, 4, 2].find(x => x > 3); // 4
    */

    /*
    // String Repeating
    " ".repeat(4 * depth);
    "foo".repeat(3);
    */

    // String Searching
    console.log("hello".startsWith("ello", 1)); // true
    console.log("hello".endsWith("hell", 4)); // true
    console.log("hello".includes("ell")); // true
    console.log("hello".includes("ell", 1)); // true
    console.log("hello".includes("ell", 2)); // false

    // Number Type Checking
    console.log(Number.isNaN(42)); // false
    console.log(Number.isNaN(NaN)); // true

    console.log(Number.isFinite(Infinity)); // false
    console.log(Number.isFinite(-Infinity)); // false;
    console.log(Number.isFinite(NaN)); // false;
    console.log(Number.isFinite(123)); // true;

    // Number Safety Checking
    console.log(Number.isSafeInteger(42)); // true
    console.log(Number.isSafeInteger(9007199254740992)); // false

    // Number Comparison
    console.log(0.1 + 0.2 === 0.3); // false
    console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true

    // Number Truncation
    console.log(Math.trunc(42.7)); // 42
    console.log(Math.trunc(0.1)); // 0
    console.log(Math.trunc(-0.1)); // -0

    // Number Sign Determination
    console.log(Math.sign(7)); // 1
    console.log(Math.sign(0)); // 0
    console.log(Math.sign(-0)); // -0
    console.log(Math.sign(-7)); // -1
    console.log(Math.sign(NaN)); // NaN




}

module.exports = f17_new_built_in_methods;