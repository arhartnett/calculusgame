var C = Crafty;

C.scene('Calculator1',function(){
    C.background('#222 url('+ti83.background+')');
    var floor = ti83.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[2].code[0]) UNLOCKED = Worlds[2].code[0];
    PLAYER = C.e("Player")
		.attr({x:100, y:100});
    C.e('Keyboard')
        .bind('KeyDown', function(k){
            if (k.keyCode === 82)C.scene('FightClub');
        });
        
//LISTENER
second_message = false;
    C.e('Listener')
        .information(4,{array:[],scene:'Calculator2'},{array:[], scene:'Calculator1'});
        
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
    C.e("Floor") //Floor
	    .attr({x:50,w:1000})
	    .image(floor);
    C.e("Floor") //Floor
	    .attr({x:1300,w:600})
        .image(floor);
    C.e("Floor")
	    .attr({x:2100,w:500})
        .image(floor);
    C.e("Floor")
	    .attr({x:2750,w:100})
        .image(floor);
		
//DESKS
    C.e("2D, Canvas, mathTop, Platform")
        .attr({x:900, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, mathFrame")
        .attr({x:900, y:366, w:120, h:74, z:5});
    C.e("2D, Canvas, mathTop, Platform")
        .attr({x:1500, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, mathFrame")
        .attr({x:1500, y:366, w:120, h:74, z:5});
//BOOKS
   C.e("Solid, calcx")
    .attr({x:340, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:650, y:400, w:40, h:40});
   C.e("Solid, calcx")
    .attr({x:650, y:360, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:2560, y:360, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:2560, y:400, w:40, h:40});
   C.e("Solid, calcx")
    .attr({x:2750, y:360, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:2750, y:400, w:40, h:40});

//PAGES
    C.e("Page")
        .attr({x:980, y:50, z:15});
    C.e("Page")
        .attr({x:1560, y:400, z:15});
    C.e("Page")
        .attr({x:2000, y:280, z:15});
    C.e("Page")
        .attr({x:2675, y:480, z:15});
//PAIN
    C.e("Pain, error")
        .attr({x:300, y:400, z:15, w:40, h:40});
    C.e("Pain, error")
        .attr({x:650, y:340, z:15, w:40, h:40});
    C.e("Pain, error")
        .attr({x:900, y:200, z:15, w:40, h:40});
    C.e("Pain, error")
        .attr({x:900, y:240, z:15, w:40, h:40});
    C.e("Pain, error")
        .attr({x:1420, y:360, z:15, w:40, h:40});
    C.e("Pain, error")
        .attr({x:1700, y:360, z:15, w:40, h:40});
    C.e("Pain, error")
        .attr({x:2450, y:360, z:15, w:40, h:40});
    C.e("Pain, error, Tween")
        .attr({x:2350, y:380, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >379)this.tween({y:80},2000);
            else if (this.y <81)this.tween({y:380},2000);
        });
        
//MESSAGES
    var message_list=["Welcome to TI-83 Level. Stay away from errors!","There are four pages to be found here. The password is TEXAS"];
    C.e('Message')
        .attr({length:2})
        .bind('EnterFrame', function(){
            this.text(message_list[this.slide]);
        });
        
	HUD();
       
});