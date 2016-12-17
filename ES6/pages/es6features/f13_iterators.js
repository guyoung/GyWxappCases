// 迭代器 for-of

function f13_iterators() {

    console.log("\nf13:Iterators");

    let strArray = ["a", "b", "c"];

    for (var str of strArray) {
        console.log(str); // 输出: a,b,c
    }
}

module.exports = f13_iterators;