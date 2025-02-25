
const btn = document.getElementById('getLocationBtn');
const output = document.getElementById('output');
const locationLog = document.getElementById('locationLog');

btn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        output.textContent = "Geolocalização não suportada pelo navegador.";
    }
});

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const timestamp = new Date().toLocaleString();

    const locationText = `Data/Hora: ${timestamp}\nLatitude: ${latitude}\nLongitude: ${longitude}\n\n`;

    output.textContent = `Localização capturada com sucesso!`;
    locationLog.value += locationText;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            output.textContent = "Permissão negada pelo usuário.";
            break;
        case error.POSITION_UNAVAILABLE:
            output.textContent = "Informações de localização indisponíveis.";
            break;
        case error.TIMEOUT:
            output.textContent = "Tempo limite para obter a localização.";
            break;
        default:
            output.textContent = "Erro desconhecido.";
            break;
    }
}
