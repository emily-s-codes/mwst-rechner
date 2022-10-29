function change1() {
    const nettoBrutto = document.getElementById("nettoBrutto").checked;


    const bruttoNetto = document.getElementById("bruttoNetto").checked;


    const output1 = document.getElementById("change1");


    const output2 = document.getElementById("change2");


    if (nettoBrutto == true) {
        output1.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";

        output2.innerHTML = "Bruttobetrag (Endpreis)"


    } else if (bruttoNetto == true) {
        output1.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";

        output2.innerHTML = "Nettobetrag"
        return;
    }
}

change1();




function berechnen(event) {
    event.preventDefault;
    const nineteen = document.getElementById("19prozent").checked;
    console.log(nineteen)

    const input = document.getElementById("euroInput").value;
    console.log(input)

    const inputNumber = Number(input.replace(",", "."));
    console.log(inputNumber);

    const inputUse = Number(inputNumber.toFixed(2));
    console.log(inputUse);

    const output3 = document.getElementById("mwstBetrag");

    const output4 = document.getElementById("Betrag");
    console.log(output4)

    const output19result = Number((inputUse * 0.19).toFixed(2));
    console.log(output19result)

    const output7result = Number((inputUse * 0.07).toFixed(2));
    console.log(output7result)

    const nettoBrutto = document.getElementById("nettoBrutto").checked;

    const bruttoNetto = document.getElementById("bruttoNetto").checked;

    const nettoMwst19 = Number(inputUse - (inputUse / 1.19)).toFixed(2);
    const nettoMwst7 = Number(inputUse - (inputUse / 1.07)).toFixed(2);

    if (nineteen == true && nettoBrutto == true) {
        output3.innerHTML = (Number(inputUse * 0.19).toFixed(2) + " €").replace(".", ",");
        output4.innerHTML = (Number(inputUse + output19result).toFixed(2) + " €").replace(".", ",");
    } else if (nineteen != true && nettoBrutto == true) {
        output3.innerHTML = (Number(inputUse * 0.07).toFixed(2) + " €").replace(".", ",");
        output4.innerHTML = (Number(inputUse + output7result).toFixed(2) + " €").replace(".", ",");
    } else if (nineteen == true && nettoBrutto != true) {
        output3.innerHTML = (nettoMwst19 + " €").replace(".", ",");
        output4.innerHTML = (Number(inputUse - nettoMwst19).toFixed(2) + " €").replace(".", ",");
    } else if (nineteen != true && nettoBrutto != true) {
        output3.innerHTML = (nettoMwst7 + " €").replace(".", ",");
        output4.innerHTML = (Number(inputUse - nettoMwst7).toFixed(2) + " €").replace(".", ",");
    } else {
        output3.innerHTML = "error";
        output4.innerHTML = "error";
    }
}
