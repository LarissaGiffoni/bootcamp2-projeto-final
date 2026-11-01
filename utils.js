function validarTexto(texto) {
    return typeof texto === 'string' && texto.trim().length > 0;
}

function formatarData() {
    const data = new Date();
    return data.toLocaleDateString('pt-BR') + ' às ' + data.toLocaleTimeString('pt-BR');
}

module.exports = { validarTexto, formatarData };