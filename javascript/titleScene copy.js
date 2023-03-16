class TitleScene extends Phaser.Scene {

	constructor() {
		super({key:'titleScene'});
    }
    
    clickButton() {
        this.track.setVolume(0.2);
        this.scene.switch('introScene');
        this.bg.destroy();
        this.title.destroy();
        //this.track.stop();
    }

    init(){
        this.track;
    }

	preload() {
        this.load.image('title_back', 'assets/backgrounds/intro_beach.png');
        this.load.audio('title_track', 'assets/sounds/tracks/Achaidh_Cheide_Celtic.mp3');
	}

	create() {
        this.track = this.sound.add('title_track');
        this.track.play({loop: true});

		//this.bg = this.add.image(0,0,'title_back');
        //this.bg.setOrigin(0,0);
        //this.bg.alpha = 0.9;

        this.title = this.make.text({
            x: 100,
            y: 100,
            text: "Caça ao\n   Tesouro",
            style: {
                font: "150px 'JackPirateAltPersonal'",
                fontStyle: '',
                backgroundColor: null,
                color: '#fbd022',
                stroke: '#874406',
                strokeThickness: 1,
                shadow: {
                    offsetX: 2,
                    offsetY: 2,
                    color: '#fb8b22',
                    blur: 1,
                    stroke: true,
                    fill: true
                }
            }
        });
        
        this.play = this.make.text({
            x: 500,
            y: 500,
            text: "*** Play ***",
            style: {
                font: "40px 'JackPirateAltPersonal'",
                fontStyle: '',
                backgroundColor: null,
                color: '#ffffff',
                stroke: '#9C9C9C',
                strokeThickness: 1,
                shadow: {
                    offsetX: 2,
                    offsetY: 2,
                    color: '#9C9C9C',
                    blur: 1,
                    stroke: true,
                    fill: true
                }
            }
        });
        this.play.setInteractive({ useHandCursor: true });
        this.play.on('pointerdown', () => this.clickButton());
    }

}

//export default TitleScene;