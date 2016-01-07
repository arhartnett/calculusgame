var C = Crafty
C.c('Solid',{
    init: function() {
        this.requires("2D, Canvas, Collision, Wall")
            .attr({w:40, h:40, z:5})
            .collision();
    },
    walkable: function(){
        C.e("2D, Platform").attr({x:this.x, y:this.y, w:40, h:1});
    }
});
C.c('Floor',{
    init: function(){
        this.requires("2D, Platform")
            .attr({y:440, h:1,z:1});
    },
    image: function(world){
        C.e("2D, Canvas, Image")
            .image(world,'repeat-x')
            .attr({x:this.x, y:this.y-60, w:this.w, h:120, z:3});
   }
});
C.c('Listener',{
    init: function(){
        this.requires('Keyboard')
            .bind('KeyDown', function(k){
                if (k.keyCode === 82) health = 0;
                else if (k.keyCode === 27){
                    this.destroy();
                    C.scene('LevelSelect');
                }
            })
            .bind('EnterFrame', function(){
                if (PLAYER.x > -C.viewport.x+420){
                    C.viewport.x-=8;
                }
                else if (PLAYER.x < -C.viewport.x+380){
                    C.viewport.x+=8;
                }
                if (-C.viewport.x < 0)C.viewport.x = 0;
            });
    },
    information: function(reqd_pages,next_level_info,dead_level_info){
                this.bind('EnterFrame', function(){
        		    if (pages_collection == reqd_pages){
        		        if (sounds == true) C.audio.play('victory',1,0.5);
        		        this.destroy();
        	            C.e('2D, DOM, Text, Keyboard')
                           .text('Level Cleared')
                           .textFont({size:'80px', family:"Lucida Console"})
                           .textColor('#0000FF') 
                           .css({'background-color':'black','text-align':'center','line-height':'100px','padding-top':'20px'})
                           .attr({x:-Crafty.viewport.x, y:200,w:800, h:100,z:20, alpha:0.9})
                           .bind('KeyDown', function(k){
                               if (k.keyCode === 13 || k.keyCode === 32){
                                   PLAYER.enableControl();
                                   C.scene('loading',next_level_info);
                                   this.destroy();
                               }
                           });
        		        PLAYER.disableControl();
        		    }
        		    if (health <= 0){
                        C.viewport.y = 0;
                        console.log(C.viewport.y)
                        C.pause();
        		        if (sounds == true) C.audio.play('dead',1,0.5);
        		        this.destroy();
        		        PLAYER.alpha = 0.5
        		        PLAYER.tween({y:600},1000)
        		        C.e('2D, DOM, Text, Keyboard')
                           .text('You Died')
                           .textFont({size:'80px', family:"Lucida Console"})
                           .textColor('#FF0000')
                           .css({'background-color':'black','text-align':'center','line-height':'100px','padding-top':'20px'})
                           .attr({x:-Crafty.viewport.x, y:200,w:800, h:100, z:20, alpha:0.9})
                           .bind('KeyDown', function(k){
                               if (k.keyCode === 13 || k.keyCode === 32){
                                   C.pause(false);
                                   PLAYER.enableControl();
                                   C.scene('loading',dead_level_info);
                                   this.destroy();
                               }
                           });
        		        PLAYER.disableControl();
    		        }     
                });
    }
});
C.c('Message',{
    init: function() {
        this.requires("2D, DOM, Text")
            .attr({x:-C.viewport.x + 400, y:110, w:290, h:280,z:50,alpha:1,slide:0})
            .textFont({size:'25px', family:'Lucida Console'})
            .textColor('#FFF')
            .bind('KeyDown', function(k){
                C.pause(false);
                if (k.keyCode === 13 || k.keyCode === 32){
                    if(this.slide < this.length-1){
                        this.slide++
                    }
                    else {
                        PLAYER.enableControl();
                        this.alpha = 0;
                        clear_message.alpha = 0;
                        talker.alpha = 0;
                        background.alpha = 0;
                    }
                }
            });
        var background = C.e('2D, Canvas, Color')
            .attr({x:-C.viewport.x+100, y:100, w:600, h:300, z:45})
            .color('#000');
        var clear_message = C.e('2D, DOM, Text')
            .attr({x:-C.viewport.x+100, y:380, w:600, h:300,z:50})
            .textFont({size:'15px', family:'Lucida Console'})
            .textColor('#FFF')
            .css({'text-align':'center'})
            .text('PRESS SPACE');
        var talker = C.e('2D, Canvas, SpriteAnimation,lord_head')
            .attr({x:-C.viewport.x+150, y:150, w:200, h:200,z:55})
            .reel('talking',300,[[120,0,40,40],[120,40,40,40]])
            .animate('talking',-1);
        if (sounds == true) C.audio.play('radio_message');
        PLAYER.disableControl();
    }
});
C.c('Page',{
    init: function() {
        this.requires("2D, Canvas, page, Collision")
            .attr({w:40, h:40})
            .collision()
            .onHit('Player', function() {
                this.destroy();
                pages_collection++;
                if (sounds == true) C.audio.play('page_collect');
            });
    }
});
C.c('Pain',{
   init: function() {
       this.requires("2D, Canvas, Collision")
        .attr({w:40, h:40})
        .collision()
        .onHit('Player', function(){
            PLAYER.tween({y:(PLAYER.y-50)},100);
            if(this.x>PLAYER.x) PLAYER.tween({x:(PLAYER.x-10)},50);
            else if(this.x<PLAYER.x) PLAYER.tween({x:(PLAYER.x+10)},50);
            if (sounds == true) C.audio.play('pain_sound',1,0.5);
            this.destroy();
            PLAYER.enableControl();
            health--;
        });
   } 
});
C.c('Player', {
    init: function() {
        this.requires("2D, Canvas, Image, Twoway, Gravity, Collision,Tween")
            .attr({w:60, h:126,z:10})
			.image(CHARACTER)
			.twoway(8,20)
			.gravity('Platform')
			.gravityConst(1.2)
			.collision([8,0],[8,126],[52,126],[52,0])
			.onHit('Wall', function(){
			    this._speed = 0;
			    if(this._movement) this.attr({x: this.x - this._movement.x });
			})
			.bind("KeyDown", function(k){
			    if (k.keyCode === 38 || k.keyCode === 87) if (sounds == true) C.audio.play('jump',1,0.5);
			})
			.bind("EnterFrame", function() {
			    if (this.y > 500){
			        health = 0;
			    }
			    
			});
    }
});