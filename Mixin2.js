const CircleMixin = base => class extends base {
    area() {
        return Math.PI * this.radius * this.radius;
    }
};

const LogMixin = base => class extends base {
    startLog() {
        console.log("Start log...");
    }

    stopLog() {
        console.log("End log...");
    }
};

class Base {}

class Button extends LogMixin(CircleMixin(Base)) {
    constructor(radius) {
        super();
        this.radius = radius;
    }
}

const button = new Button(5);
button.startLog();
console.log(button.area());
button.stopLog();