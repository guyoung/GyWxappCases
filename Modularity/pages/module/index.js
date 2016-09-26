//index.js

var MathClass = require('./math.js');
var MathClassUmd = require('./mathUmd.js');


//获取应用实例
var app = getApp();


Page( {

    onLoad: function() {
        //console.log('onLoad');
        var that = this;

        var lines = [];

        var mathClass = new MathClass();
        
        lines.push( "PI" );
        lines.push( MathClass.PI );

        lines.push( "3 + 4" );
        lines.push( mathClass.add(3, 4) );

        lines.push( "" );

        mathClass = new MathClassUmd();
        lines.push( "6 + 8" );
        lines.push( mathClass.add(6, 8) );
       

        this.setData( {
            text: lines.join( '\n' )
        })
    }
})