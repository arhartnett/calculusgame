var C = Crafty

C.scene('Password', function(info){
    var password = info.password;
    var passon = info.passon;
    console.log(passon);
    
    C.viewport.x = 0;
    C.viewport.y = 0;
    C.background('#000');
    
    var input_string = ""
    C.e("2D, DOM, Text")
        .text("Enter Password")
        .textFont({size:'50px', family:"Lucida Console"})
        .textColor('white')
        .css({'text-align':'center'})
        .attr({x:0, w:800, y:100, h:50});
    var input = C.e("2D, DOM, Text,Tween")
        .text(input_string)
        .textFont({size:'50px', family:"Lucida Console"})
        .textColor('#BBB')
        .css({'text-align':'center'})
        .attr({x:0, w:800, y:250, h:50})
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
                if (input_string == password) {
                    this.destroy();
                    C.scene('loading', passon);
                }
                else{
                    input.textColor('#FF0000')
                    input.tween({alpha:0}, 1000);
                    input.bind('TweenEnd', function(){
                        input_string = "";
                        this.alpha = 1;
                        input.textColor('#FFFFFF')
                    })
                }
            }
        });
});