const { Console } = require("console");

//Define uma variavel do tipo array
const listaNomes = ['josé', 'maria', 'carlos'];
const listaProdutos = ['Teclado', 'branco', 50.80, true];
const listaAlunos = ['Carol', 'Milena', 'Ana','Heitor', 'Japa', ' Larissa']
const listaDisciplinas = ['Programacao Back-End', 'Programacao Front-End', 'Banco de dados', 'Desenvolvimento  Mobile']

//Exibindo todos os dados de um array
console.log(listaNomes);
console.log(listaProdutos);

//Verificando o tipo de dados de um array
console.log(typeof(listaProdutos));

//Verificando o tipo de dados de cada elemento de um array
console.log(typeof(listaProdutos[3]));

//Exibindo os valores de cada elemento do array
console.log('O produto é: ' + listaProdutos[0])
console.log('A cor do produto é: ' + listaProdutos[1])

//Exibe a quantidade de elementos de um array
console.log('A quantidade de produtos é: ' + listaProdutos.length)

//Extraindo valores do array com estruturas de repeticao
let qtde = listaAlunos.length;
let cont = 0;

console.log('\nEXEMPLO UTILIZANDO O WHILE')
//Exemplo utilizando o while
while (cont < qtde) {
    console.log('O aluno da turma DS2M é: ' + listaAlunos[cont])
    cont += 1
}

console.log('\nEXEMPLO UTILIZANDO O FOR')
//Exemplo utilizando o for
for (let cont = 0; cont < qtde; cont++) {
    console.log('O aluno da turma DS2M é: ' + listaAlunos[cont])
    
}

console.log('\nEXEMPLO UTILIZANDO O FOREACH')
//Exemplo utilizando o ForEach
listaAlunos.forEach(function(aluno){
    console.log('O aluno da turma DS2M é: ' +  aluno)
})

//Adicionando novos elementos no array
listaAlunos.push('Arthur', 'Vinícius')
listaAlunos.push('Leonardo')
console.log(listaAlunos)

//Remove o último elemento do arraylista
listaAlunos.pop()

console.log('\nEXEMPLO UTILIZANDO O FOREACH')
//Exemplo utilizando o ForEach
listaAlunos.forEach(function(aluno){
    console.log('O aluno da turma DS2M é: ' +  aluno)
})

//Adicionando elementos no array no início
listaAlunos.unshift('Enzo')
console.log(listaAlunos)


//Remover um elemento dop ínicio do array
listaAlunos.shift()

console.log('\nEXEMPLO UTILIZANDO O FOREACH')
//Exemplo utilizando o ForEach
listaAlunos.forEach(function(aluno){
    console.log('O aluno da turma DS2M é: ' +  aluno)
})

//Pesquisando valores em um array e retornando o seu índice
    //Se retornar -1, sigiifica que não foi encontrado o item 
let indice = listaAlunos.indexOf('Ana')
console.log(indice)

//Cria uma copia do array em uma nova variavel que será o array
const listaNovoAlunos = listaAlunos.slice();
console.log(listaNovoAlunos)

//Removendo elementos a partir de um indece
    //Remove somente o item escolhido
listaAlunos.splice(indice, 1)
    //Remove todos os itens a partir do escolhido
listaAlunos.splice(indice)
    //Remove todos os itens a partir do primeiro até o item escolhido 
listaAlunos.splice(0, indice+1)

console.log(listaAlunos)

//Adicionando um array de itens dentro de outro array
listaNovoAlunos.push(listaDisciplinas);
//console.log(listaNovoAlunos)
console.log('\ntrabalhando com array dentro de array')
//Lista o array principal e todos os sub arrays existente
console.log(listaNovoAlunos)

//Exibe o primeiro elemento do array contido dentro da linha 8 do array principal
console.log(listaNovoAlunos[8][0])

//Exemplo de como buscar um elemento de um array que esta dentro de outro array
console.log(listaNovoAlunos[8].indexOf('Banco de dados'))

//TRABALHANDO COM JSON
console.log('\n########### JSON ##########')
const listaContatos = [
    {
        nome     : 'José da Silva',
        telefone : '11 9945646455',
        email    : 'jose@gmail.com',
        carros   : [
            {
                placa  : 'abc-0666',
                modelo : 'Corsa',
                cor    : 'prata'
            },
            {
                placa  : 'mnb-6660',
                modelo : 'Saveiro',
                cor    : 'rosa'
            }
        ]
    },
    {
        nome     : 'Maria da Silva',
        telefone : '11 4445555',
        email    : 'maria@gmail.com'
    }
] 
console.log(listaContatos)

console.log('Nome do contato: ' + listaContatos[0].nome)
console.log('O email cadastrado é: ' + listaContatos[0].email)

//Adiciona um novo elemento no JSON em execução
listaContatos[0].celular = '944400998'

console.log(listaContatos)

//Remove um elemento do JSON em execução
delete(listaContatos[0].telefone)

console.log(listaContatos)

console.log('Placa: ' + listaContatos[0].carros[0].placa)