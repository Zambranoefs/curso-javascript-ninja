/*
Vamos falar um pouco sobre 'Futebol'. Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'FIFA World Cup';

console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de teams do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?

var teams = ['France', 'Croatia', 'Belgium', 'England', 'Russia'];

console.log('Teams participating in the championship:', teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    'O team que está em [POSIÇÃO]º lugar é o [NOME DO team].';
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO team] é o team
    que está nessa posição no array criado acima com os nomes dos teams.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o team estiver entre
    os 5 primeiros.
    - Se não houver team para a posição passada, deve retornar a mensagem:
    'Não temos a informação do team que está nessa posição.'
*/
function showTeamPosition(position) {

    var positionType;

    if (typeof position !== 'number') {

        return 'The position can only be a number!'
    }


    if (position <= 0) {

        return 'A team\'s place cannot be less than or equal to zero!';
    }

    switch(position % 10) {
        case 1:
            positionType = 'st';
            break;
        case 2:
            positionType = 'nd';
            break;
        case 3:
            positionType = 'rd';
            break;
        default:
            positionType = 'th';
        }

        if (position % 100 >= 11 && position % 100 <= 13) {
            
            positionType = 'th';
        }

        if (position > teams.length) {
        
            return 'We have no info for the team in ' + position + positionType + ' place!';
        } 

    return 'The team ' + teams[position - 1] + ' is in ' + position + positionType + ' place.';
}

/*
Escolha 4 teams do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(113));
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição 'while'.
*/
var counter = 20;

while (counter <= 30) {

    console.log(counter++); // Displays the value and then increments it
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: 'red';
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    'O hexadecimal para a cor [COR] é [HEXADECIMAL].';
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    'Não temos o equivalente hexadecimal para [COR].'
*/
function convertToHex (color) {

    var hexadecimal;

    switch (color.toLowerCase()) {
        case 'orange':
            hexadecimal = '#ff3300';
            break;
        case 'purple':
            hexadecimal = '#800080';
            break;
        case 'blue':
            hexadecimal = '#0000ff';
            break;
        case 'red':
            hexadecimal = '#ff0000';
            break;
        case 'green':
            hexadecimal = '#00ff00';
            break;
        default:
            return 'We don\'t have the hexadecimal equivalent for color ' + color.toLowerCase() + '.';    
    }

    return 'The hexadecimal equivalent for color ' + color.toLowerCase() + ' is ' + hexadecimal + '.';

}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('orange'));
console.log(convertToHex('purple'));
console.log(convertToHex('blue'));
console.log(convertToHex('red'));
console.log(convertToHex('green'));
console.log(convertToHex('yellow'));
console.log(convertToHex('white'));
console.log(convertToHex('black'));