/*
var person=["Vu Cong Cuu","Ly Van Hoa"];
var diem=[8,9];
var obj1={
    name: "Nguyen Nhat Le",
    age :19,
    nark:9,
    classname:{
        nameOfClass: "T2104M",
        room:"a54"
    },
    subject:["LBEP","BGGN"],
    run: function (){
        console.log(this.name+ " Running.......");
    }
}
//obj1 la 1 bieens co gia tri la 1 doi tuong
console.log(obj1.name);
console.log(obj1.age);
obj1.nark=10;
console.log(obj1.nark);

function show(obj) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.nark);
    console.log(obj.classname.nameOfClass);
    console.log(obj.classname.room);
    console.log("Danh sach mon hoc");
    for(var i=0;i<= obj.subject.length;i++){
        console.log(obj.subject[i]);
    }

}
show(obj1);
obj1.run(); // thuc thi phuong thuc
//run() khong ton tai
var obj2=Object.create(obj1);
obj2.name="Vu Anh";
obj2.run();
var obj3=Object.create(obj1);
var humer=[];
for(var i=0;i<10;i++){
    humer.push(Object.create(obj1));
}

// Định nghĩa 1 dang obj

 */

var cart =[];
 var product={
     name:"Product Name",
     image:"/img/produc.img",
     description: "Product Description ",
     price: 0,
     qty:1,
     category:{
         name:"Category Name",
         image:"/img/category.png"
     },
     addToCart: function () {
         if(this.qty>0){
                if(checkcart(this)){
                    for(var i=0;i<cart.length();i++){
                        cart[i].qty++;
                        this.qty=this.qty-1;
                    }
                } else{
                    cart.push(this);
                    this.qty=this.qty-1;
                }
         } else{
             console.log("outOfStock");
         }
     } ,
     removeFromCart:function (){
         if(checkcart(this)){
             for(var i=0;i<cart.length();i++){
               if(cart[i].id==this.id){
                this.qty=this.qty+ cart[i].qty;
                cart.splice(i,1);
               }
             }
         }
     },
     changeStock: function (num){
         this.qty+=num;
         this.qty=this.qty>0?this.qty:0;
     },
     changePrice:function (pri){
         this.price+=pri;
         this.price=this.price>0?this.price:0;
     }

 };


function checkcart(p) {
    for (var i = 0; i < cart.length(); i++) {
        if (cart[i].id == p.id) return true;
    }
    return false;
}