var C = Crafty;

C.scene('FightClub',function(){
    C.background('#222 url(images/fight_club.png)');
    var floor = 'images/wrestling_floor.png';
    health = 5;
    pages_collection = 0;
    PLAYER = C.e("Player")
		.attr({x:200, y:100});
	HUD();
    C.e('Keyboard')
        .bind('KeyDown', function(k){
            if (k.keyCode === 82)C.scene('FightClub');
        });
		
//DESKS
    C.e("2D, Canvas, wrestlerTop, Platform")
       .attr({x:300, y:360, w:120, h:6, z:5});
   C.e("2D, Canvas, wrestlerFrame")
    .attr({x:300, y:366, w:120, h:74, z:5});
//BOOKS
   
//FLOOR
    C.e("Floor")
        .attr({x:-300, w:300})
        .image(floor);
    C.e("Floor") //Floor
	    .attr({x:100,w:400})
	    .image(floor);
	C.e("Floor")
	    .attr({x:700,w:50})
	    .image(floor);
    C.e("Floor")
        .attr({x:950, w:3000})
        .image(floor);
//PAGES
    C.e("Page")
        .attr({x:-50, y:380, z:15});
//PAIN
    C.e("Pain, ko")
        .attr({x:1150, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:1300, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:1450, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:1600, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:1750, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:2000, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:2000, y:330, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:2200, y:380, z:15, w:40, h:40});
    C.e("Pain, ko")
        .attr({x:2200, y:330, z:15, w:40, h:40});
    C.e("Pain, ko,Tween")
        .attr({x:2600, y:380, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >379)this.tween({y:180},4000);
            else if (this.y <181)this.tween({y:380},4000);
        });
    C.e("Pain, ko,Tween")
        .attr({x:2800, y:380, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >379)this.tween({y:280},2000);
            else if (this.y <281)this.tween({y:380},2000);
        });
    C.e("Pain, ko,Tween")
        .attr({x:3000, y:380, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >379)this.tween({y:180},4000);
            else if (this.y <181)this.tween({y:380},4000);
        });
    C.e("Pain, ko,Tween")
        .attr({x:3100, y:180, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >379)this.tween({y:180},4000);
            else if (this.y <181)this.tween({y:380},4000);
        });
        
//MESSAGES
    var message_list=["Welcome to Fight Club. Rule 1, don't talk about it. Rule 2, don't get knocked out.",
    "There's only one page here. But it's hidden."];
    C.e('Message')
        .attr({length:2})
        .bind('EnterFrame', function(){
            this.text(message_list[this.slide]);
        });
var second_list=["Hmm... no sign of the missing page. Why don't you try retracing your steps?"];

        
//LISTENER
second_message = false;
    C.e('Listener')
        .bind("EnterFrame", function(){
            if (PLAYER.x>3500 && second_message == false){
                second_message = true;
                C.e('Message')
                    .attr({length:1})
                    .bind('EnterFrame', function(){
                        this.text(second_list[this.slide]);
                    });
            }
        })
        .information(1,{array:[],scene:'End'},{array:[CHARACTER,'images/fight_club.png','images/wrestling_floor.png'], scene:'FightClub'})
       
});