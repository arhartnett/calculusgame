var C = Crafty;

C.c('Name', {
    init: function(){
        this.requires("2D, DOM, Text")
            .attr({ w:150,h:25,z:2, w:150,h:25,z:3})
            .textFont({size:'25px', family:'Lucida Console'})
            .css({'cursor':'pointer', 'text-align':'center'})
            .unselectable();
    }
    
});

C.scene("charSelect", function(passworded){
    var Char_List = ['cristian', 'andrew', 'imran', 'nickswag', 'jonny', 'brad','warren','will','conner','nick', 'josh','devyn','randi','melissa','sarah','courtney', 'mrlord', 'jr'];
    
    var Char_Num = 0;
    
    C.background('black');
    C.viewport.x = 0;
    
    for (var x = 100;x < 700 ; x+=225){
        for (var y = 95; y<450; y+=50){
            C.e("2D, DOM, Color").color('#333').attr({x:x, y:y, w:150,h:35,z:1});
        }
    }
    
    var color = '#777';

    C.e('2D, DOM, Color, Keyboard')
        .color(color)
        .attr({x:100, y:95, w:150, h:35, z:2})
        .bind('KeyDown', function(k){
            if (k.keyCode === 39){ //RIGHT ARROW
                Char_Num ++
                this.x += 225;
                if (this.x > 700){
                    this.x = 100;   
                    Char_Num-=3;
                }
            }
            else if (k.keyCode === 37){ //LEFT ARROW
                Char_Num--
                this.x -= 225;
                if (this.x < 100){
                    this.x = 550;
                    Char_Num += 3;
                }
            }
            else if (k.keyCode === 40){ //DOWN ARROW
                Char_Num += 3
                this.y += 50;
                if (this.y > 445){
                    this.y = 95;
                    Char_Num -= 24;
                }
            }
            else if (k.keyCode === 38){ //UP ARROW
                Char_Num -= 3;
                this.y -= 50;
                if (this.y < 95){
                    this.y = 445;
                    Char_Num += 24;
                }
            }
            else if (k.keyCode === 13||k.keyCode === 32){ //ENTER or SPACE
                if (Char_List[Char_Num]!== undefined){
                    CHARACTER = 'images/characters/'+Char_List[Char_Num]+'.png';
                    if (!passworded){
                        C.scene('LevelSelect');
                    }
                    else{
                        C.scene('loading', passworded);
                    }
                }
            }
        });
    
    C.e("2D, DOM, Text")
        .text('SELECT YOUR CHARACTER')
        .attr({x:100, y:10, w:600})
        .textFont({size:'40px', family:'Lucida Console'})
        .css({'text-align': 'center'});
    
    C.e("Name")
        .text("Cristian")
        .attr({x:100, y:100, name:'cristian'});
    C.e("Name")
        .text("Andrew")
        .attr({x:325, y:100, name:'andrew'});
    C.e("Name")
        .text("Imran")
        .attr({x:550, y:100, name:'imran'});
    C.e("Name")
        .text("NickSwag")
        .attr({x:100, y:150, name:'nickswag'});
    C.e("Name")
        .text("Jonny")
        .attr({x:325, y:150, name:'jonny'});
    C.e("Name")
        .text("Brad")
        .attr({x:550, y:150, name:'brad'});
    C.e("Name")
        .text("Warren")
        .attr({x:100, y:200, name:'warren'});
    C.e("Name")
        .text("HodgePodge")
        .attr({x:325, y:200, name:'will'});
    C.e("Name")
        .text("Conner")
        .attr({x:550, y:200, name:'conner'});
    C.e("Name")
        .text("Nick R")
        .attr({x:100, y:250, name:'nick'});
    C.e("Name")
        .text("Josh")
        .attr({x:325, y:250, name:'josh'});
    C.e("Name")
        .text("Devyn")
        .attr({x:550, y:250, name:'devyn'});
    C.e("Name")
        .text("Randi")
        .attr({x:100, y:300, name:'randi'});
    C.e("Name")
        .text("Melissa")
        .attr({x:325, y:300, name:'melissa'});
    C.e("Name")
        .text("Sarah")
        .attr({x:550, y:300, name:'sarah'});
    C.e("Name")
        .text("Courtney")
        .attr({x:100, y:350, name:'courtney'});
    C.e("Name")
        .text("Mr. Lord")
        .attr({x:325, y:350, name:'mrlord'});
    C.e("Name")
        .text("JR")
        .attr({x:550, y:350, name:'jr'});

});