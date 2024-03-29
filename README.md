# Desafio Front-End AQBank

### Screenshots

| Login                                        | Cadastro                                     | Home                                         | Produtos                                     |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| ![Screenshot](https://imgur.com/fgbHQ7e.png) | ![Screenshot](https://imgur.com/JbnYy8E.png) | ![Screenshot](https://imgur.com/KwSMPXN.png) | ![Screenshot](https://imgur.com/GKQTaZe.png) |

---

### Demonstração

Visualize a aplicação:
[https://diro-aqbank.vercel.app/](https://diro-aqbank.vercel.app/)

---

### Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Dirosaki/aqbank.git
```

Entre no diretório do projeto

```bash
  cd aqbank
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

---

### Tecnologias utilizadas

**Princípais:** `ReactJS`, `Typescript`, `ViteJS`, `React-Router-Dom`, `React-Hook-Form`, `Zod`, `TailwindCSS`, `TanStack-Table`, `RadixUI` e `Sonner`.
**Outras:** `Eslint`, `Prettier`, `Husky` e `Lint-Staged`.

<details>
<summary>Por que as escolhi?</summary>

- `typescript`: Hoje em dia eu quase não vejo código "javascript", quando vejo é legado, possuo bastante experiência com `typescript` o que me deixa bem confortável e ajuda bastante na codificação.

- `react-hook-form`: Sintaxe mais simples, mais performático e o `formik` caiu no esquecimento.

- `tailwindCSS`: Quando se fala de produtividade acho que esta biblioteca se sobressai muito em relação ao `styled-components`, apesar de ter mais experiência com styled-components, estou optando por tailwindCSS em todos os projetos novos.

- `react-router-dom`: Quando se fala de roteamento definitivamente essa é a biblioteca mais utilizada e com maior comunidade, além de me sentir totalmente confortável com ela.

- `tanstack-table`: Essa é com certeza a melhor biblioteca para se trabalhar com tabelas, apesar de um pouco complexa, tem coisas na sintaxe que nunca nem cheguei a usar.

</details>

---

### Referências

- [ChatGPT](https://chat.openai.com/) - Utilizei o ChatGPT para transformar as datas em formato ISO e consultar algumas coisas de TailwindCSS.
- [TailwindCSS Docs](https://tailwindcss.com/docs) - Consultei a documentação do Tailwind para auxiliar com a estilização.
- [TanStack Table Docs](https://tanstack.com/table/latest/docs) - Consultei a documentação do `TanStackTable` para auxiliar na criação da tabela.
- [Dev.to/@stanlisberg](https://dev.to/stanlisberg/resolving-the-vercel-404-page-not-found-error-after-page-refresh-9b9) - Consultei para corrigir um bug da vercel com aplicações SPA.
