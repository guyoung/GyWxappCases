
var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');

        // Generic
        function identity<T>(arg: T): T {
            return arg;
        }

        let output1 = identity<string>("myString");

        let output2 = identity("myString");

        function loggingIdentity<T>(arg: T): T {
            // console.log(arg.length);  // Error
            return arg;
        }

        // Generic Type Variable
        function identity2<T>(arg: T): T {
            return arg;
        }

        let myIdentity2: <U>(arg: U) => U = identity2;

        function identity3<T>(arg: T): T {
            return arg;
        }

        let myIdentity3: { <T>(arg: T): T } = identity3;


        // Generic interface
        interface GenericIdentityFn<T> {
            (arg: T): T;
        }
        function identity4<T>(arg: T): T {
            return arg;
        }
        let myIdentity: GenericIdentityFn<number> = identity4;


        // Generic Classe
        class GenericNumeric<T> {
            zeroValue: T;
            add: (x: T, y: T) => T;
        }

        let numberNumeric = new GenericNumeric<number>();
        numberNumeric.zeroValue = 0;
        numberNumeric.add = function (x, y) { return x + y; };
        console.log(numberNumeric.add(numberNumeric.zeroValue, 100));

        let stringNumeric = new GenericNumeric<string>();
        stringNumeric.zeroValue = "";
        stringNumeric.add = function (x, y) { return x + y; };
        console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));


        // Generic Constraint
        interface Lengthwise {
            length: number;
        }

        function logIdentity<T extends Lengthwise>(arg: T): T {
            console.log(arg.length);
            return arg;
        }

        // logIdentity(3);  // Error
        logIdentity({ length: 10, value: 3 });


        // Using Type Parameters in Generic Constraint
        function copyFields<T extends U, U>(target: T, source: U): T {
            for (let id in source) {
                (<U>target)[id] = source[id];
            }
            return target;
        }

        let x = { a: 1, b: 2, c: 3, d: 4 };
        copyFields(x, { b: 10, d: 20 });
        // copyFields(x, { Q: 90 }); // Error


        // Using Class Types in Generic
        class BeeKeeper {
            hasMask: boolean;
        }

        class ZooKeeper {
            nametag: string;
        }

        class Animal {
            numLegs: number;
        }

        class Bee extends Animal {
            keeper: BeeKeeper;
        }

        class Lion extends Animal {
            keeper: ZooKeeper;
        }

        function findKeeper<A extends Animal, K>(a: {
            new (): A;
            prototype: { keeper: K }
        }): K {

            return a.prototype.keeper;
        }

        findKeeper(Lion).nametag;
    }
});