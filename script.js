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
    return newEvent;
}

function putEvent() {
    var putEvent = document.getElementById('put-event');

}



btnSend.addEventListener('click', function(event){
    alert('holitas');
})






