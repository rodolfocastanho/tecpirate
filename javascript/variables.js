chosen = {
    players: ['player1', 'player2', 'player3'],
    mascots: ['mascot1', 'mascot2', 'mascot3'],
    bgs: ['board_back', 'intro_room', 'board_blank'],
    modes: ['beginner', 'medium', 'advanced'],
    sound: [], // 0-track, 1-pic, 2-volume, 3-picTo, 4-volumeTo
    chosenPlayer: '',
    chosenMascot: '',
    chosenBg: '',
    chosenMode: '', 
    gameInit: true, 
    endInit: true, 
    endInitBuble: true,
    pirateTalk: true,
    configs: {
        'beginner': {
            levelName: 'beginner',
            posColumnsX: 500,
            posColumnsY: 110,
            posColumnsXSpace: 82,
            posColumnsTextSize: '50px',
            posLinesX: 430,
            posLinesY: 180,
            posLinesYSpace: 72,
            posLinesTextSize: '50px',
            wayStepX: 520,
            wayStepY: 200,
            wayJumpStepY: 72,
            titleColumns: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            titleLines: ['1', '2', '3', '4', '5', '6', '7'],
            qtdStones: 2,
            qtdFrogs: 0,
            qtdAlligators: 2,
            hitAreaValues: [85, 75]
        },
        'medium': {
            levelName: 'medium',
            posColumnsX: 470,
            posColumnsY: 110,
            posColumnsXSpace: 62,
            posColumnsTextSize: '30px',
            posLinesX: 420,
            posLinesY: 170,
            posLinesYSpace: 61,
            posLinesTextSize: '30px',
            wayStepX: 482,
            wayStepY: 185,
            wayJumpStepY: 62,
            titleColumns: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
            titleLines: ['1', '2', '3', '4', '5', '6', '7', '8'],
            qtdStones: 3,
            qtdFrogs: 0,
            qtdAlligators: 2,
            hitAreaValues: [70, 62]
        },
        'advanced': {
            levelName: 'advanced',
            posColumnsX: 450,
            posColumnsY: 110,
            posColumnsXSpace: 52,
            posColumnsTextSize: '26px',
            posLinesX: 415,
            posLinesY: 148,
            posLinesYSpace: 52,
            posLinesTextSize: '26px',
            wayStepX: 460,
            wayStepY: 163,
            wayJumpStepY: 52,
            titleColumns: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
            titleLines: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10  '],
            qtdStones: 3,
            qtdFrogs: 0,
            qtdAlligators: 3,
            hitAreaValues: [55, 45]
        }
    }
}

