const form = document.getElementById('formContato');
const tabelaContatos = document.getElementById('tabelaContatos');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    adicionarContato(nome, telefone);

    form.reset(); // Limpa os campos do formulário
});

function adicionarContato(nome, telefone) {
    const linha = tabelaContatos.insertRow();

    const celulaNome = linha.insertCell();
    celulaNome.textContent = nome;

    const celulaTelefone = linha.insertCell();
    celulaTelefone.textContent = telefone;
}
