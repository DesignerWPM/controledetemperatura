// Função para coletar dados do formulário
function gatherFormData() {
    return {
        date1: document.getElementById('date1').value,
        time1: document.getElementById('time1').value,
        examRoomTemperature1: document.getElementById('examRoomTemperature1').value,
        examRoomHumidity1: document.getElementById('examRoomHumidity1').value,
        machineRoomTemperature1: document.getElementById('machineRoomTemperature1').value,
        machineRoomHumidity1: document.getElementById('machineRoomHumidity1').value,
        chillerWaterTemperature1: document.getElementById('chillerWaterTemperature1').value,
        heliumLevel1: document.getElementById('heliumLevel1').value,
        date2: document.getElementById('date2').value,
        time2: document.getElementById('time2').value,
        heliumPressure2: document.getElementById('heliumPressure2').value,
        heliumLevel2: document.getElementById('heliumLevel2').value,
        coldHead2: document.getElementById('coldHead2').value,
        chillerTemperature2: document.getElementById('chillerTemperature2').value,
        waterFlow2: document.getElementById('waterFlow2').value,
        waterTemperature2: document.getElementById('waterTemperature2').value,
        examRoomTemperature2: document.getElementById('examRoomTemperature2').value,
        examRoomHumidity2: document.getElementById('examRoomHumidity2').value,
        machineRoomTemperature2: document.getElementById('machineRoomTemperature2').value,
        machineRoomHumidity2: document.getElementById('machineRoomHumidity2').value,
        date3: document.getElementById('date3').value,
        time3: document.getElementById('time3').value,
        heliumPressure3: document.getElementById('heliumPressure3').value,
        heliumLevel3: document.getElementById('heliumLevel3').value,
        coldHead3: document.getElementById('coldHead3').value,
        chillerTemperature3: document.getElementById('chillerTemperature3').value,
        waterFlow3: document.getElementById('waterFlow3').value,
        waterTemperature3: document.getElementById('waterTemperature3').value,
        examRoomTemperature3: document.getElementById('examRoomTemperature3').value,
        examRoomHumidity3: document.getElementById('examRoomHumidity3').value,
        machineRoomTemperature3: document.getElementById('machineRoomTemperature3').value,
        machineRoomHumidity3: document.getElementById('machineRoomHumidity3').value,
        date4: document.getElementById('date4').value,
        time4: document.getElementById('time4').value,
        examRoomTemperature4: document.getElementById('examRoomTemperature4').value,
        examRoomHumidity4: document.getElementById('examRoomHumidity4').value
    };
}

// Função para validar os dados
function validateData(data) {
    const requiredFields = [
        'date1', 'time1', 'examRoomTemperature1', 'examRoomHumidity1',
        'machineRoomTemperature1', 'machineRoomHumidity1', 'chillerWaterTemperature1', 'heliumLevel1',
        'date2', 'time2', 'heliumPressure2', 'heliumLevel2', 'coldHead2', 'chillerTemperature2',
        'waterFlow2', 'waterTemperature2', 'examRoomTemperature2', 'examRoomHumidity2',
        'machineRoomTemperature2', 'machineRoomHumidity2',
        'date3', 'time3', 'heliumPressure3', 'heliumLevel3', 'coldHead3', 'chillerTemperature3',
        'waterFlow3', 'waterTemperature3', 'examRoomTemperature3', 'examRoomHumidity3',
        'machineRoomTemperature3', 'machineRoomHumidity3',
        'date4', 'time4', 'examRoomTemperature4', 'examRoomHumidity4'
    ];

    for (const field of requiredFields) {
        if (!data[field]) {
            alert(`Por favor, preencha o campo: ${field}`);
            return false;
        }
    }

    return true;
}

// Função para salvar dados localmente
function saveDataLocally(data) {
    if (!validateData(data)) return;
    localStorage.setItem('formData', JSON.stringify(data));
    alert('Dados salvos localmente!');
}

// Função para carregar dados localmente
function loadDataLocally() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        const data = JSON.parse(savedData);
        Object.keys(data).forEach(key => {
            const element = document.getElementById(key);
            if (element) element.value = data[key];
        });
        alert('Dados carregados com sucesso!');
    } else {
        alert('Nenhum dado salvo encontrado.');
    }
}

// Função para exportar para WhatsApp
function exportToWhatsApp() {
    const data = gatherFormData();
    if (!validateData(data)) return;

    const formattedText = formatForWhatsApp(data);
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank');
}

// Função para formatar a mensagem do WhatsApp
function formatForWhatsApp(data) {
    return `
✅ *RM 3.0 Tesla*
📅 Data: ${data.date1}
⏰ Hora: ${data.time1}
🌡️ Temperatura da Sala de Exames: ${data.examRoomTemperature1}°
💧 Umidade da Sala de Exames: ${data.examRoomHumidity1}%
🌡️ Temperatura da Sala de Máquina: ${data.machineRoomTemperature1}°
💧 Umidade da Sala de Máquina: ${data.machineRoomHumidity1}%
❄️ Temperatura da Água do Chiller: ${data.chillerWaterTemperature1}
🎈 Nível do Hélio: ${data.heliumLevel1}%

✅ *RM GE Antiga*
📅 Data: ${data.date2}
⏰ Hora: ${data.time2}
🎈 Pressão do Hélio: ${data.heliumPressure2}
🎈 Nível de Hélio: ${data.heliumLevel2}%
❄️ Cold Head: ${data.coldHead2}
❄️ Temperatura do Chiller: ${data.chillerTemperature2}°
🌊 Fluxo da Água: ${data.waterFlow2}
❄️ Temperatura da Água: ${data.waterTemperature2}°
🌡️ Temperatura da Sala de Exames: ${data.examRoomTemperature2}°
💧 Umidade da Sala de Exames: ${data.examRoomHumidity2}%
🌡️ Temperatura da Sala de Máquina: ${data.machineRoomTemperature2}°
💧 Umidade da Sala de Máquina: ${data.machineRoomHumidity2}%

✅ *RM GE Nova*
📅 Data: ${data.date3}
⏰ Hora: ${data.time3}
🎈 Pressão do Hélio: ${data.heliumPressure3}
🎈 Nível de Hélio: ${data.heliumLevel3}%
❄️ Cold Head: ${data.coldHead3}
❄️ Temperatura do Chiller: ${data.chillerTemperature3}°
🌊 Fluxo da Água: ${data.waterFlow3}
❄️ Temperatura da Água: ${data.waterTemperature3}°
🌡️ Temperatura da Sala de Exames: ${data.examRoomTemperature3}°
💧 Umidade da Sala de Exames: ${data.examRoomHumidity3}%
🌡️ Temperatura da Sala de Máquina: ${data.machineRoomTemperature3}°
💧 Umidade da Sala de Máquina: ${data.machineRoomHumidity3}%

✅ *Tomografia*
📅 Data: ${data.date4}
⏰ Hora: ${data.time4}
🌡️ Temperatura da Sala: ${data.examRoomTemperature4}°
💧 Umidade da Sala: ${data.examRoomHumidity4}%`;
}