let wins = 30
let defeats = 12
let balance = winningBalance(wins, defeats)
let rank = levelRank(balance)

console.log(`O Herói tem de saldo ${balance} vitórias e está no nível de ${rank}.`)


function winningBalance (wins, defeats) {
    let balance = wins - defeats
    return balance
}

function levelRank (balance) {
    let rank = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
    
    if (balance <= 10) {
        return rank [0];
    }else if (balance > 10 && balance <=20) {
        return rank [1];
    }else if (balance > 20 && balance <=50) {
        return rank [2]
    }else if (balance > 50 && balance <=80) {
        return rank [3];
    }else if (balance > 80 && balance <=90) {
        return rank [4];
    }else if (balance > 90 && balance <=100) {
        return rank [5];
    }else {
        return rank [6];
    }

}
