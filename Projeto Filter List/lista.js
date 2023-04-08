//LISTINHA:

const nameList = ["Lillia", "Jett", "Xayah", "Ayato", "Jean", "Sage", "Lux", "Ahri", "Kayn"]
const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");

function fillList(list = nameList) {
   listEl.innerHTML = "";
   for(let i=0; i < list.length; i++) {
       let listItems = document.createElement("li");
       listItems.innerHTML = list[i];
       listEl.appendChild(listItems);
   }
}

function inputHandler() {
   const filteredList = nameList.filter(el => {
       const listItems = el.toLocaleLowerCase();
       const searchWorld = searchField.value.toLowerCase();
       return listItems.includes(searchWorld)
   });
   fillList(filteredList);
}

//Criando a constante adicionar e ligando com o ID do html
//E adicionando um Evento ao clicar no botão "Adicionar"

///////////////////////////////////////////////////////
const adicionar = document.getElementById("idAdicionar");
adicionar.addEventListener("click", addNome);
///////////////////////////////////////////////////////

//Criando a função "adicionar" ativada ao clicar no botão de adicionar

function addNome() {

    nameList.push(searchField.value);
    alert("Nome adicionado com Sucesso.")
    searchField.value = "";
    searchField.focus();

}

//Criando a constante remover e ligando com o ID do html
//E adicionando um Evento ao clicar no botão "remover"

////////////////////////////////////////////////////////
const remover = document.getElementById("idRemover");
remover.addEventListener("click", removerNome);
////////////////////////////////////////////////////////

//Criando a função "remover" ativada ao clicar no botão de remover

function removerNome(){

    var entrada = searchField.value;
    if(entrada==""){
        nameList.pop();
    }
    else {
        var indice = nameList.indexOf(entrada);
        nameList.splice(indice,1);
    }

    alert("(Ultimo) nome removido com Sucesso.");
    searchField.value = "";
    searchField.focus();
    
}

//Criando a constante filtrar e ligando com o ID do html
//E adicionando um Evento ao clicar no botão "filtrar"

/////////////////////////////////////////////////////////
const filtrar = document.getElementById("idFiltrar");
filtrar.addEventListener("click", filtrarNome);
/////////////////////////////////////////////////////////

//Criando a função "filtrar" ativada ao clicar no botão de filtrar


function filtrarNome(){
    searchField.addEventListener("input", inputHandler);  
}

//Criando a constante selecionar e ligando com o ID do html
//E adicionando um Evento ao clicar no botão "selecionar"

//////////////////////////////////////////////////////////
const selecionar = document.getElementById("idSelecionar");
selecionar.addEventListener("click", selecionarnome);
//////////////////////////////////////////////////////////

//Criando a função "selecionar" ativada ao clicar no botão de selecionar

function selecionarnome(){
    // :)
}
