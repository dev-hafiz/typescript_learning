interface TakePhoto {
    cameraMode: string,
    filte: string,
    burst : number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filte: string,
        public burst : number
    ){

    }
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filte: string,
        public burst : number,
        public short: string
    ){

    }
    createStory(): void {
        console.log("Story being created")
    }
}