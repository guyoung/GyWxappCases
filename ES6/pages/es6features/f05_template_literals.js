// 模板对象 字符串模板,多行字符串

function f05_template_literals() {

    console.log("\nf05:Template Literals");

    // 字符串模板,多行字符串
    let firstName = 'Miroslav',
        lastName = 'Popovic';
    let fullName =
        `${firstName} ${lastName}`;

    console.log(fullName);

    let add = function(x, y) {
        return `${x} + ${y} = ${x + y}`;
    };

    console.log(add(10, 5));
    console.log(`Support for
    multiple lines with backticks`);
}

module.exports = f05_template_literals;