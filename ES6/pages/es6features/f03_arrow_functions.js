// 箭头函数 =>

function f03_arrow_functions() {

    console.log("\nf03:Arrow Functions");

    // 一个参数
    let square = (x) => x * x;
    console.log('5 * 5 = ', square(5)); // 输出: 5 * 5 =  25

    // 多个参数
    let add = (x, y) => x + y;
    console.log('2 + 3 = ', add(2, 3)); // 输出: 2 + 3 =  5

    //
    let total = () => square(add(5, 3));
    console.log(
        '(5 + 3)*(5 + 3) = ', total()); // 输出: (5 + 3)*(5 + 3) =  64

    // 数组遍历
    var array = [1, 2, 3];
    array.forEach(v => console.log(v)); // 输出: 1 2 3

    // 文法上的固定this对象
    var bob = {
        _name: "Bob",
        _friends: ['Tom', 'Jerry'],
        printFriends() {
            this._friends.forEach(f =>
                console.log(this._name + " knows " + f));
        }
    }
    bob.printFriends(); // 输出: Bob knows Tom Bob knows Jerry
}

module.exports = f03_arrow_functions;