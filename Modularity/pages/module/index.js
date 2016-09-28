//index.js

/* CommonJs */
var MathClass = require( './mathCommonJS.js' );
Page( {
    onLoad: function() {
        console.log( "PI: " + MathClass.PI );
        var mathClass = new MathClass();
        console.log( "3 + 4: " + mathClass.add( 3, 4 ) );
    }
});

/* AMD
define( [ "mathAMD" ], function( require, exports, MathClass ) {
    Page( {
        onLoad: function() {
            console.log( "PI: " + MathClass.PI );
            var mathClass = new MathClass();
            console.log( "3 + 4: " + mathClass.add( 3, 4 ) );
        }
    });

});
*/

/* UMD
var MathClass = require( './mathUMD.js' );
Page( {
    onLoad: function() {
        console.log( "PI: " + MathClass.PI );
        var mathClass = new MathClass();
        console.log( "3 + 4: " + mathClass.add( 3, 4 ) );
    }
});
*/

/* CMD
define( "pages/module/index.js", function( require, exports, module ) {
    var MathClass = require( './mathCMD.js' );
    Page( {
        onLoad: function() {
            console.log( "PI: " + MathClass.PI );
            var mathClass = new MathClass();
            console.log( "3 + 4: " + mathClass.add( 3, 4 ) );
        }
    });
});
*/