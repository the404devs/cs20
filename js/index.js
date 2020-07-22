/*index.js is the starting point of the game code.*/

import Menu from "./menu.js"; //import the menu stuff, cause we use that first

//TEST IMPORTS HERE
import PlayerRoom from "./player-room.js";

const config = {
    type: Phaser.AUTO,
    width: 1080, //we can change these dimensions if needed.
    height: 600,
    backgroundColor: "#000",
    parent: "game-container", //id of the parent div that will display the game
    pixelArt: true,
    scene: PlayerRoom, //SET TO "Menu" BY DEFAULT. CHANGE FOR TESTING ONLY
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 }
        }
    }
};
const game = new Phaser.Game(config);