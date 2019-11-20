// https://www.screencast.com/t/xglbfmIGjaVa - asa tre sa arate la final

'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

const req = () => {
    const xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    xmlReq.onload = () => {
        const  serverResponse = JSON.parse(xmlReq.response);
        console.log(serverResponse.squadName);
        //JSON.stringify(javaScriptObj);
        const body = document.getElementsByTagName("body")[0];
        body.innerHTML = serverResponse.squadName
    };
    xmlReq.send();
};
req();

// numele echipei va fi intr-un h1, locul si cand a fost formata in p-uri.


// cele 3 coloane vor fi incadrate intr-un tag <article>

// numele eroului va fi un h2

// 3 paragrafe care ne vor zice varsta, identitatea secreta ,super puterea

// super puterile le vom avea intr-o lista - ul 