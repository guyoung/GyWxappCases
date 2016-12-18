// 模板字面量 字符串模板,多行字符串

function f05_template_literals() {

    console.log("\nf05:Template Literals");

    // 字符串模板
    let firstName = 'Zhang',
        lastName = 'San';
    let fullName =
        `${firstName} ${lastName}`;
    console.log(fullName); // 输出：Zhang San

    let add = function(x, y) {
        return `${x} + ${y} = ${x + y}`;
    };
    console.log(add(10, 5)); // 输出：10 + 5 = 15

    // 多行字符串
    console.log(`
<div>
    Support for multiple lines with backticks
</div>`);
}

module.exports = f05_template_literals;