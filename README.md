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
### Via Docker (Docker Hub)
Link da imagem: [pedrolacerdaalencar/mural-avisos](https://hub.docker.com/r/pedrolacerdaalencar/mural-avisos)
```bash
docker run -p 3000:3000 pedrolacerdaalencar/mural-avisos
# Acesse http://localhost:3000
4. Testes
Para rodar os testes automatizados localmente:

bash
npm test
5. Evidências
Proteção da Main e CI: A branch main está protegida exigindo 1 aprovação e o check do GitHub Actions verde.

Print da PR bloqueada pelo CI:

<img width="1802" height="1021" alt="Captura de tela 2026-11-01 191842" src="https://github.com/user-attachments/assets/ab19fa68-e182-47e2-ba6d-e06883d9b5ca" />



### 2. Adicione o print
Agora que a parte de evidências está na tela:
1. Clique com o mouse logo abaixo de `**Print da PR bloqueada pelo CI:**`.
<img width="1802" height="1021" alt="Captura de tela 2026-11-01 191842" src="https://github.com/user-attachments/assets/b96d0315-4e50-49e1-b1fb-e31ecdb90cd9" />

2. Abra a pasta do seu computador onde está o print.
3. **Arraste a imagem** e **solte** dentro da caixa de texto do GitHub.
4. O GitHub vai gerar um link automático para a imagem.

### 3. Conserte os links das PRs
Ainda na tela de edição, lá no comecinho (linha 9 e 10), troque os textos `COLE_O_LINK_DA_PR_1_AQUI` e `COLE_O_LINK_DA_PR_3_AQUI` pelos links reais. 
*Exemplo:* `[PR #1](https://github.com/LarissaGiffoni/bootcamp2-projeto-final/pull/1)`

### 4. Salve
Clique no botão verde **"Commit changes..."** no topo da página.
