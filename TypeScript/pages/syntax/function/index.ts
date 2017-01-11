
var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');

        // Function
        function add1(x: number, y: number): number {
            return x + y;
        }

        let add2 = function (x: number, y: number): number { return x + y; };

        let sub1: (x: number, y: number) => number =
            function (a: number, b: number): number { return a - b; };

        let sub2 = function (a: number, b: number): number { return a - b; };


        // Optional Parameters
        function buildName1(firstName: string, lastName?: string) {
            if (lastName)
                return firstName + " " + lastName;
            else
                return firstName;
        }
        console.log(buildName1("Bob")); // 输出：Bob
        // console.log(buildName1("Bob", "Adams", "Sr.")); // Error
        console.log(buildName1("Bob", "Adams")); // 输出：Bob Adams


        // Default Parameters
        function buildName2(firstName: string, lastName = "Smith") {
            return firstName + " " + lastName;
        }
        console.log(buildName2("Bob")); // 输出：Bob Smith
        console.log(buildName2("Bob", undefined)); // 输出：Bob Smith
        // console.log(buildName2("Bob", "Adams", "Sr.")); // Error
        console.log(buildName2("Bob", "Adams")); // 输出：Bob Adams


        // Rest Parameters
        function buildName3(firstName: string, ...restOfName: string[]) {
            return firstName + " " + restOfName.join(" ");
        }
        console.log(buildName3("Joseph", "Samuel", "Lucas", "MacKinzie")); // 输出：Joseph Joseph Lucas Lucas


        // Arrow Function
        var array = [1, 2, 3];
        array.forEach(v => console.log(v)); // 输出: 1 2 3

        class Handler {
            message: string;
            change = (m: string) => { this.message = m };
            output = () => { console.log(this.message) };
        }
        let handler = new Handler();
        handler.change("Hello");
        handler.output();
        

        // Overload
        class FooClass {
            public bar(s: string): number;
            public bar(n: number): string;
            public bar(arg: string | number): any {
                if (typeof arg === 'number')
                    return arg.toString();
                if (typeof arg === 'string')
                    return arg.length;
            }
        }
    }

});