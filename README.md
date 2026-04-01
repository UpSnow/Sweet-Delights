🍬 Sweet Delights - E-commerce de Doces
O Sweet Delights é uma aplicação front-end moderna de e-commerce, desenvolvida com React.js e Vite. O projeto foca em uma experiência de usuário (UX) excepcional, com navegação fluida, persistência de dados e alta fidelidade em dispositivos móveis.

🚀 Tecnologias Utilizadas
Front-end: React.js (Hooks, Context API, JSX)

Ferramentas de Build: Vite (para performance de desenvolvimento)

Roteamento: React Router Dom

Estilização: CSS3 (Modern Viewport Units: dvh, dvw, vmin)

Persistência: LocalStorage API

Consumo de Dados: Axios (conectado a uma Fake API JSON)

Deploy: Vercel (Front) & Render (API/Back-end)

🛠️ Desafios Técnicos e Soluções
1. Mobile-First & Estabilidade de Layout
Um dos maiores desafios foi lidar com as barras de navegação dos browsers mobile que alteram o tamanho do 100vh.

Solução: Implementação de unidades dinâmicas (100dvh) e criação de um MainScrollContainer com overflow-y: auto, garantindo que elementos como o Menu e o Botão Voltar permaneçam estáveis e acessíveis.

2. Gestão de Estado Global
O carrinho de compras e os dados do usuário precisavam estar disponíveis em várias rotas (Home, Categorias, Detalhes).

Solução: Uso de Context API para centralizar o estado e LocalStorage para garantir que, ao dar refresh na página, o usuário não perca suas escolhas.

3. Resiliência da Interface (API Handling)
Devido ao Cold Start (despertar) de servidores gratuitos no Render, a experiência poderia ser prejudicada por telas vazias.

Solução: Desenvolvimento de componentes de Loading e ErrorState personalizados, oferecendo feedback visual claro e opções de "Tentar Novamente" para o usuário.

📦 Como rodar o projeto localmente
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/sweet-delights.git
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
🔗 Links Úteis
Deploy da Aplicação: [Link da Vercel aqui]

Repositório da API: [Link do GitHub da API ou Render]
