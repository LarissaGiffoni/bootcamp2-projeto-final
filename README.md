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
Via Docker (Docker Hub)
Link da imagem: pedrolacerdaalencar/mural-avisos

bash
docker run -p 3000:3000 pedrolacerdaalencar/mural-avisos
# Acesse http://localhost:3000
4. Testes
Para rodar os testes automatizados localmente:

bash
npm test
5. Evidências
Proteção da Main e CI: A branch main está protegida exigindo 1 aprovação e o check do GitHub Actions verde.

Print da PR bloqueada pelo CI:

<img width="1802" height="1021" alt="Captura de tela 2026-11-01 191842" src="https://github.com/user-attachments/assets/7f317ff5-7508-4342-a849-4612a3b01a0c" />


Conflito de Merge: Não houve conflito de merge durante o desenvolvimento.
