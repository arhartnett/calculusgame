C.scene("MathProblem", function(){
    C.background("#FFF");
    
    var gradeLevel = [{problem:'images/algebra.png', choice1:'1', choice2:'1/2', choice3:'-1', choice4:'-1/2', correct:2},
    {problem:'images/geometry.png', choice1:'(1,-5),r=16', choice2:'(-1,5),r=16', choice3:'(1,-5),r=4', choice4:'(-1,5),r=4', correct:4},
    {problem:'images/trigonometry.png', choice1:'y=3sin(.5x)', choice2:'y=3sin(2x)', choice3:'y=3sin(.25x)', choice4:'y=3sin(4x)', correct:1},
    {problem:'images/precalculus.png',choice1:'log(x/y)', choice2:'log(x)-log(y)', choice3:'log(xy)', choice4:'log(x+y)', correct:3}]
    var selection = 1;
    C.c("Answer", {
        init:function(){
            this.requires("2D, DOM, Text")
                .textFont({size:'30px', family:"Times New Roman"})
                .textColor("#000000")
                .css({"text-align":"center", "cursor":'pointer'})
                .attr({y:300, w:200, h:200});
        }
    });
    C.e("2D, DOM, Text")
        .attr({x:10, y:10})
        .textFont({size:'30px',family:"Lucida Console" })
        .bind("EnterFrame", function(){
           if (Difficulty === 1){
               this.text("Algebra");
               this.textColor("#00D836");
           }
           else if (Difficulty === 2){
               this.text("Geometry").textColor("#d9ff4c");
           }
           else if (Difficulty === 3){
               this.text("Trig").textColor("#DDDD4E");
           }
           else if (Difficulty === 4){
               this.text("PreCalc").textColor("#FFBA3B");
           }
        });
    C.e("2D, Canvas, Text")
        .text("...")
        .textFont({size:'50px', family:"Lucida Console"})
        .textColor("#000")
        .attr({x:370, y:100,z:3});
    var Question = C.e("2D, Canvas, Image")
        .attr({x:0, y:100, w:800, h:100, z:2})
        .bind("EnterFrame", function(){
            this.image(gradeLevel[Difficulty-1].problem);
        });
    C.e("2D, Canvas, Color, Keyboard")
        .attr({x:10, y:250, w:180, h:130})
        .color("#AAA")
        .bind("KeyDown", function(k){
            console.log(k.keyCode);
            if (k.keyCode === 39 && this.x!=610){
                this.x+=200;
                selection++
            }
            else if (k.keyCode === 37 && this.x!=10){
                this.x-=200;
                selection--
            }
            else if (k.keyCode === 13 || k.keyCode === 32){
                if (selection === gradeLevel[Difficulty-1].correct){
                    if (Difficulty != 4){
                        var victory = C.e('2D, Canvas, Color').color('#00AA00').attr({x:this.x, y:this.y, w:180, h:130, z:2});
                        Question.alpha = 0.5;
                        C.load([gradeLevel[Difficulty].problem], function(){
                            Difficulty++;
                            victory.alpha = 0;
                            Question.alpha = 1;
                        })
                    }
                    else {
                        C.scene('Start');
                    }
                }
                else {
                    C.e('2D, Canvas, Color, Tween').color('#AA0000').attr({x:this.x, y:this.y, w:180, h:130, z:2}).tween({alpha:0}, 500);
                }
            }
        })
    C.e("Answer")
        .attr({x:0})
        .bind('EnterFrame', function(){
            this.text(gradeLevel[Difficulty-1].choice1)
        });
    C.e("Answer")
        .attr({x:200})
        .bind('EnterFrame', function(){
            this.text(gradeLevel[Difficulty-1].choice2)
        });
    C.e("Answer")
        .attr({x:400})
        .bind('EnterFrame', function(){
            this.text(gradeLevel[Difficulty-1].choice3)
        });
    C.e("Answer")
        .attr({x:600})
        .bind('EnterFrame', function(){
            this.text(gradeLevel[Difficulty-1].choice4)
        });
});