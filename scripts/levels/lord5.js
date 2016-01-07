var C = Crafty;

C.scene("Lord5",function(){
	C.background('#FFFFFF url('+lord.background+')');
	var floor = lord.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[0].code[4]) UNLOCKED = Worlds[0].code[4];
	
	PLAYER = C.e("Player")
		.attr({x:100, y:100});

//FLOOR
    C.e("Floor")
	    .attr({x:50,w:1050})
	    .image(floor);
    C.e('Floor')
        .attr({x:1300, w:500})
        .image(floor);
    C.e('Floor')
        .attr({x:2000, w:1000})
        .image(floor);
    C.e('Floor')
        .attr({x:3210, w:600})
        .image(floor);
//DESKS
    C.e("2D, Canvas, deskTop, Platform")
        .attr({x:500, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, deskFrame")
        .attr({x:500, y:366, w:120, h:74, z:5});
//BOOKS
    C.e("Solid, books")
        .attr({x:2000, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2120, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2240, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2360, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2480, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2600, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2640, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2680, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2720, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2760, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2800, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2840, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2880, y:400, w:40, h:40})
        .walkable();

    for (var the_y = 0; the_y<=400; the_y+=40){
        C.e("2D, Canvas, books, Collision, Wall")
            .attr({x:3770, y:the_y, w:40, h:40, z:5 })
            .collision();
    }
	    
//PAGES
    C.e("Page")
        .attr({x:400, y:100, z:15, alpha:0})
        .bind('EnterFrame', function(){
            if (pages_collection >= 2){
                this.alpha = 1;
            }
        });
    C.e("Page, Tween")
        .attr({x:1050, y:-400, z:15})
        .bind('EnterFrame', function(){
            if (PLAYER.x >= 900){
                if (this.y >= 400)this.tween({y:-400}, 3000);
                else if (this.y<=-400)this.tween({y:400}, 3000);
            }
        });
    C.e("Page")
        .attr({x:2930, y:390, z:15});
//PAINS
    C.e('Pain, pop_quiz, Tween')
        .attr({x:310, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if (this.x <= 310) this.tween({x:710}, 3000);
            else if (this.x >= 710) this.tween({x:310}, 3000);
        });
    C.e('Pain, pop_quiz, Tween')
        .attr({x:350, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if (this.x <= 350) this.tween({x:750}, 3000);
            else if (this.x >= 750) this.tween({x:350}, 3000);
        });
    C.e('Pain, pop_quiz, Tween')
        .attr({x:390, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if (this.x <= 390) this.tween({x:790}, 3000);
            else if (this.x >= 790) this.tween({x:390}, 3000);
        });
        
    C.e('Pain, pop_quiz')
        .attr({x:1550, y:400, w:40, h:40, z:15});
    C.e('Pain, pop_quiz')
        .attr({x:1570, y:360, w:40, h:40, z:15});
    C.e('Pain, pop_quiz')
        .attr({x:1590, y:400, w:40, h:40, z:15});
        
    for (var x = 2060; x <= 2900; x+= 60){
        C.e('Pain, pop_quiz, Tween')
            .attr({x:x, y:250, w:40, h:40, z:15})
            .bind('EnterFrame', function(){
                if (this.y >= 250) this.tween({y:0}, 2000);
                else if (this.y <= 0) this.tween({y:250}, 500);
            });
    }

//MESSAGES
    var message1=["My only advice for this level: make sure you go back and check your work.",
    "You'll also want to know that there are 3 pages.<br>The password is MOES."];
    C.e('Message')
        .attr({length:2})
        .bind('EnterFrame', function(){
            this.text(message1[this.slide]);
        });
       
//LISTENER
    C.e('Listener')
        .information(3,{array:[fightclub.floor, fightclub.background], scene:'FightClub1'},{array:[], scene:'Lord5'});
    HUD();
});