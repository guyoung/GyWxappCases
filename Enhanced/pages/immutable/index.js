//index.js
var Immutable = require('../../lib/immutable/immutable');

//获取应用实例
var app = getApp();

Page({

    onReady: function () {
        // console.log('onLoad');
        var that = this;

        var foo = { a: 1 };
        var bar = foo;
        bar.a = 2;
        console.log(foo === bar); // 输出：true
        console.log("foo.a=", foo.a, "bar.a=", bar.a);  // 输出：foo.a= 2 bar.a= 2

        var foo2 = Immutable.fromJS({ a: 1 });
        var bar2 = foo2.setIn(['a'], 2);
        console.log(foo2 === bar2);  // 输出：false
        console.log("foo2.a=", foo2.getIn(['a']), "bar2.a=", bar2.getIn(['a'])); // 输出：foo2.a= 1 bar2.a= 2

        // list
        var list1 = Immutable.List.of('a', 'b', 'c');
        var list2 = list1.push('d');
        console.log(list1.size); // 输出：3
        console.log(list2.size); // 输出：4

        var list3 = Immutable.List.of('a', 'b', 'c');
        var list4 = list3.set(0, 'aa');
        console.log(list3.get(0)); // 输出：a
        console.log(list4.get(0)); // 输出：aa

        var list5 = Immutable.fromJS([1, [2, 3], 4]);
        var list6 = list5.setIn([1, 1], 100);
        console.log(list6.getIn([1, 0])); // 输出：2
        console.log(list6.getIn([1, 1])); // 输出：100

        // map
        var map1 = Immutable.Map({ name: 'zhangsan', sex: 'man', age: 34 });
        var map2 = map1.set('age', 40);
        console.log(map1.get('age')); // 输出：34
        console.log(map2.get('age')); // 输出：40

        var map3 = Immutable.fromJS({
            name: 'lisi',
            birthday: {
                year: 1979,
                month: 8,
                day: 10
            },
        });
        var map4 = map3.setIn(['birthday', 'year'], 1980);
        console.log(map3.getIn(['birthday', 'year'])); // 输出：1979
        console.log(map4.getIn(['birthday', 'year'])); // 输出：1980)


        // Equal
        var mapa = Immutable.Map({ a: 1, b: 1, c: 1 });
        var mapb = Immutable.Map({ a: 1, b: 1, c: 1 });
        console.log(mapa === mapb); // 输出：false
        console.log(Immutable.is(mapa, mapb)); // 输出：true


        // Sequence
        var oddSquares = Immutable.Seq.of(1, 2, 3, 4, 5, 6, 7, 8)
            .filter(x => x % 2).map(x => x * x);
        console.log(oddSquares.get(1));

        // Range
        var result = Immutable.Range(1, Infinity)
            .skip(1000)
            .map(n => -n)
            .filter(n => n % 2 === 0)
            .take(2)
            .reduce((r, n) => r * n, 1);
        console.log(result); // 输出：1006008


    }
});