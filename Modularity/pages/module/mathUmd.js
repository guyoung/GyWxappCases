( function( global, factory ) {    
    if( typeof define === 'function' && define.amd ) {
        define( factory );
    } else if( typeof exports === 'object' ) {
        module.exports = factory();
    } else {
        root.returnExports = factory();
    }
    
} ( this, function() {
    function MathClass() {
    }
    MathClass.PI = 3.14;
    MathClass.E = 2.72;
    MathClass.prototype.add = function( a, b ) {
        return a + b;
    };
    return MathClass;
}) );