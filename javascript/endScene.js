class EndScene extends Phaser.Scene {

    constructor() {
		super({key:'endScene'});
    }

    nextTextIntro() {
        this.scene.switch('playerScene');
        this.bg.destroy();
    }

    reloadGame(board){
        this.goldenbox.destroy();
        this.bg.destroy();
        this.player.destroy();
        this.mascot.destroy();
        this.bubble[0].destroy();
        this.bubble[1].destroy();
        this.pirateVoice.destroy();
        this.scene.switch(board);
    }

    init(){
        this.toolJump;
        this.toolJumpShadow;
        this.bubble;
    }

    preload() {        
        
    }

    //async create(){
    create(){
        if(chosen['endInit']){
            chosen['endInit'] = false;
            this.scene.restart();
        }

        this.bg = this.add.image(0,0,chosen['chosenBg']);
        this.bg.setOrigin(0,0);
        this.bg.alpha = 0.5;

        this.goldenbox = this.createImage('goldenbox', 1140, 530, 1, this.goldenbox, this.goldenShadow);
        this.player = this.createImage(chosen['chosenPlayer'], 1000, 500, 1, this.player, this.playerShadow);
        this.mascot = this.createImage(chosen['chosenMascot'], 100, 150, 1, this.mascot, this.mascotShadow);

        this.toolConfigShadow = this.add.sprite(1117,37, 'tool_config');
        this.toolConfigShadow.tint = 0x000000;
        this.toolConfigShadow.alpha = 0.8;
        this.toolConfig = this.add.sprite(1115,35, 'tool_config');
        this.toolConfig.setInteractive({ useHandCursor: true });
        this.toolConfig.on('pointerdown', () => this.reloadGame('playerScene'));

        this.controlMusic(chosen['sound'][3], chosen['sound'][4], chosen['sound'][0], chosen['sound'][1], chosen['sound'][2]);

        this.playConversation([voices[chosen['chosenMascot']]['final'][0]], 150, 30, 350, 70, [7, 7, 7], 'nenhum', 0);

        var board = this.add.rectangle(500, 380, 750, 250, 0xffffff);
        board.setStrokeStyle(6, 0xfbd022);
        this.mascot1 = this.createImage('mascot1', 230, 380, 0.8, this.mascot1, this.mascotShadow1).setInteractive({ useHandCursor: true }).on('pointerdown', 
            () => this.playConversation([voices['mascot1']['teaching'][1]], 160, 250, 700, 300, [0, 0, 0], 'mascot1'));
        this.mascot2 = this.createImage('mascot2', 410, 380, 0.8, this.mascot2, this.mascotShadow2).setInteractive({ useHandCursor: true }).on('pointerdown', 
            () => this.playConversation([voices['mascot2']['teaching'][1]], 160, 250, 700, 300, [0, 0, 0], 'mascot2'));
        this.mascot3 = this.createImage('mascot3', 590, 380, 0.8, this.mascot3, this.mascotShadow3).setInteractive({ useHandCursor: true }).on('pointerdown', 
            () => this.playConversation([voices['mascot3']['teaching'][1]], 160, 250, 700, 300, [0, 0, 0], 'mascot3'));
        this.certIcon = this.createImage('diploma', 770, 380, 0.1, this.certIcon, this.certIconshadow).setInteractive({ useHandCursor: true }).on('pointerdown', 
            () => this.playConversation([voices[chosen['chosenMascot']]['teaching'][6]], 160, 250, 700, 300, [0, 0, 0], chosen['chosenMascot'], true));
        
        //this.playConversation(Object.values(voices['mascot']['teaching'][0]), 200, 150, 700, 300, [0, 0, 0]);
    }

    sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
    }

    createImage(item, x, y, sizePct, object, objectShadow){
        objectShadow = this.add.sprite(x+10,y+10, item);
        objectShadow.tint = 0x000000;
        objectShadow.alpha = 0.8;
        objectShadow.setScale(sizePct);
        
        object = this.add.sprite(x,y, item);
        object.name = item;
        object.setScale(sizePct);
        
        return object;
    }

    async playConversation(objectVoices, x, y, width, height, points, character, certified=false, imgx=0, imgy=0) {
        if (typeof(this.bubble) != 'undefined' && !chosen['endInitBuble']){
            this.bubble[0].destroy();
            this.bubble[1].destroy();
            this.pirateVoice.destroy();
        } else {
            chosen['endInitBuble'] = false;
        }

        for(this.conversation of objectVoices){
            if (typeof(this.toolJump) != 'undefined'){
                this.toolJump.destroy();
                this.toolJumpShadow.destroy();
            }

            this.bubble = this.createSpeechBubble(x, y, width, height, this.conversation['text'], points);
            this.pirateVoice = this.sound.add(this.conversation['name']);
            this.pirateVoice.play();

            if(this.conversation['image']){
                this.nextShadow = this.add.sprite(imgx+10, imgy+10, this.conversation['name']+'_image');
                this.nextShadow.tint = 0x000000;
                this.nextShadow.alpha = 0.8;
                this.next = this.add.image(imgx, imgy, this.conversation['name']+'_image');
                this.next.setInteractive({ useHandCursor: true });
                this.next.on('pointerdown', () => this.nextTextIntro());
            }

            if(character < 'nenhum'){
                this.mascotTalkingShadow = this.add.sprite(705, 205, character);
                this.mascotTalkingShadow.tint = 0x000000;
                this.mascotTalkingShadow.alpha = 0.8;
                this.mascotTalkingShadow.setScale(0.8);
                
                this.mascotTalking = this.add.sprite(700, 200, character);
                this.mascotTalking.setScale(0.8);
            }

            await this.sleep(this.conversation['time']*1000);
            //this.bubble[0].destroy();
            //this.bubble[1].destroy();
            //this.pirateVoice.destroy();
        }

        if(certified){
            this.toolJumpShadow = this.add.sprite(705,485, 'tool_jump_2');
            this.toolJumpShadow.tint = 0x000000;
            this.toolJumpShadow.alpha = 0.8;
            this.toolJumpShadow.setScale(0.9);
            //this.toolJumpShadow.name = 'toolJumpShadow_'+step.toString();
            this.toolJump = this.add.sprite(700,480, 'tool_jump_2');
            this.toolJump.setScale(0.9);
            //this.toolJump.name = 'toolJump_'+step.toString();
            this.toolJump.setInteractive({ useHandCursor: true });
            this.toolJump.on('pointerdown', 
            () => this.doCertified());

            this.add.dom(450, 480, 'INPUT', 'background-color: white; width: 400px; height: 40px; font: 24px Arial');
        } else {
            this.bubble[0].destroy();
            this.bubble[1].destroy();
            if(character < 'nenhum'){
                this.mascotTalking.destroy();
                this.mascotTalkingShadow.destroy();
            }
        }
        
    }


    doCertified(){ 
        var playerName = document.getElementById('text-name-player').getElementsByTagName('input')[0].value;
        if(playerName !== ''){
            document.getElementById('text-name-player').getElementsByTagName('input')[0].style.visibility = 'hidden';
            var certificate = this.add.sprite(550, 350, 'diploma');

            this.titlePlayer = this.make.text({
                x: 550,
                y: 340,
                text: playerName,
                style: {
                    font: "30px 'Piratesbay'",
                    fontStyle: '',
                    backgroundColor: null,
                    color: '#972e32',
                    stroke: '#972e32',
                    strokeThickness: 1,
                    align: 'center',
                    /*
                    shadow: {
                        offsetX: 2,
                        offsetY: 2,
                        color: '#fb8b22',
                        blur: 1,
                        stroke: true,
                        fill: true
                    }
                    */
                }
            }).setOrigin(0.5);
        }        
    }

    createSpeechBubble (x, y, width, height, quote, points){
        var bubbleWidth = width;
        var bubbleHeight = height;
        var bubblePadding = 10;
        var arrowHeight = bubbleHeight / 4;

        var bubble = this.add.graphics({ x: x, y: y });

        //  Bubble shadow
        bubble.fillStyle(0x222222, 0.5);
        bubble.fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 16);

        //  Bubble color
        bubble.fillStyle(0xffffff, 1);

        //  Bubble outline line style
        bubble.lineStyle(4, 0x565656, 1);

        //  Bubble shape and outline
        bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);
        bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);

        //  Calculate arrow coordinates
        var point1X = Math.floor(bubbleWidth / points[0]);
        var point1Y = bubbleHeight;
        var point2X = Math.floor((bubbleWidth / points[1]) * 2);
        var point2Y = bubbleHeight;
        var point3X = Math.floor(bubbleWidth / points[2]);
        var point3Y = Math.floor(bubbleHeight + arrowHeight);

        //  Bubble arrow shadow
        bubble.lineStyle(4, 0x222222, 0.5);
        bubble.lineBetween(point2X - 1, point2Y + 6, point3X + 2, point3Y);

        //  Bubble arrow fill
        bubble.fillTriangle(point1X, point1Y, point2X, point2Y, point3X, point3Y);
        bubble.lineStyle(2, 0x565656, 1);
        bubble.lineBetween(point2X, point2Y, point3X, point3Y);
        bubble.lineBetween(point1X, point1Y, point3X, point3Y);

        var content = this.add.text(0, 0, quote, { fontFamily: 'Arial', fontSize: 28, color: '#000000', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });

        var b = content.getBounds();

        content.setPosition(bubble.x + (bubbleWidth / 2) - (b.width / 2), bubble.y + (bubbleHeight / 2) - (b.height / 2));

        return [bubble, content];
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

//export default IntroScene;