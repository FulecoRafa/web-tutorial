//Primeiro temos que identificar quais itens precisamos. O método document.getElementById("x") vai procurar o elemento com o id x e guardar isso na variável
let button = document.getElementById("buuu");//Procura o botão de id 'buuu' e guarda em button
let textBox = document.getElementById("susto");//Procura o elemento de id 'susto' e guarda em textBox

//Essa função define o que vai acontecer quando clicarmos no botão
function onClick (){
    console.log("clickety clack!");//apenas para checar no console dse funciona
    textBox.style.visibility = "visible";//esta linha deixa as coisas que estavam escondidas visíveis
}

//Isto se chama event listener. Ele fica de olho no elemento e quando ocorre alguma coisa (neste caso, um click no botão), ele executa a função 'onClick'
button.addEventListener("click" , onClick);