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

    let userinput = ""

    const button1 = document.querySelectorAll("button")
    button1.forEach(button => {
    button.addEventListener("click", (event) => {


    const container = document.getElementsByTagName('h2');
    while (container.length > 0) {
        container[0].remove();
    }


    userinput = event.target.className;
    let computerchoice = getRandomChoice();
    const h11 = document.querySelector("body")
    const h21 = document.createElement("h2")
    const h22 = document.createElement("h2")
    const h23 = document.createElement("h2")
    h23.textContent = "Komputer memilih " + computerchoice
    h22.textContent= "Anda memilih " + userinput
    h21.textContent = ""
    h11.appendChild(h22);
    h11.appendChild(h23);
    h11.appendChild(h21);

    if (tabelKemenangan[userinput]==computerchoice){
        h21.textContent="Anda Menang"
    }

    else if(userinput == computerchoice){
        h21.textContent="Anda seri"
    }

    else if (tabelKemenangan[userinput]!=computerchoice){
        h21.textContent="Anda kalah"
    }


})
})  