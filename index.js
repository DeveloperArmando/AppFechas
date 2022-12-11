const turnos = ["", "Todo el día", "Entrar velada", "Salir velada", "Todo el día"];
const hoy = new Date();
document.getElementById('fecha').value = hoy.getFullYear()+"-"+(hoy.getMonth() + 1)+"-"+hoy.getDate();
document.getElementById('fecha').min = hoy.getFullYear()+"-"+(hoy.getMonth() + 1)+"-"+hoy.getDate();
const restultado = document.getElementById('resultado');
restultado.innerText = turnos[1];

function turno() {
    const turno = document.getElementById('turno').value;
    const fecha = document.getElementById('fecha').value;
    const fechaSplit = fecha.split('-');    
    const hoySinHoras = new Date(hoy.getFullYear()+"-"+(hoy.getMonth() + 1)+(hoy.getDate() >= 10 ? "-" : "-0")+hoy.getDate()+ "T00:00:00")
    const fechaTurno = new Date(fecha ? fechaSplit[0]+"-"+fechaSplit[1]+"-"+fechaSplit[2]+ "T00:00:00" : hoySinHoras);
    const diff = fechaTurno - hoySinHoras;
    const diffDys = diff / (1000*60*60*24);
    const siguieteTurno = (diffDys % 3) + (+turno);
    restultado.innerText = turnos[siguieteTurno];
}