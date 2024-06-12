/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/

//criando uma lista (array) para armazenar os números que já foram sorteados e não deixar eles repetirem
let listaNumerosSorteados = [];

//limitando os números sorteados
let numeroLimite = 10;

//para testar colocar um valor direto se quiser
let numeroSecreto = gerarNumeroAleatorio();//armazenando nessa variável o número criado pela a function

//criando a variável tentativa para mostrar a quantidade de tentativas foi utilizado para acertar o número secreto
let tentativas = 1;

//boas práticas de programação  invés de digitar vário queryselector utilizamos function para fazer comunicação do DOM
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
  
responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.5});
}


//criando uma função para exibir as mensagens
function mensagemInicial(){
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

//tenho que invocar a função para funcionar globalmente
mensagemInicial();



//função para o botão chutar
function verificarChute() {
    //pegando a informação do campo input para verificar o número que foi gerado pela a função gerarNumeroAleatorio
    let chute = document.querySelector('input').value;// seleciona a tag input e depois pega o valor (número) digitado com value
    //console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        // se for uma tentativa mostra tentetiva e for maopr que 1 mostra tentativas
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela('p', mensagemTentativas);

        //foi criado para pegar a id do botão e tirar a funcionalidade do atributo disabled e o botão será ativado quando acertar o número aleatório
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');

         //pegando função limpar campo
     limparCampo();

    }else {
        exibirTextoNaTela('p', 'O número secreto é maior');


             //pegando função limpar campo
     limparCampo();
    }

    tentativas++;
    
   
}




//Criando um número aleatório
function gerarNumeroAleatorio() {
    //transformando números quebrado em inteiros
    //criando a variável para armazenar o número aletário
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);//cria números aletórios entre 1 e 10
    let quantidadeDeElementosLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosLista == numeroLimite){
        listaNumerosSorteados = [];
    }

   //a lista vai receber o número aleatório e verificar se ja foi incluído na lista
   if (listaNumerosSorteados.includes(numeroEscolhido) ){

    //pedir de novo para gerar o número aleatório com esse if verificar se o número ja foi chamado
    return gerarNumeroAleatorio();

   } else {
    //push adiciona ná última posição da lista
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;// se não estiver na lista (repetido recebe o número)
   }

}




//Função serve só para limpar o campo do valor digitado quando errar o valor
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
}

function reiniciarjogo(){

    numeroSecreto = gerarNumeroAleatorio();//armazenando nessa variável o número criado pela a function
    limparCampo();
    tentativas = 1;
    //invocando a função para funcionar 
    mensagemInicial();
    
    //desabilitando o botão
    document.getElementById('reiniciar').setAttribute('disabled',true);



}