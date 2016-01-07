var C = Crafty;

C.scene('FightClub2',function(){
    C.background('#222 url('+fightclub.background+')');
    var floor = fightclub.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[1].code[1]) UNLOCKED = Worlds[1].code[1];
    PLAYER = C.e("Player")
		.attr({x:100, y:100});
    C.e('Keyboard')
        .bind('KeyDown', function(k){
            if (k.keyCode === 82)C.scene('FightClub');
        });
//FLOOR
    C.e("Floor") //Floor
	    .attr({x:100,w:400})
	    .image(floor);
	C.e("Floor")
	    .attr({x:700,w:50})
	    .image(floor);
    C.e("Floor")
        .attr({x:950, w:4000})
        .image(floor);		
//DESKS

    
    C.e("2D, Canvas, wrestlerTop, Platform")
       .attr({x:1100, y:360, w:120, h:6, z:5});
   C.e("2D, Canvas, wrestlerFrame")
    .attr({x:1100, y:366, w:120, h:74, z:5});
//BOOKS

//PAGES
    C.e("Page")
        .attr({x:300, y:400, z:15});
    C.e("Page")
        .attr({x:2600, y:340, z:15});
    C.e("Page, Tween")
        .attr({x:4500, y:180, z:16})
        .bind("EnterFrame", function(){
            if (this.y >379)this.tween({y:180},4000);
            else if (this.y <181)this.tween({y:380},4000);
        });
//PAIN
    C.e("Pain, ko")
        .attr({x:240, y:400, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:360, y:400, z:15, w:40, h:40});
    C.e("Pain,ko,Tween")
        .attr({x:2100, y:380, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (PLAYER.x >= 950){
                this.tween({x:-50},8000);
            }
        });
    C.e("Pain,ko,Tween")
        .attr({x:3100, y:300, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (PLAYER.x >= 950){
                this.tween({x:-50},8000);
            }
        });
    C.e("Pain,ko,Tween")
        .attr({x:3100, y:380, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (PLAYER.x >= 950){
                this.tween({x:-50},8000);
            }
        });
    C.e("Pain, ko")
        .attr({x:2150, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:2300, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:2450, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:2600, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:2750, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:3000, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:3000, y:330, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:3200, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:3200, y:330, z:15, w:40, h:40});
    C.e("Pain, ko,Tween")
        .attr({x:3600, y:380, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >379)this.tween({y:180},4000);
            else if (this.y <181)this.tween({y:380},4000);
        });
    C.e("Pain, ko,Tween")
        .attr({x:3800, y:380, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >379)this.tween({y:280},2000);
            else if (this.y <281)this.tween({y:380},2000);
        });
    C.e("Pain, ko,Tween")
        .attr({x:4000, y:380, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >379)this.tween({y:180},4000);
            else if (this.y <181)this.tween({y:380},4000);
        });
    C.e("Pain, ko,Tween")
        .attr({x:4150, y:180, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >379)this.tween({y:180},4000);
            else if (this.y <181)this.tween({y:380},4000);
        });
    C.e("Pain, ko,Tween")
        .attr({x:4500, y:380, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >379)this.tween({y:180},4000);
            else if (this.y <181)this.tween({y:380},4000);
        });
        
//MESSAGES
    var message_list=["The password for this level is TKO. There are 3 pages."];
    C.e('Message')
        .attr({length:1})
        .bind('EnterFrame', function(){
            this.text(message_list[this.slide]);
        });

        
//LISTENER
second_message = false;
    C.e('Listener')
        .information(3,{array:[risk.floor],scene:'FightClub3'},{array:[], scene:'FightClub2'});
        
	HUD();
       
});