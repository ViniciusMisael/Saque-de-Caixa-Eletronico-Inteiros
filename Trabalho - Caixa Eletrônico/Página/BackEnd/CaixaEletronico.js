var nNotas200;
var nNotas100;
var nNotas50;
var nNotas20;
var nNotas10;
var nNotas5;
var nNotas2;
var nMoedas1;
function calculanotas (){
    let valor = document.getElementById("Insercao").value;
    if (valor > 2000 || valor < 10){
        alert("O valor é inválido para saque")
        Finalizado();
    }
    // Tratando a Vavriável para impedir erros
    else{
     nNotas200 = 0;
     nNotas100 = 0;
     nNotas50 = 0;
     nNotas20 = 0;
     nNotas10 = 0;
     nNotas5 = 0;
     nNotas2 = 0;
     nMoedas1 = 0;
     Unico = 0;
    // Limpando os valores caso for inserido de novo
    Notas200(valor);
    }
}
function Notas200 (valor){
    if(valor == 0){
        Finalizado();
    }if(valor < 200){
        document.getElementById("200").value = nNotas200;
        Notas100(valor);
        //Chamando a próxima função
    }else{
        valor -= 200;
        nNotas200++;
        Notas200(valor);
        //Aumentando o valor e reiniciando o ciclo
    }
    
}
function Notas100 (valor){
    if(valor == 0){
        Finalizado();
    }if(valor < 100){
        document.getElementById("100").value = nNotas100;
        Notas50(valor);
        //Chamando a próxima função
    }else{
        valor -= 100;
        nNotas100++;
        Notas100(valor);
        //Aumentando o valor e reiniciando o ciclo
}
}
function Notas50 (valor){
    if(valor == 0){
        Finalizado();
    }if(valor < 50){
        document.getElementById("50").value = nNotas50;
        Notas20(valor);
        //Chamando a próxima função
    }else{
        valor -= 50;
        nNotas50++;
        Notas50(valor);
        //Aumentando o valor e reiniciando o ciclo
    }
}
function Notas20 (valor){
    if(valor == 0){
        Finalizado();
    }if(valor < 20){
        document.getElementById("20").value = nNotas20;
        Notas10(valor);
        //Chamando a próxima função
    }else{
        valor -= 20;
        nNotas20++;
        Notas20(valor);
        //Aumentando o valor e reiniciando o ciclo
    }
}
function Notas10 (valor){
    if(valor == 0){
        Finalizado();
    }if(valor < 10){
        document.getElementById("10").value = nNotas10;
        Notas5(valor);
        //Chamando a próxima função
    }else{
        valor -= 10;
        nNotas10++;
        Notas10(valor);
        //Aumentando o valor e reiniciando o ciclo
    }
    }
function Notas5 (valor){
    if(valor == 0){
        Finalizado();
    }if(valor < 5){
        document.getElementById("5").value = nNotas5;
        Notas2(valor);
        //Chamando a próxima função
    }else{
        valor -= 5;
        nNotas5++;
        Notas5(valor);
        //Aumentando o valor e reiniciando o ciclo
    }
}
function Notas2 (valor){
    if(valor == 0){
        Finalizado();
    }if(valor < 2){
        document.getElementById("2").value = nNotas2;
        Moedas1(valor);
        //Chamando a próxima função
    }else{
        valor -= 2;
        nNotas2++;
        Notas2(valor);
        //Aumentando o valor e reiniciando o ciclo
    }
}
function Moedas1 (valor){
    if(valor == 0){
        Finalizado();
    
    }if(valor < 1){
        document.getElementById("1").value = nMoedas1;
        Finalizado();
        //Encerrando , chamndo a função de Finalização
    }else{
        valor -= 1;
        nMoedas1++;
        Moedas1(valor);
        //Aumentando o valor e reiniciando o ciclo
    }
    // Eu fiz de uma forma que mesmo colocando um valor Float ou Double , o programa pegara o troco mais arredondado
}
function Finalizado(){
    //Função vazia para encerrar a Execução
}


