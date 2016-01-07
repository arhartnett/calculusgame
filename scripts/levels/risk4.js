C.scene("Risk4",function(){
	C.background('#FFFFFF url('+risk.background+')');
	var floor = risk.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[4].code[3]) UNLOCKED = Worlds[4].code[3];
	PLAYER = C.e("Player")
		.attr({x:100, y:100});
		
//FLOOR
    C.e("Floor")
	    .attr({x:0,w:400})
	    .image(floor);
    C.e('Floor')
        .attr({x:400, w:490});
    C.e('Floor')
        .attr({x:1200, w:200}).image(floor);
    C.e('Floor')
        .attr({x:3500, w:200}).image(floor);
    C.e('Floor')
        .attr({x:5000, w:500}).image(floor);

//DESKS

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
    C.e('Solid, redDice')
        .attr({x:900, y:400, w:40, h:40});
    C.e('Solid, whiteDice')
        .attr({x:1000, y:400, w:40, h:40}).walkable();
    C.e('Solid, redDice')
        .attr({x:1500, y:400, w:40, h:40}).walkable();
    C.e('Solid, whiteDice')
        .attr({x:1700, y:400, w:40, h:40}).walkable();
    C.e("Solid, whiteDice")
        .attr({x:1900, y:400, w:40, h:40, alpha:0})
        .bind('EnterFrame', function(){
            if (pages_collection >= 2){
                this.alpha = 1;
                this.walkable();
            }
        });
    C.e('Solid, redDice')
        .attr({x:2100, y:400, w:40, h:40}).walkable();
    C.e('Solid, whiteDice')
        .attr({x:2300, y:400, w:40, h:40}).walkable();
    C.e('Solid, redDice')
        .attr({x:2500, y:400, w:40, h:40}).walkable();
    C.e('Solid')
        .attr({x:2700, y:400, w:40, h:40}).walkable();
    C.e('Solid')
        .attr({x:2900, y:400, w:40, h:40}).walkable();
    C.e('Solid, whiteDice')
        .attr({x:3100, y:400, w:40, h:40}).walkable();
    C.e('Solid, redDice')
        .attr({x:3200, y:400, w:40, h:40,alpha:0})
        .bind('EnterFrame', function(){
            if (pages_collection >= 3){
                this.alpha = 1;
            }
        });
    C.e('Solid')
        .attr({x:3240, y:400, w:40, h:40}).walkable();
    C.e('Solid')
        .attr({x:3280, y:400, w:40, h:40}).walkable();
        
     C.e('Solid, redDice')
        .attr({x:3800, y:400, w:40, h:40}).walkable();
    C.e('Solid, whiteDice')
        .attr({x:3900, y:300, w:40, h:40}).walkable();
    C.e('Solid, redDice')
        .attr({x:4000, y:200, w:40, h:40}).walkable();
    C.e('Solid, redDice')
        .attr({x:4200, y:200, w:40, h:40}).walkable();
    C.e('Solid, redDice')
        .attr({x:4400, y:200, w:40, h:40}).walkable();
    C.e('Solid, redDice')
        .attr({x:4600, y:200, w:40, h:40}).walkable();
    C.e('Solid, redDice')
        .attr({x:4800, y:200, w:40, h:40}).walkable();
    C.e('Solid, whiteDice')
        .attr({x:4000, y:400, w:40, h:40}).walkable();
    C.e('Solid, whiteDice')
        .attr({x:4200, y:400, w:40, h:40}).walkable();
    C.e('Solid, whiteDice')
        .attr({x:4400, y:400, w:40, h:40});
    C.e('Solid, whiteDice')
        .attr({x:4600, y:400, w:40, h:40});
    C.e('Solid, whiteDice')
        .attr({x:4800, y:400, w:40, h:40}).walkable();
    for (var the_y = 0; the_y<=400; the_y+=80){
        C.e("2D, Canvas, redDice, Collision, Wall")
            .attr({x:5460, y:the_y, w:40, h:40, z:5 })
            .collision();
    }
    for (var the_y = 40; the_y<=400; the_y+=80){
        C.e("2D, Canvas, whiteDice, Collision, Wall")
            .attr({x:5460, y:the_y, w:40, h:40, z:5 })
            .collision();
    }

//PAGES
    C.e('Page')
        .attr({x:700, y:350, z:15 });
    C.e('Page')
        .attr({x:1800, y:250, z:15 });
    C.e('Page')
        .attr({x:3200, y:250, z:15 });
    C.e('Page')
        .attr({x:5400, y:350,z:15 })
        .removeComponent('page')
        .addComponent('whitePiece').attr({w:40, h:40});
//PAINS
    C.e("Pain, page")
        .attr({x:300, y:350, z:15, w:40, h:40});
    C.e("2D, Canvas, bluePiece")
        .attr({x:4800, y:160, z:15, w:40, h:40});
    C.e("2D, Canvas, redPiece")
        .attr({x:4800, y:120, z:15, w:40, h:40});
    C.e("2D, Canvas, greenPiece")
        .attr({x:4800, y:80, z:15, w:40, h:40});
    C.e("2D, Canvas,yellowPiece")
        .attr({x:4800, y:40, z:15, w:40, h:40});
    C.e("2D, Canvas, grayPiece")
        .attr({x:5800, y:0, z:15, w:40, h:40});

//MESSAGES
    var message1=["Everything is not what it seems. You'll need good instincts here.","The password is LASTSTAND. Collect the last 4 pages here, and we'll have the full test!"];
    C.e('Message')
        .attr({length:2})
        .bind('EnterFrame', function(){
            this.text(message1[this.slide]);
        });

       
//LISTENER

var second_message = false;
var third_message = false;
    C.e('Listener')
        .information(4,{array:['images/logo.png','images/craftyLogo.png', 'images/Cloud9_logo.jpg'], scene:'End'},{array:[], scene:'Risk4'});
    HUD();
});
