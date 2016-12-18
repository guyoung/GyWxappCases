// 增强的对象字面量

function f08_enhanced_object_literals() {
    console.log("\nf08:Enhanced Object Literals");

    // 属性的简洁表示法
    function f1(x, y) {
        return { x, y };
    }

    // 方法的简洁表示法
    function f2() {
        return {
            hello() {
                return "Hello!";
            }
        }
    }

    // 属性名表达式
    function f3() {
        return {
            foo: true,
            ['a' + 'bc']: 123
        }
    }


    function getCar(make, model, value) {
        return {
            make,
            model,
            value,
            ['make' + make]: true,

            depreciate() {
                this.value -= 2500;
            }
        };
    }

    let car = getCar('Kia', 'Sorento', 40000);
    console.log(car); // 输出: Object {make: "Kia", model: "Sorento", value: 40000, makeKia: true}
    car.depreciate();
    console.log(car.value); // 输出: 37500
}

module.exports = f08_enhanced_object_literals;