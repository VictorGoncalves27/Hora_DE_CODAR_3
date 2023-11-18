
/*Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO,
 deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo. 
 O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.*/
function DividirValor() {


  let numero1 = parseInt(prompt('Informe um valor'));
  let numero2 = parseInt(prompt('Informe outro valor'))
  let resultado = numero1 / numero2

  if (numero2 <= 0) {
    alert('Informe um numero maior que 0, e que não seja negativo!!')
  } else {
    alert(` A divisão do primeiro valor informado que é ${numero1} e o numero segundo numero informado que é ${numero2} é de ${resultado.toFixed(2)}`)
  }
}

/*Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize 
"document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".*/

function Bomba() {

  let Bomba = '';

  for (let i = 30; i >= 0; i--) {
    Bomba = Bomba + i
  }
  alert(Bomba)
  document.write('EXPLOSÃO')
}

/* Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1*/

function Decrescente() {
  let numeros = ''

  for (let i = 10; i >= 1; i--) {
    numeros = numeros + i
  }
  alert(numeros)
}

/*Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).*/

function media() {

  let soma = 0;
  let contador = 0

  for (let i = 15; i <= 100; i++) {
    soma += i
    contador++
  }
  const media = soma / contador
  alert(`A média dos numeros entre 15 e 100 é : ${media} `)
}

function Inteiros() {

  let numero = parseInt(prompt('Informe um numero: '));
  let numero2 = parseInt(prompt('Informe outro numero: '));


  if (numero == numero2 || numero > numero2) {
    alert('O primeiro numero deve ser menor que o segundo numero ');
  } else if (numero2 > numero) {
    alert(`Parabéns o Numero ${numero2} é maior que o Numero ${numero}`);

  }
}

function Notas() {

  let nota1 = parseFloat(prompt('Informe sua Primeira Nota:'))
  let nota2 = parseFloat(prompt('Informe sua Segunda Nota:'))
  let media = nota1 + nota2 / 4




  if (media == 9.4 || media < 9.4) {
    alert(` Sua nota foi ${media.toFixed(0)} e você foi Reprovado!! Para passar sua média deve ser igual ou maior que 9,5 `)
  } else if (media == 9.5 || media > 9.5) {
    alert(`Sua Média foi ${media.toFixed(0)}. Parabéns você foi aprovado!!`)


    let escolha = prompt('deseja verificar outra nota ? S ou N ? ')

    if (escolha === 'S') {
      Notas()
    } else {
      alert('Volte Sempre!')
    }

  }
}

function aluno() {

  let nota1 = parseFloat(prompt('Informe sua Primeira Nota (de 0 a 10):'));
  let nota2 = parseFloat(prompt('Informe sua Segunda Nota (de 0 a 10):'));
  let nota3 = parseFloat(prompt('Informe sua Terceira Nota (de 0 a 10):'));
  let nota4 = parseFloat(prompt('Informe sua Quarta Nota (de 0 a 10):'));
  let nota5 = parseFloat(prompt('Informe sua Quinta Nota (de 0 a 10):'));
  let nota6 = parseFloat(prompt('Informe sua Sexta Nota (de 0 a 10):'));
  let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6


  if (nota1, nota2 < 0 || nota1, nota2 > 10) {
    alert('Você informou números inferiores a 0 ou superiores a 10. Por favor, informe as notas novamente.!!')

  } else if (nota3, nota4 < 0 || nota3, nota4 > 10) {
    alert('Você informou números inferiores a 0 ou superiores a 10. Por favor, informe as notas novamente.')

  } else if (nota5, nota6 < 0 || nota5, nota6 > 10) {
    alert('Você informou ou numeros inferiores que 0 ou superiores a 10, Informe um novo Numero!!')
  } else if (media == 5 || media > 5) {
    alert(`Sua Média foi ${media.toFixed(0)}, ce foi bão!`)
  }



}
/*8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
N  é um valor informado pelo usuário*/

function N() {
  let Usuario = parseInt(prompt('Informe um valor'));

  if (Usuario > 0) {
    for (let i = 1; i <= Usuario; i++) {
      alert(`O valor é ${i}`);
    }
  } else {
    alert('Informe um valor maior que zero');
  }
}

function Algoritimo() {
  let contador = 0;


  for (let i = 100; contador <= 10; i++) {
    alert(i);

    contador++;
  }

}

function Tabuada() {

  let N = parseInt(prompt('Informe um número para imprimir as tabuadas até esse valor:'));


  if (isNaN(N)) {
    console.log('Por favor, informe um número válido.');
    return;
  }
  for (let i = 1; i <= N; i++) {
    console.log(`Tabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
      alert(`${i} x ${j} = ${i * j}`);
    }
    alert('Tabuada Informada Concluída!');
  }
}

function entre() {

  let numero1 = parseFloat(prompt('Informe o Primeiro Valor'));
  let numero2 = parseFloat(prompt('Informe o Segundo Valor'));
  let numero3 = parseFloat(prompt('Informe o Terceiro Valor'));
  let numero4 = parseFloat(prompt('Informe o Quarto Valor'));
  let numero5 = parseFloat(prompt('Informe o Quinto Valor'));
  let numero6 = parseFloat(prompt('Informe o Sexto Valor'));
  let numero7 = parseFloat(prompt('Informe o Setimo Valor'));
  let numero8 = parseFloat(prompt('Informe o Oitavo Valor'));
  let numero9 = parseFloat(prompt('Informe o Nono Valor'));
  let numero10 = parseFloat(prompt('Informe o Decimo Valor'));

  let DentrodoIntervalo = 0;
  let ForadoIntervalo = 0;

  for (let i = 0; i < 10; i++) {

    if (!isNaN(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10)) {
      if (numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10 >= 24 && numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10  <= 42) {
        DentrodoIntervalo++;
      } else {
        ForadoIntervalo++;
      }
    } else {
      alert('Por favor, informe um valor numérico válido.');
      return;
    }
  }
  alert(`Quantidade de valores dentro do intervalo (entre 24 e 42) foram: ${DentrodoIntervalo}`);
  alert(`Quantidade de valores fora do intervalo (fora de 24 e 42) foram: ${ForadoIntervalo}`);
}














