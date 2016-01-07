C.scene("Risk2",function(){
   // C.sprite("images/andrewsprite.png", {
     //   Player : [0,0,60,126]
    //});
	C.background('#FFFFFF url('+risk.background+')');
	var floor = risk.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[4].code[1]) UNLOCKED = Worlds[4].code[1];
	PLAYER = C.e("Player")
		.attr({x:300, y:100});
		
//FLOOR

    C.e("Floor")
	    .attr({x:0,w:400})
	    .image(floor);
    C.e("Floor")
        .attr({x:400, w:100})
    C.e("Floor")
        .attr({x:500, w:400})
        .image(floor);
    C.e("Floor")
        .attr({x:900, w:200});
    C.e("Floor")
        .attr({x:1100, w:600})
        .image(floor);
    C.e("Floor")
        .attr({x:1700, w:800});
    C.e("Floor")
        .attr({x:2500, w:400})
        .image(floor);
    C.e("Floor")
        .attr({x:2900, w:300});
    C.e("Floor")
        .attr({x:3400, w:400})
        .image(floor);
    C.e("Floor")
        .attr({x:3800, w:300});
    C.e("Floor")
        .attr({x:4300, w:800});
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

//PAGES
    C.e('Page')
        .attr({x:980, y:150, z:15 });
    C.e('Page')
        .attr({x:1950, y:380, z:15 });
    C.e('Page')
        .attr({x:4700, y:380, z:15 });
//PAINS

//MESSAGES
    var message1=["3 pages. Password KAMCHATKA","Sometimes, taking a RISK is necessary."];
    C.e('Message')
        .attr({length:2})
        .bind('EnterFrame', function(){
            this.text(message1[this.slide]);
        });

       
//LISTENER

var second_message = false;
var third_message = false;
    C.e('Listener')
        .information(3,{array:[], scene:'Risk3'},{array:[], scene:'Risk2'});
    HUD();
});