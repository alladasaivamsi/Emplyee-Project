let selectFilter = document.getElementById("selectFilter");
let result = document.getElementById("result");
let filterbtn = document.getElementById("filterBtn");
let adduserbtn = document.getElementById("addUserBtn");
let tableData = document.getElementById("tableData");

function addUser(event){
    event.preventDefault();

    var enterName = document.getElementById("enterName").value;
    var enterProfession = document.getElementById("enterProfession").value;
    var enterAge = document.getElementById("enterAge").value;
    
    localStorage.setItem('Name', enterName);
    localStorage.setItem('Profession', enterProfession);
    localStorage.setItem('Age', enterAge);
}

adduserbtn.onclick = function() {
    fname.textContent = localStorage.getItem('Name');
    profession.textContent = localStorage.getItem('Profession');
    age.textContent = localStorage.getItem('Age');

   if(fname.textcontent == "" || profession.textContent == "" || age.textContent == "") {
        window.alert("Please fill all the fields");
   }
}