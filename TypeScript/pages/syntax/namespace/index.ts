/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');

        let strings = ["Hello", "98052", "101"];      
        let validators: { [s: string]: Validation.StringValidator; } = {};
        validators["ZIP code"] = new Validation.ZipCodeValidator();
        validators["Letters only"] = new Validation.LettersOnlyValidator();       
        strings.forEach(s => {
            for (let name in validators) {
                console.log("\"" + s + "\"" + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
            }
        });
    }
});
