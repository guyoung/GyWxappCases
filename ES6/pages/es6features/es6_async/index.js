function es6_async() {

    console.log("\nes6_async...");

    // Promise
    function helloWorld(ready) {
        return new Promise(function(resolve, reject) {
            if (ready) {
                resolve("Hello World!");
            } else {
                reject("Good bye!");
            }
        });
    }

    helloWorld(true).then(function(message) {
        console.log(message);
    }, function(error) {
        console.log("Error:", error);
    }); // 输出:  Hello World!

    helloWorld(false).then(function(message) {
        console.log(message);
    }, function(error) {
        console.log("Error:", error);
    }); // 输出: Error: Good bye!

    // Promise.all
    var p1 = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Hello");
        }, 3000);
    });

    var p2 = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("World");
        }, 1000);
    });

    Promise.all([p1, p2]).then(function(result) {
        console.log(result); // 输出: ["Hello", "World"]
    });

    // Generator
    function* helloWorldGenerator() {
        yield 'hello';
        yield 'world';
        return 'ending';
    }

    var hw = helloWorldGenerator(); // "Generator { }"
    console.log(hw.next()); // 输出: Object {value: "hello", done: false}
    console.log(hw.next()); // 输出: Object {value: "world", done: false}
    console.log(hw.next()); // 输出: Object {value: "ending", done: true}
    console.log(hw.next()); // 输出: Object {value: undefined, done: true}


    function* idMaker() {
        var index = 0;
        while (true)
            yield index++;
    }

    var gen = idMaker(); // "Generator { }"
    console.log(gen.next().value); // 输出: 0
    console.log(gen.next().value); // 输出: 1
    console.log(gen.next().value); // 输出: 2

    // Generator函数与Promise的结合
    function getFoo() {
        return new Promise(function(resolve, reject) {
            resolve('foo');
        });
    }

    var g = function*() {
        try {
            var foo = yield getFoo();
            console.log(foo);
        } catch (e) {
            console.log(e);
        }
    };

    function run(generator) {
        var it = generator();

        function go(result) {
            if (result.done) return result.value;

            return result.value.then(function(value) {
                return go(it.next(value));
            }, function(error) {
                return go(it.throw(value));
            });
        }

        go(it.next());
    }

    run(g);
}


// module.exports = es6_async;