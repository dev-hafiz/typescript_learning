"use strict";
class Instagram {
    constructor(cameraMode, filte, burst) {
        this.cameraMode = cameraMode;
        this.filte = filte;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filte, burst, short) {
        this.cameraMode = cameraMode;
        this.filte = filte;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story being created");
    }
}
