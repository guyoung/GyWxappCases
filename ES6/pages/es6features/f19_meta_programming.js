// 元编程 Proxy, Reflect

function f19_meta_programming() {

    console.log("\nf19:Meta-Programming");

    // Proxy
    let target = { foo: "Welcome, foo" };
    let proxy = new Proxy(target, {
        get(receiver, name) {
            return name in receiver ? receiver[name] : `Hello, ${name}`
        }
    });
    proxy.foo === "Welcome, foo";
    proxy.world === "Hello, world";
    console.log(proxy.foo); // 输出: Welcome, foo
    console.log(proxy.world); // 输出: Hello, world


    // Reflect
    let obj = { a: 1 };
    Object.defineProperty(obj, "b", { value: 2 });
    obj[Symbol("c")] = 3;
    console.log(Reflect.ownKeys(obj)); // 输出: [ "a", "b", Symbol(c) ]


}

module.exports = f19_meta_programming;