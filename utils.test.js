const { validarTexto, formatarData } = require('./utils');

test("rejeita texto vazio", () => {
    expect(validarTexto("")).toBe(false);
});

test("aceita texto válido", () => {
    expect(validarTexto("Aviso importante")).toBe(true);
});

test("formata data com string válida", () => {
    const data = formatarData();
    expect(typeof data).toBe('string');
    expect(data).toContain('às');
});