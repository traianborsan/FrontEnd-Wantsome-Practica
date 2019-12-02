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
//BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.

const createUnList = document.createElement("ul");
createUnList.setAttribute("id", "ulist");
bodyEx.appendChild(createUnList);
console.log(createUnList);

for (let i = 0; i < len; i++) {
  const listItem = document.createElement("li");
  listItem.innerHTML += `Title: ${books[i].title},  ` +
  `Author: ${books[i].author},  ` +
  `Have you read this book? Answer: ${books[i].read}.`;
  createUnList.appendChild(listItem);
  const image = document.createElement("img");
  listItem.appendChild(image);
  image.hasAttribute('src');
  image.setAttribute('src', books[i].img);
  if (books[i].read === true) {
    listItem.setAttribute("class", "read");
  }
  else {
    listItem.setAttribute("class", "unread");
  }
}

