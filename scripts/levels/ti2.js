var C = Crafty;

C.scene('Calculator2',function(){
    C.background('#222 url('+ti83.background+')');
    var floor = ti83.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[2].code[1]) UNLOCKED = Worlds[2].code[1];
    PLAYER = C.e("Player")
		.attr({x:120, y:100});
    C.e('Keyboard')
        .bind('KeyDown', function(k){
            if (k.keyCode === 82)C.scene('FightClub');
        });
        
//LISTENER
    var second_message = false;
    var third_message = false;
    C.e('Listener')
        .bind("EnterFrame", function(){
            if (PLAYER.x >=1450 && second_message == false){
                second_message = true;
                C.e('Message')
                    .attr({length:1})
                    .bind('EnterFrame', function(){
                        this.text(message2[this.slide]);
                    });
            }
            else if (PLAYER.x >=3900 && pages_collection == 1 && third_message == false){
                third_message = true;
                C.e('Message')
                    .attr({length:1})
                    .bind('EnterFrame', function(){
                        this.text(message3[this.slide]);
                    });
            }
        })
        .information(2,{array:[],scene:'Calculator3'},{array:[], scene:'Calculator2'});
        
//CALC EDGES
    C.e('2D, Canvas, Image')
        .attr({x:0, y:0, z:19})
        .image('images/calculatorleft.png')
        .bind('EnterFrame', function(){
            this.x = -C.viewport.x;
            this.y = -C.viewport.y;
        });
    C.e('2D, Canvas, Image')
        .attr({x:710, y:0, z:19})
        .image('images/calculatorright.png')
        .bind('EnterFrame', function(){
            this.x = -C.viewport.x+710;
            this.y = -C.viewport.y;
        });
        
//FLOOR
    C.e("Floor")
	    .attr({x:100,w:200})
	    .image(floor);
    C.e("Floor")
	    .attr({x:-200,w:250});
    C.e("Floor")
	    .attr({x:500,w:500})
        .image(floor);
    C.e("Floor")
        .attr({x:1200, w:500})
        .image(floor);
    C.e("Floor")
	    .attr({x:1600,y:300,w:500})
        .image(floor);
    C.e("Floor")
	    .attr({x:2200,y:150,w:300})
        .image(floor);
    C.e("Floor")
	    .attr({x:3160,w:900})
        .image(floor);
		
//DESKS
    C.e("2D, Canvas, mathTop, Platform")
        .attr({x:2280, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, mathFrame")
        .attr({x:2280, y:366, w:120, h:74, z:5});

//SOLIDS
   C.e("Solid, calcx")
    .attr({x:500, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:960, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:2560, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:2760, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:2960, y:400, w:40, h:40}).walkable();


//PAGES
    C.e("Page")
        .attr({x:-100, y:360, w:40, h:40});
    C.e("Page")
        .attr({x:3900, y:360, w:40, h:40});
//PAIN
    C.e("Pain, error,Tween")
        .attr({x:540, y:400, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.x <= 540)this.tween({x:920},3000);
            else if (this.x >= 920)this.tween({x:540},3000);
        });
    C.e("Pain, error,Tween")
        .attr({x:1300, y:180, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >399)this.tween({y:180},3000);
            else if (this.y <181)this.tween({y:400},3000);
        });
    C.e('Pain, error')
        .attr({x:1800, y:220, w:40, h:40});
    C.e("Pain, error,Tween")
        .attr({x:2660, y:180, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >399)this.tween({y:180},3000);
            else if (this.y <181)this.tween({y:400},3000);
        });
    C.e("Pain, error,Tween")
        .attr({x:2860, y:180, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >399)this.tween({y:180},3000);
            else if (this.y <181)this.tween({y:400},3000);
        });
    C.e("Pain, error,Tween")
        .attr({x:3060, y:180, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >399)this.tween({y:180},3000);
            else if (this.y <181)this.tween({y:400},3000);
        });
    C.e('Pain, error')
        .attr({x:3300, y:360, w:40, h:40});
    C.e('Pain, error')
        .attr({x:3500, y:360, w:40, h:40});
//MESSAGES
    var message_list=["There are 2 pages here, but one of them is hidden...<br>The password is INSTRUMENTS"];
    var message2 = ["Go ahead. Tell me I can't do that."];
    var message3 = ["Hmm... you have one. But you seem to have reached the end. Why don't you go back and look it over?"]
    C.e('Message')
        .attr({length:1})
        .bind('EnterFrame', function(){
            this.text(message_list[this.slide]);
        });
           
	HUD();
       
});