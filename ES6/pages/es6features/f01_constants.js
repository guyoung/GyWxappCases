// 常量 const

function f01_constants() {

    console.log("\nf01:Constants");

    const PI = 3.141593;
    console.log(PI);

    // PI = 3; // 报错: Uncaught TypeError: Assignment to constant variable.

    // const PI = 3.1; // 报错: Uncaught SyntaxError: Identifier 'PI' has already been declared
}

module.exports = f01_constants;