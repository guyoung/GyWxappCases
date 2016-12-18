// 迭代器 for-of

function f13_iterators() {

    console.log("\nf13:Iterators");

    function f() {
        let fibonacci = {
            [Symbol.iterator]() {
                let pre = 0,
                    cur = 1;
                return {
                    next() {
                        [pre, cur] = [cur, pre + cur];
                        return { done: false, value: cur };
                    }
                };
            }
        };
        for (let n of fibonacci) {
            if (n > 1000)
                break;
            console.log(n);
        }
    }
    f(); // 输出: 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
}

module.exports = f13_iterators;