var randumNumbar=[];
while (randumNumbar.length<5){
    var n= parseInt(Math.random()*100)
    if(!randumNumbar.includes(n)){
        randumNumbar.push(n);
    }
}
for(var i=0;i<randumNumbar.length;i++){
    console.log(randumNumbar[i]);
}
    var luckyNumber=[];
function inputNumber(){
    var input=document.getElementById("luckyname");
    var m=parseInt(input.value);
    if(!luckyNumber.includes(m) && luckyNumber.length<5 && m>=0 && m<=99){
        luckyNumber.push(m);
        alert("ban da nua chon so"+m);

    }
    if(luckyNumber.length==5){
        var count=0;
        for (var i=0;i<randumNumbar.length;i++){
            if(luckyNumber.includes(randumNumbar[i])){
                count++;
            }
        }
        switch (count){
            case 3: alert("Chuc mung ban da trung 500.000 "); break;
            case 4: alert("Chuc mung ban da trung 1.000.000 "); break;
            case 5: alert("Chuc mung ban da trung 5.000.000 "); break;
            default : alert("Chuc ban may man lan sau");
        }
    }
}
var ti=document.getElementById("title");
ti.innerText="Congcuufc";
ti.style.color="red";
ti.style.fontSize="50px";
ti.innerHTML="<i><img src='img/banh-sinh-nhat-2.jpg' width='200px'></i>";
