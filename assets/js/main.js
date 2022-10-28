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

function berechnen() {
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

    if (nineteen == true && nettoBrutto == true) {
        output3.innerHTML = Number(inputUse * 0.19).toFixed(2) + " €";
        output4.innerHTML = Number(inputNumber + output19result).toFixed(2) + " €";
    } else if (nineteen != true && nettoBrutto == true) {
        output3.innerHTML = Number(inputUse * 0.07).toFixed(2) + " €";
        output4.innerHTML = Number(inputNumber + output7result).toFixed(2) + " €";
        // } else if (nineteen == true && nettoBrutto == false) {
        //     output3.innerHTML = Number(inputUse - (inputUse * 0.19)).toFixed(2) + " €";
        //     output4.innerHTML = Number(inputNumber + output19result).toFixed(2) + " €";
        // }
    } else {
        output3.innerHTML = "error";
        output4.innerHTML = "error";
    }
}


