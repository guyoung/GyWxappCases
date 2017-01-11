
var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');

        // var
        {
            var a = 123;
            var a = 456;     
            console.log(a); // 输出：456

            var b = [];
            for (var i = 0; i < 10; i++) {
                b[i] = function () {
                    console.log(i);
                };
            }
            b[5](); // 输出：10
            b[6](); // 输出：10
        }

        // let
        {
            let a = 123;
            // let a = 123; // Error
            console.log(a);  // 输出：123

            let b = [];
            for (let i = 0; i < 10; i++) {
                b[i] = function () {
                    console.log(i);
                };
            }
            b[5](); // 输出：5
            b[6](); // 输出：6
            
        }

        // const
        {
            const YEAR = 2017;
            console.log(YEAR);
            // YEAR = 2016; // Error
            // const YEAR = 3.1; // Error

            const foo = { prop: 123 };
            foo.prop = 456;
            console.log(foo.prop) // 输出：456
            // foo = { prop: 789 }; // Error

        }

        // destructuring
        {
            {
                let input = [1, 2];
                let [first, second] = input;
                console.log(first); // 输出：1
                console.log(second); // 输出：2
            }

            {
                let [first, ...rest] = [1, 2, 3, 4];
                console.log(first); // 输出：1
                console.log(rest); // 输出：[ 2, 3, 4 ]
            }

            {
                let o = { a: "foo", b: 12, c: "bar" }
                let { a, b } = o;
                console.log(a); // 输出：foo
                console.log(b); // 输出：12
            }

            {
                let o = { a: "foo", b: 12, c: "bar" }
                let { a, ...passthrough } = o;
                let total = passthrough.b + passthrough.c.length;
                console.log(total); // 输出：15
            }
        }

        // Spread
        {
            {
                let first = [1, 2];
                let second = [3, 4];
                let bothPlus = [0, ...first, ...second, 5];
                console.log(bothPlus); // 输出：[0, 1, 2, 3, 4, 5]
            }
        }

    }
});