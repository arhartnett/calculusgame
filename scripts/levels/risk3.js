C.scene("Risk3",function(){

	C.background('#FFFFFF url('+risk.background+')');
	var floor = risk.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[4].code[2]) UNLOCKED = Worlds[4].code[2];
	PLAYER = C.e("Player")
		.attr({x:300, y:100});
		
//FLOOR

    C.e("Floor")
	    .attr({x:0,w:400})
	    .image(floor);
    C.e("Floor")
        .attr({x:400, w:100});
    C.e("Floor")
        .attr({x:500, w:200})
        .image(floor);
    C.e("Floor")
        .attr({x:700, w:400})
        .removeComponent("Platform")
        .image(floor);
    C.e('Floor')
        .attr({x:2500, w:400})
        .image(floor);

//DESKS
    C.e("2D, Canvas, cardTop")
       .attr({x:2600, y:360, w:120, h:6, z:5})
       .bind('EnterFrame', function(){
           if (pages_collection >= 3) this.addComponent('Platform');
       });
    C.e("2D, Canvas, cardFrame")
        .attr({x:2600, y:366, w:120, h:74, z:5});
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
    C.e('Solid, whiteDice')
        .attr({x:900, y:400, w:40, h:40}).walkable();
    C.e("Solid, redDice")
        .attr({x:1100, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, whiteDice")
        .attr({x:1300, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, redDice")
        .attr({x:1500, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, whiteDice")
        .attr({x:1600, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, redDice")
        .attr({x:1700, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, whiteDice")
        .attr({x:1800, y:400, w:40, h:40})
        .walkable();
    C.e('Solid, redDice')
        .attr({x:1900, y:400, w:40, h:40})
        .walkable();
    C.e('Solid, whiteDice')
        .attr({x:2000, y:400, w:40, h:40});
    C.e('Solid, redDice')
        .attr({x:2100, y:400, w:40, h:40})
        .walkable();
    C.e('Solid, whiteDice')
        .attr({x:2200, y:400, w:40, h:40});
    C.e('Solid, redDice')
        .attr({x:2300, y:400, w:40, h:40}).walkable();
    C.e('Solid, whiteDice')
        .attr({x:2400, y:400, w:40, h:40});
        
    C.e('Solid, redDice')
        .attr({x:3000, y:400, w:40, h:40});
    C.e('Solid, whiteDice')
        .attr({x:3100, y:400, w:40, h:40}).walkable();
    C.e('Solid, redDice')
        .attr({x:3200, y:400, w:40, h:40}).walkable();
    C.e('Solid, whiteDice')
        .attr({x:3300, y:400, w:40, h:40});
    C.e('Solid, redDice')
        .attr({x:3400, y:400, w:40, h:40}).walkable();
    C.e('Solid, whiteDice')
        .attr({x:3500, y:400, w:40, h:40}).walkable();
    C.e('Solid, redDice')
        .attr({x:3600, y:400, w:40, h:40}).walkable();
    C.e('Solid, whiteDice')
        .attr({x:3700, y:400, w:40, h:40});

//PAGES
    C.e('Page')
        .attr({x:980, y:150, z:15 });
    C.e('Page')
        .attr({x:1600, y:100, z:15 });
    C.e('Page')
        .attr({x:2640, y:100, z:15 });
    C.e('Page')
        .attr({x:3700, y:250, z:15 });
//PAINS
    C.e("Pain, redPiece")
        .attr({x:2600, y:400, z:15, w:40, h:40});
    C.e("Pain, bluePiece")
        .attr({x:2640, y:400, z:15, w:40, h:40});
    C.e("Pain, whitePiece")
        .attr({x:2680, y:400, z:15, w:40, h:40});

//MESSAGES
    var message1=["But there's nothing wrong with an abundance of CAUTION.","4 pages. Remember the word BLITZKRIEG."];
    C.e('Message')
        .attr({length:2})
        .bind('EnterFrame', function(){
            this.text(message1[this.slide]);
        });

       
//LISTENER

var second_message = false;
var third_message = false;
    C.e('Listener')
        .information(4,{array:[], scene:'Risk4'},{array:[], scene:'Risk3'});
    HUD();
});