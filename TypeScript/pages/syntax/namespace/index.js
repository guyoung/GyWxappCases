var app = getApp();
Page({
    onReady: function () {
        var strings = ["Hello", "98052", "101"];
        var validators = {};
        validators["ZIP code"] = new Validation.ZipCodeValidator();
        validators["Letters only"] = new Validation.LettersOnlyValidator();
        strings.forEach(function (s) {
            for (var name_1 in validators) {
                console.log("\"" + s + "\"" + (validators[name_1].isAcceptable(s) ? " matches " : " does not match ") + name_1);
            }
        });
    }
});
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
