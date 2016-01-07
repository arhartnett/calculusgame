var C = Crafty

C.scene('End', function(){
    C.viewport.x = 0;
    C.viewport.y = 500;
    C.viewport.clampToEntities=false;
    C.viewport.pan('y', 1310, 11000);
    C.background('black');
    C.c('Name',{
        init:function(){
            this.requires('2D, DOM, Text')
            .attr({x:100, w:600, z:4})
            .textFont({size:'25px', family:'Lucida Console'})
            .css({'text-align':'center', 'font-weight':'bold'})
            .unselectable();
        }
    });
    C.c('Title',{
        init:function(){
            this.requires('2D, DOM, Text')
            .attr({x:100, w:600, z:4})
            .textFont({size:'20px', family:'Lucida Console'})
            .css({'text-align':'center'})
            .textColor('#CCCCCC')
            .unselectable();
        }
    });
    
    C.e('2D, DOM, Image')
        .image('images/logo.png')
        .attr({x:100, y:100});
        
    C.e("2D, DOM, Text")
        .attr({x:000, y:0, w:800, h:40})
        .text("You Win!")
        .textFont({size:'40px', family:'Lucida Console'})
        .css({'text-align': 'center'});
    C.e('Name')
        .attr({y:350})
        .text('Andrew Hartnett');
    C.e('Title')
        .attr({y:380}).text('Code')
    C.e('Name')
        .attr({y:420}).text('Devyn Fairbairn');
    C.e('Title')
        .attr({y:450}).text('Design');
    C.e('Name')
        .attr({y:490}).text('Cristian Almodovar');
    C.e('Title')
        .attr({y:520}).text('Useless');
    C.e('Name')
        .attr({y:560}).text('Imran Razik');
    C.e('Title')
        .attr({y:590}).text('Not even in this class');
    C.e('Name')
        .attr({y:630}).text('Mr. Lord');
    C.e('Title')
        .attr({y:660}).text('Teacher');
    C.e('2D, DOM, Image')
        .image('images/craftyLogo.png')
        .attr({x:200, y:700});
    C.e('2D, DOM, Image')
        .image('images/Cloud9_logo.jpg')
        .attr({x:500, y:700});
    C.e('2D, DOM, Text, Keyboard')
        .attr({x:0, y:1000, w:800})
        .text("Product of the Class of 2014")
        .textFont({size:'40px', family:'Lucida Console'})
        .css({'text-align': 'center'})
        .bind('KeyDown', function(k){
            if (k.keyCode === 32 || k. keyCode === 13) C.scene('LevelSelect');
        });
    C.e('2D, DOM, Text')
        .attr({x:0, y:1200, w:800})
        .text("An Andrew Hartnett & Devyn Fairbairn Production")
        .textFont({size:'35px', family:'Lucida Console'})
        .css({'text-align': 'center'});
});