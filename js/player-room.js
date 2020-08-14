/* Testing concept for the player's room */

import Player from "./player.js";
import TILES from "./tile-mapping.js";



export default class PlayerRoom extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        //Load in the tileset for the dungeon.
        this.load.image("tiles", "assets/tilesets/buch-tileset-48px-extruded3.png");

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
        // Phaser supports multiple cameras, but you can access the default camera like this:
        // const camera = this.cameras.main;

        // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
        // camera.setBounds(0, 0, 1080, 600);
        // camera.startFollow(this.player.sprite);
        const map = this.make.tilemap({
            tileWidth: 48,
            tileHeight: 48,
            width: 23,
            height: 13
        });
        /*Layer initialization here*/
        const tileset = map.addTilesetImage("tiles", null, 48, 48, 1, 2); // 1px margin, 2px spacing

        // /*Layer initialization here*/

        this.groundLayer = map.createBlankDynamicLayer("Ground", tileset);

        this.stuffLayer = map.createBlankDynamicLayer("Stuff", tileset);
        this.stuffLayer.depth = 0.5;


        this.groundLayer.fill(TILES.BLANK); //Start by filling ground with blank tiles

        /*TOP_LEFT/8
        LEFT
        BOTTOM_LEFT
        BOTTOM
        BOTTOM_RIGHT
        RIGHT
        TOP_RIGHT
        TOP */
        //start at 5,2
        for (let x = 5; x < 16; x++) {
            this.groundLayer.putTileAt(TILES.WALL.TOP[0].index, x, 1);
            this.groundLayer.putTileAt(TILES.WALL.BOTTOM[0].index, x, 10);
            if (x == 5) {
                for (let y = 1; y < 11; y++) {
                    if (y == 1) {
                        this.groundLayer.putTileAt(TILES.WALL.TOP_LEFT, x, y);
                    } else if (y == 10) {
                        this.groundLayer.putTileAt(TILES.WALL.BOTTOM_LEFT, x, y);
                    } else {
                        this.groundLayer.putTileAt(TILES.WALL.LEFT[0].index, x, y);
                    }
                }
            } else if (x == 15) {
                for (let y = 1; y < 11; y++) {
                    if (y == 1) {
                        this.groundLayer.putTileAt(TILES.WALL.TOP_RIGHT, x, y);
                    } else if (y == 10) {
                        this.groundLayer.putTileAt(TILES.WALL.BOTTOM_RIGHT, x, y);
                    } else {
                        this.groundLayer.putTileAt(TILES.WALL.RIGHT[0].index, x, y);
                    }
                }
            } else {
                for (let y = 2; y < 10; y++) {
                    this.groundLayer.putTileAt(TILES.FLOOR[0].index, x, y);
                }
            }
        }
        //the above creates the walls for the room TODO: make more betterer

        //Makes the pillows
        this.stuffLayer.putTileAt(TILES.TOWER[0], 6, 2);
        this.stuffLayer.putTileAt(TILES.TOWER[0], 6, 3);
        //makes the bed
        this.stuffLayer.putTileAt(TILES.TOWER[1], 7, 2);
        this.stuffLayer.putTileAt(TILES.TOWER[1], 8, 2);
        this.stuffLayer.putTileAt(TILES.TOWER[1], 7, 3);
        this.stuffLayer.putTileAt(TILES.TOWER[1], 8, 3);
        //above makes the bed

        //makes the desk 
        this.stuffLayer.putTileAt(TILES.CHEST, 14, 6);
        this.stuffLayer.putTileAt(TILES.CHEST, 14, 7);

        this.groundLayer.setCollisionByExclusion([20, 6]); //tiles that SHOULDNT have collision
        this.stuffLayer.setCollisionByExclusion([-1]); //tiles that SHOULDNT have collision
        this.player = new Player(this, 500, 300);
        this.physics.add.collider(this.player.sprite, this.groundLayer);
        this.physics.add.collider(this.player.sprite, this.stuffLayer);
        this.player.sprite.setDepth(2); //z-index of player
    }

    update() {
        this.player.update(); //Update player position and whatnot
    }
}