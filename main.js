//Array af hoodie produkter
var jsonObj = {"hoodies": [
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
//Tjekker hvor mange produkter der er
var count = Object.keys(jsonObj.hoodies).length

//Finder html elementet det skal være i og giver den en variable via id
var container = document.getElementById('hoodieProdukter');
//for loop som starter ved 0 indtil i er stører end mængden af produkter
for(var i=0;i<count;i++){
 
    //Laver en variable for hvert produkt
    var obj = jsonObj.hoodies[i];
    //laver prisen om til en variable (nemmere hvis den skal bruges meget senere)
    var price = obj.title;
    //tilføjer hvert produkt til HTML elementet som den hentede id fra tidligere
    container.innerHTML
    +=price;
}