const date = new Date();
const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"];

document.querySelector('.day').innerHTML = addZero(date.getDate());
document.querySelector('.month-year').innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();

function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

function createEvent() {
    var newEvent = document.getElementById('text').value;    
    var newDate = new Date();
    putEvent(newEvent);
    return newEvent;
    
}

function putEvent(newEvent) {
    var putEvent = document.getElementById('put-event');
    putEvent.innerHTML = newEvent;
}

btnSend.addEventListener('click', function(event){  
    createEvent();
    
})






