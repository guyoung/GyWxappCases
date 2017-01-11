"use strict";
var example = (function () {
    function example() {
    }
    example.prototype.rotate = function (context) {
        context.beginPath();
        context.rotate(10 * Math.PI / 180);
        context.rect(225, 75, 20, 10);
        context.fill();
    };
    example.prototype.scale = function (context) {
        context.beginPath();
        context.rect(25, 25, 50, 50);
        context.stroke();
        context.scale(2, 2);
        context.beginPath();
        context.rect(25, 25, 50, 50);
        context.stroke();
    };
    example.prototype.reset = function (context) {
        context.beginPath();
        context.setFillStyle('#000000');
        context.setStrokeStyle('#000000');
        context.setFontSize(10);
        context.setShadow(0, 0, 0, 'rgba(0, 0, 0, 0)');
        context.setLineCap('butt');
        context.setLineJoin('miter');
        context.setLineWidth(1);
        context.setMiterLimit(10);
    };
    example.prototype.translate = function (context) {
        context.beginPath();
        context.rect(10, 10, 100, 50);
        context.fill();
        context.translate(70, 70);
        context.beginPath();
        context.fill();
    };
    example.prototype.save = function (context) {
        context.beginPath();
        context.setStrokeStyle('#00ff00');
        context.save();
        context.scale(2, 2);
        context.setStrokeStyle('#ff0000');
        context.rect(0, 0, 100, 100);
        context.stroke();
        context.restore();
        context.rect(0, 0, 50, 50);
        context.stroke();
    };
    example.prototype.restore = function (context) {
        [3, 2, 1].forEach(function (item) {
            context.beginPath();
            context.save();
            context.scale(item, item);
            context.rect(10, 10, 100, 100);
            context.stroke();
            context.restore();
        });
    };
    example.prototype.drawImage = function (context) {
        context.drawImage('/image/wechat.png', 0, 0);
    };
    example.prototype.fillText = function (context) {
        context.setStrokeStyle('#ff0000');
        context.beginPath();
        context.moveTo(0, 10);
        context.lineTo(300, 10);
        context.stroke();
        context.setFontSize(10);
        context.fillText('Hello World', 0, 30);
        context.setFontSize(20);
        context.fillText('Hello World', 100, 30);
        context.beginPath();
        context.moveTo(0, 30);
        context.lineTo(300, 30);
        context.stroke();
    };
    example.prototype.fill = function (context) {
        context.beginPath();
        context.rect(20, 20, 150, 100);
        context.setStrokeStyle('#00ff00');
        context.fill();
    };
    example.prototype.stroke = function (context) {
        context.beginPath();
        context.moveTo(20, 20);
        context.lineTo(20, 100);
        context.lineTo(70, 100);
        context.setStrokeStyle('#00ff00');
        context.stroke();
    };
    example.prototype.clearRect = function (context) {
        context.setFillStyle('#ff0000');
        context.beginPath();
        context.rect(0, 0, 300, 150);
        context.fill();
        context.clearRect(20, 20, 100, 50);
    };
    example.prototype.beginPath = function (context) {
        context.beginPath();
        context.setLineWidth(5);
        context.setStrokeStyle('#ff0000');
        context.moveTo(0, 75);
        context.lineTo(250, 75);
        context.stroke();
        context.beginPath();
        context.setStrokeStyle('#0000ff');
        context.moveTo(50, 0);
        context.lineTo(150, 130);
        context.stroke();
    };
    example.prototype.closePath = function (context) {
        context.beginPath();
        context.moveTo(20, 20);
        context.lineTo(20, 100);
        context.lineTo(70, 100);
        context.closePath();
        context.stroke();
    };
    example.prototype.moveTo = function (context) {
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(300, 150);
        context.stroke();
    };
    example.prototype.lineTo = function (context) {
        context.beginPath();
        context.moveTo(20, 20);
        context.lineTo(20, 100);
        context.lineTo(70, 100);
        context.stroke();
    };
    example.prototype.rect = function (context) {
        context.beginPath();
        context.rect(20, 20, 150, 100);
        context.stroke();
    };
    example.prototype.arc = function (context) {
        context.beginPath();
        context.arc(75, 75, 50, 0, Math.PI * 2, true);
        context.moveTo(110, 75);
        context.arc(75, 75, 35, 0, Math.PI, false);
        context.moveTo(65, 65);
        context.arc(60, 65, 5, 0, Math.PI * 2, true);
        context.moveTo(95, 65);
        context.arc(90, 65, 5, 0, Math.PI * 2, true);
        context.stroke();
    };
    example.prototype.quadraticCurveTo = function (context) {
        context.beginPath();
        context.moveTo(20, 20);
        context.quadraticCurveTo(20, 100, 200, 20);
        context.stroke();
    };
    example.prototype.bezierCurveTo = function (context) {
        context.beginPath();
        context.moveTo(20, 20);
        context.bezierCurveTo(20, 100, 200, 100, 200, 20);
        context.stroke();
    };
    example.prototype.setFillStyle = function (context) {
        ['#fef957', 'rgb(242,159,63)', 'rgb(242,117,63)', '#e87e51'].forEach(function (item, index) {
            context.setFillStyle(item);
            context.beginPath();
            context.rect(0 + 75 * index, 0, 50, 50);
            context.fill();
        });
    };
    example.prototype.setStrokeStyle = function (context) {
        ['#fef957', 'rgb(242,159,63)', 'rgb(242,117,63)', '#e87e51'].forEach(function (item, index) {
            context.setStrokeStyle(item);
            context.beginPath();
            context.rect(0 + 75 * index, 0, 50, 50);
            context.stroke();
        });
    };
    example.prototype.setGlobalAlpha = function (context) {
        context.setFillStyle('#000000');
        [1, 0.5, 0.1].forEach(function (item, index) {
            context.setGlobalAlpha(item);
            context.beginPath();
            context.rect(0 + 75 * index, 0, 50, 50);
            context.fill();
        });
    };
    example.prototype.setShadow = function (context) {
        context.beginPath();
        context.setShadow(10, 10, 10, 'rgba(0, 0, 0, 199)');
        context.rect(10, 10, 100, 100);
        context.fill();
    };
    example.prototype.setFontSize = function (context) {
        [10, 20, 30, 40].forEach(function (item, index) {
            context.setFontSize(item);
            context.fillText('Hello, world', 20, 20 + 40 * index);
        });
    };
    example.prototype.setLineCap = function (context) {
        context.setLineWidth(10);
        ['butt', 'round', 'square'].forEach(function (item, index) {
            context.beginPath();
            context.setLineCap(item);
            context.moveTo(20, 20 + 20 * index);
            context.lineTo(100, 20 + 20 * index);
            context.stroke();
        });
    };
    example.prototype.setLineJoin = function (context) {
        context.setLineWidth(10);
        ['bevel', 'round', 'miter'].forEach(function (item, index) {
            context.beginPath();
            context.setLineJoin(item);
            context.moveTo(20 + 80 * index, 20);
            context.lineTo(100 + 80 * index, 50);
            context.lineTo(20 + 80 * index, 100);
            context.stroke();
        });
    };
    example.prototype.setLineWidth = function (context) {
        [2, 4, 6, 8, 10].forEach(function (item, index) {
            context.beginPath();
            context.setLineWidth(item);
            context.moveTo(20, 20 + 20 * index);
            context.lineTo(100, 20 + 20 * index);
            context.stroke();
        });
    };
    ;
    example.prototype.setMiterLimit = function (context) {
        context.setLineWidth(4);
        [2, 4, 6, 8, 10].forEach(function (item, index) {
            context.beginPath();
            context.setMiterLimit(item);
            context.moveTo(20 + 80 * index, 20);
            context.lineTo(100 + 80 * index, 50);
            context.lineTo(20 + 80 * index, 100);
            context.stroke();
        });
    };
    return example;
}());
exports.example = example;
