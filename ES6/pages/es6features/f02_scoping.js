// 作用域 let,变量作用域，函数作用域

function f02_scoping() {

    console.log("\nf02:Scoping");

    {
        let a = 10;
        var b = 1;
    }
    // console.log(a); // 报错: Uncaught ReferenceError: a is not defined
    console.log(b); // 输出: 1


    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log(i) // 报错: ReferenceError: i is not defined

    // 块级作用域
    function test() {
        let x = 1;
        let y = 2;

        {
            let x = 10;
            let y = 20;
        }

        console.log(x, y);
    }
    test(); // 输出: 1 2
}

module.exports = f02_scoping;