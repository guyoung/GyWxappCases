//index.js

var f01 = require('../es6features/f01_constants.js');
var f02 = require('../es6features/f02_scoping.js');
var f03 = require('../es6features/f03_arrow_functions.js');
var f04 = require('../es6features/f04_extended_parameter_handling.js');
var f05 = require('../es6features/f05_template_literals.js');
var f06 = require('../es6features/f06_extended_literals.js');
var f07 = require('../es6features/f07_enhanced_regular_expression.js');
var f08 = require('../es6features/f08_enhanced_object_literals.js');
var f09 = require('../es6features/f09_destructuring_assignment.js');
var f10 = require('../es6features/f10_modules.js');

var f11 = require('../es6features/f11_classes.js');
var f12 = require('../es6features/f12_symbol_type.js');
var f13 = require('../es6features/f13_iterators.js');
var f14 = require('../es6features/f14_generators.js');
var f15 = require('../es6features/f15_map_set.js');
var f16 = require('../es6features/f16_typed_arrays.js');
var f17 = require('../es6features/f17_new_built_in_methods.js');
var f18 = require('../es6features/f18_promises.js');
var f19 = require('../es6features/f19_meta_programming.js');
var f20 = require('../es6features/f20_internationalization_localization.js');
var topic01 = require('../es6features/topic01.js');
var topic02 = require('../es6features/topic02.js');
var topic03 = require('../es6features/topic03.js');


Page({
    onLoad: function() {
        //console.log('onLoad');

        f01();
        f02();
        f03();
        f04();
        f05();
        f06();
        f07();
        f08();
        f09();
        f10();
        f11();
        f12();
        f13();
        f14();
        f15();
        f16();
        f17();
        f18();
        f19();
        f20();
        topic01();
        topic02();
        topic03();
    }

})