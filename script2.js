// Taxa de conversão
let dolar = 5.49;

// Obter elementos de input
let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

// Adicionar eventos de keyup aos inputs
usdInput.addEventListener('keyup', () => {
    convert('usd-to-brl');
});


usdInput.addEventListener('blur', () => {
    usdInput.value = formatCurrent(usdInput.value);
})

brlInput.addEventListener('blur', () => {
    brlInput.value = formatCurrent(brlInput.value);
})

brlInput.addEventListener('keyup', () => {
    convert('brl-to-usd');
});

// Inicializar os campos com um valor padrão
usdInput.value = formatCurrent('1000,00');
convert('usd-to-brl');

// Funções

function formatCurrent(value) {
    // Ajustar o valor.
    let fixedValue = fixValue(value);
    // Utilizar função de formatar.
    let options = {
        useGrouping: false, // Remove o agrupamento de milhar
        minimumFractionDigits: 2, // Número mínimo de frações de números.
    };
    let formatter = new Intl.NumberFormat('pt-BR', options);
    // Retorna o valor formatado.
    return formatter.format(fixedValue);
}

function fixValue(value) {
    let fixedValue = value.replace(',', '.');
    let floatValue = parseFloat(fixedValue);
    if (isNaN(floatValue)) {
        floatValue = 0;
    }
    return floatValue;
}

function convert(type) {
    if (type === 'usd-to-brl') {
        // Ajustar o valor.
        let fixedValue = fixValue(usdInput.value);
        // Converter.
        let result = fixedValue * dolar;
        // Mostrar no campo de real.
        brlInput.value = formatCurrent(result.toString());
    }

    if (type === 'brl-to-usd') {
        // Ajustar o valor.
        let fixedValue = fixValue(brlInput.value);
        // Converter.
        let result = fixedValue / dolar;
        // Mostrar no campo de dólar.
        usdInput.value = formatCurrent(result.toString());
    }
}