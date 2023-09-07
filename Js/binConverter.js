

function converter() {
    const binario = document.getElementById("binario").value;
    const decimal = parseInt(binario, 2);
    //converte em um número decimal usando a base 2
    document.getElementById("resultado").innerHTML = decimal;

    if (decimal != parseInt(binario, 2)) {

        document.getElementById("resultado").innerHTML = "somente numeros de 0 e 1 são aceitos!";
    }
}
