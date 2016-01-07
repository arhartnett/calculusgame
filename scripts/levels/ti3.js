var C = Crafty;

C.scene('Calculator3',function(){
    C.background('#222 url('+ti83.background+')');
    var floor = ti83.floor;
    health = 5;
    pages_collection = 0;
    if (UNLOCKED < Worlds[2].code[2]) UNLOCKED = Worlds[2].code[2];
    PLAYER = C.e("Player")
		.attr({x:220, y:100});
    C.e('Keyboard')
        .bind('KeyDown', function(k){
            if (k.keyCode === 82)C.scene('FightClub');
        });
        
//LISTENER
    C.e('Listener')
        .information(3,{array:[coc.floor, coc.background],scene:'Coc1'},{array:[], scene:'Calculator3'});
        
//CALC EDGES
    C.e('2D, Canvas, Image')
        .attr({x:0, y:0, z:19})
        .image('images/calculatorleft.png')
        .bind('EnterFrame', function(){
            this.x = -C.viewport.x;
            this.y = -C.viewport.y;
        });
    C.e('2D, Canvas, Image')
        .attr({x:710, y:0, z:19})
        .image('images/calculatorright.png')
        .bind('EnterFrame', function(){
            this.x = -C.viewport.x+710;
            this.y = -C.viewport.y;
        });
        
//FLOOR
    C.e("Floor")
	    .attr({x:0,w:100})
	    .image(floor);
    C.e("Floor")
	    .attr({x:200,w:100})
        .image(floor);
    C.e("Floor")
	    .attr({x:400,w:500})
        .image(floor);
    C.e("Floor")
        .attr({x:2500, w:350})
        .image(floor);
    C.e("Floor")
	    .attr({x:2600,w:100, y:300})
        .image(floor);
    C.e("Floor")
	    .attr({x:2700,w:200, y:300})
	    .removeComponent("Platform")
        .image(floor);
   C.e("Floor")
	    .attr({x:2900,w:100, y:180})
        .image(floor);
		
//DESKS

//SOLIDS
   C.e("Solid, calcx")
    .attr({x:900, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:1100, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:1300, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:1500, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:1700, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:1900, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:2100, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:2300, y:400, w:40, h:40}).walkable();
   C.e("Solid, calcx")
    .attr({x:2700, y:260, w:40, h:40}).walkable();

//PAGES
    C.e("Page")
        .attr({x:30, y:380, w:40, h:40});
    C.e("Page")
        .attr({x:700, y:380, w:40, h:40});
    C.e("Page")
        .attr({x:2940, y:120, w:40, h:40});
//PAIN
    C.e("Pain, error,Tween")
        .attr({x:130, y:280, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >399)this.tween({y:280},3000);
            else if (this.y <281)this.tween({y:400},3000);
        });
    C.e("Pain, error,Tween")
        .attr({x:330, y:280, z:15, w:40, h:40})
        .bind("EnterFrame", function(){
            if (this.y >399)this.tween({y:280},3000);
            else if (this.y <281)this.tween({y:400},3000);
        });
//MESSAGES
    var message_list=["Collect 3 pages. The password is MORALSUPPORT"];
    C.e('Message')
        .attr({length:1})
        .bind('EnterFrame', function(){
            this.text(message_list[this.slide]);
        });
           
	HUD();
       
});