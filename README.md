# Projeto Clone Buzzfeed 🎯

Este projeto é um clone do site Buzzfeed, focado na criação de quizzes interativos! 🔮 O teste verifica se você tem mais tendência a ser uma Bruxa, um Mago ou um Feiticeiro. No final, você recebe um resultado baseado em suas respostas. ✨

## Instalação e Execução 🚀

1. **Instale o Angular CLI** (caso ainda não tenha):
   ```sh
   npm install -g @angular/cli
   ```
2. **Clone o repositório:**
   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd projeto-buzzfeed-clone
   ```
3. **Instale as dependências:**
   ```sh
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**
   ```sh
   ng serve
   ```
   Agora, acesse `http://localhost:4200/` no navegador para ver o projeto em execução!

## Criando um Novo Projeto Angular

Caso queira criar um projeto do zero:
```sh
ng new meu-quiz
cd meu-quiz
ng serve
```

## Estrutura do Projeto 🏗️

Dentro da pasta `src/`, temos:

### 📂 `assets/`
- **`data/`** - Contém o arquivo `quiz_questions.json` com as perguntas e resultados.
- **`imgs/`** - Contém imagens utilizadas, incluindo o logo do Buzzfeed.

### 📂 `app/`
- **`pages/home/`** - Contém a página inicial do quiz.
- **`components/quiz/`** - Componente responsável pelo quiz interativo.

## Como Criar Componentes e Páginas 🛠️

Para criar um novo componente:
```sh
ng generate component components/nome-do-componente
```

Para criar uma nova página:
```sh
ng generate component pages/nome-da-pagina
```

## Exemplo de Estrutura de Dados 📜
Os dados do quiz estão armazenados em `src/assets/data/quiz_questions.json`:

```json
{
    "title": "Você é mais Bruxa, Mago ou Feiticeiro?",
    "questions": [
        {
            "id": 1,
            "question": "Qual elemento mais te atrai?",
            "options": [
                { "id": 1, "name": "Terra e ervas", "alias": "Bruxa" },
                { "id": 2, "name": "Ar e conhecimento", "alias": "Mago" },
                { "id": 3, "name": "Fogo e rituais", "alias": "Feiticeiro" }
            ]
        }
    ],
    "results": {
        "Bruxa": "Você tem a alma de uma Bruxa! Sua magia é intuitiva, ligada à natureza e aos ciclos da vida.",
        "Mago": "Você tem a mente de um Mago! Sua magia vem do conhecimento e do estudo profundo das artes ocultas.",
        "Feiticeiro": "Você tem o poder de um Feiticeiro! Sua magia é intensa, guiada pela vontade e pela manipulação das forças energéticas."
    }
}
```

## Recursos Adicionais 📚
Para mais informações, consulte a [documentação oficial do Angular CLI](https://angular.dev/tools/cli).
