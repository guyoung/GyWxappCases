"use strict";
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var ZipCodeValidator_2 = require("./ZipCodeValidator");
var validator = require("./ZipCodeValidator");
var app = getApp();
Page({
    onReady: function () {
        var myValidator1 = new ZipCodeValidator_1.ZipCodeValidator();
        var myValidator2 = new ZipCodeValidator_2.ZipCodeValidator();
        var myValidator3 = new validator.ZipCodeValidator();
    }
});
