// Adaugati un tag script la finalul html. - rezolvat
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif" - rezolvat
document.body.style.fontFamily = "Arial, sans-serif";


// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi - rezolvat
const idName = document.getElementById("name");
console.log(idName);
// idName.innerText = "Borsan Traian-Cristian";//nu parseaza tag-uri HTML!!!
idName.innerHTML = "<h4>Borsan Traian-Cristian</h4>"; //il parseaza cu toate tag-urile, dar face refresh mereu la tot DOM-ul

const favDrink = document.getElementById("fav-drink");
console.log(favDrink);
// favDrink.innerText = "lemonade";
favDrink.innerHTML = "<h4>lemonade</h4>";

const bornPlace = document.getElementById("born-place");
console.log(bornPlace);
// bornPlace.innerText = "Iasi";
bornPlace.innerHTML = "<h4>Iasi</h4>";


// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
const listItems = document.getElementsByTagName("LI");
console.log(listItems);
const len = listItems.length;
console.log(len);
for (let i =0; i < len; i++) {
    listItems[i].classList.add("listitem");
}

// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra
const image = document.createElement("img");
image.textContent = "Foto peisaj tropical";
const list = document.querySelector("ul");
list.append(image);
image.setAttribute('src', 'https://europe.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/ti_lagoon3_rgb_1.jpg?itok=LNlfV4CA');
