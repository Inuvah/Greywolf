var jsonObj = {"myObject": [
    {
    title: '350',
    id: "1",
    imgUrl:'',
},
{
    title: '350',
    id: "2",
    imgUrl:'',
},
{
    title: '350',
    id: "3",
    imgUrl:'',
},
{
    title: '350',
    id: "4",
    imgUrl:'',
},
{
    title: '350',
    id: "5",
    imgUrl:'',
},
{
    title: '350',
    id: "6",
    imgUrl:'',
},
{
    title: '350',
    id: "7",
    imgUrl:'',
},
{
    title: '350',
    id: "8",
    imgUrl:'',
},

]
}
var count = Object.keys(jsonObj.myObject).length
//alert(count);
var container= document.getElementById('hoodieProdukter');
for(var i=0;i<count;i++){
    //console.log(jsonObj.myObject[i]);
    var obj= jsonObj.myObject[i];
    var price = obj.title;
    container.innerHTML
    +=price;
}