
const container = document.querySelector(".mds-container");
let numberList = [];

const btn = document.querySelector("#inizia");
const choice = document.querySelector("#difficolta");

container.innerHTML = "Seleziona il livello di difficoltà e genera la griglia";


btn.addEventListener("click", function(){
  container.innerHTML = "";


  alert(choice.value);

  let difficult;
  if (choice.value == "facile"){
    difficult = 100;
    console.log("facile =", difficult);
    
  } else if (choice.value == "medio"){
    difficult = 81;
    console.log("medio =", difficult);
    
  }else if (choice.value == "difficile"){
    difficult = 49;
    console.log("difficile =", difficult);
    
  }

  console.log(choice.value);
  init(difficult);
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
  
  return square;

}

