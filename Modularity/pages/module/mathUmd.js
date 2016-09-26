( function( global, factory ) {

    /*
    if( typeof define === 'function' && define.amd ) {
        // AMD

        define(factory );
    } else if( typeof exports === 'object' ) {
        // Node, CommonJS-like

        module.exports = factory();
    } else {
        // Browser globals (root is window)

        root.returnExports = factory( );
    }
    */

    module.exports = factory();

} ( this, function() {
    'use strict';

    function MathClass() {

    }

    MathClass.PI = 3.14;

    MathClass.E = 2.72;

    MathClass.prototype.add = function( a, b ) {
        return a + b;
    };

    return MathClass;

}) );