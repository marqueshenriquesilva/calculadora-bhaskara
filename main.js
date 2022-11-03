//usuario insere valor de a, b, c
document.getElementById("submit").onclick = function(){

    var a = parseInt(document.getElementById("valor-a").value);
    var b = parseInt(document.getElementById("valor-b").value);
    var c = parseInt(document.getElementById("valor-c").value);
    resultados = resolveEquacao(a, b, c);
    document.getElementById('valor-delta').innerHTML = resultados[0];
    document.getElementById('valor-raizes').innerHTML = resultados[1];

}

//algoritmo resolve a equacao de segundo grau
function resolveEquacao(a, b, c){
    var delta = (b ** 2) - (4 * a * c);

    if (delta < 0)
    {
        valorDelta = ("O valor de delta é: " + delta);
        valorRaizes = ("Não há raízes reais");
    }

    else if (delta > 0)
    {
        var r1 = (-b + Math.sqrt(delta)) / (2 * a);
        var r2 = (-b - Math.sqrt(delta)) / (2 * a);
        valorDelta = ("O valor de delta é: " + delta);
        valorRaizes = ("As raízes da equação são:" + "\nR1 = " + r1.toFixed(2) + " e " + "\nR2 = " + r2.toFixed(2));
    }

    else if (delta == 0)
    {
        var r = (-b) / (2 * a);
        valorDelta = ("O valor de delta é: " + delta);
        valorRaizes = ("A raíz da equação é: " + r);
    }

    resultados = [valorDelta, valorRaizes];

    return(resultados);
}
