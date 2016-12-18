// 类 class,extends

function f11_classes() {

    console.log("\nf11:Classes");

    // Class Definition
    class Shape {
        constructor(name) {
            this.name = name;
        }
        move(x, y) {
            console.log(this.name + " Move to: " + x + "," + y);
        }
    }
    let shapeA = new Shape("Shape A");
    shapeA.move(240, 320); // 输出: Shape A Move to: 240,320

    //  Class Inheritance
    class Rectangle extends Shape {
        constructor(name) {
            super(name);
        }
        area(width, height) {
            console.log(this.name + " Area:" + width * height);
        }
    }

    class Circle extends Shape {
        constructor(name) {
            super(name);
        }
        area(radius) {
            console.log(this.name + " Area:" + 3.14 * radius * radius);
        }
    }

    let rectangleA = new Rectangle("Rectangle B");
    let circleB = new Circle("Circle C");
    rectangleA.move(100, 200); // 输出: Rectangle B Move to: 100,200
    rectangleA.area(30, 40); // 输出: Rectangle B Area:1200
    circleB.move(200, 300); // 输出: Circle C Move to: 200,300
    circleB.area(50); // 输出: Circle C Area:7850

    // Getter/Setter
    class People {
        constructor(name) {
            this._name = name;
        }
        get name() {
            return this._name.toUpperCase();
        }
        set name(name) {
            this._name = name;
        }
        sayName() {
            console.log(this._name);
        }
    }
    var p = new People("tom");
    console.log(p.name); // TOM
    p.name = "john";
    console.log(p.name); // JOHN
    p.sayName(); // john

    // Static Members
    class F3 {
        static classMethod() {
            return 'hello';
        }
    }
    F3.classMethod() // 输出: hello
    var f3 = new F3();
    // f3.classMethod(); // 输出: TypeError: f3.classMethod is not a function

    class F4 {}
    F4.prop = 5;
    console.log(F4.prop) // 输出: 5

}

module.exports = f11_classes;