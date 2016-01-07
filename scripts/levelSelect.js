var C = Crafty;

C.c('WorldTitle', {
    init: function(){
        this.requires("2D, DOM, Text")
            .attr({w:250,h:25,z:4})
            .textFont({size:'25px', family:'Lucida Console'})
            .css({'text-align':'center','text-decoration':'underline'})
            .unselectable();
    }
    
});
C.c('LevelTitle', {
    init: function(){
        this.requires("2D, DOM, Text")
            .attr({w:200, h:25, z:4})
            .textFont({size:'20px', family:'Lucida Console'})
            .textColor('black')
            .css({"text-align":'center'})
            .unselectable();
    }
});

C.scene("LevelSelect", function(){
var loading_message = C.e("2D, DOM, Text")
        .text('Loading...')
        .attr({x:100, y:200, w:600})
        .textFont({size:'40px', family:'Lucida Console'})
        .css({'text-align': 'center'});
    C.load(['images/small_lords_room.png', 'images/small_calculator.png', 'images/small_fight_club.png', 'images/small_risk.png', 'images/mystery.png'], function(){
        loading_message.alpha=0;
    var w = 0;
    Level = 0;
    
    C.background('black');
    C.viewport.x = 0;
    
        for (var x = 140; x<1270; x+=270){
            C.e("2D, Canvas, Color").color('#111').attr({x:x, y:25, w:250,h:450,z:1});
        }
    C.e('2D, Canvas, Color, Keyboard')//WORLD HIGHLIGHT
        .color('#444')
        .attr({x:140, y:25, w:250, h:450, z:2})
        .bind('KeyDown', function(k){
            if (k.keyCode === 37){ //LEFT ARROW
                if (this.x != 140){
                    w -= 1;
                    Level = 1;
                    this.x -= 270;
                    //C.audio.play('beep1',1,0.5);
                    if (this.x <= -C.viewport.x+100){
                        C.viewport.x += 270
                    }
                }
            }
            else if (k.keyCode === 39){ //RIGHT ARROW
                if (this.x != 1220){
                    w += 1;
                    Level = 1;
                    this.x += 270;
                    //C.audio.play('beep1',1,0.5);
                    if (this.x >= -C.viewport.x+600){
                        C.viewport.x -= 270;
                    }
                }
            }
        });
    C.e('2D, Canvas, Color, Keyboard')//LEVEL HIGHLIGHT
        .color('#BBB')
        .attr({x:150, y:210, w:230, h:40, z:3})
        .bind("EnterFrame", function(){
            if (w === 0){
                this.x = 150;
                //this.y = 210;
            }
            else if (w === 1){
                this.x = 420;
                //this.y = 210;
            }
            else if (w === 2){
                this.x = 690;
                //this.y = 210;
            }
            else if (w === 3){
                this.x = 960;
            }
            else if (w === 4){
                this.x = 1230;
            }
        })
        .bind("KeyDown", function(k){
            if (k.keyCode === 37||k.keyCode === 39){
                this.y=210;
                Level = 0;
            }
            if (k.keyCode === 38 && this.y!=210){//UP ARROW
                this.y -= 50;
                Level --
            }
            else if (k.keyCode === 40 && Level<Worlds[w].levels.length-1){//DOWN ARROW
                this.y += 50;
                Level ++
            }
            else if (k.keyCode === 13||k.keyCode === 32){ //ENTER or SPACE
                if (w === 0 && Level === 0){
                    C.scene('loading', {array:[Worlds[w].name.background, Worlds[w].name.floor], scene:Worlds[w].levels[Level]});
                }
                else if(Worlds[w].code[Level]<=UNLOCKED){
                                        console.log(Worlds[w].code[Level], UNLOCKED)
                    C.scene('loading', {array:[Worlds[w].name.background, Worlds[w].name.floor], scene:Worlds[w].levels[Level]});
                }
                else {
                    console.log(Worlds[w].code[Level], UNLOCKED)
                    C.scene('Password',{password:Worlds[w].passwords[Level], passon:{array:[Worlds[w].name.background, Worlds[w].name.floor], scene:Worlds[w].levels[Level]}});
                }
            }
        });
    C.e('2D, Canvas, Image')
        .image('images/small_lords_room.png')
        .attr({x:165, y:30,z:3});
    C.e("WorldTitle")
        .text("Mr. Lord's Room")
        .attr({x:140, y:160});
        
        C.e('LevelTitle')
            .text("Level 1")
            .attr({x:165, y:220});
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[0].code[1]) return "[L] Level 2";
                else return "Level 2";
            })
            .attr({x:165, y:270});
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[0].code[2]) return "[L] Level 3";
                else return "Level 3";
            })
            .attr({x:165, y:320});
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[0].code[3]) return "[L] Level 4";
                else return "Level 4";
            })
            .attr({x:165, y:370});
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[0].code[4]) return "[L] Level 5";
                else return "Level 5";
            })
            .attr({x:165, y:420});
