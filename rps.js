function getRandomChoice(){
    let choiceslength = ["rock", "paper", "scissors"]
    choiceindex = Math.floor(Math.random()*choiceslength.length())
    computerchoice = choiceslength[choiceindex]
    return computerchoice
}

const tabelKemenangan = {
    2:"gunting",
    1:"kertas",
    3:"batu"
}

while (true) {
let userinput = prompt("Silahkan pilih antara gunting batu dan kertas: ")
console.log("1. Gunting")
console.log("2. Batu")
console.log("3. Kertas")

getRandomChoice();
if (tabelKemenangan[userinput]==computerchoice){
    let input2 = prompt("Kamu menang! Apakah kamu ingin bermain lagi? [Y/N]")
    if (input2 = 'N'){
        break;
    }
    else{
        continue;
    }
}
if (tabelKemenangan[userinput]!=computerchoice){
    let input2 = prompt("Kamu kalah! Apakah kamu ingin bermain lagi? [Y/N]")
    if (input2 = 'N'){
        break;
    }
    else{
        continue;
    }
}

if(userinput == computerchoice){
    let input2 = prompt("Seri! Apakah kamu ingin bermain lagi? [Y/N]")
    if (input2 = 'N'){
        break;
    }
    else{
        continue;
    }
}

}

