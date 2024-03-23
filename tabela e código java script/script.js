function inserirDados() {
    var nome = document.getElementById('nome').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var media = (nota1 + nota2 + nota3) / 3;
    var situacao = media >= 7 ? 'Aprovado' : 'Reprovado';

    var tabela = document.getElementById('tabelaAlunos');
    var linha = tabela.insertRow(-1);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    var celula3 = linha.insertCell(2);
    var celula4 = linha.insertCell(3);
    var celula5 = linha.insertCell(4);
    var celula6 = linha.insertCell(5);

    celula1.innerHTML = nome;
    celula2.innerHTML = nota1.toFixed(1);
    celula3.innerHTML = nota2.toFixed(1);
    celula4.innerHTML = nota3.toFixed(1);
    celula5.innerHTML = media.toFixed(1);
    celula6.innerHTML = situacao;
}
