/// <reference path="node.d.ts"/>

import { ZipCodeValidator } from "./ZipCodeValidator";
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
import * as validator from "./ZipCodeValidator";

var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');

        let myValidator1 = new ZipCodeValidator();

        let myValidator2 = new ZCV();

        let myValidator3 = new validator.ZipCodeValidator();
    }
});