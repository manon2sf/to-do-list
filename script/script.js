
let buttonClik= document.querySelector('#button');
let input = document.querySelector('#input');
let toDoList = document.querySelector('#toDoList');
let doneList = document.querySelector('#doneList');

/* ajouter une tache*/
buttonClik.addEventListener("click",function(e){

  let task = document.createElement("li"); //creer nouvelle balise li
  let inputTask = document.createElement("input"); // crée un input dans la liste
  let deleteButton = document.createElement("button"); // Création du bouton de suppression
  let moveButton = document.createElement("button");
  let modifyButton = document.createElement("button");

  e.preventDefault();//méthode objet event qui empêche le comportement par défaut
  
  deleteButton.innerHTML= '<i class="fas fa-trash-alt"></i>';
  deleteButton.classList.add("listButton");
  modifyButton.innerHTML= '<i class="fas fa-edit"></i>';
  modifyButton.classList.add("listButton");
  moveButton.innerHTML= '<i class="fas fa-angle-double-right"></i>';
  moveButton.classList.add("listButton");
  
  task.appendChild(inputTask); // ajout d'une zone input 
  task.appendChild(modifyButton); //ajout bouton modifier
  task.appendChild(deleteButton); // ajout bouton supprimer
  task.appendChild(moveButton); // ajout bouton modifier
  inputTask.disabled = true; // empêche modification de l'input de la liste
  inputTask.value = input.value; //ajout valeur dans task

  /*event de supression de la tache*/
  deleteButton.addEventListener("click", function(){
    task.remove();
  });

  /*event tache terminée*/
  moveButton.addEventListener("click", function(){
    doneList.appendChild(task);
    moveButton.remove();
    modifyButton.remove();
  });


  /* event de modification*/
  modifyButton.addEventListener("click", function(e){
    e.preventDefault();
    inputTask.disabled = false;
  });

  toDoList.appendChild(task); // ajout dans la liste
  input.value=""; // vide l'input

});

/*evenement du bouton test*/
/*const buttons = document.querySelectorAll(".test").forEach(item => {
  item.addEventListener('click', function(e){
    console.log(e.target.value);
    let z = e.target.value;
    liste.appendChild(z);
  }) 
});*/

