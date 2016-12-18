// 增强的对象字面量

function f06_extended_literals() {

    console.log("\nf06:Extended Literals");

    // 二进制和八进制支持
    console.log(0b111110111 === 503); // 输出: true
    console.log(0o767 === 503); // 输出: true


    // Unicode支持
    console.log("𠮷".length === 2); // 输出: true
    console.log("𠮷".match(/./u)[0].length === 2); // 输出: true
    console.log("𠮷" === "\uD842\uDFB7"); // 输出: true
    console.log("𠮷" === "\u{20BB7}"); // 输出: true
    console.log("𠮷".codePointAt(0) == 0x20BB7); // 输出: true
    for (let codepoint of "𠮷")
        console.log(codepoint); // 输出: 𠮷
}

module.exports = f06_extended_literals;