voices  = {
    pirate: {
        intro: {
            0: {
                name: 'p_i_01',
                file: 'assets/sounds/voices/pirate/intro01.mp3',
                text: 'Olá!!! Meu nome é capitão Barba Ruiva!!!',
                time: 6
            },
            1: {
                name: 'p_i_02',
                file: 'assets/sounds/voices/pirate/intro02.mp3',
                text: 'Eu tenho um recado para você.\n Tem um tesouro meu perdido e eu quero encontrar!!!',
                time: 7
            },
            2: {
                name: 'p_i_03',
                file: 'assets/sounds/voices/pirate/intro03.mp3',
                text: 'Muitos já tentaram e poucos conseguiram...',
                time: 4
            },
            3: {
                name: 'p_i_04',
                file: 'assets/sounds/voices/pirate/intro04.mp3',
                text: 'Quero ver se você tá nesta comigo ou não...',
                time: 4
            },
            4: {
                name: 'p_i_05',
                file: 'assets/sounds/voices/pirate/intro05.mp3',
                text: 'Topa embarcar comigo nessa???',
                time: 3
            },
            5: {
                name: 'p_i_06',
                file: 'assets/sounds/voices/pirate/intro06.mp3',
                text: 'Vamos encontrar meu tesouro???\n Hua hua hua huaaa...',
                time: 4.5
            }
        }, 
        board: {
            0: {
                name: 'p_b_01',
                file: 'assets/sounds/voices/pirate/board01.mp3',
                text: 'Para você chegar ao tesouro,\n você só pode andar para frente ou para a diagonal.',
                time: 8,
                image: true,
                image_file: 'assets/icons/intro_moviment.png'
            },
            1: {
                name: 'p_b_02',
                file: 'assets/sounds/voices/pirate/board02.mp3',
                text: 'O primeiro perigo é a pedra.\n Se você pisar nela, você pode escorregar.',
                time: 7,
                image: true,
                image_file: 'assets/icons/intro_stone.png'
            },
            /*
            2: {
                name: 'p_b_03',
                file: 'assets/sounds/voices/pirate/board03.mp3',
                text: 'O segundo perigo é o sapo.\n É de fazer assustar, pois ele pode fazer você voltar uma casa pra trás.',
                time: 10,
                image: true,
                image_file: 'assets/icons/intro_frog.png'
            },
            3: {
                name: 'p_b_04',
                file: 'assets/sounds/voices/pirate/board04.mp3',
                text: 'E o terceiro perigo é o jacaré.\n Se ele encontrar, terá que recomeçar.',
                time: 7.5,
                image: true,
                image_file: 'assets/icons/intro_alligator.png'
            },
            */
            3: {
                name: 'p_b_04',
                file: 'assets/sounds/voices/pirate/board04.mp3',
                text: 'E o segundo perigo é o jacaré.\n Se ele encontrar, terá que recomeçar.',
                time: 7.5,
                image: true,
                image_file: 'assets/icons/intro_alligator.png'
            },
            4: {
                name: 'p_b_06',
                file: 'assets/sounds/voices/pirate/board06.mp3',
                text: 'Quero ver se você é páreo pra essa!!!',
                time: 3
            },
            // TODO: INSERIR NOVOS ÁUDIOS
            5: {
                name: 'p_b_07',
                file: 'assets/sounds/voices/pirate/board08.mp3',
                text: 'Vamos ver agora se você entendeu direitinho as regras?',
                time: 4
            },
            6: {
                name: 'p_b_08',
                file: 'assets/sounds/voices/pirate/board09.mp3',
                text: 'Vou esperar alguns segundos para você responder, ok? Vamos lá?',
                time: 5
            }
        },
        questions: {
            0: {
                name: 'p_q_01',
                file: 'assets/sounds/voices/pirate/question01.mp3',
                text: 'Em que posições você pode andar, se movimentar?',
                time: 8
            },
            1: {
                name: 'p_q_02',
                file: 'assets/sounds/voices/pirate/board01.mp3',
                text: 'Para você chegar ao tesouro,\n você só pode andar para frente ou para a diagonal.',
                time: 8,
                image: true,
                image_file: 'assets/icons/intro_moviment.png'
            },
            2:{
                name: 'p_q_03',
                file: 'assets/sounds/voices/pirate/question02.mp3',
                text: 'O primeiro perigo é a pedra. O que acontece se você encontrá-la?',
                time: 9
            },
            3: {
                name: 'p_q_04',
                file: 'assets/sounds/voices/pirate/board02.mp3',
                text: 'O primeiro perigo é a pedra.\n Se você pisar nela, você pode escorregar.',
                time: 7,
                image: true,
                image_file: 'assets/icons/intro_stone.png'
            },
            /*
            4:{
                name: 'p_q_05',
                file: 'assets/sounds/voices/pirate/question03.mp3',
                text: 'O segundo perigo é o sapo. O que acontece se você encontrá-lo?',
                time: 9
            },
            5: {
                name: 'p_q_06',
                file: 'assets/sounds/voices/pirate/board03.mp3',
                text: 'O segundo perigo é o sapo.\n É de fazer assustar, pois ele pode fazer você voltar uma casa pra trás.',
                time: 10,
                image: true,
                image_file: 'assets/icons/intro_frog.png'
            },
            */
            6:{
                name: 'p_q_07',
                file: 'assets/sounds/voices/pirate/question04.mp3',
                text: 'O segundo perigo é o jacaré. O que acontece se você encontrá-lo?',
                time: 9
            },
            7: {
                name: 'p_q_08',
                file: 'assets/sounds/voices/pirate/board04.mp3',
                text: 'E o segundo perigo é o jacaré.\n Se ele encontrar, terá que recomeçar.',
                time: 7.5,
                image: true,
                image_file: 'assets/icons/intro_alligator.png'
            },
            8: {
                name: 'p_q_09',
                file: 'assets/sounds/voices/pirate/question05.mp3',
                text: 'Agora sim. Clique no meu mapa e vamos começar, huahuahua...',
                time: 5,
                image: true,
                next: true,
                image_file: 'assets/icons/intro_next.png'
            }
        }
    }, 
    mascot1: {
        intro: {
            0: {
                name: 'm_i1_01',
                file: 'assets/sounds/voices/mascot/mascot1/m1_intro01.mp3',
                text: 'Olá. Eu sou o Sussuro!!!',
                time: 2.2
            },
            1: {
                name: 'm_i1_02',
                file: 'assets/sounds/voices/mascot/mascot1/m1_intro02.mp3',
                text: 'Vou te acompanhar nesse jogo!!!',
                time: 2
            }
        }, 
        error_animal: {
            0: {
                name: 'm_e1_stone',
                file: 'assets/sounds/voices/mascot/mascot1/m1_error_stone.mp3',
                text: 'Aaaiiiii... a pedraaaa...',
                time: 2.4
            },
            1: {
                name: 'm_e1_frog',
                file: 'assets/sounds/voices/mascot/mascot1/m1_error_frog.mp3',
                text: 'Oooouuuu... o sapoooo...',
                time: 2.8
            },    
            2: {
                name: 'm_e1_alligator_01',
                //file: 'assets/sounds/voices/mascot/error_alligator.mp3',
                file: 'assets/sounds/voices/mascot/mascot1/m1_error_alli01.mp3',
                text: 'Oh nãããoooo... o jacarééééé...',
                time: 3
            },
            3: {
                name: 'm_e1_alligator_02',
                //file: 'assets/sounds/voices/mascot/error_alligator.mp3',
                file: 'assets/sounds/voices/mascot/mascot1/m1_error_alli02.mp3',
                text: 'Vamos ter que recomeçar...',
                time: 2
            },
            4: {
                name: 'm_e1_alligator_03',
                //file: 'assets/sounds/voices/mascot/error_alligator.mp3',
                file: 'assets/sounds/voices/mascot/mascot1/m1_error_alli03.mp3',
                text: 'Bora lá!?',
                time: 1.3
            }
        }, 
        error_generic: {
            0: {
                name: 'm_eg1_01',
                file: 'assets/sounds/voices/mascot/mascot1/m1_error_gen01.mp3',
                text: 'Noossaaaa... Essa me assustou...',
                time: 3.2
            },
            1: {
                name: 'm_eg1_02',
                file: 'assets/sounds/voices/mascot/mascot1/m1_error_gen02.mp3',
                text: 'Tem certeza que é por aí???',
                time: 2.3
            },
            2: {
                name: 'm_eg1_03',
                file: 'assets/sounds/voices/mascot/mascot1/m1_error_gen03.mp3',
                text: 'Preste atenção...',
                time: 1.6
            }
        },
        encourage: {
            0: {
                name: 'm_c1_01',
                file: 'assets/sounds/voices/mascot/mascot1/m1_encourage01.mp3',
                text: 'Não desista!!!',
                time: 1.5
            },
            1: {
                name: 'm_c1_02',
                file: 'assets/sounds/voices/mascot/mascot1/m1_encourage02.mp3',
                text: 'Vá em frente!!!',
                time: 1.6
            },
            2: {
                name: 'm_c1_03',
                file: 'assets/sounds/voices/mascot/mascot1/m1_encourage03.mp3',
                text: 'Você consegue!!!',
                time: 1.7
            },
            3: {
                name: 'm_c1_04',
                file: 'assets/sounds/voices/mascot/mascot1/m1_encourage04.mp3',
                text: 'Cuidado!!!',
                time: 1.2
            },
            4: {
                name: 'm_c1_05',
                file: 'assets/sounds/voices/mascot/mascot1/m1_encourage05.mp3',
                text: 'Uuuhhh... Essa foi por pouco!!!',
                time: 2
            },
            5: {
                name: 'm_c1_06',
                file: 'assets/sounds/voices/mascot/mascot1/m1_encourage06.mp3',
                text: 'Ainda bem que não caiu!!!',
                time: 1.9
            },
            6: {
                name: 'm_c1_07',
                file: 'assets/sounds/voices/mascot/mascot1/m1_encourage07.mp3',
                text: 'Escorrega mas não cai!!!',
                time: 2
            },
            7: {
                name: 'm_c1_08',
                file: 'assets/sounds/voices/mascot/mascot1/m1_encourage08.mp3',
                text: 'Nossa, que susto!!!',
                time: 2
            },
            8: {
                name: 'm_c1_09',
                file: 'assets/sounds/voices/mascot/mascot1/m1_encourage09.mp3',
                text: 'Pensa bem!!!',
                time: 1.6
            }
        },
        stimulate: {
            0: {
                name: 'm_t1_01',
                file: 'assets/sounds/voices/mascot/mascot1/m1_stimulate01.mp3',
                text: 'Você fez uma ótima escolha!!!',
                time: 2.8
            },
            1: {
                name: 'm_t1_02',
                file: 'assets/sounds/voices/mascot/mascot1/m1_stimulate02.mp3',
                text: 'Você está indo super bem!!!',
                time: 2.5
            },
            2: {
                name: 'm_t1_03',
                file: 'assets/sounds/voices/mascot/mascot1/m1_stimulate03.mp3',
                text: 'Falta muito pouco!!!',
                time: 2.4
            },
            3: {
                name: 'm_t1_04',
                file: 'assets/sounds/voices/mascot/mascot1/m1_stimulate04.mp3',
                text: 'Você está cada vez mais perto!!!',
                time: 2.4
            },
            4: {
                name: 'm_t1_05',
                file: 'assets/sounds/voices/mascot/mascot1/m1_stimulate05.mp3',
                text: 'Uaaauuu!!! Mandou bemmmm!!!',
                time: 2.4
            }
        },
        victory: {
            0: {
                name: 'm_v1_01',
                file: 'assets/sounds/voices/mascot/mascot1/m1_victory01.mp3',
                text: 'Parabéns!!! Você conseguiuuuuu!!!',
                time: 3
            },
            1: {
                name: 'm_v1_02',
                file: 'assets/sounds/voices/mascot/mascot1/m1_victory02.mp3',
                text: 'Uaaauuu!!! Você acabou de descobrir o tesouro!!!',
                time: 4.4
            },
            2: {
                name: 'm_v1_03',
                file: 'assets/sounds/voices/mascot/mascot1/m1_victory03.mp3',
                text: 'Meus parabéééénnnsssss!!!',
                time: 2.8
            }
        },
        final: {
            0: {
                name: 'm_f1_01',
                file: 'assets/sounds/voices/mascot/mascot1/m1_final01.mp3',
                text: 'E pra você? O que seria o seu maior tesouro???',
                time: 5
            }
        },
        teaching: {
            1: {
                name: 'm_tc1_01',
                file: 'assets/sounds/voices/mascot/mascot1/m1_teach01.mp3',
                text: 'Você precisa dar o primeiro passo quando tem que fazer algo que sua mãe pediu como tomar banho ou escovar os dentes ou quando tem que fazer sua lição. Você é rápido para fazer as suas coisas?',
                time: 15
            },
            6: {
                name: 'm_tc1_06',
                file: 'assets/sounds/voices/mascot/mascot1/m1_teach06.mp3',
                text: 'Legal, agora coloque o seu nome aqui embaixo que eu tenho uma surpresa para você.',
                time: 5,
                final: true
            }
        }
    },
    mascot2: {
        intro: {
            0: {
                name: 'm_i2_01',
                file: 'assets/sounds/voices/mascot/mascot2/m2_intro01.mp3',
                text: 'Olá. Eu sou Zezé e vou te acompanhar!!!',
                time: 3.5
            }
        }, 
        error_animal: {
            0: {
                name: 'm_e2_stone',
                file: 'assets/sounds/voices/mascot/mascot2/m2_error_stone.mp3',
                text: 'Cuidado que escorrega...',
                time: 2
            },
            1: {
                name: 'm_e2_frog',
                file: 'assets/sounds/voices/mascot/mascot2/m2_error_frog.mp3',
                text: 'Sapo à vistaa...',
                time: 2
            },    
            2: {
                name: 'm_e2_alligator_01',
                file: 'assets/sounds/voices/mascot/mascot2/m2_error_alli01.mp3',
                text: 'Ah não... O jacaré...',
                time: 2.4
            },
            3: {
                name: 'm_e2_alligator_02',
                file: 'assets/sounds/voices/mascot/mascot2/m2_error_alli02.mp3',
                text: 'Puxa, voltou para trás...',
                time: 2.3
            },
            4: {
                name: 'm_e2_alligator_03',
                //file: 'assets/sounds/voices/mascot/error_alligator.mp3',
                file: 'assets/sounds/voices/mascot/mascot2/m2_error_alli03.mp3',
                text: 'Ai, ai... tudo de novo...',
                time: 2.4
            }
        }, 
        error_generic: {
            0: {
                name: 'm_eg2_01',
                file: 'assets/sounds/voices/mascot/mascot2/m2_error_gen01.mp3',
                text: 'Não desanima não...',
                time: 1.5
            },
            1: {
                name: 'm_eg2_02',
                file: 'assets/sounds/voices/mascot/mascot2/m2_error_gen02.mp3',
                text: 'Continue tentando!!!',
                time: 2
            },
            2: {
                name: 'm_eg2_03',
                file: 'assets/sounds/voices/mascot/mascot2/m2_error_gen03.mp3',
                text: 'Tô de olho em você...',
                time: 1.6
            }
        },
        encourage: {
            0: {
                name: 'm_c2_01',
                file: 'assets/sounds/voices/mascot/mascot2/m2_encourage01.mp3',
                text: 'Que sorte!!!',
                time: 1.8
            }
        },
        stimulate: {
            0: {
                name: 'm_t2_01',
                file: 'assets/sounds/voices/mascot/mascot2/m2_stimulate01.mp3',
                text: 'Você está indo muito bem!!!',
                time: 2.2
            },
            1: {
                name: 'm_t2_02',
                file: 'assets/sounds/voices/mascot/mascot2/m2_stimulate02.mp3',
                text: 'O Capitão Barba Ruiva vai ficar orgulhoso!!!',
                time: 3.7
            }
        },
        victory: {
            0: {
                name: 'm_v2_01',
                file: 'assets/sounds/voices/mascot/mascot2/m2_victory01.mp3',
                text: 'Uaaauuuuu!!!',
                time: 1.6
            }
        },
        final: {
            0: {
                name: 'm_f2_01',
                file: 'assets/sounds/voices/mascot/mascot2/m2_final01.mp3',
                text: 'E pra você? Qual o seu maior tesouro???',
                time: 3.5
            }
        },
        teaching: {
            1: {
                name: 'm_tc2_01',
                file: 'assets/sounds/voices/mascot/mascot2/m2_teach01.mp3',
                text: 'Excelente!!! É muito importante e corajoso reconhecer nossos sentimentos. Mas agora, será importante você conversar com um adulto para conseguir lidar com aqueles que são mais difíceis. Quem é a pessoa que você confia para contar suas coisas?',
                time: 20
            },
            6: {
                name: 'm_tc2_06',
                file: 'assets/sounds/voices/mascot/mascot2/m2_teach06.mp3',
                text: 'Legal, agora coloque o seu nome aqui embaixo que eu tenho uma surpresa para você.',
                time: 6.5,
                final: true
            }
        }
    },
    mascot3: {
        intro: {
            0: {
                name: 'm_i3_01',
                file: 'assets/sounds/voices/mascot/mascot3/m3_intro01.mp3',
                text: 'Olá. Meu nome é sentinela...',
                time: 1.8
            },
            1: {
                name: 'm_i3_02',
                file: 'assets/sounds/voices/mascot/mascot3/m3_intro02.mp3',
                text: 'E vou te acompanhar!!!',
                time: 1.3
            }
        }, 
        error_animal: {
            0: {
                name: 'm_e3_stone',
                file: 'assets/sounds/voices/mascot/mascot3/m3_error_stone.mp3',
                text: 'Eeeeiii, essa pedra...',
                time: 2
            },
            1: {
                name: 'm_e3_frog',
                file: 'assets/sounds/voices/mascot/mascot3/m3_error_frog.mp3',
                text: 'Não desanime, hein!!!',
                time: 1.5
            },    
            2: {
                name: 'm_e3_alligator_01',
                file: 'assets/sounds/voices/mascot/mascot3/m3_error_alli01.mp3',
                text: 'Ai, ai, ai... O jacaré não!!!',
                time: 2.8
            },
            3: {
                name: 'm_e3_alligator_02',
                file: 'assets/sounds/voices/mascot/mascot3/m3_error_alli02.mp3',
                text: 'É difícil, mas vai dar certo!!!',
                time: 2.3
            },
            4: {
                name: 'm_e3_alligator_03',
                file: 'assets/sounds/voices/mascot/mascot3/m3_error_alli03.mp3',
                text: 'Você tem mais chances!!!',
                time: 1.7
            }
        }, 
        error_generic: {
            0: {
                name: 'm_eg3_01',
                file: 'assets/sounds/voices/mascot/mascot3/m3_error_gen01.mp3',
                text: 'Quase caiu hein...',
                time: 1.3
            },
            1: {
                name: 'm_eg3_02',
                file: 'assets/sounds/voices/mascot/mascot3/m3_error_gen02.mp3',
                text: 'Estou de olho em você...',
                time: 1.5
            }
        },
        encourage: {
            0: {
                name: 'm_c3_01',
                file: 'assets/sounds/voices/mascot/mascot3/m3_encourage01.mp3',
                text: 'Você está quase chegando...',
                time: 2.3
            }
        },
        stimulate: {
            0: {
                name: 'm_t3_01',
                file: 'assets/sounds/voices/mascot/mascot3/m3_stimulate01.mp3',
                text: 'Vamos lá, que o tesouro está no papo!!!',
                time: 2.7
            }
        },
        victory: {
            0: {
                name: 'm_v3_01',
                file: 'assets/sounds/voices/mascot/mascot3/m3_victory01.mp3',
                text: 'Mas não é que você tem coragem!!!',
                time: 2.7
            }
        },
        final: {
            0: {
                name: 'm_f3_01',
                file: 'assets/sounds/voices/mascot/mascot3/m3_final01.mp3',
                text: 'E pra você? Qual o seu maior tesouro???',
                time: 3
            }
        },
        teaching: {
            1: {
                name: 'm_tc3_01',
                file: 'assets/sounds/voices/mascot/mascot3/m3_teach01.mp3',
                text: 'Essa caça ao tesouro, te ajudou a ver que muitas vezes precisamos agir de modo diferente para conseguirmos as coisas. Você é uma pessoa flexível? É fácil mudar o jeito de fazer as coisas?',
                time: 15
            },
            6: {
                name: 'm_tc3_06',
                file: 'assets/sounds/voices/mascot/mascot3/m3_teach06.mp3',
                text: 'Legal, agora coloque o seu nome aqui embaixo que eu tenho uma surpresa para você.',
                time: 6.5,
                final: true
            }
        }
    }
};

effects = {
    board: {
        error: {
            0: {
                name: 'error_stone',
                file: 'assets/sounds/effects/error_stone.mp3',
                time: 1
            },
            1: {
                name: 'error_frog',
                file: 'assets/sounds/effects/error_frog.mp3',
                time: 1
            },
            2: {
                name: 'error_alligator',
                file: 'assets/sounds/effects/error_alligator.mp3',
                time: 2
            }
        }
    }
};

wayToGoCopy = {};
gamePosX = 300;
mistakesFollowed = 0;
wayPositions = [];
stepPositions = [];
lastStepOK = null;