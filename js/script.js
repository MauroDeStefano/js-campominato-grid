
const container = document.querySelector(".mds-container");
let numberList = [];

const btn = document.querySelector("#inizia");
const choice = document.querySelector("#difficolta");
const cancel = document.querySelector("#cancel");

container.innerHTML = "Seleziona il livello di difficoltà e genera la griglia";


btn.addEventListener("click", function(){
  container.innerHTML = "";

  alert(choice.value);

  console.log(choice.value);
  init(addClassPerDifficult(choice, cancel));
  console.log("difficoltà", difficult);

});

function init(difficult){

  for (let i = 0; i < difficult; i++){

    const square = createSquare(container);
    square.innerHTML = i + 1;
    square.addEventListener("click", function(){
    
      this.classList.add("active");

      if(difficult < 50){
        this.classList.add("hard");
      }else if(difficult < 82 && difficult > 49){
        this.classList.add("medium");
      }else {
        this.classList.add("easy");
      }

    });

  }
  
}

function createSquare(target){
  const square = document.createElement("div");

  square.className = "square";

  target.append(square);

  addClassPerDifficult(choice, square);
  
  return square;

}

function addClassPerDifficult(difficult, addClass){


  if (difficult.value == "facile"){
    difficult = 100;
    addClass.classList.add("easy");
    console.log("facile =", difficult);
    
  } else if (difficult.value == "medio"){
    difficult = 81;
    console.log("medio =", difficult);
    addClass.classList.add("medium");
  }else if (difficult.value == "difficile"){
    difficult = 49;
    console.log("difficile =", difficult);
    addClass.classList.add("hard");
  }
  return difficult;
}

