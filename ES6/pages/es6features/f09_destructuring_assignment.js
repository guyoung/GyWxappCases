// 解构赋值

function f09_destructuring_assignment() {

    console.log("\nf09:Destructuring Assignment");

    let numbers = [10, 20];
    let [a, b] = numbers;

    console.log(a, b);

    let position = { lat: 42.34455, lng: 17.34235 };
    let { lat, lng } = position;

    console.log(lat, lng);
}

module.exports = f09_destructuring_assignment;