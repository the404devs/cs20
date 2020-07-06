/* Menu Scene
The main menu of the game, from here the player will enter the game. */

import DungeonScene from "./dungeon-scene.js"; //Import DungeonScene, which at this point is the main part of the game. Loads when user hits the PLAY button.

/* Vars for different sprites we load in. */
var background;
var startBtn;
var logo;
var waluigi;


export default class Menu extends Phaser.Scene {
    constructor() {
        super();
    }
    preload() {
        /* We load in all the images we need to display here. 
        Some are standalone images, like the logo, and some are spritesheets like the button*/
        this.load.spritesheet(
            "button", // The name given to this spritesheet
            "assets/spritesheets/play_sprite_sheet.png", { // Path to the image
                frameWidth: 228, // Parameters on how to divide the image into the individual sprites
                frameHeight: 100,
                margin: 0,
                spacing: 0
            }
        );
        // Loading in the standalone images. ID and path.
        this.load.image('background', 'assets/milky-way-galaxy-night-landscape-wallpaper.jpg');
        this.load.image('logo', 'assets/logohq.png');
        this.load.image('waluigi', 'assets/Waluigi.png');
    }
    create() {
        //Use the vars created earlier to add sprites to the screen.

        //tileSprite means the image will tile itself.
        background = this.add.tileSprite(0, 0, 1080, 600, 'background').setOrigin(0, 0);
        // Slap the logo onto the screen at 100, 0
        logo = this.add.sprite(100, 0, 'logo').setOrigin(0, 0);
        logo.setScale(0.25, 0.25); // Scale the image down a little bit

        // Wah
        waluigi = this.add.sprite(0, 225, 'waluigi').setOrigin(0, 0);
        waluigi.setScale(0.5, 0.5);

        //Add button sprite #0 (not hovered) onto the screen. Make it interactive.
        startBtn = this.add.sprite(600, 500, 'button', 0).setInteractive();

        //Mouse hover events.
        startBtn.on('pointerover', function(event) {
            startBtn.setFrame(1); // Switch to frame #1 (hovered)
        });
        startBtn.on('pointerout', function(event) {
            startBtn.setFrame(0); // Switch to frame #0 (not hovered)
        });

        // Click event.
        startBtn.on('pointerdown', function(event) {
            const cam = this.cameras.main; // Grab the current 'camera'
            cam.fade(255, 0, 0, 0); // Fade to black (opacity, r, g, b). 
            cam.once("camerafadeoutcomplete", () => {
                //Following the fade-out, create a new DungeonScene and load it in.
                var key = "map1";
                var ds = new DungeonScene(key);
                this.scene.add(key, ds, true);
            });
        }, this);
    }
}