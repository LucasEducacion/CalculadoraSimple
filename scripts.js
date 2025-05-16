const input = document.getElementById('resultado');
const numeros = document.querySelectorAll('.btN');
const historial = document.getElementById('historial');

numeros.forEach(numero => {
    numero.addEventListener('click', () => {
        input.value += numero.textContent;
    });
});

function borrarNumeros() {
    input.value = '';
}

function realizarOperacion() {
    try {
        const expresion = input.value;
        const resultado = eval(expresion);
        let historia = document.createElement('li');
        historia.innerHTML = resultado;
        historial.prepend(historia);
        alert(`Resultado: ${resultado}`);
    } catch (error) {
        alert('Expresión inválida');
    }
    input.value = '';
}