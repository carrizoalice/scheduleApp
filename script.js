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
    putEvent(newEvent, newDate);      
   
    
}

function putEvent(newEvent, newDate) {
    var putEvent = document.getElementById('put-event');
    putEvent.innerHTML += '<div>' + newDate.getDate()  + "-" + (newDate.getMonth()+1) + "-" + newDate.getFullYear() + '<br>'+ newEvent +'</div>'+ '<br>';
}

btnSend.addEventListener('click', function(event){          
    createEvent();    
     document.getElementById('text').value = ''; 

})



for(let i = 0 ; i < 10; i++){
    document.querySelector('.button-cal').innerHTML += '<div>'+i+'</div>';
}




