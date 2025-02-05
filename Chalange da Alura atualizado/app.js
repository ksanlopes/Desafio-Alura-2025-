let arrayAmigos = [];

function adicionarAmigo() {

  let nomeAmigo = document.getElementById("amigo").value;
  let inputAmigo = document.getElementById("amigo");
  if (nomeAmigo == "") {
    alert("Erro: Digite o nome para adicionar");
  } else if (/\d/.test(nomeAmigo)) {
    alert("Erro: Use somente letras.");
  }else if (arrayAmigos.includes(nomeAmigo)){
    alert("Erro: O mesmo nome já aparece na lista.")
  }else {
    arrayAmigos.push(nomeAmigo);
    inputAmigo.value = "";
    alert("Nome adicionado com sucesso.");
  }

  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML="";
 
  for(let i =0; i<arrayAmigos.length; i++){
    let formatarLista = document.createElement("li");
    formatarLista.textContent = arrayAmigos[i];
    listaAmigos.appendChild(formatarLista);
  }
}

function sortearAmigo(){
    let resultadoSorteio = document.getElementById("resultado");
    
    if(arrayAmigos.length<2){
        alert("É preciso que tenha pelo menos 2 nomes distintos para iniciar o sorteio.")
    }else{
        let sorteio = Math.floor(Math.random() * arrayAmigos.length);
        resultadoSorteio.innerHTML = `O nome ${arrayAmigos[sorteio]} foi o sorteado!!`
    }
   

}