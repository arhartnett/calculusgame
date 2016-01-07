var pages_collection = 0;
var health = 5;

var HUD  = function() {
//PAGE COUNTER
    C.e("2D, Canvas, page")
        .attr({x:-C.viewport.x + 560, y:10, z:20,alpha:0})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 560, y:-C.viewport.y+10});
            if (pages_collection == 7) this.alpha = 1;
        });;
    C.e("2D, Canvas, page")
        .attr({x:-C.viewport.x + 590, y:10, z:20,alpha:0})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 590, y:-C.viewport.y+10});
            if (pages_collection == 7) this.alpha = 1;
        });;
    C.e("2D, Canvas, page")
        .attr({x:-C.viewport.x + 620, y:10, z:20,alpha:0})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 620, y:-C.viewport.y+10});
            if (pages_collection == 6) this.alpha = 1;
        });;
    C.e("2D, Canvas, page")
        .attr({x:-C.viewport.x + 650, y:10, z:20,alpha:0})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 650, y:-C.viewport.y+10});
            if (pages_collection == 5) this.alpha = 1;
        });;
    C.e("2D, Canvas, page")
        .attr({x:-C.viewport.x + 680, y:10, z:20,alpha:0})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 680, y:-C.viewport.y+10});
            if (pages_collection == 4) this.alpha = 1;
        });;
    C.e("2D, Canvas, page")
        .attr({x:-C.viewport.x + 710, y:10, z:20,alpha:0})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 710, y:-C.viewport.y+10});
            if (pages_collection == 3) this.alpha = 1;
        });;
    C.e("2D, Canvas, page")
        .attr({x:-C.viewport.x + 740, y:10, z:20,alpha:0})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 740, y:-C.viewport.y+10});
            if (pages_collection >= 2) this.alpha = 1;
        });;
    C.e("2D, Canvas, page")
        .attr({x:-C.viewport.x + 770, y:10, z:20,alpha:0})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 770, y:-C.viewport.y+10});
            if (pages_collection >= 1) this.alpha = 1;
        });;
    
//HEALTH BAR
    C.  e('2D, Canvas, heart')
        .attr({x:-C.viewport.x + 10, y:10, z:20})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 10, y:-C.viewport.y+10});
            if (health < 1){
                this.alpha = 0;
            }
        });
    C.e('2D, Canvas, heart')
        .attr({x:-C.viewport.x + 40, y:10, z:20})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 40, y:-C.viewport.y+10});
            if (health < 2){
                this.alpha = 0;
            }
        });
    C.e('2D, Canvas, heart')
        .attr({x:-C.viewport.x + 70, y:10, z:20})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 70, y:-C.viewport.y+10});
            if (health < 3){
                this.alpha = 0;
            }
        });
    C.e('2D, Canvas, heart')
        .attr({x:-C.viewport.x + 100, y:10, z:20})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 100, y:-C.viewport.y+10});
            if (health < 4){
                this.alpha = 0;
            }
        });
    C.e('2D, Canvas, heart')
        .attr({x:-C.viewport.x + 130, y:10, z:20})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 130, y:-C.viewport.y+10});
            if (health < 5){
                this.alpha = 0;
            }
        });
    C.e('2D, Canvas, heart')
        .attr({x:-C.viewport.x + 160, y:10, z:20})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 160, y:-C.viewport.y+10});
            if (health < 6){
                this.alpha = 0;
            }
        });
        C.e('2D, Canvas, heart')
        .attr({x:-C.viewport.x + 190, y:10, z:20})
        .bind('EnterFrame', function(){
            this.attr({x:-C.viewport.x + 190, y:-C.viewport.y+10});
            if (health < 7){
                this.alpha = 0;
            }
        });
}                                   