//Action - Remove donate button// 
function removeDonate(element){
    element.remove();
}

//Action - Send alert about the pet choices//
function alertAnyPet(element){
    var any = document.getElementById("optAny")
    alert("You're looking for: Any pet...");
}

function alertCat(element){
    alert("You're looking for: Cats...");
}

function alertDog(element){
    alert("You're looking for: Dogs...");
}

function alertOther(element){
    alert("You're looking for: Others...");
}

//Action - Add to the pet counter everytime the user clicks on the "pet+name" button//
function AddPet1(){
    var pet = document.getElementById("petCounter1");
    pet.innerText = parseInt(pet.innerText)+1;
}

function AddPet2(){
    var pet = document.getElementById("petCounter2");
    pet.innerText = parseInt(pet.innerText)+1;
}

function AddPet3(){
    var pet = document.getElementById("petCounter3");
    pet.innerText = parseInt(pet.innerText)+1;
}