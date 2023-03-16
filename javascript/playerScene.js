class PlayerScene extends Phaser.Scene {

    constructor() {
		super({key:'playerScene'});
    }

    init(){        
        this.playerChoosePlayer;
        this.playerChooseMascot;
        this.playerChooseBg;
        this.playerChooseMode;

        chosen['gameInit'] = true;
        chosen['endInit'] = true;
        chosen['endInitBuble'] = true;
    }

    toGame() {
        this.scene.start('gameScene');
    }

    toChoose(item, variable, type){
        chosen[variable] = item;

        switch(type) {
            case 'player':
                if (typeof(this.playerChoosePlayer) != 'undefined'){
                    this.playerChoosePlayer.destroy();
                }
                this.playerChoosePlayer = this.createImage(item, 680, 410, 'chosenPlayer', 0.7, 'player', this.playerChoosePlayer, this.playerChoosePlayerShadow, false);
                break;
            case 'mascot':
                if (typeof(this.playerChooseMascot) != 'undefined'){
                    this.playerChooseMascot.destroy();
                }
                this.playerChooseMascot = this.createImage(item, 680, 590, 'chosenMascot', 0.8, 'mascot',this.playerChooseMascot, this.playerChooseMascotShadow, false);
                break;
            case 'bg':
                if (typeof(this.playerChooseBg) != 'undefined'){
                    this.playerChooseBg.destroy();
                }
                this.playerChooseBg = this.createImage(item, 990, 415, 'chosenBg', 0.25, 'bg', this.playerChooseBg, this.playerChooseBgShadow, false);
                break;
            case 'mode':
                if (typeof(this.playerChooseMode) != 'undefined'){
                    this.playerChooseMode.destroy();
                }
                this.playerChooseMode = this.createImage(item, 990, 580, 'chosenMode', 0.8, 'mode', this.playerChooseMode, this.playerChooseModeshadow, false);
                break;
          } 
        
        if(chosen['chosenPlayer']!='' && chosen['chosenMascot']!='' &&  chosen['chosenBg']!='' && chosen['chosenMode']!=''){
            // Tool Bar
            this.toolJumpShadow = this.add.sprite(1162,614, 'tool_jump_2');
            this.toolJumpShadow.tint = 0x000000;
            this.toolJumpShadow.alpha = 0.8;
            this.toolJumpShadow.setScale(1.5);
            this.toolJump = this.add.sprite(1160,612, 'tool_jump_2');
            this.toolJump.setScale(1.5);
            this.toolJump.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.toGame());
        }
    }

    preload() {
        
    }

    create(){
        this.bg = this.add.image(0,0,'intro_back');
        this.bg.setOrigin(0,0);
        this.bg.alpha = 0.7;

        // Titles
        this.createText('Personagem', '60px', 130, 20);
        this.createText('Mascote', '60px', 170, 250);
        this.createText('Cenário', '60px', 700, 20);
        this.createText('Nível', '60px', 190, 475);

        // Characters
        this.player1 = this.createImage('player1', 100, 160, 'chosenPlayer', 0.5, 'player', this.player1, this.player1Shadow);
        this.player2 = this.createImage('player2', 240, 160, 'chosenPlayer', 0.5, 'player', this.player2, this.player2Shadow);
        this.player3 = this.createImage('player3', 400, 160, 'chosenPlayer', 0.5, 'player', this.player3, this.player3Shadow);

        this.mascot1 = this.createImage('mascot1', 100, 390, 'chosenMascot', 0.7, 'mascot', this.mascot1, this.mascot1Shadow);
        this.mascot2 = this.createImage('mascot2', 260, 390, 'chosenMascot', 0.7, 'mascot', this.mascot2, this.mascot2Shadow);
        this.mascot3 = this.createImage('mascot3', 400, 390, 'chosenMascot', 0.7, 'mascot', this.mascot3, this.mascot3Shadow);

        this.bg1 = this.createImage('board_back', 620, 160, 'chosenBg', 0.12, 'bg', this.bg1, this.bg1Shadow, true, 0.03);
        this.bg2 = this.createImage('board_blank', 790, 160, 'chosenBg', 0.12, 'bg', this.bg2, this.bg2Shadow, true, 0.03);
        this.bg3 = this.createImage('intro_room', 960, 160, 'chosenBg', 0.12, 'bg', this.bg3, this.bg3Shadow, true, 0.03);

        this.mode1 = this.createImage('beginner', 100, 600, 'chosenMode', 0.5, 'mode', this.mode1, this.mode1Shadow);
        this.mode2 = this.createImage('medium', 240, 600, 'chosenMode', 0.5, 'mode', this.mode2, this.mode2Shadow);
        this.mode3 = this.createImage('advanced', 400, 600, 'chosenMode', 0.5, 'mode', this.mode3, this.mode3Shadow);
        
        var board = this.add.rectangle(880, 460, 700, 450, 0xffffff);
        board.setStrokeStyle(6, 0xfbd022);
        this.createText('Minhas Escolhas', '60px', 680, 250);

        // verify player options
        if(chosen['chosenPlayer'] !== ''){ this.toChoose(chosen['chosenPlayer'], 'chosenPlayer', 'player') };
        if(chosen['chosenMascot'] !== ''){ this.toChoose(chosen['chosenMascot'], 'chosenMascot', 'mascot') };
        if(chosen['chosenBg'] !== ''){ this.toChoose(chosen['chosenBg'], 'chosenBg', 'bg') };
        if(chosen['chosenMode'] !== ''){ this.toChoose(chosen['chosenMode'], 'chosenMode', 'mode') };

        this.controlMusic(chosen['sound'][3], chosen['sound'][4], chosen['sound'][0], chosen['sound'][1], chosen['sound'][2]);

    }

    createImage(item, x, y, variable, sizePct, type, object, objectShadow, interactive=true, sizePctInteractive=0.3){
        if(interactive){
            objectShadow = this.add.sprite(x+(sizePct*10),y+(sizePct*10), item);
            objectShadow.tint = 0x000000;   
            objectShadow.alpha = 0.8;
            objectShadow.setScale(sizePct);
        }
        object = this.add.sprite(x,y, item);
        object.setScale(sizePct);
        object.name = item;
        if(interactive){
            object.setInteractive({ useHandCursor: true })
            .on('pointerover', () => object.setScale(sizePct+sizePctInteractive))
            .on('pointerout', () => object.setScale(sizePct))
            .on('pointerover', () => objectShadow.setScale(sizePct+sizePctInteractive))
            .on('pointerout', () => objectShadow.setScale(sizePct))
            .on('pointerdown', () => this.toChoose(item, variable, type));
        }

        return object;
    }

    createText(text, fontSize, posX, posY){
        this.titlePlayer = this.make.text({
            x: posX,
            y: posY,
            text: text,
            style: {
                font: fontSize+" 'JackPirateAltPersonal'",
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
    }

    controlMusic(pic, volume, track, picTo, volumeTo){
        if (typeof(this.toolTrack) != 'undefined'){
            this.toolTrack.destroy();
            this.toolTrackShadow.destroy();
        }
        
        chosen['sound'][0] = track;
        chosen['sound'][1] = picTo;
        chosen['sound'][2] = volumeTo;
        chosen['sound'][3] = pic;
        chosen['sound'][4] = volume;

        this.toolTrackShadow = this.add.sprite(1172,37, pic);
        this.toolTrackShadow.tint = 0x000000;
        this.toolTrackShadow.alpha = 0.8;
        this.toolTrack = this.add.sprite(1170,35, pic);
        this.toolTrack.setInteractive({ useHandCursor: true });
        this.toolTrack.on('pointerdown', () => this.controlMusic(chosen['sound'][1], chosen['sound'][2], chosen['sound'][0], chosen['sound'][3], chosen['sound'][4]));
        track.setVolume(volume);
    }

}