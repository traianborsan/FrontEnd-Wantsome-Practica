// https://www.screencast.com/t/xglbfmIGjaVa - asa tre sa arate la final

'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

function getAjaxInforTextDocument() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("demo").innerHTML = this.responseText
        }
    }
    xhttp.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json", true);
    xhttp.send();
}

// numele echipei va fi intr-un h1, locul si cand a fost formata in p-uri.


// cele 3 coloane vor fi incadrate intr-un tag <article>

// numele eroului va fi un h2

// 3 paragrafe care ne vor zice varsta, identitatea secreta ,super puterea

// super puterile le vom avea intr-o lista - ul 