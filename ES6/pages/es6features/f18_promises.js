// Promise

function f18_promises() {

    console.log("\nf18:Promises");

    /*
        function msgAfterTimeout(msg, who, timeout) {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
            });
        }

        msgAfterTimeout("", "Foo", 100).then((msg) =>
            msgAfterTimeout(msg, "Bar", 200)
        ).then((msg) => {
            console.log(`done after 300ms:${msg}`)
        });
    */
}

module.exports = f18_promises;