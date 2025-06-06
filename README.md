# Site Colmeia UDESC 🐝

Este é o site oficial do grupo **Colmeia** da **UDESC**, desenvolvido com **ReactJS** e empacotado com **Vite**. O projeto visa apresentar o grupo, seus projetos, frentes de atuação e história de forma moderna e acessível.

## 🚀 Tecnologias

- [ReactJS](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deploy via **GitHub Pages**

## 📂 Estrutura

- `src/`: Componentes e páginas React.
- `images/`: Imagens públicas usadas no site.
- `docs/`: Contém a build final usada pelo GitHub Pages.

## 🔧 Instalação e uso local

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/Brunoarndt.github.io.git
cd Brunoarndt.github.io
```
2. Instale as dependências 
```bash
npm install
```
3. Rode Localmente (modo desenvolvimento):
```bash
npm run dev
```

3. Para testar a versão final localmente (build):
```bash
npm run build
npm run preview
```

## 🚀 Deploy no GitHub Pages

1. O Vite está configurado para gerar a build final na pasta docs/.
2. A configuração base no vite.config.js garante o caminho correto dos assets:
```bash
base: '/Brunoarndt.github.io/',
build: {
  outDir: 'docs',
}
```
3. Gere a build
4. Faça um commit e se lembre de incluir a pasta docs/
5. Altere a source do repositorio nas configurações do Github Pages para a pasta docs/