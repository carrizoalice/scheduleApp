var date = new Date();
var months = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

var divDate = document.querySelector('.day');
var divMonthYear = document.querySelector('.month-year');
divDate.innerHTML = addZero(date.getDate());
divMonthYear.innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();
// var dd = date.getDate();
// var mm = date.getMonth()+1;
// var yyyy = date.getFullYear();





function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

