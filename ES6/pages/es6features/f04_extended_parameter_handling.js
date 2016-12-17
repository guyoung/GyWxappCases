// 参数扩展 Default Parameter Values默认参数, Rest不定参数， Spread操作符

function f04_extended_parameter_handling() {

    console.log("\nf04:Extended Parameter Handling");

    // 默认参数
    function logName(name = 'Unknown') {
        console.log('Name: ', name);
    }
    logName(); // 输出：Unknown
    logName('JavaScript'); // 输出：JavaScript


    // Rest不定参数
    function add(...numArray) {
        let sum = 0;
        for (let num of numArray) {
            sum += num;
        }
        return sum;
    }
    console.log(add(1, 2, 3)); // 输出：6
    console.log(add(1, 2, 3, 4, 5)); // 输出：15

    // Spread操作符 参数展开
    function add(x, y, z) {
        return x + y + z;
    }
    console.log(add(...[1, 2, 3])); // 输出：6
    console.log(add(...[3, 4, 5])); // 输出：12
}

module.exports = f04_extended_parameter_handling;