//index.js



//获取应用实例
var app = getApp();

Page({
    onReady: function () {
        //console.log('onReady');
        var that = this;

        // underscore
        var _ = require('../../lib/underscore/we-underscore');

        var obj = {name: 'dog', age: 3, color: 'white'};

        // 获取对象的所有属性名
        console.log(_.keys(obj)); // 输出：["name", "age", "color"]

        // 获取对象的所有属性值
        console.log(_.values(obj)); // 输出：["dog", 3, "white"]

        // 把一个对象转换成一个 [key, value] 形式的数组
        console.log(_.pairs(obj)); // 输出：[["name", "dog"], ["age", 3], ["color", "white"]]

        // 返回一个对象的副本, 并且里面键和值是对调的（要使之有效, 必须确保object里所有的值都是唯一的且可以序列号成字符串.）
        console.log(_.invert(obj)); // 输出：Object {3: "age", dog: "name", white: "color"}

        // 复制 source 对象的所有属性到 destination 对象上, 然后返回 destination 对象上
        console.log(_.extend({weight: 10}, obj)); // 输出：Object {name: "dog", age: 3, color: "white", weight: 10}

        // 返回一个对象的副本, 过滤掉除了 keys 以外的所有属性(一个或多个)
        console.log(_.pick(obj, 'name', 'color')); // 输出：Object {name: "dog", color: "white"}

        // 返回一个对象的副本, 过滤掉了黑名单里的 keys （keys可以是单个key也可以是包含多个key的数组）
        console.log(_.omit(obj, 'color')); // 输出：Object {name: "dog", age: 3}


        // lodash
        var _ = require('../../lib/lodash/we-lodash');

        var employees = [
            { 'name': 'zhangsan', 'age': 30, salary: 5000 },
            { 'name': 'lisi', 'age': 36, salary: 4000 },
            { 'name': 'wangwu', 'age': 32, salary: 6000 }
        ];

        // 获取所有员工姓名，并以”，“分割
        var names = _.chain(employees)
            .map(function (employee) {
                return employee.name;
            })
            .join(",")
            .value();
        console.log(names); // 输出：zhangsan,lisi,wangwu

        // 获取最年轻的员工
        var o1 = _.chain(employees)
            .sortBy("age")
            .map(function (employee) {
                return employee;
            })
            .first()
            .value();
        console.log(o1); // 输出：Object {name: "zhangsan", age: 30, salary: 5000}

        // 获取工资最多的员工
        var o2 = _.chain(employees)
            .orderBy("salary", "desc")
            .map(function (employee) {
                return employee;
            })
            .first()
            .value();
        console.log(o2); // 输出：Object {name: "wangwu", age: 32, salary: 6000}

        // 获取年龄等于36的员工
        var o3 = _.chain(employees)
            .filter(function (employee) {
                return employee.age = 36;
            })
            .map(function (employee) {
                return employee;
            })
            .first()
            .value();
        console.log(o3); // 输出：Object {name: "lisi", age: 36, salary: 4000}

        // 数组到Map的转换
        var hashmap = _.fromPairs(employees.map(function (employee) {
            return [employee.name, employee];
        }));
        var o4 = hashmap["wangwu"];
        console.log(o4); // 输出：Object {name: "wangwu", age: 36, salary: 6000}

    }
});