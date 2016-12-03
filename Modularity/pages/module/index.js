//index.js

/* CommonJs */
var MathClassCommonJs = require('./mathCommonJS');
/* UMD */
var MathClassUMD = require('./mathUMD');
Page({
    onLoad: function() {
        console.log("CommonJs");
        console.log("PI: " + MathClassCommonJs.PI);
        var mathClass = new MathClassCommonJs();
        console.log("3 + 4: " + mathClass.add(3, 4));

        console.log("UMD");
        console.log("PI: " + MathClassUMD.PI);
        mathClass = new MathClassUMD();
        console.log("3 + 4: " + mathClass.add(3, 4));
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



/* CMD
define( "pages/module/index.js", function( require, exports, module ) {
    var MathClass = require( './mathCMD' );
    Page( {
        onLoad: function() {
            console.log( "PI: " + MathClass.PI );
            var mathClass = new MathClass();
            console.log( "3 + 4: " + mathClass.add( 3, 4 ) );
        }
    });
});
*/