// Criando um array vazio para guardar os nomes dos amigos
let amigos = [];

// Função para adicionar um nome à lista de amigos
function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo'); // Pegando o valor digitado pelo usuário
  const nomesAmigos = inputAmigo.value.trim(); // Removendo espaços extras

  // Verificando se o campo está vazio
  if (nomesAmigos === "") {
    alert("Por favor, inserir um nome.");
    return; 
  }

  // Verificando se o nome já está na lista
  if (amigos.includes(nomesAmigos)) {
    alert(`${nomesAmigos} já está na lista`); // Exibe um aviso caso o nome já tenha sido adicionado antes
    return;
  }

  // Adicionando o nome no array amigos
  amigos.push(nomesAmigos);

  // Limpando o campo de entrada para que o usuário possa digitar outro nome
  inputAmigo.value = "";

  // Atualizando a lista que aparece na tela
  atualizarLista();
}

// Função para exibir os nomes adicionados na tela
function atualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos'); // Pegando a lista no HTML

  // Limpando a lista antes de adicionar os novos nomes
  listaAmigos.innerHTML = "";

  // Percorrendo o array e criando os itens da lista
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li'); // Criando um item da lista
    li.textContent = amigos[i]; // Colocando o nome do amigo dentro do item
    listaAmigos.appendChild(li); // Adicionando o item à lista na tela
  }
}

// Função para escolher um amigo aleatoriamente
function sortearAmigo() {
  // Verificando se há amigos suficientes para o sorteio
  if (amigos.length === 0) { // Se o array estiver vazio, não há nomes para sortear
    alert("Não há amigos disponíveis para sortear. Adicione ao menos um.");
    return;
  }

  // Criando um número aleatório que será usado para pegar um nome da lista
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Pegando o nome do amigo escolhido aleatoriamente
  const amigoSorteado = amigos[indiceAleatorio]; // Usar um indice aleatório para obter um nome da matriz.

  // Exibindo o nome sorteado na tela
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `Amigo sorteado <strong>${amigoSorteado}</strong>`;
}