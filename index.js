const turnos = ["", "Todo el día", "Entrar a velada", "Salir de velada", "todo el día", "Entrar a velada"];
const hoy = new Date();
document.getElementById('fecha').value = hoy.getFullYear()+"-"+(hoy.getMonth() + 1)+"-"+hoy.getDate();
document.getElementById('fecha').min = hoy.getFullYear()+"-"+(hoy.getMonth() + 1)+"-"+hoy.getDate();
const restultado = document.getElementById('resultado');


asignarTurno = (turno) => restultado.innerText = "Turno: " + turnos[turno];

asignarTurno(1);

function turno() {
    const turno = document.getElementById('turno').value;
    const fecha = document.getElementById('fecha').value;
    const fechaSplit = fecha.split('-');    
    const fechaHoySinHoras = new Date(hoy.getFullYear()+"-"+(hoy.getMonth() + 1)+(hoy.getDate() >= 10 ? "-" : "-0")+hoy.getDate()+ "T00:00:00.000Z")
    const fechaTurno = new Date(!fecha ? fechaHoySinHoras : fechaSplit[0]+"-"+fechaSplit[1]+"-"+fechaSplit[2]+ "T00:00:00.000Z");
    const diff = fechaTurno - fechaHoySinHoras;
    const diffDys = diff / (1000*60*60*24);
    const siguieteTurno = (diffDys % 3) + (+turno);
    asignarTurno(siguieteTurno);
}