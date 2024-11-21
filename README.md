# PokedexApp 🕵️‍♂️⚡

## 📋 Descrição do Projeto
O **Pokémon Pokedex** é uma aplicação interativa que permite aos usuários buscar informações detalhadas sobre os Pokémons utilizando a API da PokeAPI. A aplicação exibe uma lista de Pokémons paginada, onde cada card é clicável e leva a uma página de perfil com detalhes do Pokémon, como habilidades, movimentos, tipo e imagem.

---

## ✨ Funcionalidades
- **Busca de Pokémons**: Filtre Pokémons pelo nome ou ID na barra de pesquisa.
- **Carregamento Dinâmico**: Aumente a quantidade de Pokémons exibidos clicando no botão "Carregar Mais".
- **Cards Clicáveis**: Clique em um Pokémon para acessar sua página de perfil com informações detalhadas.
- **Detalhes do Perfil**:
  - Imagem oficial do Pokémon.
  - Nome.
  - Lista de movimentos (moves).
  - Lista de habilidades com descrições em português.
  - Tipos do Pokémon.
- **Alternância de Tema**: Troque entre os temas claro e escuro com o botão de alternância (sol e lua).

---

## 🛠️ Ferramentas Utilizadas
### **Frameworks e Bibliotecas**
- **React.js**: Utilizado para criar componentes dinâmicos e gerenciar o estado da aplicação.
- **Styled-components**: Para estilização e aplicação de temas de forma modular e reutilizável.
- **Axios**: Para requisições HTTP rápidas e eficientes à PokeAPI.

### **Por que estas ferramentas?**
- **React.js**: Oferece um ambiente escalável e eficiente para aplicações interativas.
- **Styled-components**: Permite aplicar temas dinâmicos (claro/escuro) e mantém o código CSS organizado.
- **Axios**: Facilita o consumo de APIs externas com métodos simplificados e suporte a interceptores.

---

## 🤔 Decisões de Desenvolvimento
1. **Componentização**:
   - Dividir a interface em componentes reutilizáveis (e.g., Card, SearchBar, ProfilePage) para facilitar manutenção e escalabilidade.
2. **Uso de Temas**:
   - Implementação de temas claro e escuro com alternância dinâmica para melhorar a experiência do usuário.
3. **Paginação Dinâmica**:
   - A lista de Pokémons é carregada em blocos para evitar problemas de desempenho e limitar o uso de recursos da API.


---

## 🚀 Como Rodar o Projeto
Siga os passos abaixo para executar o projeto no seu computador.

### **Pré-requisitos**
- **Node.js**: Certifique-se de ter a versão LTS ou superior instalada.
- **Git**: Para clonar o repositório.

 
1. git clone https://github.com/Vando-Tacon/Pokedex.git (nome do clone)
2. npm install
3. npm run dev
4. clique para abrir o servidor local  no navegador 

