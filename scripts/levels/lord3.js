var C = Crafty;

C.scene("Lord3",function(){
	C.background('#FFFFFF url('+lord.background+')');
	var floor = lord.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[0].code[2]) UNLOCKED = Worlds[0].code[2];
	
	PLAYER = C.e("Player")
		.attr({x:100, y:100});

//FLOOR
    C.e("Floor")
	    .attr({x:50,w:5000})
	    .image(floor);
//DESKS
    
//BOOKS
    C.e("Solid, books")
        .attr({x:2460, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:2800, y:400, w:40, h:40})
        .walkable();
        
    C.e("Solid, books")
        .attr({x:3260, y:400, w:40, h:40})
        .walkable();
    C.e("Solid, books")
        .attr({x:3700, y:400, w:40, h:40})
        .walkable();
	            
    C.e("Solid, books")
        .attr({x:4160, y:400, w:40, h:40})
        .walkable();
	    
//PAGES
    C.e("Page")
        .attr({x:1100, y:200, z:15});
    C.e("Page")
        .attr({x:2650, y:380, z:15});
    C.e("Page, Tween")
        .attr({x:3050, y:400, z:15})
        .bind('EnterFrame', function(){
            if (this.y >= 400)this.tween({y:0}, 2000);
            else if (this.y<=0)this.tween({y:400}, 2000);
        });
    C.e("Page")
        .attr({x:3500, y:390, z:15});
    C.e("Page")
        .attr({x:4960, y:200, z:15});
//PAINS
    C.e('Pain, pop_quiz')
        .attr({x:300, y:380, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:500, y:380, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:700, y:380, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:900, y:380, z:15, w:40, h:40});
    C.e('Pain, pop_quiz')
        .attr({x:1100, y:380, z:15, w:40, h:40});
        
    C.e('Pain,pop_quiz')
        .attr({x:1800, y:380, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if(PLAYER.x >= 1100 && PLAYER.x <= 1108){
                this.bind('EnterFrame', function(){
                    this.x-=5;
                    if (this.x < 0) this.destroy();
                });
            }
        });
        
    C.e('Pain,pop_quiz, Tween')
        .attr({x:2100, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if (this.y >= 400)this.tween({y:0}, 2000);
            else if (this.y<=0)this.tween({y:400}, 2000);
        });

    C.e('Pain,pop_quiz,Tween')
        .attr({x:2500, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if (this.x <= 2500) this.tween({x:2760}, 2000);
            else if (this.x >=2760) this.tween({x:2500}, 2000);
        });
        
    C.e('Pain,pop_quiz,Tween')
        .attr({x:3300, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if (this.x <= 3300) this.tween({x:3660}, 2000);
            else if (this.x >=3660) this.tween({x:3300}, 2000);
        });
    C.e('Pain,pop_quiz,Tween')
        .attr({x:3660, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            if (this.x <= 3300) this.tween({x:3660}, 2000);
            else if (this.x >=3660) this.tween({x:3300}, 2000);
        });

    C.e('Pain,pop_quiz')
        .attr({x:3900, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            this.y-=5;
            if (this.y<=-40)this.y = 400;
        });
        
        
    C.e('Pain, pop_quiz')
        .attr({x:4200, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            this.x+=3;
            if(this.x >= 5200) this.x = 4200;
        });
    C.e('Pain, pop_quiz')
        .attr({x:4400, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            this.x+=3;
            if(this.x >= 5200) this.x = 4200;
        });
    C.e('Pain, pop_quiz')
        .attr({x:4600, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            this.x+=3;
            if(this.x >= 5200) this.x = 4200;
        });
    C.e('Pain, pop_quiz')
        .attr({x:4800, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            this.x+=3;
            if(this.x >= 5200) this.x = 4200;
        });
    C.e('Pain, pop_quiz')
        .attr({x:5000, y:400, w:40, h:40, z:15})
        .bind('EnterFrame', function(){
            this.x+=3;
            if(this.x >= 5200) this.x = 4200;
        });
        
//MESSAGES
    var message1=["WAYNE is the password for this level. There are five pages.","Sometimes, Pop Quizzes can move. It's crazy."];
    C.e('Message')
        .attr({length:2})
        .bind('EnterFrame', function(){
            this.text(message1[this.slide]);
        });
       
//LISTENER
    C.e('Listener')
        .information(5,{array:[fightclub.floor, fightclub.background], scene:'Lord4'},{array:[], scene:'Lord3'});
    HUD();
});