// 1. Integração com a API Externa (Open-Meteo)
async function carregarClima() {
    try {
        // Coordenadas fixas (ex: São Paulo - latitude -23.55, longitude -46.63)
        const resposta = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true');
        const dados = await resposta.json();
        
        const temp = dados.current_weather.temperature;
        document.getElementById('clima-box').innerHTML = `🌡️ Clima atual: ${temp}°C`;
    } catch (erro) {
        document.getElementById('clima-box').innerHTML = `Clima indisponível`;
    }
}

// 2. Função para postar aviso (vai se conectar ao backend do Pedro depois)
async function postarAviso() {
    const titulo = document.getElementById('titulo-aviso').value;
    const texto = document.getElementById('texto-aviso').value;

    if (!titulo || !texto) {
        alert("Preencha todos os campos!");
        return;
    }

    // Aviso temporário (o Pedro vai criar a rota /avisos no backend)
    console.log("Aviso a ser enviado:", { titulo, texto });
    
    // Aqui depois faremos o fetch para o backend salvar no banco
    document.getElementById('titulo-aviso').value = '';
    document.getElementById('texto-aviso').value = '';
}

// Event Listeners
document.getElementById('btn-postar').addEventListener('click', postarAviso);

// Carrega o clima quando a página abre
carregarClima();