//Array liste af info om hoodie produkter
var jsonObj = {"hoodies": [
    {
    title: '350',
    id: "1",
    imgUrl:'https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg',
},
{
    title: '350',
    id: "2",
    imgUrl:'https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg',
},
{
    title: '350',
    id: "3",
    imgUrl:'https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg',
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
//Tjekker hvor mange produkter der er, laver variablen count som er = længden af array listen
var count = Object.keys(jsonObj.hoodies).length

//Finder html elementet det skal være i og giver den en variable via id
var container = document.getElementById('hoodieProdukter');
//for loop som starter ved 0 indtil i er stører end mængden af produkter hvis den ikke er i + 1
for(var i=0;i<count;i++){
 
    //Laver en variable for hvert produkt for hver gang i ændres
    var obj = jsonObj.hoodies[i];
    //laver prisen om til en variable (nemmere hvis den skal bruges meget senere)
    var price = obj.title;
    //constant variable til billedernes container der efter laver den endnu en div for hvert produkt (i) og giver den en class
    const imgBox = document.createElement('div');
    imgBox.setAttribute('class', 'imgBox');
    //tilføjer hvert produkt til HTML elementet som den hentede id fra tidligere (id=hoodieProdukter som er en div)

    const img = document.createElement('img');
    img.src = obj.imgUrl;

    container.appendChild(imgBox);
    container.appendChild(img);
}

