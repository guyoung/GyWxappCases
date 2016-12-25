//

function summary() {

    console.log("\nsummary...");

    // IIFES
    (function() {
        var food = 'Meow Mix';
    }());
    console.log(food); // Reference Error

    // 使用 ES6 的块级作用域
    {
        let food = 'Meow Mix';
    }
    console.log(food); // Reference Error





}

module.exports = summary;