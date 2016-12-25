// 元编程 Proxy, Reflect

function f19_meta_programming() {

    console.log("\nf19:Meta-Programming");

    // Proxy
    var handler1 = {
        get: function(target, name) {
            return name in target ? target[name] : 42;
        }
    };
    var proxy1 = new Proxy({}, handler1);
    proxy1.a = 1;
    console.log(proxy1.a, proxy1.b); // 输出: 1  42


    var employee = { name: 'Zhang san', salary: 50 };
    var interceptor = {
        set: function(target, prop, value, receiver) {
            console.log(prop, 'is changed to', value);
            return true;
        }
    };
    var proxy2 = new Proxy(employee, interceptor);
    proxy2.salary = 60; // 输出: salary is changed to 60

    var handler3 = {
        get: function(target, name) {
            if (name === 'prototype') {
                return Object.prototype;
            }
            return 'Hello, ' + name;
        },
        apply: function(target, thisBinding, args) {
            return args[0];
        },
        construct: function(target, args) {
            return { value: args[1] };
        }
    };

    var proxy3 = new Proxy(function(x, y) {
        return x + y;
    }, handler3);

    console.log(proxy3(1, 2)); // 输出: 1
    console.log(new proxy3(1, 2)); // 输出: Object {value: 2}
    console.log(proxy3.prototype === Object.prototype); // 输出: true
    console.log(proxy3.foo); // 输出: Hello, foo


    var revocable = Proxy.revocable({}, {
        get(target, name) {
            return "[[" + name + "]]";
        }
    });
    var proxy4 = revocable.proxy;
    console.log(proxy4.foo); // 输出: [[foo]]
    revocable.revoke();
    // console.log(proxy4.foo); // 输出: TypeError: Cannot perform 'get' on a proxy that has been revoked
    // proxy4.foo = 1 // 输出: TypeError: Cannot perform 'set' on a proxy that has been revoked
    // delete proxy4.foo; // 输出: TypeError: Cannot perform 'deleteProperty' on a proxy that has been revoked
    console.log(typeof proxy4) // 输出: object

    // Reflect
    var shape = { x: 10, y: 20 };
    var proxy5 = new Proxy(shape, {
        set: function(target, name, value, receiver) {
            var success = Reflect.set(target, name, value, receiver);
            if (success) {
                console.log('property ' + name + ' on ' + target + ' set to ' + value);
            }
            return success;
        }
    });
    proxy5.width = 100; // property width on [object Object] set to 100

    var pet = { id: 1, name: 'cat', weight: 5, color: 'white' };
    var loggedObj = new Proxy(pet, {
        get(target, name) {
            console.log('get:', name);
            return Reflect.get(target, name);
        },
        deleteProperty(target, name) {
            console.log('delete:', name);
            return Reflect.deleteProperty(target, name);
        },
        has(target, name) {
            console.log('has:', name);
            return Reflect.has(target, name);
        }
    });
    console.log(loggedObj.id); // 输出: get: id\n1
    console.log("weight" in loggedObj); // 输出: has: weight\ntrue
    delete loggedObj.color; // 输出: delete: color
    console.log(pet.color); // 输出: undefined

}

module.exports = f19_meta_programming;