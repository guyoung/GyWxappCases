// 解构赋值

function f09_destructuring_assignment() {

    console.log("\nf09:Destructuring Assignment");

    // 数组的解构赋值
    let numbers = [10, 20];
    let [a, b] = numbers;
    console.log(a, b); // 输出: 10 20

    // 对象的解构赋值
    let position = { lat: 42.34455, lng: 17.34235 };
    let { lat, lng } = position;
    console.log(lat, lng); // 输出:  42.34455 17.34235

    // 字符串的解构赋值
    const [c1, c2, c3, c4, c5] = 'hello';
    console.log(c1, c2, c3, c4, c5); // 输出: h e l l o

    // 函数参数的解构赋值
    function add([x, y]) {
        return x + y;
    }
    console.log(add([1, 2])); // 输出: 3

}

module.exports = f09_destructuring_assignment;