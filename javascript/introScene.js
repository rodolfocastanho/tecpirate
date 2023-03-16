class IntroScene extends Phaser.Scene {

    constructor() {
		super({key:'introScene'});
    }

    nextTextIntro() {
        if (typeof(this.pirateVoice) != 'undefined'){
            if(!this.finishInstructions){
                this.bubble[0].destroy();
                this.bubble[1].destroy();
                this.pirateVoice.destroy();
                this.playConversation.destroy;
            }
        }
        this.pirate.destroy();
        this.bg.destroy();  
        
        this.scene.switch('playerScene');
    }

    init(){
        this.finishInstructions = false;
    }

    preload() {
        
    }

    create(){
        this.bg = this.add.image(0,0,'intro_back');
        this.bg.setOrigin(0,0);
        this.bg.alpha = 0.7;

        this.pirateShadow = this.add.sprite(310,410, 'intro_pirate');
        this.pirateShadow.tint = 0x000000;
        this.pirateShadow.alpha = 0.8;
        this.pirate = this.add.sprite(300,400, 'intro_pirate');

        this.toolJumpShadow = this.add.sprite(1227,37, 'tool_jump');
        this.toolJumpShadow.tint = 0x000000;
        this.toolJumpShadow.alpha = 0.8;
        this.toolJump = this.add.sprite(1225,35, 'tool_jump');
        this.toolJump.setInteractive({ useHandCursor: true });
        this.toolJump.on('pointerdown', () => this.nextTextIntro());

        this.controlMusic(chosen['sound'][1], chosen['sound'][2], chosen['sound'][0], chosen['sound'][3], chosen['sound'][4]);

        this.playConversation(Object.values(voices['pirate']['intro']).concat(Object.values(voices['pirate']['board'])).concat(Object.values(voices['pirate']['questions'])));   
    }

    sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
    }

    async playConversation(objectVoices) {
        try {
            for(this.conversation of objectVoices){
                this.bubble = this.createSpeechBubble(430, 100, 500, 160, this.conversation['text']);
                this.pirateVoice = this.sound.add(this.conversation['name']);
                this.pirateVoice.play();
    
               if(this.conversation['image']){
                    this.nextShadow = this.add.sprite(760,410, this.conversation['name']+'_image');
                    this.nextShadow.tint = 0x000000;
                    this.nextShadow.alpha = 0.8;
                    this.next = this.add.image(750,400, this.conversation['name']+'_image');
                    if(this.conversation['next']){
                        this.next.setInteractive({ useHandCursor: true });
                        this.next.on('pointerdown', () => this.nextTextIntro());
                    }
                }
    
                await this.sleep(this.conversation['time']*1000);
                this.bubble[0].destroy();
                this.bubble[1].destroy();
                this.pirateVoice.destroy();
                if(this.conversation['next']){
                    this.finishInstructions = true;
                }
                if(this.conversation['image']){
                    if(!this.conversation['next']){
                        this.nextShadow.destroy();
                        this.next.destroy();
                    }
                }
            }
        } catch(err) {
            return;
        }
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

    createSpeechBubble (x, y, width, height, quote){
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
        var point1X = Math.floor(bubbleWidth / 7);
        var point1Y = bubbleHeight;
        var point2X = Math.floor((bubbleWidth / 7) * 2);
        var point2Y = bubbleHeight;
        var point3X = Math.floor(bubbleWidth / 7);
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

}

//export default IntroScene;