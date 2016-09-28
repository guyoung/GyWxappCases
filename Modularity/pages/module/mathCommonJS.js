function MathClass() {
}
MathClass.PI = 3.14;
MathClass.E = 2.72;
MathClass.prototype.add = function(a, b) {
    return a+b;
};
module.exports = MathClass;

