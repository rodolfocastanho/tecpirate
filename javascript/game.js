//import TitleScene from './titleScene.js';
//import GameScene from './gameScene.js';

// Our game scene
var startScene = new StartScene();
var titleScene = new TitleScene();
var introScene = new IntroScene();
var playerScene = new PlayerScene();
var gameScene = new GameScene();
var endScene = new EndScene();


//* Game scene */
var config = {
    type: Phaser.AUTO,
    parent: 'text-name-player',
    dom: {
        createContainer: true
    },
    //width: 800,
    //height: 600,
    backgroundColor: "#FFFFFF", 
    scale: {
        mode: Phaser.Scale.FIT,
        //parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        init: init
    }
};
var game = new Phaser.Game(config);

function init(){
        
}

// load scenes
game.scene.add('start', startScene);
game.scene.add('title', titleScene);
game.scene.add('intro', introScene);
game.scene.add('player', playerScene);
game.scene.add('game', gameScene);
game.scene.add('end', endScene);

// start title
game.scene.start('startScene');

