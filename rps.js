function getRandomChoice(){
    let choiceslength = ["gunting", "kertas", "batu"]
    let choiceindex = Math.floor(Math.random()*choiceslength.length)
    let computerchoice = choiceslength[choiceindex]
    return computerchoice
}

const tabelKemenangan = {
    batu:"gunting",
    gunting:"kertas",
    kertas:"batu"
}

let looping = true;
while (looping) {
let userinput = prompt("Silahkan pilih antara gunting batu dan kertas: ").toLowerCase()
let computerchoice = getRandomChoice();
if (tabelKemenangan[userinput]==computerchoice){
    let input2 = prompt("Kamu menang! Apakah kamu ingin bermain lagi? [Y/N]")
    if (input2 == 'N'){
        break;
    } if (input2 == null) {
        break;
    }
    else{
        continue;
    }
}
if (tabelKemenangan[userinput]!=computerchoice){
    let input2 = prompt("Kamu kalah! Apakah kamu ingin bermain lagi? [Y/N]").toUpperCase();
    if (input2 == 'N'){
        break;
    } if (input2 == null) {
        break;
    }
    else{
    }
}

if(userinput == computerchoice){
    let input2 = prompt("Seri! Apakah kamu ingin bermain lagi? [Y/N]").toUpperCase();
    if (input2 == 'N'){
        break;
    }if (input2 == null) {
        break;
    }
    else{
    }
}

else {
    console.log("LANJUT")
}

}

