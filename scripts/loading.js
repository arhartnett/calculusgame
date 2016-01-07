var C = Crafty

var Quotes = [
'"I\'m going to have to assume you\'re talking in code."<br>-Mr. Lord',
'"Kobe!"<br>-Brad',
'"Can I go to the bathroom?"<br>-Josh',
'"Go ahead. Tell me I can\'t do that."<br>-Mr. Lord',
'"I\'m not about that life."<br>-Warren',
'"Is this going to be on the test?"<br>-Randi',
'"I don\'t mean to insult your intelligence."<br>-Mr. Lord',
'"I found a typo!"<br>-Jonny',
'"Wait, what is a derivative?"<br>-Everyone',
'"I\'m not even going to answer that."<br>-Mr. Lord',
'"Will, shut up."<br>-Nick',
'"Nick, you\'re wrong"<br>-Will',
'"Quiz?"<br>-Not A Quiz',
'"Get out."<br>-Mr. Lord',
'"Mr. Lord?"<br>-Everyone',
'"Go ask Devyn."<br>-Mr. Lord',
'"I am doing work! I\'ve made like four boxes!"<br>-Brad',
'"And number 2 is also... not B."<br>-Mr. Lord',
'"I don\'t need one of these."<br>-Imran',
'"Mr. Lord, do you wanna come to Chipotle?"<br>-Nick H',
'*draws rocket*<br>-Jonny'
]

C.scene('loading',function(load_data){
    console.log(load_data);
    C.background('black');
    C.viewport.x = 0;
    C.viewport.y = 0;
    var number = (Math.floor((Math.random() * Quotes.length)));
    C.e("2D, DOM, Text")
        .text(Quotes[number])
        .attr({x:100, y:100, w:600})
        .textFont({size:'40px', family:'Times New Roman'})
        .css({'text-align': 'center'});
    var loading_message = C.e("2D, DOM, Text")
        .text('Loading...')
        .attr({x:100, y:400, w:600})
        .textFont({size:'40px', family:'Lucida Console'})
        .css({'text-align': 'center'});
    pages_collection = 0;
    C.load(load_data.array,function() {
        loading_message.alpha = 0;
        C.e("2D, DOM, Text")
            .text('Press Space to Start')
            .attr({x:100, y:400, w:600, frame:30})
            .textFont({size:'40px', family:'Lucida Console'})
            .css({'text-align': 'center'})
            .bind("EnterFrame",function(){
                this.frame-=1;
                if (this.frame==15)this.alpha=0;
                else if(this.frame==0){
                    this.alpha=1;
                    this.frame=30;
                }
            });
        C.e("2D, Mouse, Keyboard")
            .attr({x:0, y:0, w:800, h:500})
            .bind("Click", function(){
                C.scene(load_data.scene);
            })
            .bind('KeyDown', function(k){
               if (k.keyCode === 13 || k.keyCode === 32)C.scene(load_data.scene); 
            });
    });
});