
# 🍬 Sweet Delights - E-commerce de Doces Artesanais

O **Sweet Delights** é uma aplicação front-end moderna de e-commerce desenvolvida com **React.js** e **Vite**. O projeto foca em resolver desafios reais de interfaces mobile, garantindo uma navegação fluida, persistência de dados e resiliência no consumo de APIs.

---

## 📱 Demonstração da Interface

Para garantir a melhor experiência, o **Sweet Delights** foi desenvolvido com foco em **Mobile-First**, adaptando-se perfeitamente a diferentes tamanhos de tela.

<div align="center">
  <img src="https://github.com/user-attachments/assets/5abefa0f-d167-4335-a1fc-7c4270a75223" width="220" alt="Versão Mobile Sweet Delights" style="margin-right: 20px;" />
  <img src="https://github.com/user-attachments/assets/9477d9d3-cbd5-4d01-a243-01c2ebabb38b" width="550" alt="Versão Desktop Sweet Delights" />
</div>

---

## 🚀 Tecnologias e Ferramentas

* **Core:** ⚛️ React.js (Hooks, Context API, JSX)
* **Build Tool:** ⚡ Vite
* **Roteamento:** 🛣️ React Router Dom
* **Estilização:** 🎨 CSS3 Avançado (Unidades de Viewport Modernas: `dvh`, `dvw`)
* **Persistência:** 💾 LocalStorage API
* **Consumo de Dados:** 🌐 Fetch API (Dados assíncronos)
* **Deploy:** ☁️ Vercel (Front-end) & Render (Back-end)

---

## 🛠️ Desafios Técnicos & Soluções Aplicadas

### 1. Estabilidade de Layout no Mobile (O problema do 100vh)
Em navegadores mobile, a barra de endereços costuma "empurrar" o layout.
* **Solução:** Implementação das unidades dinâmicas `100dvh` e criação de um `MainScrollContainer` com `overflow-y: auto`, isolando o scroll do conteúdo e estabilizando elementos fixos como o Menu.

### 2. Gestão de Estado Global e Persistência
Dados do carrinho e usuário precisavam ser persistentes entre rotas.
* **Solução:** Centralização do estado via **Context API** e sincronização em tempo real com o **LocalStorage** para evitar perda de dados no refresh da página.

### 3. Resiliência da Interface (API Handling)
APIs em planos gratuitos possuem o efeito de *Cold Start*.
* **Solução:** Implementação de `fetch` com blocos `try/catch/finally` e criação de componentes de **Loading** e **ErrorState** personalizados com opção de "Tentar Novamente".

---

## 📱 Responsividade de Alta Fidelidade

* **Mobile (375px - 480px):** Grids adaptativos de 2 colunas e imagens com `aspect-ratio`.
* **Tablets (540px - 720px):** Breakpoints específicos para resoluções intermediárias.
* **Desktop:** Layout expandido com `max-width: 1000px`.

---

## 📦 Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/UpSnow/Sweet-Delights.git](https://github.com/UpSnow/Sweet-Delights.git)
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

---

## 🔗 Links

* 💻 **Deploy da Aplicação:** [Acesse a Sweet Delights aqui](https://sweet-delights-up-snow.vercel.app)
* ⚙️ **API no Render:** [Link da API](https://sweet-delights-api.onrender.com)
* 📁 **Repositório:** [github.com/UpSnow/Sweet-Delights](https://github.com/UpSnow/Sweet-Delights)

---

Desenvolvido com ❤️ por [Seu Nome/UpSnow]
