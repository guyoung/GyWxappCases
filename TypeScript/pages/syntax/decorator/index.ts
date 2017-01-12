// /// <reference path="./Reflect.ts" />
// import * as Reflect from "./Reflect"
import Reflect = require("./Reflect")

var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');

        

        // Decorator Composition
        function f() {
            console.log("f(): evaluated");
            return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
                console.log("f(): called");
            }
        }

        function g() {
            console.log("g(): evaluated");
            return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
                console.log("g(): called");
            }
        }
        class C {
            @f()
            @g()
            method() { }
        }

        // Class Decorator
        function sealed(constructor: Function) {
            Object.seal(constructor);
            Object.seal(constructor.prototype);
        }

        @sealed
        class CGreeter {
            greeting: string;
            constructor(message: string) {
                this.greeting = message;
            }
            greet() {
                return "Hello, " + this.greeting;
            }
        }

        // Method Decorator
        function enumerable(value: boolean) {
            return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
                descriptor.enumerable = value;
            };
        }

        class Greeter {
            greeting: string;
            constructor(message: string) {
                this.greeting = message;
            }

            @enumerable(false)
            greet() {
                return "Hello, " + this.greeting;
            }
        }

        // Accessor Decorator
        function configurable(value: boolean) {
            return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
                descriptor.configurable = value;
            };
        }

        class Point {
            private _x: number;
            private _y: number;
            constructor(x: number, y: number) {
                this._x = x;
                this._y = y;
            }

            @configurable(false)
            get x() { return this._x; }

            @configurable(false)
            get y() { return this._y; }
        }

        // Property Decorator
        const formatMetadataKey = Symbol("format");

        function format(formatString: string) {
            return Reflect.metadata(formatMetadataKey, formatString);
        }

        function getFormat(target: any, propertyKey: string) {
            return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
        }

        class PropGreeter {
            @format("Hello, %s")
            greeting: string;

            constructor(message: string) {
                this.greeting = message;
            }
            greet() {
                let formatString = getFormat(this, "greeting");
                return formatString.replace("%s", this.greeting);
            }
        }

        // Parameter Decorator
        const requiredMetadataKey = Symbol("required");

        function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
            let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
            existingRequiredParameters.push(parameterIndex);
            Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
        }

        function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
            let method = descriptor.value;
            descriptor.value = function () {
                let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
                if (requiredParameters) {
                    for (let parameterIndex of requiredParameters) {
                        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                            throw new Error("Missing required argument.");
                        }
                    }
                }

                return method.apply(this, arguments);
            }
        }

        class ParaGreeter {
            greeting: string;

            constructor(message: string) {
                this.greeting = message;
            }

            @validate
            greet( @required name: string) {
                return "Hello " + name + ", " + this.greeting;
            }
        }

    }
});