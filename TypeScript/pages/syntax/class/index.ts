
var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');

        // class
        class Hello {
            greeting: string;
            constructor(message: string) {
                this.greeting = message;
            }
            greet() {
                console.log("Hello, " + this.greeting);
            }
        }
        let hello = new Hello("world");
        hello.greet();


        // Constructor function
        class Greeter {
            static standardGreeting = "Hello, there";
            greeting: string;
            greet() {
                if (this.greeting) {
                    return "Hello, " + this.greeting;
                }
                else {
                    return Greeter.standardGreeting;
                }
            }
        }

        let greeter1: Greeter;
        greeter1 = new Greeter();
        console.log(greeter1.greet());
        let greeterMaker: typeof Greeter = Greeter;
        greeterMaker.standardGreeting = "Hey there!";
        let greeter2: Greeter = new greeterMaker();
        console.log(greeter2.greet());


        // Inheritance
        class Animal {
            name: string;
            constructor(theName: string) { this.name = theName; }
            move(distanceInMeters: number = 0) {
                console.log(`${this.name} moved ${distanceInMeters}m.`);
            }
        }
        class Snake extends Animal {
            constructor(name: string) { super(name); }
            move(distanceInMeters = 5) {
                console.log("Slithering...");
                super.move(distanceInMeters);
            }
        }
        class Horse extends Animal {
            constructor(name: string) { super(name); }
            move(distanceInMeters = 45) {
                console.log("Galloping...");
                super.move(distanceInMeters);
            }
        }
        let sam = new Snake("Sammy the Python");
        let tom: Animal = new Horse("Tommy the Palomino");
        sam.move();
        tom.move(34);


        // public、private、protected
        class Person {
            private id: string;
            public age: number;
            protected name: string;

            constructor(name: string) {
                this.id = "123";
                this.name = name;
            }
        }
        class Employee extends Person {
            private department: string;

            constructor(name: string, department: string) {
                super(name);
                // this.id = "456"; // Error
                this.department = department;
            }

            public getElevatorPitch() {
                return `Hello, my name is ${this.name} and I work in ${this.department}.`;
            }
        }

        let howard = new Employee("Howard", "Sales");
        howard.age = 42;
        console.log(howard.age);
        // console.log(howard.id); // Error
        // console.log(howard.name); // Error
        console.log(howard.getElevatorPitch());


        // readonly
        class Octopus {
            readonly name: string;
            readonly numberOfLegs: number = 8;
            constructor(theName: string) {
                this.name = theName;
            }
        }
        let dad = new Octopus("Man with the 8 strong legs");
        //dad.name = "Man with the 3-piece suit"; // Error

        // Accessor
        let passcode = "secret passcode";

        class User {
            private _name: string;

            get name(): string {
                return this._name;
            }

            set name(newName: string) {
                if (passcode && passcode == "secret passcode") {
                    this._name = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            }
        }

        let user = new User();
        user.name = "admin";
        if (user.name) {
            console.log(user.name);
        }


        // Static
        class Grid {
            static origin = { x: 0, y: 0 };
            calculateDistanceFromOrigin(point: { x: number; y: number; }) {
                let xDist = (point.x - Grid.origin.x);
                let yDist = (point.y - Grid.origin.y);
                return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
            }
            constructor(public scale: number) { }
        }

        let grid1 = new Grid(1.0);
        let grid2 = new Grid(5.0);

        console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
        console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));


        // Abstract Class
        abstract class Department {
            constructor(public name: string) {
            }
            printName(): void {
                console.log('Department name: ' + this.name);
            }
            abstract printMeeting(): void;
        }

        class AccountingDepartment extends Department {
            constructor() {
                super('Accounting and Auditing');
            }
            printMeeting(): void {
                console.log('The Accounting Department meets each Monday at 10am.');
            }
            generateReports(): void {
                console.log('Generating accounting reports...');
            }
        }
        let department: Department;
        // department = new Department(); // Error
        department = new AccountingDepartment();
        department.printName();
        department.printMeeting();
        // department.generateReports(); // Error
    }
})