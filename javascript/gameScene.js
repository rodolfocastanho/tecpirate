class GameScene extends Phaser.Scene {

	constructor() {
		super({key : 'gameScene'});
    }

    nextTextIntro(next_scene) {
        this.board.destroy();
        this.bg.destroy();
        this.player.destroy();
        this.mascot.destroy();
        this.wayToGo.destroy();
        this.finalgoldenbox.destroy();
        this.way.destroy();
        this.scene.start(next_scene);
    }

    reloadGame(board){
        this.board.destroy();
        this.bg.destroy();
        this.player.destroy();
        this.mascot.destroy();
        this.wayToGo.destroy();
        this.way.destroy();
        this.scene.switch(board);
    }

	init() {
        this.configs = chosen['configs'][chosen['chosenMode']];
		this.pirate;
        this.gameOver = false;
        this.i;
        this.w;
        this.levelName = this.configs['levelName'];
        this.posColumnsX = this.configs['posColumnsX'];
        this.posColumnsXTemp = this.configs['wayStepX'];
        this.posColumnsY = this.configs['posColumnsY'];
        this.posColumnsXSpace = this.configs['posColumnsXSpace'];
        this.posColumnsTextSize = this.configs['posColumnsTextSize'];
        this.posLinesX = this.configs['posLinesX'];
        this.posLinesY = this.configs['posLinesY'];
        this.posLinesYSpace = this.configs['posLinesYSpace'];
        this.posLinesTextSize = this.configs['posLinesTextSize'];
        this.wayStepX = this.configs['wayStepX'];
        this.wayStepY = this.configs['wayStepY'];
        this.wayJumpStepY = this.configs['wayJumpStepY'];
        this.titleColumns = this.configs['titleColumns'];
        this.titleLines = this.configs['titleLines'];
        this.qtdStones = this.configs['qtdStones'];
        this.qtdFrogs = this.configs['qtdFrogs'];
        this.qtdAlligators = this.configs['qtdAlligators'];
        this.hitAreaValues = this.configs['hitAreaValues'];
        wayPositions = [];
        stepPositions = [];
        lastStepOK = null;
        this.lastStepOkWay = [];
        this.mistakesFollowed = 0;
        this.wayToGo = this.add.group();
        this.randomWay;
        this.way;
        this.help_board;
        this.help_close;
	};

	preload() {
        this.wsy = this.wayStepY;
        this.wjsy = this.wayJumpStepY;
        for (this.i = 0; this.i < 7; this.i++) {
            stepPositions.push(this.wsy);
            this.wsy += this.wjsy;
        };
	}

	create() {
        this.bg = this.add.image(0,0,chosen['chosenBg']);
        this.bg.setOrigin(0,0);
        this.bg.alpha = 0.5;

        this.board = this.createImage('board', 800,386, this.board, this.boardShadow);
        this.board.alpha = 0.6;

        this.player = this.createImage(chosen['chosenPlayer'], 140, 500, this.player, this.playerShadow);
        this.mascot = this.createImage(chosen['chosenMascot'], 120, 150, this.mascot, this.mascotShadow);

        this.toolConfigShadow = this.add.sprite(1062,37, 'tool_config');
        this.toolConfigShadow.tint = 0x000000;
        this.toolConfigShadow.alpha = 0.8;
        this.toolConfig = this.add.sprite(1060,35, 'tool_config');
        this.toolConfig.setInteractive({ useHandCursor: true });
        this.toolConfig.on('pointerdown', () => this.reloadGame('playerScene'));

        this.toolHelpShadow = this.add.sprite(1117,37, 'tool_help');
        this.toolHelpShadow.tint = 0x000000;
        this.toolHelpShadow.alpha = 0.8;
        this.toolHelp = this.add.sprite(1115,35, 'tool_help');
        this.toolHelp.setInteractive({ useHandCursor: true });
        this.toolHelp.on('pointerdown', () => this.helpIn());

        this.controlMusic(chosen['sound'][3], chosen['sound'][4], chosen['sound'][0], chosen['sound'][1], chosen['sound'][2]);

        this.toolReloadShadow = this.add.sprite(1227,37, 'tool_reload');
        this.toolReloadShadow.tint = 0x000000;
        this.toolReloadShadow.alpha = 0.8;
        this.toolReload = this.add.sprite(1225,35, 'tool_reload');
        this.toolReload.setInteractive({ useHandCursor: true });
        this.toolReload.on('pointerdown', () => this.scene.restart());
        //this.goldenbox = this.createImage('goldenbox', 1140, 530);

        if(chosen['gameInit']){
            chosen['gameInit'] = false;
            this.scene.restart();
        } else {
            this.playMascot(Object.values(voices[chosen['chosenMascot']]['intro']));
        }

        this.titleColumns = this.configs['titleColumns'];
        this.titleLines = this.configs['titleLines'];
        for(this.col of this.titleColumns){
            this.add.text(this.posColumnsX, this.posColumnsY, this.col, {fontSize: this.posColumnsTextSize, fill: '#ffffff', stroke: '#000000', strokeThickness: 2 });
            //this.createText(this.col, this.posColumnsTextSize, this.posColumnsX, this.posColumnsY);
            this.posColumnsX += this.posColumnsXSpace;
        }
        for(this.line of this.titleLines){
            this.add.text(this.posLinesX, this.posLinesY, this.line, {fontSize: this.posLinesTextSize, fill: '#ffffff', stroke: '#000000', strokeThickness: 2 });
            //this.createText(this.line, this.posLinesTextSize, this.posLinesX, this.posLinesY);
            this.posLinesY += this.posLinesYSpace;
        }
        
        for (this.i = 0; this.i < this.titleColumns.length; this.i++) {
            wayPositions.push(this.wayStepX);
            this.way = this.add.group({
                key: 'wayStep_'+this.levelName,
                repeat: this.titleLines.length-1,
                setXY: { x: this.wayStepX, y: this.wayStepY, stepY: this.wayJumpStepY },
                hitArea: new Phaser.Geom.Rectangle(0, 0, this.hitAreaValues[0], this.hitAreaValues[1]),
                hitAreaCallback: Phaser.Geom.Rectangle.Contains
            });

            this.way.children.iterate(function(child){
                child.error = false;
                child.typeError = 'none';
                child.input.enabled = false;
                child.passed = false;
            });

            for (this.w = 0; this.w < 1; this.w++) {
                for(this.stone = 0; this.stone < this.qtdStones; this.stone++){recurseError(this.way, 'stone');}
                for(this.frog = 0; this.frog < this.qtdFrogs; this.frog++){recurseError(this.way, 'frog');}
                for(this.alligator = 0; this.alligator < this.qtdAlligators; this.alligator++){recurseError(this.way, 'alligator');}

                function recurseError(way, typeError) {
                    var position = Math.floor(Math.random() * way.children.entries.length);
                    var randomWay = (way.children.entries[position]);
                    if(randomWay.error == false){
                        randomWay.error = true;
                        randomWay.typeError = typeError;
                    } else {
                        recurseError(way, typeError);
                    };
                };
                //randomWay.loadTexture('bomb', 0);
            };

            this.wayToGo.children.entries = this.wayToGo.children.entries.concat(this.way.children.entries);
            //delete this.way;
            
            this.wayStepX += this.posColumnsXSpace;
        };
                                                                                                                                                                                            
        this.input.on('gameobjectover', function (pointer, obj) {
            obj.setTintFill(0xffffff);
        });
        this.input.on('gameobjectout', function (pointer, obj) {
            obj.clearTint();
        });
        this.input.on('gameobjectdown', (pointer, obj)=>this.verifyWay(pointer, obj));

       wayToGoCopy = this.wayToGo;
       wayToGoCopy.children.entries.filter(function(obj){
           return obj.x == wayPositions[0]
        }).forEach(function(item, index){
            item.input.enabled = true
        });
    }
    
    
    async verifyWay(pointer, obj){
        this.mistakesFollowed += 1;
        obj.passed = true;

        //PRIMEIRA LINHA
        if((obj.typeError != 'none' && this.mistakesFollowed < 3)){
            // && (obj.typeError != 'none' && this.mistakesFollowed < 2 && obj.y != stepPositions[0])

            var lastStepOkWayTemp = (this.lastStepOkWay.length-2 <   0) ? [[], []] : this.lastStepOkWay[this.lastStepOkWay.length-2];

            var posColumnsXTemp = this.posColumnsXTemp;
            var wayNowX = [wayPositions[wayPositions.indexOf(obj.x)]].filter(Number);

            obj.input.enabled = false;
            this.cameras.main.shake(100);
            switch(obj.typeError){
                case 'stone':
                    obj.setTexture('wayStone_'+this.levelName);
                    this.errorSoundStone = this.sound.add('errorStone');
                    this.errorSoundStone.play();
                    /*
                    if(Math.floor(Math.random() * 2) == 1){
                        this.stoneSound = Object.values(Object.assign({}, voices[chosen['chosenMascot']]['error_generic'], voices[chosen['chosenMascot']]['encourage']));
                        this.playMascot([this.stoneSound[Math.floor(Math.random() * this.stoneSound.length)]]);
                    } else {
                        this.errorSoundStone = this.sound.add('errorStone');
                        this.errorSoundStone.play();
                    }
                    */
                    break;
                case 'frog':
                    wayNowX.forEach(function(itemWay, indexWay){
                        wayToGoCopy.children.entries.filter(function(objWay){
                            return objWay.x == itemWay
                        }).forEach(function(item, index){
                            item.input.enabled = false;
                        });
                    });

                    var wayStepTemp = 'wayStep_'+this.levelName;
                    obj.setTexture('wayFrog_'+this.levelName);
                    await this.playMascot([voices[chosen['chosenMascot']]['error_animal'][1]]);

                    var ways = [wayPositions[wayPositions.indexOf(obj.x)-2], wayPositions[wayPositions.indexOf(obj.x)-1], wayPositions[wayPositions.indexOf(obj.x)]].filter(Number);
                    //var waysFinal = [wayPositions[wayPositions.indexOf(obj.x)-2]].filter(Number);
                    ways.forEach(function(itemWay, indexWay){
                        wayToGoCopy.children.entries.filter(function(objWay){
                            return objWay.x == itemWay
                        }).forEach(function(item, index){
                            item.input.enabled = false;
                            item.setTexture(wayStepTemp);
                            item.alpha = 1
                            
                            if((lastStepOkWayTemp[0].includes(item.x) && lastStepOkWayTemp[1].includes(item.y)) || item.x == posColumnsXTemp){
                                item.input.enabled = true;
                            } else {
                                item.input.enabled = false;
                            }
                            
                        });
                    });                    
                    break;
                case 'alligator':
                    wayNowX.forEach(function(itemWay, indexWay){
                        wayToGoCopy.children.entries.filter(function(objWay){
                            return objWay.x == itemWay
                        }).forEach(function(item, index){
                            item.input.enabled = false;
                        });
                    });

                    var wayStepTemp = 'wayStep_'+this.levelName;
                    obj.setTexture('wayAllig_'+this.levelName);

                    this.alligatorSound = [];
                    this.alligatorSound.push.apply(this.alligatorSound, [voices[chosen['chosenMascot']]['error_animal'][2]]);
                    await this.playMascot(this.alligatorSound);

                    wayToGoCopy.children.entries.filter(function(objWay){
                        return objWay.x == wayPositions[wayPositions.indexOf(obj.x)+1]
                    }).forEach(function(item, index){
                        item.input.enabled = true;        
                    });

                    wayPositions.slice(0, obj.x+1).forEach(function(itemWay, indexWay){
                        wayToGoCopy.children.entries.filter(function(objWay){
                            return objWay.x == itemWay
                        }).forEach(function(item, index){
                            item.setTexture(wayStepTemp);
                            item.alpha = 1
                            if(item.x == wayPositions[0]){
                                item.input.enabled = true;
                            } else {
                                item.input.enabled = false;
                            }       
                        });
                    });
                    break;
            }
        } else {
            this.mistakesFollowed = 0;
            lastStepOK = obj;
            this.lastStepOkWay.push([
                [obj.x],
                [stepPositions[stepPositions.indexOf(obj.y)-1], 
                    stepPositions[stepPositions.indexOf(obj.y)], 
                    stepPositions[stepPositions.indexOf(obj.y)+1]].filter(Number)
            ]);
            obj.setTexture('wayOk_'+this.levelName);
            obj.typeError = 'none';

            wayToGoCopy.children.entries.filter(function(objWay){
                return objWay.x == obj.x
             }).forEach(function(item, index){
                 item.input.enabled = false;
                 if(item.y != obj.y){
                    item.alpha = 0.3;
                 }         
             });

            if(obj.x == wayPositions[wayPositions.length - 1]){
                // End of Game                
                this.finalSoundVictory = this.sound.add('finalVictory');
                this.finalSoundVictory.play();

                this.finalgoldenboxShadow = this.add.sprite(650, 360, 'finalgoldenbox');
                this.finalgoldenboxShadow.tint = 0x000000;
                this.finalgoldenboxShadow.alpha = 0.8;
                //this.finalgoldenboxShadow.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.nextTextIntro('endScene'));

                this.finalgoldenbox = this.add.sprite(640, 350, 'finalgoldenbox');
                //this.finalgoldenbox.alpha = 1;
                this.tweens.add({
                    targets: this.finalgoldenbox,
                    alphaTopLeft: { value: 0.5, duration: 100 },
                    alphaBottomRight: { value: 0.5, duration: 100 },
                    alphaBottomLeft: { value: 0.5, duration: 100, delay: 0 },
                    yoyo: true,
                    loop: 5
                });

                            // Tool Bar
                this.toolJumpShadow = this.add.sprite(1162,614, 'tool_jump_2');
                this.toolJumpShadow.tint = 0x000000;
                this.toolJumpShadow.alpha = 0.8;
                this.toolJumpShadow.setScale(1.5);
                this.toolJump = this.add.sprite(1160,612, 'tool_jump_2');
                this.toolJump.setScale(1.5);
                this.toolJump.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.nextTextIntro('endScene'));
                

                this.playMascot([Object.values(voices[chosen['chosenMascot']]['victory'])[Math.floor(Math.random() * Object.values(voices[chosen['chosenMascot']]['victory']).length)]]);

            } else {
                var ways = [stepPositions[stepPositions.indexOf(obj.y)-1], stepPositions[stepPositions.indexOf(obj.y)], stepPositions[stepPositions.indexOf(obj.y)+1]].filter(Number);
                wayToGoCopy.children.entries.filter(function(objWay){
                    return objWay.x == wayPositions[wayPositions.indexOf(obj.x)+1]
                 }).forEach(function(item, index){
                     if(ways.includes(item.y)){
                        item.input.enabled = true;
                     }       
                 });
            }
        }        
    }

    createImage(item, x, y, object, objectShadow){
        objectShadow = this.add.sprite(x+10,y+10, item);
        objectShadow.tint = 0x000000;
        objectShadow.alpha = 0.8;
        
        object = this.add.sprite(x,y, item);
        object.name = item;
        
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

    sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
    }

    async playMascot(objectVoices) {
        for(this.conversation of objectVoices){
            this.bubble = this.createSpeechBubble(150, 30, 350, 70, this.conversation['text']);
            this.mascotVoice = this.sound.add(this.conversation['name']);
            this.mascotVoice.play();

            await this.sleep(this.conversation['time']*1000);
            this.bubble[0].destroy();
            this.bubble[1].destroy();
            this.mascotVoice.destroy();
        }
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

    helpIn(){
        this.help_board = this.add.image(0,0,'help_board');
        this.help_board.setOrigin(0,0);

        this.help_close = this.add.sprite(1220,45, 'help_close');
        this.help_close.setInteractive({ useHandCursor: true });
        this.help_close.on('pointerdown', () => this.helpOut());

        this.toolHelp.destroy();
    }
    helpOut(){
        this.help_board.destroy();
        this.help_close.destroy();
        this.toolHelp = this.add.sprite(1115,35, 'tool_help');
        this.toolHelp.setInteractive({ useHandCursor: true });
        this.toolHelp.on('pointerdown', () => this.helpIn());
    }

}

//export default GameScene;