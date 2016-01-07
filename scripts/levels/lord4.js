var C = Crafty;

C.scene("Lord4",function(){
	C.background('#FFFFFF url('+lord.background+')');
	var floor = lord.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[0].code[3]) UNLOCKED = Worlds[0].code[3];
	
	PLAYER = C.e("Player")
		.attr({x:100, y:100});

//FLOOR
    C.e("Floor")
	    .attr({x:50,w:1740})
	    .image(floor);
    C.e("Floor")
	    .attr({x:1940,w:1100})
	    .image(floor);
    C.e("Floor")
	    .attr({x:3200,w:1100})
	    .image(floor);
//DESKS
    C.e("2D, Canvas, deskTop, Platform")
        .attr({x:1000, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, deskFrame")
        .attr({x:1000, y:366, w:120, h:74, z:5});
    C.e("2D, Canvas, deskTop, Platform")
        .attr({x:1120, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, deskFrame")
        .attr({x:1120, y:366, w:120, h:74, z:5});
    C.e("2D, Canvas, deskTop, Platform")
        .attr({x:1240, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, deskFrame")
        .attr({x:1240, y:366, w:120, h:74, z:5});
    C.e("2D, Canvas, deskTop, Platform")
        .attr({x:1360, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, deskFrame")
        .attr({x:1360, y:366, w:120, h:74, z:5});
        

//BOOKS
    C.e('Solid, books')
        .attr({x:1500, y:400, w:40, h:40, z:15})
    C.e('Solid, books')
        .attr({x:1500, y:360, w:40, h:40, z:15})
    C.e('Solid, books')
        .attr({x:1500, y:320, w:40, h:40, z:15})
    C.e('Solid, books')
        .attr({x:1500, y:280, w:40, h:40, z:15})
    C.e('Solid, books')
        .attr({x:1500, y:240, w:40, h:40, z:15}).walkable();
    C.e('Solid, books')
        .attr({x:1700, y:400, w:40, h:40, z:15})
    C.e('Solid, books')
        .attr({x:1700, y:360, w:40, h:40, z:15})
    C.e('Solid, books')
        .attr({x:1700, y:320, w:40, h:40, z:15})
    C.e('Solid, books')
        .attr({x:1700, y:280, w:40, h:40, z:15})
    C.e('Solid, books')
        .attr({x:1700, y:240, w:40, h:40, z:15}).walkable();
        
    C.e('Solid,books')
        .attr({x:3000, y:400, w:40, h:40, z:15});
    C.e('Solid,books')
        .attr({x:3000, y:360, w:40, h:40, z:15}).walkable();
	    
//PAGES
    C.e("Page")
        .attr({x:1360, y:200, z:15});
    C.e("Page")
        .attr({x:2600, y:300, z:15});
    C.e("Page")
        .attr({x:4350, y:200, z:15});
//PAINS
    C.e('Pain, pop_quiz')
        .attr({x:400, y:400, z:15, w:40, h:40});
    C.e('Pain,pop_quiz,Tween')
        .attr({x:400, y:360, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if (this.y >= 360)this.tween({y:0}, 2000);
            else if (this.y<=0)this.tween({y:360}, 2000);
        });
        
    C.e('Pain, pop_quiz')
        .attr({x:1000, y:200, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:1040, y:200, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:1080, y:200, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:1120, y:200, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:1160, y:200, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:1280, y:400, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:1320, y:400, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:1360, y:400, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:1400, y:400, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:1440, y:400, z:15, w:40, h:40});
        
    C.e('Pain, pop_quiz, Tween')
        .attr({x:2200, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if (this.x <= 2200) this.tween({x:3000}, 4000);
            else if (this.x >= 3000) this.tween({x:2200}, 4000);
        });
   C.e('Pain, pop_quiz, Tween')
        .attr({x:2200, y:360, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if (this.x <= 2200) this.tween({x:3000}, 4000);
            else if (this.x >= 3000) this.tween({x:2200}, 4000);
        });
   C.e('Pain, pop_quiz, Tween')
        .attr({x:2200, y:80, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if (this.x <= 2200) this.tween({x:3000}, 4000);
            else if (this.x >= 3000) this.tween({x:2200}, 4000);
        });
   C.e('Pain, pop_quiz, Tween')
        .attr({x:2200, y:40, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if (this.x <= 2200) this.tween({x:3000}, 4000);
            else if (this.x >= 3000) this.tween({x:2200}, 4000);
        });
    C.e('Pain, pop_quiz')
        .attr({x:3400, y:400, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:3400, y:360, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:3600, y:200, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:3600, y:240, z:15, w:40, h:40});
        
//MESSAGES
    var message1=["The password is LORDOFMATH"];
    C.e('Message')
        .attr({length:1})
        .bind('EnterFrame', function(){
            this.text(message1[this.slide]);
        });
       
//LISTENER
    C.e('Listener')
        .information(3,{array:[], scene:'Lord5'},{array:[], scene:'Lord4'});
    HUD();
});