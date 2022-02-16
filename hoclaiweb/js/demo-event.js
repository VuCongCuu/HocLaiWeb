function demo(){
    alert("xin chao ban");
}
function demo_1(){
    console.log("tao chao may");
}
function demo_2(){
    console.log("may chao tao");
}
function demo_3(){


}
function textInput(msg){
    var k= event.keyCode;
    if(k==13){
        console.log(msg+" text....."+k);
    }

}
function demovalue(e){
   console.log(e.value);
}
function demo_time(e){
    var v=event.keyCode;
   if(v=13){
       var k=e.value;
       if(k>=1){
           var min=k;
           var sec=0;
           var time= setInterval(function (){
               var min_txt=min >=10? min:"0"+min;
               var sec_txt=sec>=10?sec:"0"+sec;
               var box_min= document.getElementById("box-min");
               box_min.innerText=min_txt;
               var box_sec= document.getElementById("box-sec");
                box_sec.innerText=sec_txt;
               // console.log(min_txt+":"+sec_txt);
               sec--;
               if(sec<0){
                   min--;
                   sec=59;
               }
               if(min<0){
                   clearInterval(time);
               }
           },1000);
       }
   }

}
var reward=[
    "Lamboghili",
    "Lamboghili",
    "Lamboghili",
    "SH150i",
    "SH150i",
    "SH150i",
    "SH150i",
    "SH150i",
    "Dream",
    "Dream",
    "Dream",
    "Dream",
    "Dream",
    "Dream",
    "But Bi"
    "But Bi"
    "But Bi"
    "But Bi"
    "But Bi"
    "But Bi"
];
function nhanqua(){
    var sec=50;
    var time= setInterval(function (){
        var sec_txt=sec>=10?sec:"0"+sec;
        var box_sec= document.getElementById("box-sec");
        box_sec.innerText=sec_txt;
        var ramdum=Math.random()*100;
        ramdum=parseInt(ramdum);
        if(ramdum<3){
            var qua=document.getElementById("qua");
            qua.innerText=reward[0];

        } else if(ramdum<10){
            var qua=document.getElementById("qua");
            qua.innerText=reward[1];
        }else if(ramdum<50) {
            var qua = document.getElementById("qua");
            qua.innerText = reward[2];
        } else{
            var qua = document.getElementById("qua");
            qua.innerText = reward[3];
        }


        // console.log(min_txt+":"+sec_txt);
        sec--;

        if(sec<0){
            clearInterval(time);
        }
    },10);
}
function number(e){
    var randum= Math.random()*100;
    randum=parseInt(randum);
    var code= event.keyCode;
    if(code==13){
        if(e.value==randum){
            var qua=document.getElementById("qua");
            qua.innerText="10ty!";
        } else{
            var a=document.ge
        }
    }


}


