# Mural de Avisos do Curso com Previsão do Tempo

Projeto final da disciplina, focado em fluxo profissional de desenvolvimento (Git, GitHub Actions, Docker).

## 1. Integrantes

| Nome | Matrícula | Usuário GitHub | Funcionalidade Principal | Link da PR Principal |
|------|-----------|----------------|--------------------------|----------------------|
| Larissa Giffoni | 22551663 | @LarissaGiffoni | Frontend e Integração com API Externa | [PR #1](COLE_O_LINK_DA_PR_1_AQUI) |
| Pedro Lacerda | 22551805 | @777pedrolacerda | Backend, Banco, CI e Docker | [PR #3](COLE_O_LINK_DA_PR_3_AQUI) |

## 2. Descrição da Aplicação
Uma aplicação web colaborativa para postar avisos do curso. O sistema exibe também a previsão do tempo atual para a cidade configurada.
- **API Externa:** [Open-Meteo](https://open-meteo.com/) (não requer chave).
- **Banco de Dados:** SQLite (persistência real via backend Express).
- **Tecnologias:** Node.js, Express, HTML/CSS/JS, Jest, GitHub Actions e Docker.

## 3. Instruções de Execução

### Execução local
```bash
git clone git@github.com:LarissaGiffoni/bootcamp2-projeto-final.git
cd bootcamp2-projeto-final
npm install
npm start
# Acesse http://localhost:3000
