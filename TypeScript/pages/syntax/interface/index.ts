
var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');

        // Interface
        interface LabelledValue {
            label: string;
        }
        function printLabel(labelledObj: LabelledValue) {
            console.log(labelledObj.label);
        }
        let myObj = { size: 10, label: "Size 10 Object" };
        printLabel(myObj);


        // Optional Properties
        interface SquareConfig {
            color?: string;
            width?: number;
        }

        function createSquare(config: SquareConfig): { color: string; area: number } {
            let newSquare = { color: "white", area: 100 };
            if (config.color) {
                newSquare.color = config.color;
            }
            if (config.width) {
                newSquare.area = config.width * config.width;
            }
            return newSquare;
        }

        let mySquare = createSquare({ color: "black" });


        // Readonly properties
        interface Point {
            readonly x: number;
            readonly y: number;
        }

        let p1: Point = { x: 10, y: 20 };
        // p1.x = 5; // Error

        let a: number[] = [1, 2, 3, 4];
        let ro: ReadonlyArray<number> = a;
        // ro[0] = 12; // Error
        // ro.push(5); // Error
        // ro.length = 100; // Error
        // a = ro; // Error


        // Excess Property Check
        interface SquareConfig2 {
            color?: string;
            width?: number;
            [propName: string]: any;
        }
        let squareOptions2 = { colour: "red", width: 100 };
        let mySquare2 = createSquare(squareOptions2);


        // Function Type
        interface SearchFunc {
            (source: string, subString: string): boolean;
        }

        let mySearch: SearchFunc;
        mySearch = function (src, sub) {
            let result = src.search(sub);
            if (result == -1) {
                return false;
            }
            else {
                return true;
            }
        }


        // Indexable Type
        interface StringArray {
            [index: number]: string;
        }

        let myArray: StringArray;
        myArray = ["Bob", "Fred"];

        let myStr: string = myArray[0];


        interface NumberDictionary {
            [index: string]: number;
            length: number;
            // name: string // Error
        }

        interface ReadonlyStringArray {
            readonly[index: number]: string;
        }


        // Implementing an interface
        interface IClock {
            currentTime: Date;
            setTime(d: Date): void;
        }

        class Clock implements IClock {
            currentTime: Date;
            setTime(d: Date) {
                this.currentTime = d;
            }
            constructor(h: number, m: number) { }
        }


        interface ClockConstructor {
            new (hour: number, minute: number): ClockInterface;
        }
        interface ClockInterface {
            tick(): void;
        }

        function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
            return new ctor(hour, minute);
        }

        class DigitalClock implements ClockInterface {
            constructor(h: number, m: number) { }
            tick() {
                console.log("beep beep");
            }
        }
        class AnalogClock implements ClockInterface {
            constructor(h: number, m: number) { }
            tick() {
                console.log("tick tock");
            }
        }

        let digital = createClock(DigitalClock, 12, 17);
        let analog = createClock(AnalogClock, 7, 32);

        // Extending Interface
        interface Shape {
            color: string;
        }

        interface PenStroke {
            penWidth: number;
        }

        interface Square extends Shape, PenStroke {
            sideLength: number;
        }

        let square = <Square>{};
        square.color = "blue";
        square.sideLength = 10;
        square.penWidth = 5.0;


        // Hybrid Type
        interface Counter {
            (start: number): string;
            interval: number;
            reset(): void;
        }

        function getCounter(): Counter {
            let counter = <Counter>function (start: number) { };
            counter.interval = 123;
            counter.reset = function () { };
            return counter;
        }

        let c = getCounter();
        c(10);
        c.reset();
        c.interval = 5.0;


        // Interfaces Extending Classe
        class Control {
            private state: any;
        }

        interface SelectableControl extends Control {
            select(): void;
        }

        class Button extends Control {
            select() { }
        }

        class TextBox extends Control {
            select() { }
        }

        class Image {
            select() { }
        }

        class Location {
            select() { }
        }


        // Using a class as an interface
        class Chart {
            x: number;
            y: number;
        }
        interface LabelChart extends Chart {
            text: string;
        }
        let textShape: LabelChart = { x: 1, y: 2, text: 'hello' };
    }
});