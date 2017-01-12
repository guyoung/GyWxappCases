var Shapes;
(function (Shapes) {
    var Polygons;
    (function (Polygons) {
        var Triangle = (function () {
            function Triangle() {
            }
            return Triangle;
        }());
        Polygons.Triangle = Triangle;
        var Square = (function () {
            function Square() {
            }
            return Square;
        }());
        Polygons.Square = Square;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
var polygons = Shapes.Polygons;
var sq = new polygons.Square();
