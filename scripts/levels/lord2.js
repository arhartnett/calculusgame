C.scene("Lord2",function(){
	C.background('#FFFFFF url('+lord.background+')');
	var floor = lord.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[0].code[1]) UNLOCKED = Worlds[0].code[1];
	
	PLAYER = C.e("Player")
		.attr({x:300, y:100});

//FLOOR
    C.e("Floor")
	    .attr({x:0,w:1100})
	    .image(floor);
        
	C.e("Floor")
	    .attr({x:1300,w:700})
	    .image(floor);
    C.e("Floor")
        .attr({x:1950, w:200})
	    .image(floor);
    C.e("Floor")
        .attr({x:2400, w:1000})
	    .image(floor);
    C.e("Floor")
        .attr({x:3600, w:1000})
	    .image(floor); 
//DESKS
    
//BOOKS
    for (var the_y = 0; the_y<=400; the_y+=40){
        C.e("2D, Canvas, books, Collision, Wall")
            .attr({x:0, y:the_y, w:40, h:40, z:5 })
            .collision();
    }
        
    C.e("Solid,books")
        .attr({x:1700,y:400,w:40,h:40});
    C.e("Solid,books")
        .attr({x:1700,y:360,w:40,h:40});
    C.e("Solid,books")
        .attr({x:1700, y:320,w:40,h:40}).walkable();
    C.e("Solid,books")
        .attr({x:1740,y:400,w:40,h:40});
    C.e("Solid,books")
        .attr({x:1740,y:360,w:40,h:40});
    C.e("Solid,books")
        .attr({x:1740, y:320,w:40,h:40}).walkable();
        
    C.e("Solid,books")
        .attr({x:2700, y:400,w:40,h:40}).walkable();
    C.e("Solid,books")
        .attr({x:2860, y:400,w:40,h:40});
    C.e("Solid,books")
        .attr({x:2860, y:360,w:40,h:40}).walkable();
    C.e("Solid,books")
        .attr({x:3020, y:400,w:40,h:40});
    C.e("Solid,books")
        .attr({x:3020, y:360,w:40,h:40});
    C.e("Solid,books")
        .attr({x:3020, y:320,w:40,h:40}).walkable();
    C.e("Solid,books")
        .attr({x:3180, y:400,w:40,h:40});
    C.e("Solid,books")
        .attr({x:3180, y:360,w:40,h:40});
    C.e("Solid,books")
        .attr({x:3180, y:320,w:40,h:40});
    C.e("Solid,books")
        .attr({x:3180, y:280,w:40,h:40}).walkable();
	    
//PAGES
    C.e("Page")
        .attr({x:1400, y:380, z:15});
    C.e("Page")
        .attr({x:1850, y:100, z:15});
    C.e("Page")
        .attr({x:2900, y:80, z:15});
    C.e("Page")
        .attr({x:3800, y:320, z:15});
    C.e("Page")
        .attr({x:4300, y:380, z:15});
//PAINS
    C.e('Pain, pop_quiz')
        .attr({x:800, y:380, z:15, w:40, h:40});
        
        
    C.e('Pain, pop_quiz')
        .attr({x:3300, y:380, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:2920, y:350, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:3800, y:380, z:15, w:40, h:40});
    C.e('Pain,pop_quiz')
        .attr({x:4200, y:380, w:40, h:40, z:15});
    C.e('Pain,pop_quiz')
        .attr({x:4400,y:380,w:40,h:40,z:15});
//MESSAGES
    var message1=["You got through the first level, I'm impressed. But there are a lot more to come.",
    "To get straight to this level the next time you play, you'll need this password:<br><br>     MATH"];
    var message2=["Oh look, a Pop Quiz! Why don't you go collect it?"];
    var message3=["Yeah, you should try to avoid those. They decrease your health. I just wanted you to learn it the hard way.",
        "Anyway, I want you to try this level on your own. There are five pages."]
    C.e('Message')
        .attr({length:2})
        .bind('EnterFrame', function(){
            this.text(message1[this.slide]);
        });
       
//LISTENER
var second_message= false;
var third_message = false;
    C.e('Listener')
        .bind("EnterFrame", function(){
            if (PLAYER.x >=450 && second_message == false){
                second_message = true;
                C.e('Message')
                    .attr({length:1})
                    .bind('EnterFrame', function(){
                        this.text(message2[this.slide]);
                    });
            }
            if (health === 4 && third_message == false){
                third_message = true;
                C.e('Message')
                    .attr({length:2})
                    .bind('EnterFrame', function(){
                        this.text(message3[this.slide]);
                    });
            }
        })
        .information(5,{array:[], scene:'Lord3'},{array:[], scene:'Lord2'})
    HUD();
});