// 类 class,extends

function f11_classes() {

    console.log("\nf11:Classes");

    class Shape {
        constructor(name, x, y) {
            this.name = name;
            this.move(x, y)
        }
        move(x, y) {
            this.x = x;
            this.y = y;
            console.log(this.name + " Move to: " + this.x + "," + this.y);
        }
    }

    class Rectangle extends Shape {
        constructor(name, x, y, width, height) {
            super(name, x, y);
            this.width = width;
            this.height = height
        }
        area() {
            console.log(this.name + " Area:" + this.width * this.height);
        }
    }

    class Circle extends Shape {
        constructor(name, x, y, radius) {
            super(name, x, y)
            this.radius = radius
        }
        area() {
            console.log(this.name + " Area:" + 3.14 * this.radius * this.radius);
        }
    }

    let rectangleA = new Rectangle("Rectangle A", 0, 0, 300, 400);
    let circleB = new Circle("Circle B", 0, 0, 200);
    rectangleA.move(100, 200);
    rectangleA.area();
    circleB.move(200, 300);
    circleB.area();

}

module.exports = f11_classes;