C.scene("Coc1",function(){
	C.background('#FFFFFF url('+coc.background+')');
	var floor = coc.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[3].code[0]) UNLOCKED = Worlds[3].code[0];
	PLAYER = C.e("Player")
		.attr({x:300, y:100});
    
//FLOOR

    C.e("Floor")
	    .attr({x:0,w:600})
	    .image(floor);
    C.e("Floor")
	    .attr({x:1800,w:400})
	    .image(floor);
//DESKS
    C.e("2D, Canvas, clashTop, Platform")
       .attr({x:400, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, clashFrame")
        .attr({x:400, y:366, w:120, h:74, z:5});
//BOOKS
    for (var the_y = 0; the_y<=400; the_y+=40){
        C.e("2D, Canvas, ladder, Collision, Wall")
            .attr({x:0, y:the_y, w:40, h:40, z:5 })
            .collision();
    }
    C.e('Solid,ladder')
        .attr({x:600, y:400,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:700, y:300,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:800, y:200,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:1000, y:200,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:1200, y:200,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:1400, y:200,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:1400, y:400,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:1600, y:400,w:40,h:40}).walkable();
        
    C.e('Solid,ladder')
        .attr({x:2200, y:400,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:2300, y:300,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:2400, y:200,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:2600, y:200,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:2800, y:200,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:3000, y:200,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:3000, y:400,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:3200, y:200,w:40,h:40}).walkable();
    C.e('Solid,ladder')
        .attr({x:3200, y:400,w:40,h:40}).walkable();
//PAGES
    C.e('Page')
        .attr({x:440,y:100});
    C.e('Page')
        .attr({x:1400,y:360});
    C.e('Page')
        .attr({x:3000,y:360});
    C.e('Page')
        .attr({x:3200,y:160});
//PAINS

//MESSAGES
    var message1=["Welcome to COC. Clash of Clans, that is.",
        "I really have no idea how pages from the AP test ended up here, but four of them did. Oh, and the password is ARCHER"];
    C.e('Message')
        .attr({length:2})
        .bind('EnterFrame', function(){
            this.text(message1[this.slide]);
        });

       
//LISTENER
    C.e('Listener')
        .information(4,{array:[], scene:'Coc2'},{array:[], scene:'Coc1'});
    HUD();
});