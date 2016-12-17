// 增强的对象字面量

function f08_enhanced_object_literals() {
    console.log("\nf08:Enhanced Object Literals");

    //通过对象字面量创建对象
    var human = {
        breathe() {
            console.log('breathing...');
        }
    };
    var worker = {
        //设置此对象的原型为human,相当于继承human
        __proto__: human,
        company: 'freelancer',
        work() {
            console.log('working...');
        }
    };
    //输出 breathing...
    human.breathe();
    //调用继承来的breathe方法
    //输出 breathing...
    worker.breathe();
}

module.exports = f08_enhanced_object_literals;