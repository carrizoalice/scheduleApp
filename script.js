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

