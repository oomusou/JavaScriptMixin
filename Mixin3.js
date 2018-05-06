const CircleMixin = function () {
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
};

const LogMixin = function () {
    this.startLog = function () {
        console.log("Start log...");
    };

    this.stopLog = function () {
        console.log("End log...");
    };
};

const Button = function (radius) {
    this.radius = radius;
};

// class Button {
//     constructor(radius) {
//         this.radius = radius;
//     }
// }

CircleMixin.call(Button.prototype);
LogMixin.call(Button.prototype);

const button = new Button(5);
button.startLog();
console.log(button.area());
button.stopLog();