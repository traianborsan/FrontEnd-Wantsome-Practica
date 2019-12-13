const header = document.querySelector('header');
const section = document.querySelector('section');
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = () =>{
  let superHeroes = request.response;
    console.log(superHeroes);
    populateHeader(superHeroes);
}

const populateHeader = jsonObj => {
    let myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = "Hometown: " + jsonObj['homeTown'] + " // Formed" + jsonObj['formed'];
    header.appendChild(myPara);
};

  const showsHeroes = jsonObj => {
    let heroes = jsonObj['members'];
    console.log(heroes);
  }