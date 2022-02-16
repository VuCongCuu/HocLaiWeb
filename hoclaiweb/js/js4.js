
var tile=document.getElementById("title");
tile.style.color="red";
var row1=document.getElementById("row1");
var row=document.getElementById("anh");

var p=[
    {
        img:"img/anh-lamborghini-dep_062148757.png",
            name:"congcuu"
    } ,
{
        img:"img/banh-sinh-nhat-2.jpg",
            name:"Banh Sinh Nhat"
    },
    {
        img:"img/BanhKemBo.com-Banh-Sinh-Nhat-Grand-Castella-8-3-2021-13.jpg",
            name:"Kem"
    }

]


for(var i=0;i<p.length;i++){
    var ct=" <div class=\"item\">\n" +
        "          <img src="+p[i].img+" width='500px' alt=\"\">\n" +
        "          <h2>"+p[i].name+"</h2>\n" +
        "        </div>";
    row1.innerHTML+=ct;
}
for(var i=0;i<p.length;i++){
    var ctt=" <div class=\"item\">\n" +
        "          <img src="+p[i].img+" width='500px' alt=\"\">\n" +
        "          <h2>"+p[i].name+"</h2>\n" +
        "        </div>";
    row.innerHTML+=ctt;
}