var C = Crafty;

C.scene('FightClub1',function(){
    C.background('#222 url('+fightclub.background+')');
    var floor = fightclub.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[1].code[0]) UNLOCKED = Worlds[1].code[0];
    PLAYER = C.e("Player")
		.attr({x:200, y:100});
    C.e('Keyboard')
        .bind('KeyDown', function(k){
            if (k.keyCode === 82)C.scene('FightClub');
        });
//FLOOR
    C.e("Floor") //Floor
	    .attr({x:100,w:1000})
	    .image(floor);
    C.e('Floor')
        .attr({x:1300, w:700})
        .image(floor);
    C.e('Floor')
        .attr({x:2200, w:700})
        .image(floor);
    C.e('Floor')
        .attr({x:3130, w:400})
        .image(floor);
//DESKS
    C.e("2D, Canvas, wrestlerTop, Platform")
       .attr({x:300, y:360, w:120, h:6, z:5});
    C.e("2D, Canvas, wrestlerFrame")
        .attr({x:300, y:366, w:120, h:74, z:5});

//BOOKS
    C.e('Solid, gatorade')
        .attr({x:700, y:400, w:40, h:40}).walkable();
    C.e('Solid, gatorade')
        .attr({x:740, y:400, w:40, h:40})
    C.e('Solid, gatorade')
        .attr({x:740, y:360, w:40, h:40}).walkable();
    C.e('Solid, gatorade')
        .attr({x:780, y:400, w:40, h:40})
    C.e('Solid, gatorade')
        .attr({x:780, y:360, w:40, h:40});
    C.e('Solid, gatorade')
        .attr({x:780, y:320, w:40, h:40}).walkable();
    C.e('Solid, gatorade')
        .attr({x:2400, y:400, w:40, h:40}).walkable();
    C.e('Solid, gatorade')
        .attr({x:3130, y:360, w:40, h:40}).walkable();
    C.e('Solid, gatorade')
        .attr({x:3130, y:400, w:40, h:40});
//PAGES
    C.e("Page")
        .attr({x:10, y:200, z:15});
    C.e("Page")
        .attr({x:2400, y:150, z:15});
    C.e("Page")
        .attr({x:3430, y:350, z:15});
//PAIN
    C.e('Pain, ko')
        .attr({x:340, y:400, w:40, h:40, z:15});
    C.e('Pain, ko')
        .attr({x:820, y:400, w:40, h:40, z:15});
    C.e('Pain, ko')
        .attr({x:860, y:400, w:40, h:40, z:15});
    C.e('Pain, ko')
        .attr({x:900, y:400, w:40, h:40, z:15});
    C.e("Pain,ko,Tween")
        .attr({x:2000, y:350, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (PLAYER.x >= 1300){
                this.tween({x:-50},8000);
            }
        });
    C.e('Pain, ko')
        .attr({x:2400, y:100, w:40, h:40, z:15});
    C.e("Pain, ko,Tween")
        .attr({x:2700, y:380, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >379)this.tween({y:180},4000);
            else if (this.y <181)this.tween({y:380},4000);
        });
        
//MESSAGES
    var message_list=["Welcome to Fight Club. Rule 1, don't talk about it. Rule 2, don't get knocked out.",
    "You can use those bent over wrestlers as platforms, but watch out for boxing gloves.",
    "The password for this level is FIST. There are 3 pages."];
    C.e('Message')
        .attr({length:3})
        .bind('EnterFrame', function(){
            this.text(message_list[this.slide]);
        });

        
//LISTENER
    C.e('Listener')
        .information(3,{array:[risk.floor],scene:'FightClub2'},{array:[], scene:'FightClub1'});
        
	HUD();
       
});