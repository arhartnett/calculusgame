C.scene("Lord1",function(){
	C.background('#FFFFFF url('+lord.background+')');
	var floor = lord.floor;
    health = 5;
    pages_collection = 0;
	
	PLAYER = C.e("Player")
		.attr({x:300, y:100});
    
//DESKS
    C.e("2D, Canvas, deskTop, Platform")
       .attr({x:1000, y:360, w:120, h:6, z:5});
   C.e("2D, Canvas, deskFrame")
    .attr({x:1000, y:366, w:120, h:74, z:5});

    C.e("2D, Canvas, deskTop, Platform")
       .attr({x:4170, y:360, w:120, h:6, z:5});
   C.e("2D, Canvas, deskFrame")
    .attr({x:4170, y:366, w:120, h:74, z:5});
    
//BOOKS
    for (var the_y = 0; the_y<=400; the_y+=40){
        C.e("2D, Canvas, books, Collision, Wall")
            .attr({x:0, y:the_y, w:40, h:40, z:5 })
            .collision();
    }
        
    C.e("Solid,books")
        .attr({x:1600,y:400,w:40,h:40});
    C.e("Solid,books")
        .attr({x:1600,y:360,w:40,h:40}).walkable();
    C.e("Solid,books")
        .attr({x:1640,y:400,w:40,h:40});
    C.e("Solid,books")
        .attr({x:1640,y:360,w:40,h:40}).walkable();
        
    C.e("Solid,books")
        .attr({x:2700, y:400,w:40,h:40});
    C.e("Solid,books")
        .attr({x:2740, y:400,w:40,h:40});
    C.e("Solid,books")
        .attr({x:2740, y:360,w:40,h:40}).walkable();
    C.e("Solid,books")
        .attr({x:2780, y:400,w:40,h:40});
    C.e("Solid,books")
        .attr({x:2780, y:360,w:40,h:40});
    C.e("Solid,books")
        .attr({x:2780, y:320,w:40,h:40}).walkable();
    C.e("Solid,books")
        .attr({x:2820, y:400,w:40,h:40});
    C.e("Solid,books")
        .attr({x:2820, y:360,w:40,h:40});
    C.e("Solid,books")
        .attr({x:2820, y:320,w:40,h:40});
    C.e("Solid,books")
        .attr({x:2820, y:280,w:40,h:40}).walkable();
    C.e("Solid,books")
        .attr({x:2980, y:400,w:40,h:40});
    C.e("Solid,books")
        .attr({x:2980, y:360,w:40,h:40});
    C.e("Solid,books")
        .attr({x:2980, y:320,w:40,h:40});
    C.e("Solid,books")
        .attr({x:2980, y:280,w:40,h:40}).walkable();


        
//FLOOR

    C.e("Floor")
	    .attr({x:0,w:2200})
	    .image(floor);
    C.e("2D, Collision,solid")
        .attr({x:2399, w:1, y:440,h:60})
        .collision();
    C.e("Floor")
        .attr({x:2400, w:1000})
	    .image(floor);
    C.e("Floor")
        .attr({x:3600, w:200})
	    .image(floor);
    C.e("Floor")
        .attr({x:4000, w:300})
	    .image(floor);
    C.e("Floor")
        .attr({x:4550, w:1000})
	    .image(floor);
	    
//PAGES
    C.e("Page")
        .attr({x:600, y:380, z:15});
    C.e("Page")
        .attr({x:1020, y:100, z:15});
    C.e("Page")
        .attr({x:1740, y:100, z:15});
    C.e("Page")
        .attr({x:2900, y:40, z:15});
    C.e("Page")
        .attr({x:3680, y:380, z:15});
    C.e("Page")
        .attr({x:4900, y:380, z:15});
//PAINS

//MESSAGES
    var message1=["I've got good news and bad news. The bad news is that someone stole the AP test. The good news is that they left the pages scattered all around.",
        "It's up to you to get them back. Use the ARROW KEYS to move and jump. Collect every page you can find."];
    var message2 = ["You can jump onto desks, with the UP arrow, to reach even higher.<br><br>Books let you do this too, but you can't walk through them."];
    var message3 = ["Whoever stole all the test pages also managed to break giant holes in the floor. I really have no idea how that happened.",
        "Anyway, be sure you jump over them. If you fall in, you die."]
    var message4 = ["After you collect every page in a level, you can move on to the next level.",
        "This level has six pages. Collect the last one to continue."]
    C.e('Message')
        .attr({length:2})
        .bind('EnterFrame', function(){
            this.text(message1[this.slide]);
        });

       
//LISTENER
second_message = false;
third_message = false;
fourth_message = false;
    C.e('Listener')
    .bind("EnterFrame", function(){
            if (PLAYER.x>800 && second_message == false){
                second_message = true;
                C.e('Message')
                    .attr({length:1})
                    .bind('EnterFrame', function(){
                        this.text(message2[this.slide]);
                    });
            }
            else if (PLAYER.x>2000 && third_message == false){
                third_message = true;
                C.e('Message')
                    .attr({length:2})
                    .bind('EnterFrame', function(){
                        this.text(message3[this.slide]);
                    });
            }
            if (pages_collection === 5 && fourth_message == false){
                fourth_message = true;
                C.e('Message')
                    .attr({length:2})
                    .bind('EnterFrame', function(){
                        this.text(message4[this.slide]);
                    });
            }
        })
        .information(6,{array:[], scene:'Lord2'},{array:[], scene:'Lord1'});
    HUD();
});