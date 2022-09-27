function convertir(){
    let valor = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let bitcoin = 19.078;
    let Ethereum = 1.324;
    if (document.getElementById(btc)){
        resultado = valor / bitcoin;
        alert("The change from Etherium to Bitcoin is: " + resultado);

    }else if (document.getElementById("eth")){
        resultado = valor / Ethereum;
        alert("The change from Bitcoin to Etherium is: " + resultado);
    }else {
        alert("You have to complete all actions");
    }
}