//FIGHT CLUB
    if (UNLOCKED < Worlds[1].code[0]){
        C.e('2D, Canvas, Image')
            .image("images/mystery.png")
            .attr({x:435, y:30,z:3});
    }        
    else {
        C.e('2D, Canvas, Image')
            .image("images/small_fight_club.png")
            .attr({x:435, y:30,z:3});
    }
    
    C.e("WorldTitle")
        .text(function(){
            if (UNLOCKED < Worlds[1].code[0]) return "????";
            else return "Fight Club";
        })
        .attr({x:410, y:160});
        
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[1].code[0]) return "[L] Level 1";
                else return "Level 1";
            })
            .attr({x:435, y:220});
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[1].code[1]) return "[L] Level 2";
                else return "Level 2";
            })
            .attr({x:435, y:270});
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[1].code[1]) return "[L] Level 3";
                else return "Level 3";
            })
            .attr({x:435, y:320});
//CALCULATOR
    if (UNLOCKED < Worlds[2].code[0]){
        C.e('2D, Canvas, Image')
            .image("images/mystery.png")
            .attr({x:705, y:30,z:3});
    }        
    else {
        C.e('2D, Canvas, Image')
            .image("images/small_calculator.png")
            .attr({x:705, y:30,z:3});
    }     
    C.e("WorldTitle")
        .text(function(){
            if (UNLOCKED < Worlds[2].code[0]) return "????";
            else return "TI-83";
        })
        .attr({x:680, y:160});
        
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[2].code[0]) return "[L] Level 1";
                else return "Level 1";
            })
            .attr({x:705, y:220});
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[2].code[1]) return "[L] Level 2";
                else return "Level 2";
            })
            .attr({x:705, y:270});
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[2].code[1]) return "[L] Level 3";
                else return "Level 3";
            })
            .attr({x:705, y:320});
//COC
    if (UNLOCKED < Worlds[3].code[0]){
        C.e('2D, Canvas, Image')
            .image("images/mystery.png")
            .attr({x:975, y:30,z:3});
    }        
    else {
        C.e('2D, Canvas, Image')
            .image("images/small_coc.png")
            .attr({x:975, y:30,z:3});
    }     
    C.e("WorldTitle")
        .text(function(){
            if (UNLOCKED < Worlds[3].code[0]) return "????";
            else return "Clash of Clans";
        })
        .attr({x:950, y:160});
        
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[2].code[0]) return "[L] Level 1";
                else return "Level 1";
            })
            .attr({x:975, y:220});
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[2].code[1]) return "[L] Level 2";
                else return "Level 2";
            })
            .attr({x:975, y:270});
            
//RISK
    if (UNLOCKED < Worlds[4].code[0]){
        C.e('2D, Canvas, Image')
            .image("images/mystery.png")
            .attr({x:1245, y:30,z:3});
    }        
    else {
        C.e('2D, Canvas, Image')
            .image("images/small_risk.png")
            .attr({x:1245, y:30,z:3});
    }     
    C.e("WorldTitle")
        .text(function(){
            if (UNLOCKED < Worlds[4].code[0]) return "????";
            else return "Risk";
        })
        .attr({x:1220, y:160});
        
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[4].code[0]) return "[L] Level 1";
                else return "Level 1";
            })
            .attr({x:1245, y:220});
        
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[4].code[1]) return "[L] Level 2";
                else return "Level 2";
            })
            .attr({x:1245, y:270});
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[4].code[2]) return "[L] Level 3";
                else return "Level 3";
            })
            .attr({x:1245, y:320});
        C.e('LevelTitle')
            .text(function(){
                if (UNLOCKED < Worlds[4].code[2]) return "[L] Level 4";
                else return "Level 4";
            })
            .attr({x:1245, y:370});
            
})});