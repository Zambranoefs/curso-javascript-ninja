var myobject = {};

var pessoa = { nome: 'Fernando', sobrenome: 'Zambrano', sexo: 'Masculino', idade: 33, altura: 1.73, peso: 74, andando: false, caminhouQuantosMetros: 0};

pessoa.fazerAniversario = function () {
    pessoa.idade++;
}

pessoa.andar = function (metros) {
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
}
pessoa.parar = function () {
    pessoa.andando = false;
}

pessoa.nomeCompleto = function () {
    return "Olá! Meu nome é " + pessoa.nome + " " + pessoa.sobrenome;
}

pessoa.mostrarIdade = function () {
    return 'Olá, eu tenho ' + pessoa.idade + ' anos!';
}

pessoa.mostrarPeso = function () {
    return "Eu peso " + pessoa.peso + "Kg.";
}

pessoa.mostrarAltura = function () {
    return "Minha altura é " + pessoa.altura + "m.";
}

pessoa.apresentacao = function () {

    var artigo = " o ";
    var tempo = " anos, ";
    var distancia = " metros!";

    if(pessoa.sexo === 'Feminino') {
        artigo = " a ";
    }

    if(pessoa.idade === 1) {
        tempo = " ano, ";
    }

    if(pessoa.caminhouQuantosMetros === 1) {
        distancia = " metro!";
    }

    return "Olá, eu sou" + artigo + pessoa.nome + " " + pessoa.sobrenome + ", tenho " + pessoa.idade + tempo + "a minha altura é " + pessoa.altura + ", meu peso é " + pessoa.peso + " e, só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros + distancia;
}
