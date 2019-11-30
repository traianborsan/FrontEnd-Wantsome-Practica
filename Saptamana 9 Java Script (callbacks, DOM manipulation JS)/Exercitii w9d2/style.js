const books = [
  {
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    read: true,
    img: "https://images.kogan.com/image/fetch/s--XM8B7jcR--/b_white,c_pad,f_auto,h_502,q_auto:good,w_753/https://assets.kogan.com/images/booksbatch/BKT-9780812981605/the-power-of-habit.jpg"
  },
  {
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    read: false,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436227012l/40745._SY475_.jpg"
  }];

// Creati o pagina web care are un h1 cu "Book List" - rezolvat
// adaugati un script style unde sa tinem js-ul - rezolvat

//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
const bodyEx = document.querySelector("body");
const len = books.length;
for (let i = 0; i < len; i++) {
  const paragraph = document.createElement("p");
  paragraph.textContent += `${books[i].title} : ${books[i].author}`;
  console.log(paragraph);
  bodyEx.appendChild(paragraph);
}


//BONUS: folositi ul si li pentru a face display la carti
const createUnList = document.createElement("ul");
//createUnList.textContent = "This is our library list with volumes:";
createUnList.setAttribute("id", "ulist");
bodyEx.appendChild(createUnList);
console.log(createUnList);

const listItem1 = document.createElement("li");
listItem1.innerHTML += `Title: ${books[0].title},  ` +
  `Author: ${books[0].author},  ` +
  `Have you read this book? Answer: ${books[0].read}.`;
createUnList.appendChild(listItem1);

const listItem2 = document.createElement("li");
listItem2.innerHTML += `Title:  ${books[1].title},  ` +
  `Author:  ${books[1].author},  ` +
  `Have you read this book? Answer:  ${books[1].read}. `;
createUnList.appendChild(listItem2);


//BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
const image1 = document.createElement("img");
image1.textContent = "Foto 1";
listItem1.appendChild(image1);
image1.hasAttribute('src');
image1.setAttribute('src', "https://images.kogan.com/image/fetch/s--XM8B7jcR--/b_white,c_pad,f_auto,h_502,q_auto:good,w_753/https://assets.kogan.com/images/booksbatch/BKT-9780812981605/the-power-of-habit.jpg");

const image2 = document.createElement("img");
image2.textContent = "Foto 2";
listItem2.appendChild(image2);
image2.hasAttribute('src');
image2.setAttribute('src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436227012l/40745._SY475_.jpg");


//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.
listItem1.setAttribute("class", "listitem");
listItem2.setAttribute("class", "listitem");
const li = document.getElementsByClassName("listitem");
console.log(li);
const liArray = Array.from(li);
console.log(liArray);

//OBS.: In momentul in care s-a creat array-ul de elemente li (liArray) in momentul in care incerc sa atribui o clasa
//stilizata in CSS unui li primesc raspunsul ca nu poate fi atribuita valorii null a li-ului respectiv; am observat ca
//in children gasesc doar imaginea atribuita li-ului, iar in childNodes text-ul compact cu numele cartii, autorul si statusul
//cartii: citita sau necitita, respectiv poza. Cum ar trebui sa procedez ca sa pot stiliza corect ?

// const firstLi = document.querySelector("listitem");
// firstLi.className = "listitems";
listItem1.className = "listitems";
// liArray[1].children.className = "listitems";
//listitem[1].className = "listitem";

//Verificarea proprietatii read din obiectul books si alocarea claselor de stil:
// for (let i = 0; i < liArray.length; i++) {
//   liArray[i].className = "listitems";
//   for (let j = 0; j < len; j++) {
//     if (books[j].read === "true") {
//       liArray[i].classList.add(".read");
//     }
//     else {
//       liArray[i].classList.add(".unread")
//     }
//   }
// }

