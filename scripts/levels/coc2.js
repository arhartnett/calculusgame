C.scene("Coc2",function(){
	C.background('#FFFFFF url('+coc.background+')');
	var floor = coc.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[3].code[1]) UNLOCKED = Worlds[3].code[1];
	PLAYER = C.e("Player")
		.attr({x:300, y:100});
    
//FLOOR
    C.e('Floor')
        .attr({x:-200, w:200});
    C.e("Floor")
	    .attr({x:100,w:900})
	    .image(floor);
    C.e("Floor")
	    .attr({x:1200,y:440,w:200})
	    .image(floor);
    C.e("Floor")
	    .attr({x:1200,y:440,w:2100});
    C.e("Floor")
	    .attr({x:1400,y:340,w:200})
	    .image(floor);
    C.e("Floor")
	    .attr({x:1600,y:240,w:200})
	    .image(floor);
    C.e("Floor")
	    .attr({x:1800,y:140,w:2000})
	    .image(floor);
//DESKS
    C.e("2D, Canvas, clashTop, Platform")
       .attr({x:380, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, clashFrame")
        .attr({x:380, y:366, w:120, h:74, z:5});
    C.e("2D, Canvas, clashTop, Platform")
       .attr({x:840, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, clashFrame")
        .attr({x:840, y:366, w:120, h:74, z:5});
    C.e("2D, Canvas, clashTop, Platform")
       .attr({x:3160, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, clashFrame")
        .attr({x:3160, y:366, w:120, h:74, z:5});
//BOOKS

    C.e('Solid,ladder')
        .attr({x:500, y:400,w:40,h:40});
    C.e('Solid,ladder')
        .attr({x:500, y:360,w:40,h:40});
    C.e('Solid,ladder')
        .attr({x:500, y:320,w:40,h:40});
    C.e('Solid,ladder')
        .attr({x:500, y:280,w:40,h:40});
    C.e('Solid,ladder')
        .attr({x:500, y:240,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:800, y:400,w:40,h:40});
    C.e('Solid,ladder')
        .attr({x:800, y:360,w:40,h:40});
    C.e('Solid,ladder')
        .attr({x:800, y:320,w:40,h:40});
    C.e('Solid,ladder')
        .attr({x:800, y:280,w:40,h:40});
    C.e('Solid,ladder')
        .attr({x:800, y:240,w:40,h:40}).walkable();

//PAGES
    C.e('Page')
        .attr({x:-100,y:400});
    C.e('Page')
        .attr({x:650,y:360});
    C.e('Page')
        .attr({x:3200,y:160});
//PAINS

//MESSAGES
    var message1=["The password is PEKKA.<br>There are three pages."];
    var message2 = ["Sometimes, you need to collect pages out of order. For now, press R to die and respawn."]
    C.e('Message')
        .attr({length:2})
        .bind('EnterFrame', function(){
            this.text(message1[this.slide]);
        });

       
//LISTENER
second_message = false;
    C.e('Listener')
        .bind("EnterFrame", function(){
            if (PLAYER.x>500 && PLAYER.x < 800 && PLAYER.y > 240 && pages_collection < 2 &&  second_message == false){
                second_message = true;
                C.e('Message')
                    .attr({length:1})
                    .bind('EnterFrame', function(){
                        this.text(message2[this.slide]);
                    });
            }
        })
        .information(3,{array:[risk.floor, risk.background], scene:'Risk1'},{array:[], scene:'Coc2'});
    HUD();
});