let palavra;
/*eu poderia fazer:
let minimo = 0;
let maximo = width;
para adicionar uma variável global para que pudéssemos utilizar sem erros de conversação entre as funções, mas deu erro mesmo assim. Nota: explorar mais as variáveis globais.
*/

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();  
}


function palavraAleatoria(){
  
  let palavras = ["Caminhante", "Caminho", "Caminha"];
  return random(palavras);
}


function inicializaCores(){
  
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
//esses codlines estavam em {function draw();}, nós o simplificamos e trazemos para esse bloco.
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  
/*
let palavra = "Caminhante";
text(palavra, 200, 200);

cod acima retirado pra implementação do code map() - ele faz um mapeamento, evitando repetições, e criando e interagindo com variáveis do draw()?
*/
  
/*
let maximo = width;
let minimo = 0;
*/
  
let texto = palavraParcial(0, width);

  text(texto,200,200);
}

function modoNoturno(horario){
  if (horario > 18){
    console.log("Você precisa ligar o Modo Noturno!");
  } else {
    console.log("Modo Noturno não é necessário neste momento.");
  }
}

modoNoturno(15);
modoNoturno(20);
/*
Ultima vez editado:
22/05/24 - 01:48
*/