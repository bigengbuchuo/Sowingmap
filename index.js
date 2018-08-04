show = document.getElementsByTagName("ul")[0];
dot = document.getElementsByClassName("dotBox")[0];
pre = document.getElementsByClassName("prev")[0];
nex = document.getElementsByClassName("next")[0];


var num = 1;
var ticket=1;
function move(x,y) { /*x表示起始位置，y移动到的位置 */
    try{clearInterval(timer);
    }catch{}

    step = (y-x)/100;
    var timer = setInterval(function(){
        show.style.left = parseInt(show.style.left) + step +"px";
        if(Math.abs(y - parseInt(show.style.left)) < Math.abs(step)){
            show.style.left = y +"px";
            if(num == 6) {
                show.style.left = "-690px";
            }
            if(num == 0) {
                show.style.left = "-3450px";
            }
            if(go<0) {
                go = setInterval(function() {
                    num ++ ;
                    if(num == 7) {
                        num = 2;
                    } 
                    pos(num);
                },2000);
            }
            if(ticket==0){
                ticket=1;
            }
            clearInterval(timer);
        }
    },1);
}

function pos(num) {   /*传的页数 */
    var y = -num*690;
    var x = parseInt(show.style.left);
    move(x,y);
    console.log(num);
    find(num);
}

var go = setInterval(function() {
    num ++ ;
    if(num == 7) {
        num = 2;
    } 
    pos(num);
},2000);

pre.onclick = function() {
    if(ticket==1){
        clearInterval(go);
        go=-1;
        num --;
        if(num < 0) {
            num = 4;
        } 
        pos(num);
        ticket=0;
    }

};


nex.onclick = function() {
    if(ticket==1){
        clearInterval(go);
        go=-1;
        num ++ ;
        if(num == 7) {
            num = 2;
        } 
        pos(num);
        ticket=0;
    }

};


len = dot.children.length;
function find(num) {
    if(num==0){
        num=5;
    }
    if(num==6){
        num=1;
    }
    for(var i=0;i<len;i++){
        dot.children[i].style.backgroundColor="#fff";
    }
    dot.children[num-1].style.backgroundColor="#000";
}

for(var j=0;j<len;j++) {
    (function(k){
    dot.children[k].onclick =function(){
            clearInterval(go);
            go=-1;
            num=k+1;
            console.log(k+"ok");
            pos(num);
        };
    })(j);
}