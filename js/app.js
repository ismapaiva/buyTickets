//COMPRAR INGRESSOS
/*
    - ao clicar no botão "comprar", chamar a funçao, dentro da função há uma condicional com 3 etapas de verificação:
        - quantidade, quantidade limite e qual tipo de ingresso será comprado
 - Mostrar na tela a quantidade de ingressos atualizado
 -
*/
let msgIndisponivel = "Ingresso ou quantidade indisponivel.";
    let msgLimiteIngresso = " Permitidado apenas 50 ingressos por usuário "
    let ingressoInferior = 400;
    let ingressoSuperior = 200;
    let ingressoPista = 100; 

function comprar(){
    let ingressoEscolhido = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    if(quantidade == 0){
        alert("Selecione a quantidade desejada.");
    } else if(quantidade >50){
        alert(msgLimiteIngresso);
    }else{
        if(ingressoEscolhido == "pista"){
            comprarPista(quantidade);
        } else if( ingressoEscolhido == "superior"){
            comprarSuperior(quantidade);
        }else{
            comprarInferior(quantidade);
        }
    }
    document.getElementById('qtd').value=0;
}

const comprarPista = (quantidade)=>{
    let qtdPista = document.getElementById('qtd-pista');
    if(quantidade >0  && quantidade<=ingressoPista ){
        alert(`Reserva feita com sucesso. Você reservou ${quantidade} ingresso(s) para a Pista`)
        qtdPista.textContent = ingressoPista -=quantidade;
    } else{ 
        return alert(msgIndisponivel);
    }
}

const comprarSuperior = (quantidade)=>{
    let qtdSuperior = document.getElementById('qtd-superior');
    if(quantidade >0 && quantidade<=ingressoSuperior){
        alert(`Reserva feita com sucesso. Você reservou ${quantidade} ingresso(s) para a Cadeira Superior`)
        qtdSuperior.textContent = ingressoSuperior -=quantidade;
    } else{ 
        return alert(msgIndisponivel);
    }
}

const comprarInferior = (quantidade)=>{
    let qtdInferior = document.getElementById('qtd-inferior');
    if(quantidade >0 && quantidade<=ingressoInferior){
        alert(`Reserva feita com sucesso. Você reservou ${quantidade} ingresso(s) para a Cadeira Inferior`)
        qtdInferior.textContent = ingressoInferior -=quantidade;
    } else{ 
        return alert(msgIndisponivel);
    }
}