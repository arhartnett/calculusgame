C.scene('Start', function(){
    var loading_message = C.e("2D, DOM, Text")
        .text('Loading...')
        .attr({x:100, y:200, w:600})
        .textFont({size:'40px', family:'Lucida Console'})
        .css({'text-align': 'center'});
    C.load(['images/logo.png'], function(){
        loading_message.alpha=0;
        C.background("#000");
         C.e("2D, DOM, Text")
            .attr({x:10, y:10})
            .textFont({size:'30px',family:"Lucida Console" })
            .text("Calculus")
            .textColor('#FF4E4E');
        instructions = C.e("2D, DOM, Text")
            .text('Press Space to Start<br>Press P to Enter Password')
            .attr({x:100, y:350, w:600, frame:20, alpha:0})
            .textFont({size:'40px', family:'Lucida Console'})
            .css({'text-align': 'center'});
        C.e('2D, Canvas, Image,Tween')
            .image('images/logo.png')
            .attr({x:100, y:550})
            .tween({y:50},2000)
            .bind("TweenEnd", function(){
                instructions.alpha = 1;
                instructions.bind("EnterFrame",function(){
                this.frame-=1;
                if (this.frame==10)this.alpha=0;
                else if(this.frame==0){
                    this.alpha=1;
                    this.frame=20;
                }
            });
        });
        if (sounds == true) C.audio.play("explosion",0.5);
        C.e('Keyboard')
            .bind("KeyDown", function(k){
                if (k.keyCode === 13 || k.keyCode === 32){
                    this.destroy();
                    UNLOCKED = 0;
                    C.scene('charSelect');
                }
                else if (k.keyCode === 80){
                    this.destroy;
                    instructions.destroy();
    var input_string = "";
    C.e("2D, DOM, Text")
        .text("Enter Password")
        .textFont({size:'50px', family:"Lucida Console"})
        .textColor('white')
        .css({'text-align':'center'})
        .attr({x:0, w:800, y:300, h:50});
    C.e("2D, DOM, Text")
        .text(input_string)
        .textFont({size:'50px', family:"Lucida Console"})
        .textColor('#BBB')
        .css({'text-align':'center'})
        .attr({x:0, w:800, y:400, h:50})
        .bind("EnterFrame", function(){
            this.text(input_string);
        });
    C.e("Keyboard")
        .bind("KeyDown", function(k){
            if (k.keyCode === 65) input_string+='A';
            else if (k.keyCode === 66) input_string+='B';
            else if (k.keyCode === 67) input_string+='C';
            else if (k.keyCode === 68) input_string+='D';
            else if (k.keyCode === 69) input_string+='E';
            else if (k.keyCode === 70) input_string+='F';
            else if (k.keyCode === 71) input_string+='G';
            else if (k.keyCode === 72) input_string+='H';
            else if (k.keyCode === 73) input_string+='I';
            else if (k.keyCode === 74) input_string+='J';
            else if (k.keyCode === 75) input_string+='K';
            else if (k.keyCode === 76) input_string+='L';
            else if (k.keyCode === 77) input_string+='M';
            else if (k.keyCode === 78) input_string+='N';
            else if (k.keyCode === 79) input_string+='O';
            else if (k.keyCode === 80) input_string+='P';
            else if (k.keyCode === 81) input_string+='Q';
            else if (k.keyCode === 82) input_string+='R';
            else if (k.keyCode === 83) input_string+='S';
            else if (k.keyCode === 84) input_string+='T';
            else if (k.keyCode === 85) input_string+='U';
            else if (k.keyCode === 86) input_string+='V';
            else if (k.keyCode === 87) input_string+='W';
            else if (k.keyCode === 88) input_string+='X';
            else if (k.keyCode === 89) input_string+='Y';
            else if (k.keyCode === 90) input_string+='Z';
            else if (k.keyCode === 8 || k.keyCode === 37) input_string = input_string.substring(0,input_string.length-1);
            else if (k.keyCode === 13){
                var l = 0
                for (var i = 0 ; i < Worlds.length; i++){
                    var w = Worlds[i];
                    if (w.passwords.indexOf(input_string) > -1){
                        l+=w.passwords.indexOf(input_string);
                        this.destroy();
                        UNLOCKED = l;
                        C.scene("charSelect",{array:[Worlds[i].name.background, Worlds[i].name.floor], scene:Worlds[i].levels[w.passwords.indexOf(input_string)]});
                    }
                    else l+=w.passwords.length;
                }
            }
        });
                }
            });
    });
});