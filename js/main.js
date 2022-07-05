let MainButton = document.getElementById('main-button');
MainButton.addEventListener('click', function(){

    let nome = document.getElementById('nome').value;

    let kilometri = document.getElementById('kilometri').value;

    let eta = document.getElementById('eta');

    if (isNaN(kilometri)){
        alert('valori inseriti non validi')
    } else {

        let totalekm = kilometri * 0.21;
        

        if(document.getElementById('eta').value == "op3") {
            const sconto = totalekm / 100 * 20;
            totalekm = totalekm - sconto
            messaggio = 'il prezzo del biglietto è scontato del 20%. il prezzo finale è di € ' + totalekm.toFixed(2);

        } else if (document.getElementById('eta').value == "op1") {
            const sconto = totalekm / 100 * 40;
            totalekm = totalekm - sconto
            messaggio = 'il prezzo del biglietto è scontato del 40%. il prezzo finale è di € ' + totalekm.toFixed(2);

        } else {
            messaggio = 'il prezzo del biglietto è di € ' + totalekm;
        }


        console.log(messaggio);
    }

    
});
