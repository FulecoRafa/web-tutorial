//Primeiro temos que identificar quais itens precisamos. O método document.getElementById("x") vai procurar o elemento com o id x e guardar isso na variável
let button = document.getElementById("runner");//Procura o botão de id 'runner' e guarda em button
let textBox = document.getElementById("teste");//Procura o elemento de id 'teste' e guarda em textBox

//Essa função define o que vai acontecer quando clicarmos no botão
function onClick (){
    console.log("clickety clack!");//apenas para checar no console dse funciona
    textBox.innerHTML = "<a href=\"id.html\">Parabéns! Você mudou o html a partir de JavaScript!!</a>";//element.innerHTML se refere ao interior desse elemento. Nessa função, vamos trocar o interior por um texto
}

//Isto se chama event listener. Ele fica de olho no elemento e quando ocorre alguma coisa (neste caso, um click no botão), ele executa a função 'onClick'
button.addEventListener("click" , onClick);

//------------------Hacker Area!-----------------------------------------------

let eraseButton = document.getElementById("eraser");
let eraseDiv = document.getElementById("oops");
function eraseStuff(){
    eraseDiv.innerHTML = "";
}
eraseButton.addEventListener("click" , eraseStuff);