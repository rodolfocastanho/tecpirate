class TitleScene extends Phaser.Scene {

	constructor() {
		super({key:'titleScene'});
    }
    
    clickButton() {
        chosen['sound'][0].setVolume(0.2);
        this.scene.switch('introScene');
        this.bg.destroy();
        this.logo.destroy();
        this.play.destroy();
        //this.track.stop();
    }

    init(){
        this.track;
    }

	preload() {
        
	}

	create() {
        this.track = this.sound.add('title_track');
        this.track.play({loop: true});
        chosen['sound'][0] = this.track;
        chosen['sound'][1] = 'tool_music_pause';
        chosen['sound'][2] = 0.2;
        chosen['sound'][3] = 'tool_music_on';
        chosen['sound'][4] = 0;

		this.bg = this.add.image(0,0,'title_back');
        this.bg.setOrigin(0,0);
        this.bg.alpha = 0.9;

        this.logo = this.add.image(450, 250, 'logo');

        this.play = this.add.image(640, 600, 'play');
        this.play.setInteractive({ useHandCursor: true });
        this.play.on('pointerdown', () => this.clickButton());
    }

}

//export default TitleScene;