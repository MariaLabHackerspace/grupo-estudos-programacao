"use strict";
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Bonjour, ' + this.greeting + '!';
    };
    return Greeter;
}());
module.exports = Greeter;
