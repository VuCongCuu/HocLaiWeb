var x; /*Khai bao bien*/
/*kieu giu lieu Number ,string,array,object*/
x=15.14; //x la 1 number
console.log(x);
x="Xin Chao";
console.log(x);
x= x+5;
console.log(x);
y=20;
y=y+5;
console.log(y);
for(var i=0;i<20;i++){
    console.log("i = "+i);
}
var arr=[];
for(var i=0;i<20;i++){
    arr.push(i);// them phan tu i vao mảng
}
arr.push(22);//them vao cuối danh sách phần tử
console.log(arr);
var c= tinhtong(4,5);
console.log("Gia tri cua c :"+c);
var d=binhphuong(5);
console.log("gia tri cua d :"+d);
//Viet ham
function tinhtong(a,b){
    return a+b;
}
function binhphuong(a){
    return a*a;
}
/*
Cảnh báo người dùng khi vào trang
alert("Cấm trẻ em dưới 18 tuổi!")

var kt= confirm("Bạn chắc chắn nộp bài thi!") // true nhấn ok false nhấn cancel
if(kt){
  alert("Nộp bai thành công");
} else{
  alert("nôp bài không thành công");
}
var a= prompt("Nhap tuoi vao đây: ");
var i= parseInt(a);
if(i!=NaN && i>=18){
    window.location.href="https://www.24h.com.vn/"; // chuyển sang trang web khác
} else{
    alert("Ban khong du 18 tuoi")
}
console.log(i);
a=17->17
a=18a8->18
a=a18->NaN

setTimeout(function (){
  alert("xin chao");
},2000)


var k=0;

function abc(){
  alert("toi yeu em")
  k++
  if(k>2){
      clearInterval(a);
  }
}
// setTimeout(abc,1000);

var a=setInterval(abc,2000); // thuc hien vinh vien
var acouth=5;
var randum= Math.random()*100; //Math.random() chay tu 0>1
randum=parseInt(randum);
console.log(randum);

var loto= setInterval(function (){
var n= prompt("Nhap con so may ma cua ban:");
n= parseInt(n);
if(n!=NaN){
    if(randum==n){
        alert("chuc mung ban da trung 10 ty!")
        clearInterval(loto);
    } else{
        alert("Chuc ban may man lan sau");
        acouth--;
        if(acouth<=0){
            alert("het tien");
            clearInterval(loto)
        }

    }
} else{
    alert("nhap lai so");
}
},3000);

*/
var min=10;
var sec=0;
var time= setInterval(function (){
    var min_txt=min >=10? min:"0"+min;
    var sec_txt=sec>=10?sec:"0"+sec;
    console.log(min_txt+":"+sec_txt);
    sec--;
    if(sec<0){
        min--;
        sec=59;
    }
    if(min<0){
        clearInterval(time);
    }
},100);
