// 增强的对象字面量

function f06_extended_literals() {

    console.log("\nf06:Extended Literals");

    // 二进制和八进制支持
    0b111110111 === 503 // true 二进制
    0o767 === 503 // true 八进制


    // Unicode支持
        "𠮷".length === 2;
    "𠮷".match(/./u)[0].length === 2;
    "𠮷" === "\uD842\uDFB7";
    "𠮷" === "\u{20BB7}";
    "𠮷".codePointAt(0) == 0x20BB7;
    for (let codepoint of "𠮷")
        console.log(codepoint);
}

module.exports = f06_extended_literals;