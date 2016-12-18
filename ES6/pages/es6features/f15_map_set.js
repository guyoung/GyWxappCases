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


}

module.exports = f15_map_set;