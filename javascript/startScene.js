class StartScene extends Phaser.Scene {

	constructor() {
		super({key:'startScene'});
    }
    
    clickButton() {
        this.scene.switch('titleScene');
        this.logo.destroy();
        this.title.destroy();
        this.play.destroy();
        //this.track.stop();
    }

    init(){
        
    }

	preload() {
        //startScene
        this.load.image('logoTecneuropsi', 'assets/logo-tcneuropsi.png');

        //titleScene
        this.load.image('title_back', 'assets/backgrounds/intro_beach.png');
        this.load.image('logo', 'assets/logo-game.png');
        this.load.image('play', 'assets/logo-play.png');
        this.load.audio('title_track', 'assets/sounds/tracks/Achaidh_Cheide_Celtic.mp3');

        //introScene
        this.load.image('intro_back', 'assets/backgrounds/intro_room.png');
        this.load.image('intro_pirate', 'assets/characters/intro_pirate.png');
        
        for(this.voice of Object.values(voices['pirate']['intro']).concat(Object.values(voices['pirate']['board'])).concat(Object.values(voices['pirate']['questions']))){
            this.load.audio(this.voice['name'], this.voice['file']);
            if(this.voice['image']){
                this.load.image(this.voice['name']+'_image', this.voice['image_file']);
            }
        };

        //playerScene
        for (this.item of chosen['players']){
            this.load.image(this.item, 'assets/characters/'+this.item+'.png');
        }
        for (this.item of chosen['mascots']){
            this.load.image(this.item, 'assets/characters/'+this.item+'.png');
        }
        for (this.item of chosen['bgs']){
            this.load.image(this.item, 'assets/backgrounds/'+this.item+'.png');
        }
        for (this.item of chosen['modes']){
            this.load.image(this.item, 'assets/icons/'+this.item+'.png');
        }
        this.load.image('textPlayer', 'assets/logo-player.png');

        //gameScene
        this.load.image('goldenbox', 'assets/icons/board_golden.png');
        this.load.image('board', 'assets/backgrounds/board.png');
        this.load.image('finalgoldenbox', 'assets/icons/board_golden_victory.png')

        for(this.item of ['beginner', 'medium', 'advanced']){
            this.load.image('wayStep_'+this.item, 'assets/icons/'+this.item+'_ground.png');
            this.load.image('wayOk_'+this.item, 'assets/icons/'+this.item+'_ground_ok.png');
            this.load.image('wayFrog_'+this.item, 'assets/icons/'+this.item+'_ground_frog.png');
            this.load.image('wayAllig_'+this.item, 'assets/icons/'+this.item+'_ground_alligator.png');
            this.load.image('wayStone_'+this.item, 'assets/icons/'+this.item+'_ground_stone.png');
        }

        this.load.audio('errorStone', 'assets/sounds/effects/error_stone.mp3')
        this.load.audio('finalVictory', 'assets/sounds/effects/final_victory.mp3')

        for(this.effect of Object.values(effects['board']['error'])){
            this.load.audio(this.effect['name'], this.effect['file']);
        };
        console.log()

        //Mascots audios
        for(this.voice of Object.values(voices['mascot1'])){
            for(this.audio of Object.values(this.voice)){
                this.load.audio(this.audio['name'], this.audio['file']);
            }
        };
        for(this.voice of Object.values(voices['mascot2'])){
            for(this.audio of Object.values(this.voice)){
                this.load.audio(this.audio['name'], this.audio['file']);
            }
        };
        for(this.voice of Object.values(voices['mascot3'])){
            for(this.audio of Object.values(this.voice)){
                this.load.audio(this.audio['name'], this.audio['file']);
            }
        };
        

        //endScene
        this.load.image('goldenbox', 'assets/icons/board_golden.png');        

        //tool bar
        this.load.image('tool_jump', 'assets/icons/tool_jump.png');
        this.load.image('tool_reload', 'assets/icons/tool_reload.png');
        this.load.image('tool_jump_2', 'assets/icons/tool_jump_2.png');
        this.load.image('tool_config', 'assets/icons/tool_config.png');
        this.load.image('tool_music_on', 'assets/icons/tool_music_on.png');
        this.load.image('tool_music_pause', 'assets/icons/tool_music_pause.png');
        this.load.image('tool_help', 'assets/icons/tool_help.png');

        this.load.image('help_close', 'assets/icons/help_close.png');
        this.load.image('help_board', 'assets/backgrounds/help.png');
        // diploma
        this.load.image('diploma', 'assets/backgrounds/diploma.png');

        //fonts
        this.loadFont("JackPirateAltPersonal", "assets/fonts/JackPirateAltPersonal.ttf");
	}

	create() {
        this.logo = this.add.image(620,120,'logoTecneuropsi');
        this.logo.displayWidth = this.logo.width / 2;
        this.logo.displayHeight = this.logo.height / 2;

        this.disclaimer = "O jogo Caça ao Tesouro foi desenvolvido pela tecneuropsi, como parte " + 
            "de um programa de intervenção neuropsicológica.\nSendo assim, um recurso para observar e estimular componentes das funções executivas." + 
            "\n \n " + 
            "Créditos: \n" + 
            "     Concepção: Camila Luisi / Dra. Cristiana Rocca \n" + 
            "     Programação: Rodolfo Castanho \n" +
            "     Vozes: Charles Pereira \n \n" +
            "Imagens:  \n" +
            "     br.freepik.com" +
            "" 
        

        this.textDisclaimer = this.disclaimer

        this.title = this.make.text({
            x: 100,
            y: 250,
            text: this.textDisclaimer,
            style: {
                font: "20px 'Arial'",
                fontStyle: '',
                backgroundColor: null,
                color: '#000000'
                
            }
        });
        
        this.play = this.make.text({
            x: 320,
            y: 600,
            text: "*** Clique aqui para Iniciar ***",
            style: {
                font: "40px 'Arial Black'",
                fontStyle: '',
                backgroundColor: null,
                color: '#9C9C9C',
                shadow: {
                    offsetX: 2,
                    offsetY: 2,
                    color: '#BEBEBE',
                    blur: 1,
                    stroke: true,
                    fill: true
                }
            }
        });
        this.play.setInteractive({ useHandCursor: true });
        this.play.on('pointerdown', () => this.clickButton());

    }

    loadFont(name, url) {
        var newFont = new FontFace(name, `url(${url})`);
        newFont.load().then(function (loaded) {
            document.fonts.add(loaded);
        }).catch(function (error) {
            return error;
        });
    }

}

//export default TitleScene;