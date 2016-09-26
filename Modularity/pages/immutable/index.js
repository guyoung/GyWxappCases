//index.js

var Immutable = require( '../../libs/immutable/immutable.modified.js' );


//获取应用实例
var app = getApp();


Page( {

    onLoad: function() {
        //console.log('onLoad');
        var that = this;

        var lines = [];

        lines.push( "var map1 = Immutable.Map({a:1, b:2, c:3});" );
        var map1 = Immutable.Map({a:1, b:2, c:3});
        lines.push( "var map2 = map1.set('b', 50);" );
        var map2 = map1.set('b', 50);
        lines.push( "map1.get('b');" );
        lines.push(map1.get('b'));
        lines.push( "map2.get('b');" );
        lines.push(map2.get('b'));

      

        this.setData( {
            text: lines.join( '\n' )
        })
    }
})