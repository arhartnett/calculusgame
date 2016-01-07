C.scene("Risk1",function(){
   // C.sprite("images/andrewsprite.png", {
     //   Player : [0,0,60,126]
    //});
	C.background('#FFFFFF url('+risk.background+')');
	var floor = risk.floor;
    health = 5;
    pages_collection = 0;
	PLAYER = C.e("Player")
		.attr({x:300, y:100});
		
//FLOOR

    C.e("Floor")
	    .attr({x:0,w:800})
	    .image(floor);
    C.e("Floor")
        .attr({x:1000, w:100})
        .image(floor);
    C.e("Floor")
        .attr({x:1300, w:400})
        .image(floor);
    C.e("Floor")
        .attr({x:1800, w:50})
        .image(floor);
    C.e("Floor")
        .attr({x:1950, w:500})
        .image(floor);
    C.e("Floor")
        .attr({x:2650, w:800})
        .image(floor);
    C.e("Floor")
        .attr({x:3550, w:260, y:300})
        .image(floor);
    C.e("Floor")
        .attr({x:4010, w:360})
        .image(floor);
    C.e("Floor")
        .attr({x:4110, w:260, y:300})
        .image(floor);
    
//DESKS
    C.e("2D, Canvas, cardTop, Platform")
       .attr({x:500, y:360, w:120, h:6, z:5});
   C.e("2D, Canvas, cardFrame")
    .attr({x:500, y:366, w:120, h:74, z:5});
    
//DICE
    for (var the_y = 0; the_y<=400; the_y+=80){
        C.e("2D, Canvas, redDice, Collision, Wall")
            .attr({x:0, y:the_y, w:40, h:40, z:5 })
            .collision();
    }
    for (var the_y = 40; the_y<=400; the_y+=80){
        C.e("2D, Canvas, whiteDice, Collision, Wall")
            .attr({x:0, y:the_y, w:40, h:40, z:5 })
            .collision();
    }
        
    C.e("Solid, redDice")
        .attr({x:2650, y:400,w:40, h:40}).walkable();
    C.e("Solid, whiteDice")
        .attr({x:2690, y:400, w:40, h:40}).walkable();
        
    C.e("Solid, redDice")
        .attr({x:2730, y:400, w:40, h:40});
    C.e("Solid, whiteDice")
        .attr({x:2730, y:360, w:40, h:40}); 
    C.e("Solid, redDice")
        .attr({x:2730, y:320, w:40, h:40});
    C.e("Solid, whiteDice")
        .attr({x:2730, y:280, w:40, h:40}); 
    C.e("Solid, redDice")
        .attr({x:2730, y:240, w:40, h:40}).walkable();

    C.e("Solid,whiteDice")
        .attr({x:2930, y:400, w:40, h:40});
    C.e("Solid, redDice")
        .attr({x:2930, y:360, w:40, h:40});
    C.e("Solid, whiteDice")
        .attr({x:2930, y:320, w:40, h:40});
    C.e("Solid, redDice")
        .attr({x:2930, y:280, w:40, h:40}); 
    C.e("Solid, whiteDice")
        .attr({x:2930, y:240, w:40, h:40}).walkable();
        
    C.e("Solid, redDice")
        .attr({x:4110, y:260, w:40, h:40});
    C.e("Solid,whiteDice")
        .attr({x:4110, y:220, w:40, h:40});
    C.e("Solid, redDice")
        .attr({x:4110, y:180, w:40, h:40});
    C.e("Solid, whiteDice")
        .attr({x:4110, y:140, w:40, h:40});
    C.e("Solid, redDice")
        .attr({x:4110, y:100, w:40, h:40}); 
    C.e("Solid, whiteDice")
        .attr({x:4110, y:60, w:40, h:40});

//PAGES
    C.e("Page")
        .attr({x:580, y:380, z:15});
    C.e("Page")
        .attr({x:1020, y:380, z:15});
    C.e("Page")
        .attr({x:2100, y:280, z:15});
    C.e("Page")
        .attr({x:3680, y:80, z:15});
    C.e("Page")
        .attr({x:4200, y:380, z:15});
    C.e("Page")
        .attr({x:4300, y:80, z:15});
//PAINS
    C.e("Pain, redPiece")
        .attr({x:400, y:380, z:15, w:40, h:40});
    C.e("Pain, greenPiece")
        .attr({x:700, y:380, z:15, w:40, h:40});
    C.e("Pain, bluePiece")
        .attr({x:1400, y:380, z:15, w:40, h:40});
    C.e("Pain, whitePiece")
        .attr({x:1600, y:380, z:15, w:40, h:40});
    C.e("Pain, grayPiece")
        .attr({x:1805, y:380, z:15, w:40, h:40});
    C.e("Pain, yellowPiece")
        .attr({x:2100, y:380, z:15, w:40, h:40});
    C.e("Pain, yellowPiece")
        .attr({x:2100, y:100, z:15, w:40, h:40});
    C.e("Pain,greenPiece")
        .attr({x:3100, y:380, z:15, w:40, h:40});
//MESSAGES
    var message1=["This level is called Risk. Jump on cards and dice, but watch out for cannons.","Password: DICE<br>Pages: 6"];
    C.e('Message')
        .attr({length:2})
        .bind('EnterFrame', function(){
            this.text(message1[this.slide]);
        });

       
//LISTENER
    C.e('Listener')
        .information(6,{array:[], scene:'Risk2'},{array:[], scene:'Risk1'});
    HUD();
});