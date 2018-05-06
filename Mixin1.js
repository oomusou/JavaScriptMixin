const CircleMixin = {
    area: function () {
        return Math.PI * this.radius * this.radius;
    },
};

const LogMixin = {
    startLog: function () {
        console.log("Start log...");
    },

    stopLog: function () {
        console.log("End log...");
    }
};

const Button = function (radius) {
    this.radius = radius;
};

// class Button {
//     constructor(radius) {
//         this.radius = radius;
//     }
// }

Object.assign(Button.prototype, CircleMixin, LogMixin);
// Button.prototype = {...Button.prototype, ...CircleMixin, ...LogMixin};

const button = new Button(5);
button.startLog();
console.log(button.area());
button.stopLog();