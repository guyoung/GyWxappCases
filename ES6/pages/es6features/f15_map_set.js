// Map,Set,WeakMap,WeakSet

function f15_map_set() {

    console.log("\nf15:Map/Set & WeakMap/WeakSet");

    // Set
    let s = new Set();
    s.add("hello").add("goodbye").add("hello");
    s.size === 2;
    s.has("hello") === true;
    for (let key of s.values())
        console.log(key) // 输出: hello goodbye

    // Map
    let m = new Map();
    m.set("hello", 42);
    m.set(s, 34);
    m.get(s) === 34;
    m.size === 2;
    for (let [key, val] of m.entries())
        console.log(key + " = " + val); // 输出: hello = 42 [object Set] = 34

    // WeakSet
    var ws = new WeakSet();
    var str = new String("Hello");
    var num = new Number(1776);
    ws.add(str);
    ws.add(num);
    console.log(ws.has(str)); // 输出: true
    console.log(ws.has(num)); // 输出: true
    ws.delete(str);
    console.log(ws.has(str)); // 输出: false

    // WeakMap
    var dog = {
        breed: "yorkie"
    }
    var cat = {
        breed: "burmese"
    }
    var wm = new WeakMap();
    wm.set(dog, "fido");
    wm.set(cat, "pepper");
    console.log(wm.get(dog) + ": " + dog.breed); // 输出: fido: yorkie
    console.log(wm.get(cat) + ": " + cat.breed); // 输出: pepper: burmese
}

module.exports = f15_map_set;