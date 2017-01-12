var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app = getApp();
Page({
    onReady: function () {
        var Hello = (function () {
            function Hello(message) {
                this.greeting = message;
            }
            Hello.prototype.greet = function () {
                console.log("Hello, " + this.greeting);
            };
            return Hello;
        }());
        var hello = new Hello("world");
        hello.greet();
        var Greeter = (function () {
            function Greeter() {
            }
            Greeter.prototype.greet = function () {
                if (this.greeting) {
                    return "Hello, " + this.greeting;
                }
                else {
                    return Greeter.standardGreeting;
                }
            };
            return Greeter;
        }());
        Greeter.standardGreeting = "Hello, there";
        var greeter1;
        greeter1 = new Greeter();
        console.log(greeter1.greet());
        var greeterMaker = Greeter;
        greeterMaker.standardGreeting = "Hey there!";
        var greeter2 = new greeterMaker();
        console.log(greeter2.greet());
        var Animal = (function () {
            function Animal(theName) {
                this.name = theName;
            }
            Animal.prototype.move = function (distanceInMeters) {
                if (distanceInMeters === void 0) { distanceInMeters = 0; }
                console.log(this.name + " moved " + distanceInMeters + "m.");
            };
            return Animal;
        }());
        var Snake = (function (_super) {
            __extends(Snake, _super);
            function Snake(name) {
                return _super.call(this, name) || this;
            }
            Snake.prototype.move = function (distanceInMeters) {
                if (distanceInMeters === void 0) { distanceInMeters = 5; }
                console.log("Slithering...");
                _super.prototype.move.call(this, distanceInMeters);
            };
            return Snake;
        }(Animal));
        var Horse = (function (_super) {
            __extends(Horse, _super);
            function Horse(name) {
                return _super.call(this, name) || this;
            }
            Horse.prototype.move = function (distanceInMeters) {
                if (distanceInMeters === void 0) { distanceInMeters = 45; }
                console.log("Galloping...");
                _super.prototype.move.call(this, distanceInMeters);
            };
            return Horse;
        }(Animal));
        var sam = new Snake("Sammy the Python");
        var tom = new Horse("Tommy the Palomino");
        sam.move();
        tom.move(34);
        var Person = (function () {
            function Person(name) {
                this.id = "123";
                this.name = name;
            }
            return Person;
        }());
        var Employee = (function (_super) {
            __extends(Employee, _super);
            function Employee(name, department) {
                var _this = _super.call(this, name) || this;
                _this.department = department;
                return _this;
            }
            Employee.prototype.getElevatorPitch = function () {
                return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
            };
            return Employee;
        }(Person));
        var howard = new Employee("Howard", "Sales");
        howard.age = 42;
        console.log(howard.age);
        console.log(howard.getElevatorPitch());
        var Octopus = (function () {
            function Octopus(theName) {
                this.numberOfLegs = 8;
                this.name = theName;
            }
            return Octopus;
        }());
        var dad = new Octopus("Man with the 8 strong legs");
        var passcode = "secret passcode";
        var User = (function () {
            function User() {
            }
            Object.defineProperty(User.prototype, "name", {
                get: function () {
                    return this._name;
                },
                set: function (newName) {
                    if (passcode && passcode == "secret passcode") {
                        this._name = newName;
                    }
                    else {
                        console.log("Error: Unauthorized update of employee!");
                    }
                },
                enumerable: true,
                configurable: true
            });
            return User;
        }());
        var user = new User();
        user.name = "admin";
        if (user.name) {
            console.log(user.name);
        }
        var Grid = (function () {
            function Grid(scale) {
                this.scale = scale;
            }
            Grid.prototype.calculateDistanceFromOrigin = function (point) {
                var xDist = (point.x - Grid.origin.x);
                var yDist = (point.y - Grid.origin.y);
                return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
            };
            return Grid;
        }());
        Grid.origin = { x: 0, y: 0 };
        var grid1 = new Grid(1.0);
        var grid2 = new Grid(5.0);
        console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
        console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
        var Department = (function () {
            function Department(name) {
                this.name = name;
            }
            Department.prototype.printName = function () {
                console.log('Department name: ' + this.name);
            };
            return Department;
        }());
        var AccountingDepartment = (function (_super) {
            __extends(AccountingDepartment, _super);
            function AccountingDepartment() {
                return _super.call(this, 'Accounting and Auditing') || this;
            }
            AccountingDepartment.prototype.printMeeting = function () {
                console.log('The Accounting Department meets each Monday at 10am.');
            };
            AccountingDepartment.prototype.generateReports = function () {
                console.log('Generating accounting reports...');
            };
            return AccountingDepartment;
        }(Department));
        var department;
        department = new AccountingDepartment();
        department.printName();
        department.printMeeting();
    }
});
