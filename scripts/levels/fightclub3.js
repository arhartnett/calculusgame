var C = Crafty;

C.scene('FightClub3',function(){
    C.background('#222 url('+fightclub.background+')');
    var floor = fightclub.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[1].code[2]) UNLOCKED = Worlds[1].code[2];
    if (CHARACTER == "images/characters/brad.png") {
        health = 1000;
    }
    PLAYER = C.e("Player")
		.attr({x:50, y:200});
    C.e('Keyboard')
        .bind('KeyDown', function(k){
            if (k.keyCode === 82)C.scene('FightClub');
        });
//FLOOR
    C.e("Floor")
	    .attr({x:0,w:400})
        .image(floor);
    C.e("Floor")
	    .attr({x:500,w:1000})
        .image(floor);
    C.e("Floor")
	    .attr({x:600,w:900, y:210})
        .image(risk.floor);
//DESKS
    C.e("2D, Canvas, wrestlerTop, Platform")
       .attr({x:1310, y:320, w:120, h:6, z:5});
    C.e("2D, Canvas, wrestlerFrame")
        .attr({x:1310, y:326, w:120, h:74, z:5});
//SOLIDS
    for (var x = 950;x <= 1390; x+=40){
        C.e("Solid, gatorade")
            .attr({x:x, y:400, w:40, h:40}).walkable();
    }
//PAGES
    C.e("Page")
        .attr({x:600, y:10, w:40, h:40})
//PAIN
    for (var x = 590;x <= 830; x+=40){
        C.e("Pain, ko")
            .attr({x:x, y:260, w:40, h:40});
    }
    for (var x = 990;x <= 1270; x+=40){
        C.e("Pain, ko")
            .attr({x:x, y:220, w:40, h:40});
    }
//MESSAGES
    var message_list=["Password: NICKVWILL.<br>There is only 1 page."];
    C.e('Message')
        .attr({length:1})
        .bind('EnterFrame', function(){
            this.text(message_list[this.slide]);
        });

        
//LISTENER
second_message = false;
    C.e('Listener')
        .information(1,{array:[ti83.floor,ti83.background],scene:'Calculator1'},{array:[], scene:'FightClub3'});
        
	HUD();
       
});