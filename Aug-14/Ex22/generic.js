var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.peek());
console.log(numberStack.pop());
console.log(numberStack.pop());
