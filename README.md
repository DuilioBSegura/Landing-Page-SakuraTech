# 🌸 Sakura Tech - Landing Page

> **Assistência Técnica, Manutenção e Suporte Especializado de Computadores e Notebooks em Bauru e Região.**

---

## 📌 Sobre o Projeto

A **Sakura Tech** é uma landing page desenvolvida com foco em alta conversão de clientes locais que necessitam de serviços rápidos, transparentes e qualificados de manutenção de computadores e notebooks em Bauru/SP e cidades vizinhas.

A página foi construída seguindo as melhores práticas de **HTML Semântico**, **CSS Moderno (Flexbox & Grid)**, **JavaScript Vanilla** e **Acessibilidade Web (a11y)**, garantindo carregamento instantâneo, visual refinado e experiência fluida tanto em computadores quanto em dispositivos móveis.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web nativas para máxima performance e controle visual:

- **HTML5:** Estruturação 100% semântica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3:** Design responsivo, variáveis globais (`:root`), Flexbox, CSS Grid, animações fluidas e Media Queries.
- **JavaScript (Vanilla):** Interatividade do menu mobile, controle de estados (`classList.toggle`) e acessibilidade de teclado.
- **PHP:** Renderização e suporte para integração no servidor local Apache.
- **XAMPP:** Ambiente de desenvolvimento web local (Apache/PHP).
- **Git & GitHub:** Controle de versão e organização do fluxo em micro-sprints.
- **Google Fonts:** Tipografia moderna utilizando a família [*Plus Jakarta Sans*](https://fonts.google.com/specimen/Plus+Jakarta+Sans).

---

## ✨ Funcionalidades e Diferenciais

- [x] **Header Fixo e Navegação Semântica:** Logotipo da marca e atalhos de navegação com rolagem suave (`scroll-behavior: smooth`).
- [x] **Hero Section de Alta Conversão:** Chamada principal com título único `<h1>`, proposta de valor e botão CTA direto para o WhatsApp com mensagem pré-configurada.
- [x] **Grid de Serviços em Cards:** Apresentação dos serviços (Formatação, Limpeza Preventiva, Upgrade de Peças) organizados em cards semânticos com micro-interações no `:hover`.
- [x] **Seção Sobre e Credibilidade Local:** Destaque dos 4 pilares de atendimento (Diagnóstico Transparente, Agilidade, Garantia e Orçamento sem Compromisso) com foco em Bauru e região.
- [x] **Menu Mobile Hambúrguer Interativo:** Menu responsivo com animação para ícone de fechar (**X**), fechamento automático ao clicar em links, ao clicar fora ou ao pressionar `Escape`.
- [x] **Rodapé Institucional:** Rodapé semântico fora do `<main>` com links rápidos, canais de atendimento e direitos autorais.
- [x] **Otimização de SEO & Acessibilidade:**
  - Meta tags completas (`title`, `description`, `canonical`, `robots`, `theme-color`).
  - Open Graph e Twitter Cards para compartilhamento em redes sociais.
  - *Skip Link* para leitores de tela e indicadores de foco visíveis (`:focus-visible`).
  - Hierarquia de cabeçalhos estrita (`<h1>` &rarr; `<h2>` &rarr; `<h3>`).

---

## 📁 Estrutura de Arquivos

```plaintext
sakura-tech/
├── assets/
│   ├── icons/
│   └── images/
├── css/
│   └── style.css       # Estilos globais, variáveis, layout e media queries
├── js/
│   └── script.js      # Lógica do menu hambúrguer e acessibilidade
├── index.php          # Estrutura principal da Landing Page
└── README.md          # Documentação do projeto
```

---

## 💻 Como Executar o Projeto Localmente

### Pré-requisitos
- [XAMPP](https://www.apachefriends.org/) instalado em seu computador.

### Passo a Passo

1. **Clone ou mova o projeto para a pasta do XAMPP:**
   Mova a pasta `sakura-tech` para dentro do diretório `htdocs` do seu XAMPP:
   ```bash
   # No Windows (caminho padrão do XAMPP):
   C:\xampp\htdocs\sakura-tech
   ```

2. **Inicie o Apache:**
   - Abra o **XAMPP Control Panel**.
   - Clique em **Start** no módulo **Apache**.

3. **Acesse no Navegador:**
   Abra seu navegador preferido e digite a URL:
   ```
   http://localhost/sakura-tech/
   ```

---

## 🧠 Aprendizados e Boas Práticas Aplicadas

Durante o desenvolvimento deste projeto através de Micro-Sprints estruturadas, foram consolidados os seguintes conceitos:

1. **Semântica HTML e SEO:** Uso correto de tags estruturais para melhorar o ranqueamento orgânico no Google e a interpretação por tecnologias assistivas.
2. **Design Responsivo & Mobile-First:** Planejamento de layouts fluidos combinando Flexbox e CSS Grid sem depender de frameworks pesados, garantindo 100% de adaptação de 320px a telas ultrawide.
3. **Vanilla JavaScript & Manipulação do DOM:** Separação clara de responsabilidades, manipulando apenas classes CSS pelo JS sem estilos inline.
4. **Boas Práticas de UI/UX:** Definição de paleta cromática equilibrada, contraste adequado conforme padrões WCAG e micro-animações sutis para enriquecer a experiência do visitante.

---

## 📄 Licença

Este projeto foi desenvolvido para fins didáticos e profissionais por **Duilio B. Segura**. Todos os direitos reservados.
