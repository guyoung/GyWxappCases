function es6_syntax() {

    console.log("\nes6_syntax...");

    // new.target
    class A {
        constructor() {
            console.log(new.target.name);
        }
    }

    class B extends A {
        constructor() {
            super();
        }
    }

    var a = new A(); // 输出：A
    var b = new B(); // 输出：B


    function Foo() {
        if (!new.target)
            throw "Foo() must be called with new";
        console.log("Foo instantiated with new");
    }

    // Foo(); // 输出：Uncaught Foo() must be called with new
    new Foo(); // 输出：Foo instantiated with new

    // yield
    function* foo() {
        var index = 0;
        while (index <= 2)
            yield index++;
    }

    var iterator = foo();
    console.log(iterator.next()); // 输出：Object { value:0, done:false }
    console.log(iterator.next()); // 输出：Object { value:1, done:false }
    console.log(iterator.next()); // 输出：Object { value:2, done:false }
    console.log(iterator.next()); // 输出：Object { value:undefined, done:true }

}


// module.exports = es6_syntax;