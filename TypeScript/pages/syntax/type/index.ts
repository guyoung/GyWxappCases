
var app = getApp();


Page({

    onReady: function () {
        // console.log('onReady');

        // Boolean
        {
            let isDone: boolean = false;
            console.log(isDone);
        }

        // Number
        {
            let decimal: number = 6;
            console.log(decimal); // 输出：6
            let hex: number = 0xf00d;
            console.log(hex); // 输出：61453
            let binary: number = 0b1010;
            console.log(binary); // 输出：10
            let octal: number = 0o744;
            console.log(octal); // 输出：484
        }

        // String
        {
            let color: string = "blue";
            color = 'red';
            console.log(color);
            let fullName: string = `Bob Bobbington`;
            console.log(fullName);

            let name: string = "John"
            let age: number = 37;
            let sentence: string = `Hello, my name is ${name}.
            
                I'll be ${ age + 1} years old next month.`
            console.log(sentence);
        }

        // Array
        {
            let list: number[] = [1, 2, 3];
            console.log(list);

            let genericList: Array<number> = [1, 2, 3];
            console.log(genericList);
        }

        // Tuple
        {
            let x: [string, number];
            x = ["hello", 10];
            // x = [10, "hello"]; // Error

            let y: [string, number] = ["hello", 10];
            console.log(y[0].substr(1)); // 
            // console.log(y[1].substr(1)); // Error

            let z: [string, number] = ["hello", 10];
            z[3] = "world";
            console.log(z[3]);
            console.log(z[3].toString());
            // x[6] = true; // Error
        }

        // Enum
        {
            enum Color1 { Red, Green, Blue };
            let c1: Color1 = Color1.Green;
            console.log(c1);

            enum Color2 { Red = 1, Green, Blue };
            let c2: Color2 = Color2.Green;
            console.log(c2);

            enum Color3 { Red = 1, Green = 2, Blue = 4 };
            let c3: Color3 = Color3.Green;
            console.log(c3);

            enum Color4 { Red = 1, Green, Blue };
            let colorName: string = Color4[2];
            console.log(colorName);
        }

        // Any
        {
            let notSure: any = 4;
            notSure = "maybe a string instead";
            console.log(notSure);
            notSure = false;
            console.log(notSure);

            // notSure.ifItExists(); 
            // notSure.toFixed(); 
            let prettySure: Object = 4;
            // prettySure.toFixed(); // Error

            let list: any[] = [1, true, "free"];
            list[1] = 100;
            console.log(list);
        }

        // Void
        {
            function warnUser(): void {
                console.log("This is my warning message");
            }
            warnUser();

            let unusable: void = undefined;
            console.log(unusable);
        }

        // Null and Undefined
        {
            let u: undefined = undefined;
            console.log(u);
            let n: null = null;
            console.log(n);
            console.log(u === n); // 输出：false
        }

        // Never
        {
            // 返回never的函数必须存在无法达到的终点
            function error(message: string): never {
                throw new Error(message);
            }
            // 推断的返回值类型为never
            function fail() {
                return error("Something failed");
            }
            // 返回never的函数必须存在无法达到的终点
            function infiniteLoop(): never {
                while (true) {
                }
            }
        }

        // Symbol
        {
            let sym1 = Symbol();
            let sym2 = Symbol("key");

            let sym3 = Symbol("key");
            let sym4 = Symbol("key");
            console.log(sym3 === sym4); // 输出：false

            let sym5 = Symbol();
            let obj = {
                [sym5]: "value"
            };
            console.log(obj[sym5]); // 输出：value

            let sym6 = Symbol("foo");
            class C {
                [sym6]() {
                    return "C";
                }
            }
            let c = new C();
            let className = c[sym6](); 
            console.log(className); // 输出：C
        }
    }
});