var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var numberBox = new Box(100);
console.log(numberBox.getValue());
var stringBox = new Box("Hello Abdul");
console.log(stringBox.getValue());
