class PlayerScene extends Phaser.Scene {

    constructor() {
		super({key:'playerScene'});
    }

    init(data){
        this.track = data.track;
    }

    toGame(player) {
        this.scene.switch('gameScene');
        this.bg.destroy();
    }

    toChoose(array, item, variable){
        chosen[variable] = item;

        for(this.i of Object.values(array)){
            if(this.i.name!=item){
                this.i.alpha = 0.3;
            } else {
                this.i.alpha = 1;
            }
        }
        
        if(chosen['chosenPlayer']!='' && chosen['chosenMode']!=''){
            this.toGame(chosen['chosenPlayer']);
        }
    }

    preload() {
        //this.load.image('intro_back', 'assets/backgrounds/intro_room.png');
        for (this.item of chosen['players']){
            this.load.image(this.item, 'assets/characters/'+this.item+'.png');
        }
        for (this.item of chosen['modes']){
            this.load.image(this.item, 'assets/icons/'+this.item+'.png');
        }
    }

    create(){
        this.imagesPlayers = [];
        this.imagesModes = [];

        this.bg = this.add.image(0,0,'intro_back');
        this.bg.setOrigin(0,0);
        this.bg.alpha = 0.7;

        this.player1 = this.createImage('player1', 230, 400, this.imagesPlayers, 'chosenPlayer');
        this.player2 = this.createImage('player2', 430, 400, this.imagesPlayers, 'chosenPlayer');
        this.player3 = this.createImage('player3', 630, 400, this.imagesPlayers, 'chosenPlayer');

        this.rastro = this.createImage('rastro', 980, 320, this.imagesModes, 'chosenMode');
        this.suspense = this.createImage('suspense', 980, 480, this.imagesModes, 'chosenMode');

        this.titlePlayer = this.make.text({
            x: 170,
            y: 170,
            text: "Escolha seu personagem:",
            style: {
                font: "50px 'JackPirateAltPersonal'",
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

        this.titleMode = this.make.text({
            x: 850,
            y: 170,
            text: "Modo de Jogo:",
            style: {
                font: "50px 'JackPirateAltPersonal'",
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

    createImage(item, x, y, array, variable){
        this.imageShadow = this.add.sprite(x+10,y+10, item);
        this.imageShadow.tint = 0x000000;
        this.imageShadow.alpha = 0.8;
        //this.playerShadow.setTintFill(0xffffff);
        this.image = this.add.sprite(x,y, item);
        this.image.name = item;
        this.image.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.toChoose(array, item, variable));

        array.push(this.image);
        return this.image;
    }
}