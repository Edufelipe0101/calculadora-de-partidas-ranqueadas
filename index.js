let  vitorias = parseInt(prompt('Quantas Vitórias você tem?')); 
let  derrotas = parseInt(prompt('Quantas derrotas você tem?'));

let saldoDeVitoria = (vitorias - derrotas);
    
function calculaRanking(vitorias) {
    if (vitorias < 10) return "Ferro";
    else if (vitorias <= 20) return "Bronze";
    else if (vitorias <= 50) return "Prata";
    else if (vitorias <= 80) return "Ouro";
    else if (vitorias <= 90) return "Diamante";
    else if (vitorias <= 100) return "Lendário";
    else return "Imortal";
}

let nivel = calculaRanking(vitorias);
alert(`O Herói tem saldo de ${saldoDeVitoria} e está no nível de ${nivel}`);

