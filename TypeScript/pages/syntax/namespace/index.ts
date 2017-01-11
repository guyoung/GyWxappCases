var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');

        // Some samples to try
        let strings = ["Hello", "98052", "101"];
        // Validators to use
        let validators: { [s: string]: Validation.StringValidator; } = {};
        validators["ZIP code"] = new Validation.ZipCodeValidator();
        validators["Letters only"] = new Validation.LettersOnlyValidator();
        // Show whether each string passed each validator
        strings.forEach(s => {
            for (let name in validators) {
                console.log("\"" + s + "\"" + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
            }
        });
    }
});

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}

namespace Validation {
    const numberRegexp = /^[0-9]+$/;

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}