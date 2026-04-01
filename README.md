Aqui está o código completo em **Markdown**. Você pode copiar o conteúdo abaixo e colar diretamente no seu arquivo `README.md` do GitHub.

# 🍬 Sweet Delights - E-commerce de Doces Artesanais

O **Sweet Delights** é uma aplicação front-end moderna de e-commerce desenvolvida com **React.js** e **Vite**. O projeto foi focado em resolver desafios reais de interfaces mobile, garantindo uma navegação fluida, persistência de dados e resiliência no consumo de APIs.

---

## 🚀 Tecnologias e Ferramentas

* **Core:** ⚛️ React.js (Hooks, Context API, JSX)
* **Build Tool:** ⚡ Vite (Ambiente de desenvolvimento de alta performance)
* **Roteamento:** 🛣️ React Router Dom
* **Estilização:** 🎨 CSS3 Avançado (Unidades de Viewport Modernas: `dvh`, `dvw`)
* **Persistência:** 💾 LocalStorage API
* **Consumo de Dados:** 🔗 Axios (Consumindo Fake API JSON)
* **Deploy:** ☁️ Vercel (Front-end) & Render (Back-end)

---

## 🛠️ Desafios Técnicos & Soluções Aplicadas

### 1. Estabilidade de Layout no Mobile (O problema do 100vh)
Em navegadores mobile, a barra de endereços costuma "empurrar" o layout, causando quebras visuais.
* **Solução:** Implementação das novas unidades dinâmicas do CSS (`100dvh`). Criamos um `MainScrollContainer` com `overflow-y: auto`, isolando o scroll do conteúdo. Isso estabilizou elementos fixos como o **Menu de Navegação** e o **Botão Voltar**, eliminando "bugs" de posicionamento.

### 2. Gestão de Estado Global e Persistência
Dados cruciais como o carrinho de compras precisavam ser acessíveis em qualquer tela.
* **Solução:** Centralização do estado via **Context API**. Para evitar a perda de dados ao atualizar a página (Refresh), os dados são sincronizados em tempo real com o **LocalStorage**.

### 3. Experiência do Usuário (UX) e Resiliência
APIs em planos gratuitos (como no Render) possuem o efeito de *Cold Start* (demora para acordar no primeiro acesso).
* **Solução:** Desenvolvimento de componentes de **Loading** e **ErrorState** personalizados. Se a API falhar ou demorar, o usuário recebe um feedback visual amigável com a opção de "Tentar Novamente", evitando telas brancas ou carregamentos infinitos.

---

## 📱 Responsividade de Alta Fidelidade

O projeto foi testado exaustivamente em diferentes resoluções:
* **Mobile (375px - 480px):** Grids adaptativos de 2 colunas e imagens otimizadas com `aspect-ratio`.
* **Tablets (540px - 720px):** Ajustes de breakpoints para evitar quebras em resoluções intermediárias.
* **Desktop:** Layout expandido para aproveitar o espaço horizontal com `max-width: 1000px`.

---

## 📦 Como rodar o projeto localmente

1. **Clone o repositório:**
 
   git clone [https://github.com/UpSnow/Sweet-Delights.git]
 

2. **Instale as dependências:**
  
   npm install
  

3. **Inicie o servidor de desenvolvimento:**
 
   npm run dev
   

---

## 🔗 Links

* 💻 **Deploy da Aplicação:** [https://sweet-delights-wwni.vercel.app]
* ⚙️ **API no Render:** [https://sweet-delights-api.onrender.com]

---




