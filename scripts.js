function clearScreen() {
    document.getElementById('screen').value = '';
}

function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function calculate() {
    const screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}
