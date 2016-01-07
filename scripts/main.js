var C = C;

window.onload = function () {
    sounds = true;
    $(document).keypress(function(event){if (event.keyCode == 8) {return false;}});
    $(document).keydown(function(event){if (event.keyCode == 8) {return false;}});
    $('#sound').click(function(){
        if($(this).text() == "Sound ON"){
            $(this).text("Sound OFF");
            sounds = false;
        }
        else {
            $(this).text("Sound ON");
            sounds = true;
        }
    });
	C.init(800,500);
    C.canvas.init();
    C.pixelart(true);
    C.audio.add({jump: ['sounds/jump.mp3', 'sounds/jump.ogg', 'sounds/jump.wav'],
        page_collect: ['sounds/paper_collect.mp3','sounds/paper_collect.ogg','sounds/paper_collect.wav'],
        radio_message: ['sounds/radio.mp3','sounds/radio.wav'],
        dead:['sounds/dead.mp3','sounds/dead.wav'],
        pain_sound:['sounds/pain.mp3','sounds/pain.wav'],
        victory : ['sounds/victory.mp3', 'sounds/victory.wav'],
        beep1 : ['sounds/beep1.mp3', 'sounds/beep1.wav'],
        explosion : ['sounds/explosion.mp3', 'sounds/explosion.wav']
    });
    C.sprite("images/sprite.png", {
        page : [0,0,20,20],
        heart : [0,20,20,20],
        lord_head : [120,0,40,40],
        deskTop:[20,0,60,3],
        deskFrame:[20,3,60,37],
        books:[80,0,20,20],
        pop_quiz : [100,0,20,20],
        wrestlerTop:[20,40,60,3],
        wrestlerFrame:[20,43,60,37],
        gatorade:[80,40,20,20],
        ko : [100,40,20,20],
        cardTop:[20,80,60,3],cardFrame:[20,83,60,37],
        redDice:[80,80,20,20],
        whiteDice:[80,100,20,20],
        redPiece:[100,80,20,20],grayPiece:[100,100,20,20],greenPiece:[120,80,20,20],yellowPiece:[120,100,20,20],bluePiece:[140,80,20,20],whitePiece:[140,100,20,20],
        mathTop : [20,120,60,3], mathFrame: [20,123,60,37],
        calcx : [80,120,20,20],
        error : [100,120,20,20],
        clashTop : [20,160,60,3], clashFrame: [20,163,60,37],
        ladder : [80,160,20,20]
});
	C.scene("Home");
};