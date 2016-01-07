var C = Crafty;

C.c('Level', {
    init: function(){
        this.requires("2D, DOM, Text, Mouse")
            .attr({ w:150,h:30,z:2, w:150,h:25,z:3})
            .textFont({size:'40px', family:'Lucida Console'})
            .css({'text-align':'left'})
            .unselectable();
    }
    
})

C.scene("Home", function(){
    Difficulty = 1;
    
    C.background('black');
    C.viewport.x = 0;
    C.viewport.y = 0;
    
        //for (var y = 210; y<450; y+=50){
        //    C.e("2D, DOM, Color").color('#333').attr({x:300, y:y, w:200,h:40,z:1});
        //}
    
    C.e('2D, DOM, Color, Keyboard')//HIGHLIGHT
        .color('#FFF')
        .attr({x:310, y:264, w:10, h:10, z:2})
        .bind('KeyDown', function(k){
            if (k.keyCode === 40){ //DOWN ARROW
                if (this.y != 464){
                    Difficulty += 1;
                    this.y += 50;
                    //C.audio.play('beep1',1,0.5);
                }
                else if (this.y === 464){
                    Difficulty = 1;
                    this.y = 264;
                }
            }
            else if (k.keyCode === 38){ //UP ARROW
                if (this.y != 264){
                    Difficulty -= 1;
                    this.y -= 50;
                    //C.audio.play('beep1',1,0.5);
                }
                else if (this.y === 264){
                    Difficulty = 5;
                    this.y = 464;
                }
            }
            else if (k.keyCode === 13||k.keyCode === 32){ //ENTER or SPACE
                if (Difficulty === 5) C.scene('Start');
                else C.scene('MathProblem');
            }
            else if (k.keyCode === 120){ //F9
                CHARACTER = 'images/characters/andrew.png';
                UNLOCKED = 15;
                C.scene('LevelSelect');
            }
        });
    C.e("2D, DOM, Text")
        .text("MATH")
        .attr({x:0, w:800, y:10, h:200})
        .textFont({size:'200px', family:'Lucida Console'})
        .css({'text-align':'center'});
    C.e("2D, DOM, Text")
        .text('Use ARROW KEYS and SPACE to SELECT GRADE LEVEL')
        .attr({x:100, y:225, w:600})
        .textFont({size:'20px', family:'Lucida Console'})
        .css({'text-align': 'center'});
    
    C.e("Level")
        .text("Algebra")
        .textColor('#76ff98')
        .attr({x:325, y:250});
    C.e("Level")
        .text("Geometry")
        .textColor('#d9ff4c')
        .attr({x:325, y:300});
    C.e("Level")
        .text("Trig")
        .textColor('#FFF4E')
        .attr({x:325, y:350});
    C.e("Level")
        .text("PreCalc")
        .textColor("#FFBA3B")
        .attr({x:325, y:400});
    C.e("Level")
        .text("Calculus")
        .textColor("#FF4E4E")
        .attr({x:325, y:450});

});