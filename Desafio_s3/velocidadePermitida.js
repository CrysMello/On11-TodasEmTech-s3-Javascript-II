//EXERCICIO DE FUNCAO:

/* Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
Se a velocidade for inferior ou igual a velocidade permitida, exiba a mensagem "Sem Multa". Se a velocidade for de até 10% maior que a permitida,
exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave."*/

let velocidadeVia= Number(prompt("Qual a velocidade permitida ===> "));
let velocidadeCondutor=Number(prompt("Qual a velocidade do contudor "));


function detran(velocidadeVia, velocidadeCondutor){

if(velocidadeVia>=velocidadeCondutor)
{document.write("Sem multa"+"<br>")
document.write("Parabéns, continue assim!!")}

else if(velocidadeCondutor<=velocidadeVia*1.1)
{document.write("Multa Leve")}
else
{document.write("Multa Grave")}

}
detran(velocidadeVia,velocidadeCondutor)
