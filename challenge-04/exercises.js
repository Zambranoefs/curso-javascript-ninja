var isTruthy = function (param) {
    return !!param;
}

var carro = {
    marca: "Toyota",
    modelo: "4Runner",
    placa: "123ABC",
    ano: 2020,
    cor: "Azul",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

carro.mudarCor = function (cor) { 
    carro.cor = cor 
}

carro.obterCor = function () { 
    return carro.cor 
}

carro.obterModelo = function () { 
    return carro.modelo 
}

carro.obterMarca = function () { 
    return carro.marca 
}

carro.obterMarcaModelo = function () { 
    return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo(); 
}

carro.adicionarPessoas = function (numPessoas) {

    var pessoasNoCarro = carro.quantidadePessoas === 1 ? "pessoa" : "pessoas";
    var totalPessoas = carro.quantidadePessoas + numPessoas;

    if ( numPessoas === 0 ) {
        return "Você não adicionou ninguém!";
    }

    if ( numPessoas < 0 ) {

        if ( carro.quantidadePessoas === 0 ) {
            return "O carro já está vazio!";
        }

        if ( totalPessoas < 0 ) {
            var dentroDoCarro = carro.quantidadePessoas;
            carro.quantidadePessoas = 0;

            return "Só foi possível tirar " + dentroDoCarro + " " + pessoasNoCarro + " do carro" + ", já ficou vazio!";
        }

        if ( totalPessoas === 0) {
            carro.quantidadePessoas += numPessoas;
            return "O carro ficou vazio!";
        }
        
        carro.quantidadePessoas += numPessoas;
        var pessoasFicam = carro.quantidadePessoas === 1 ? "pessoa" : "pessoas";
        return "Agora temos " + carro.quantidadePessoas + " " + pessoasFicam + " no carro!"; 
    }

    if ( carro.quantidadePessoas === carro.assentos && totalPessoas > carro.assentos ) {
        return "O carro já está lotado!";
    }

    if ( totalPessoas > carro.assentos ) {
        var disponiveis = carro.assentos - carro.quantidadePessoas;
        var pessoasDisponiveis = disponiveis === 1 ? "pessoa" : "pessoas";
        var caber = disponiveis === 1 ? "cabe" : "cabem";

        return "Só " + caber + " mais " + disponiveis + " " + pessoasDisponiveis + "!";

    }

    carro.quantidadePessoas += numPessoas;

    return "Ja temos " + carro.quantidadePessoas + " " + pessoasNoCarro + " no carro!";

}