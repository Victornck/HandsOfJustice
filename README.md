<div align="center">

# 🟢 HANDS OF JUSTICE

### APRENDER · INVESTIGAR · PROTEGER

**Uma aventura interativa sobre segurança digital, escolhas conscientes e prevenção ao aliciamento.**

Desconfie. Investigue. Escolha com consciência.

<br>

![React](https://img.shields.io/badge/React-2026-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

<br>

**Uma experiência educativa em formato de jogo.**

</div>

---

## 🎮 Sobre o projeto

**Hands of Justice** é um jogo educativo desenvolvido para transformar temas importantes sobre segurança, investigação e prevenção em uma experiência interativa.

A proposta é colocar o jogador diante de situações que exigem atenção, análise de informações e tomada de decisões conscientes. Ao longo da experiência, o jogador é incentivado a reconhecer sinais de alerta, questionar propostas suspeitas e refletir sobre os riscos de confiar em desconhecidos no ambiente digital.

Com uma interface inspirada em jogos independentes, estética pixel art e identidade visual marcada pelo verde-neon, o projeto combina elementos de investigação com uma abordagem educativa.

> **Nem toda oportunidade é o que parece. Investigue antes de confiar.**

## 🎯 Objetivos

- 🛡️ Incentivar atitudes mais seguras no ambiente digital.
- 🔎 Desenvolver a capacidade de identificar sinais de alerta em situações suspeitas.
- 🧠 Estimular o pensamento crítico e a tomada de decisões conscientes.
- 💬 Promover a reflexão sobre propostas enganosas e possíveis situações de aliciamento.
- 🎮 Utilizar a interatividade como recurso de aprendizagem.

## 🕹️ Experiência de jogo

O jogador inicia sua jornada construindo sua identidade dentro do jogo e se prepara para participar de uma experiência investigativa.

### 👤 Escolha de personagem

Selecione um dos quatro personagens disponíveis:

| Personagem | Característica |
|---|---|
| **Pedro** | Curioso e pronto para investigar o desconhecido. |
| **João** | Atento aos detalhes e aos sinais de perigo. |
| **Maria** | Inteligente e determinada a descobrir a verdade. |
| **Júlia** | Corajosa e preparada para fazer escolhas seguras. |

Cada personagem possui uma representação visual própria em pixel art. A escolha é estética: os personagens possuem as mesmas capacidades dentro do jogo.

### 🔍 Investigação e tomada de decisões

A proposta do jogo envolve observar informações, analisar situações e tomar decisões ao longo da experiência.

O objetivo é incentivar o jogador a pensar criticamente antes de confiar em ofertas, mensagens ou oportunidades que possam esconder riscos.

> *As etapas e os desafios disponíveis dependem da versão implementada do projeto.*

## 🎨 Identidade visual

A interface foi concebida para combinar uma estética de jogo independente com uma experiência de navegação moderna.

**Características visuais:**

- 🟢 Verde-neon como cor de destaque.
- 🌑 Fundo escuro e elementos de alto contraste.
- 🟩 Detalhes em verde para reforçar ações e elementos importantes.
- 👾 Personagens em pixel art 2D.
- 🧩 Elementos gráficos inspirados em interfaces de investigação.
- 📱 Layout desenvolvido com classes utilitárias para organização responsiva.

### Paleta de cores

| Cor | Código | Aplicação |
|---|---|---|
| Verde-neon | `#B5F33B` | Destaques e ações principais |
| Verde-claro | `#C9FF69` | Realce de interações |
| Fundo escuro | `#12140F` | Planos de fundo |
| Superfície | `#191C15` | Cards e painéis |
| Branco suave | `#F5F0E6` | Contraste e legibilidade |

## 🛠️ Tecnologias utilizadas

O projeto utiliza tecnologias do ecossistema JavaScript para desenvolver uma aplicação web interativa.

| Tecnologia | Finalidade |
|---|---|
| **React** | Construção da interface por componentes. |
| **TypeScript** | Tipagem estática e organização do código. |
| **Tailwind CSS** | Estilização da interface com classes utilitárias. |
| **Vite** | Servidor de desenvolvimento e ferramenta de build. |
| **Lucide React** | Ícones da interface. |

## 📂 Organização do projeto

A estrutura conhecida do projeto inclui os seguintes diretórios e arquivos:

```text
jogo/
├── src/
│   ├── components/
│   │   ├── investigation/
│   │   └── PixelAvatar.tsx
│   ├── data/
│   │   └── avatars.ts
│   ├── pages/
│   │   └── CharacterSelectionPage.tsx
│   └── types/
│       └── game.ts
├── package.json
├── package-lock.json
└── README.md
```

**Responsabilidades principais:**

- `components/`: componentes reutilizáveis da interface.
- `components/investigation/`: componentes relacionados à experiência investigativa.
- `PixelAvatar.tsx`: representação visual dos personagens em pixel art.
- `data/avatars.ts`: dados e características dos personagens.
- `pages/`: páginas e telas da aplicação.
- `types/game.ts`: tipos e interfaces utilizados na lógica do jogo.

*Esta é uma representação parcial da estrutura conhecida, não necessariamente a árvore completa do repositório.*

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- npm, incluído na instalação do Node.js.
- Git, caso queira clonar o repositório.

### 1. Clone o repositório

Se o projeto estiver publicado no GitHub, execute:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd jogo
```

Substitua `URL_DO_REPOSITORIO` pelo endereço real do repositório.

> Se você já possui o projeto no computador, basta abrir a pasta existente no terminal.

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para acessar a aplicação. Em uma configuração padrão, ele costuma ser:

```text
http://localhost:5173/
```

Abra o endereço exibido no seu navegador.

### 4. Gere a versão de produção

Para compilar o projeto, execute:

```bash
npm run build
```

O comando deverá gerar os arquivos de produção conforme a configuração do projeto.

**Observação:** os comandos acima pressupõem que os scripts correspondentes estejam definidos no `package.json`.

## 🧪 Verificação do projeto

Durante o desenvolvimento, recomenda-se verificar:

- [ ] Instalação das dependências sem erros.
- [ ] Inicialização correta da aplicação.
- [ ] Renderização dos quatro personagens.
- [ ] Seleção e confirmação do personagem.
- [ ] Validação do nome do jogador.
- [ ] Funcionamento das telas e navegação.
- [ ] Build de produção concluído sem erros.

Os itens devem ser marcados conforme forem efetivamente testados.

## 🌱 Impacto educativo

O Hands of Justice parte da ideia de que informação e atenção são ferramentas importantes de proteção.

Ao apresentar situações que exigem investigação e reflexão, o jogo busca incentivar comportamentos como:

- Questionar propostas que parecem boas demais para ser verdade.
- Verificar informações antes de tomar decisões.
- Reconhecer pedidos suspeitos e sinais de manipulação.
- Evitar compartilhar informações pessoais sem necessidade.
- Procurar ajuda de pessoas ou instituições de confiança diante de situações preocupantes.

A experiência tem finalidade educativa e não substitui orientação profissional, apoio especializado ou atendimento das autoridades competentes.

## 🔮 Evolução do projeto

O desenvolvimento pode avançar com melhorias na experiência de jogo, na apresentação dos desafios e nos recursos educativos.

Possíveis áreas de evolução incluem:

- Novos cenários e situações investigativas.
- Mais interações e consequências para as escolhas do jogador.
- Feedback educativo após decisões importantes.
- Aprimoramentos de acessibilidade e responsividade.
- Melhorias na narrativa e na apresentação visual.

Esses itens representam possibilidades futuras, não funcionalidades garantidas na versão atual.

## 🤝 Contribuição

Contribuições podem ajudar a aprimorar a experiência, a qualidade do código e a clareza do conteúdo educativo.

Uma sugestão de fluxo de contribuição:

1. Faça um fork do repositório.
2. Crie uma branch para sua alteração.
3. Implemente a melhoria.
4. Verifique se a aplicação continua funcionando.
5. Envie um pull request explicando as mudanças.

Toda contribuição deve preservar o propósito educativo do projeto e tratar seus temas com responsabilidade.

## 📄 Licença

A licença deste projeto ainda precisa ser definida.

Até que uma licença seja adicionada ao repositório, não presuma que o código esteja liberado para reutilização, redistribuição ou uso comercial.

---

<div align="center">

### 🟢 HANDS OF JUSTICE

**Aprender para reconhecer. Investigar para compreender. Proteger para transformar.**

Desenvolvido com React, TypeScript e Tailwind CSS.

</div>