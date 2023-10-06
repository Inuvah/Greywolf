//Array liste af info om hoodie produkter
var jsonObj = {"hoodies": [
    {
    title: '399 kr',
    id: "1",
    imgUrl:'img/hoodies/beige 1.png',
    color:'Hoodie: Mørk beige',
},
{
    title: '399 kr',
    id: "2",
    imgUrl:'img/hoodies/black 1.png',
    color:'Hoodie: Sort',
},
{
    title: '399 kr',
    id: "3",
    imgUrl:'img/hoodies/white 1.png',
    color:'Hoodie: Hvid',
},
{
    title: '399 kr',
    id: "4",
    imgUrl:'img/hoodies/grey 1.png',
    color:'Hoodie: Grå',
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
    var color = obj.color;

    //constant variable til billedernes container der efter laver den endnu en div for hvert produkt (i) og giver den en class
    const imgBox = document.createElement('div');
    imgBox.setAttribute('class', 'imgBox');

    //se flere farver knap................. AAAAAHHHHH
    const colorMore = document.createElement('div');
    colorMore.setAttribute('class', 'colorMore');
    const colorMoreA = document.createElement('a');
    colorMoreA.setAttribute('class', 'colorMoreA');
    colorMoreA.href = "#";
    colorMoreA.textContent += "Se flere farver";

    //Laver table som fordeler texten under produkt i deres egen box side by side
    const textBox = document.createElement('table');
    textBox.setAttribute('class', 'textBox');

    //2 elementer i tabelen øverst og nederst de ligger sig på en linje ned ad
    const textBoxRight = document.createElement('tr');
    const textBoxLeft = document.createElement('tr');

    //tilføjer hvert produkt billede til HTML elementet som den hentede id fra tidligere (id=hoodieProdukter som er en div)
    const img = document.createElement('img');
    img.setAttribute('class', 'produktImg')
    img.src = obj.imgUrl;

    //Link til produktside
    const a = document.createElement('a');
    a.href = "produktsidehoodie.html";

    //Alt text under produkt billederne bliver tilføjet som dele af tabelen
    const pris = document.createElement('td');
    pris.setAttribute('id', 'pris');
    pris.textContent += price;

    const farve = document.createElement('td');
    farve.setAttribute('id', 'farve');
    farve.textContent += color;

    const okologi = document.createElement('td');
    okologi.setAttribute('id', 'okologi');
    okologi.textContent += "100% økologisk bomuld";

    const sizes = document.createElement('td');
    sizes.setAttribute('id', 'sizes');
    sizes.textContent += "| S | M | L | XL |";

    //container = div(hoodieProdukter). Tilføjer billeder osv som børn til denne div altså de ligger nu inde i min div box
    container.appendChild(imgBox);
    imgBox.appendChild(a);
    a.appendChild(img);
    imgBox.appendChild(colorMore);
    colorMore.appendChild(colorMoreA);
    imgBox.appendChild(textBox);
    textBox.appendChild(textBoxLeft);
    textBox.appendChild(textBoxRight);

    //table
    textBoxLeft.appendChild(farve);
    textBoxRight.appendChild(okologi);
    textBoxRight.appendChild(pris);
    textBoxLeft.appendChild(sizes);
}

//ignore ignore ignore ignore ignore ignore ignore ignore ignore ignore 
//filter should work but ehm
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "showFilter" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "showFilter");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "showFilter");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("btnFilter");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
