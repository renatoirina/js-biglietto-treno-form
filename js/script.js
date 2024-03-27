//bottone genera
const sendBtnElem = document.getElementById("send-btn"); // object | null
console.log(sendBtnElem);



//evento al click del bottone
sendBtnElem.addEventListener("click", function () {


    //raccolta dati
    const nameInputElem = document.getElementById("username"); // string
    console.log(nameInputElem);

    const nameValue = nameInputElem.value; // string
    console.log(nameValue, typeof nameValue);

    const kmInputElem = document.getElementById("user-km"); // object | null
    console.log(kmInputElem);

    //kilometri con virgola
    const kmValue = parseFloat(kmInputElem.value);  // number
    console.log(kmValue, typeof kmValue);

    const ageInputElem = document.getElementById("age"); // object | null
    console.log(ageInputElem, typeof ageInputElem);

    const ageValue = (ageInputElem.value);  // 
    console.log(ageValue, typeof ageValue);


    //controllo numero + controllo age + controllo nome
    if (isNaN(kmValue) === false && kmValue > 5 && (ageValue) !== "" && isNaN(nameValue) === true) {

        //calcolo prezzo biglietto per km
        const ticketPrice = kmValue * 0.21; // number
        console.log(ticketPrice);

        let discount = 0;

        if (ageValue === "minorenne") {
            discount = 20;
            document.getElementById("ticket_price").innerHTML = "Biglietto scontato 20%";
        } else if (ageValue === "over65") {
            discount = 40;
            document.getElementById("ticket_price").innerHTML = "Biglietto scontato 40%";
        } else {
            discount = 0;
            document.getElementById("ticket_price").innerHTML = "Biglietto standard";
        }
        console.log("discount in %", discount);

        //In css la class ticket_new è in display nane cosi la rimuovo 
        document.getElementById("new").classList.remove("ticket_new");

        const totalDiscount = (ticketPrice * discount) / 100; // number
        console.log("discount in euro", totalDiscount);

        const finalTicketPrice = ticketPrice - totalDiscount; // number
        console.log("Final Price", finalTicketPrice);

        //genera numero carrozza
        const number = Math.floor(Math.random() * 11) + 1; //number
        console.log(number, typeof number);

        //stampa
        document.getElementById("carriage").innerHTML = number;
        document.getElementById("name").innerHTML = nameValue;
        document.getElementById("ticket").innerHTML = finalTicketPrice.toFixed(2) + " €";
    } else {
        alert("dati errati")
    }

})


//bottone annulla
const BtnElem = document.getElementById("btn"); // object | null
console.log(BtnElem);

BtnElem.addEventListener("click", function () {
    window.location.reload()
})