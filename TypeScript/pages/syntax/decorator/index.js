"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Reflect = require("./Reflect");
var app = getApp();
Page({
    onReady: function () {
        function f() {
            console.log("f(): evaluated");
            return function (target, propertyKey, descriptor) {
                console.log("f(): called");
            };
        }
        function g() {
            console.log("g(): evaluated");
            return function (target, propertyKey, descriptor) {
                console.log("g(): called");
            };
        }
        var C = (function () {
            function C() {
            }
            C.prototype.method = function () { };
            return C;
        }());
        __decorate([
            f(),
            g(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], C.prototype, "method", null);
        function sealed(constructor) {
            Object.seal(constructor);
            Object.seal(constructor.prototype);
        }
        var CGreeter = (function () {
            function CGreeter(message) {
                this.greeting = message;
            }
            CGreeter.prototype.greet = function () {
                return "Hello, " + this.greeting;
            };
            return CGreeter;
        }());
        CGreeter = __decorate([
            sealed,
            __metadata("design:paramtypes", [String])
        ], CGreeter);
        function enumerable(value) {
            return function (target, propertyKey, descriptor) {
                descriptor.enumerable = value;
            };
        }
        var Greeter = (function () {
            function Greeter(message) {
                this.greeting = message;
            }
            Greeter.prototype.greet = function () {
                return "Hello, " + this.greeting;
            };
            return Greeter;
        }());
        __decorate([
            enumerable(false),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], Greeter.prototype, "greet", null);
        function configurable(value) {
            return function (target, propertyKey, descriptor) {
                descriptor.configurable = value;
            };
        }
        var Point = (function () {
            function Point(x, y) {
                this._x = x;
                this._y = y;
            }
            Object.defineProperty(Point.prototype, "x", {
                get: function () { return this._x; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Point.prototype, "y", {
                get: function () { return this._y; },
                enumerable: true,
                configurable: true
            });
            return Point;
        }());
        __decorate([
            configurable(false),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], Point.prototype, "x", null);
        __decorate([
            configurable(false),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], Point.prototype, "y", null);
        var formatMetadataKey = Symbol("format");
        function format(formatString) {
            return Reflect.metadata(formatMetadataKey, formatString);
        }
        function getFormat(target, propertyKey) {
            return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
        }
        var PropGreeter = (function () {
            function PropGreeter(message) {
                this.greeting = message;
            }
            PropGreeter.prototype.greet = function () {
                var formatString = getFormat(this, "greeting");
                return formatString.replace("%s", this.greeting);
            };
            return PropGreeter;
        }());
        __decorate([
            format("Hello, %s"),
            __metadata("design:type", String)
        ], PropGreeter.prototype, "greeting", void 0);
        var requiredMetadataKey = Symbol("required");
        function required(target, propertyKey, parameterIndex) {
            var existingRequiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
            existingRequiredParameters.push(parameterIndex);
            Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
        }
        function validate(target, propertyName, descriptor) {
            var method = descriptor.value;
            descriptor.value = function () {
                var requiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
                if (requiredParameters) {
                    for (var _i = 0, requiredParameters_1 = requiredParameters; _i < requiredParameters_1.length; _i++) {
                        var parameterIndex = requiredParameters_1[_i];
                        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                            throw new Error("Missing required argument.");
                        }
                    }
                }
                return method.apply(this, arguments);
            };
        }
        var ParaGreeter = (function () {
            function ParaGreeter(message) {
                this.greeting = message;
            }
            ParaGreeter.prototype.greet = function (name) {
                return "Hello " + name + ", " + this.greeting;
            };
            return ParaGreeter;
        }());
        __decorate([
            validate,
            __param(0, required),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", void 0)
        ], ParaGreeter.prototype, "greet", null);
    }
});
