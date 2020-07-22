/* Testing concept for the player's room */
import Player from "./player.js";


export default class PlayerRoom extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        //Load in waluigi's spritesheet, with all of his walking sprites.
        this.load.spritesheet(
            "characters",
            "assets/spritesheets/Waluigi_Walk.png", {
                frameWidth: 29,
                frameHeight: 47,
                margin: 0,
                spacing: 0
            }
        );
    }

    create() {
        this.player = new Player(this, 0, 0);
        // Phaser supports multiple cameras, but you can access the default camera like this:
        const camera = this.cameras.main;

        // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
        camera.setBounds(0, 0, 1080, 600);
        camera.startFollow(this.player.sprite);
    }

    update() {
        this.player.update(); //Update player position and whatnot
    }
}