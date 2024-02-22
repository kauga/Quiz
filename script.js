// function generatesWords() {
//   let words = [
//     "hellow",
//     "kauga",
//     "lupaso",
//     "nyimbi",
//     "nyanda",
//     "robo",
//     "nusu",
//     "nzima",
//     "",
//   ];

//   let word = document.querySelector('.paragraph');
//   word.innerHTML = words[Math.floor(Math.random() * words.length)];
// }
// add

const generatesWords = document.querySelector(".button--1");

generatesWords.addEventListener("click", function () {
  let words = [
    "hellow",
    "kauga",
    "lupaso",
    "nyimbi",
    "nyanda",
    "robo",
    "nusu",
    "nzima",
    "sema",
    "mwamba",
    "huyu",
    "hapa",
    "amefika",
    "mapema",
    "sana",
    "leo",
    "toka",
    "jana",
    "leo",
    "juzi",
    "na",
    "ataondoka",
    "kesho",
    "ila",
    "atarudi",
    "mwezi",
    "ujao",
    "siku",
    "kama",
    "ya",
    "leo",
    "mapema",
  ];

  let word = document.querySelector(".paragraph");
  word.innerHTML = words[Math.floor(Math.random() * words.length)];

  generatesWords.style.backgroundColor = "red";
  generatesWords.style.borderColor = "white";

});

// const yourWords = document.querySelector('.paragraph')
