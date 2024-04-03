document.addEventListener('DOMContentLoaded', function() {

  //* Formulario
  document.querySelector('#form-empleado').addEventListener("submit", function(event) {
    event.preventDefault();

    // Referencias
    const fechaInicio = document.querySelector("#date-input").value;
    //* parseFloat()
    const salarioMensual = parseFloat(document.querySelector("#input-salario").value);
    const fechaCumple = document.querySelector("#input-cumple").value
    
    // console.log(Intl.NumberFormat().format(salarioMensual))
    // console.log(fechaInicio);
    // console.log(salarioMensual);
    // console.log(fechaCumple);

    //* Invocar la función
    let resultado = calcularInformacionEmpleado(fechaInicio, salarioMensual, fechaCumple);

    let parrafoResultado = document.querySelector('#resultado');
    console.log(parrafoResultado);
    // document.querySelector('#resultado').innerText = resultado;
    parrafoResultado.innerText = resultado;

  });
  //* Fin del Formulario

  function calcularInformacionEmpleado(fechaInicio, salarioMensual, fechaCumple, fechaActual = new Date()) {

    const inicio = new Date(fechaInicio); // viene con el mes y el año
    const cumple = new Date(fechaCumple);
    const hoy = fechaActual; // 23 de abril del 2024

    // Valida que fecha de inicio no sea futura
    if(inicio > hoy) {
      return "La fecha de inicio no puede ser en el futuro, el empleado debe tener antiguedad en la empresa"
    }

    //* CALCULO DE ANTIGUEDAD

    let años = hoy.getFullYear() - inicio.getFullYear();
             // 2024 - 2001 = 23 años de antiguad
    let meses = hoy.getMonth() - inicio.getMonth();
    console.log("Años: " +  años + " y meses: " + meses);
    
    //* CALCULAMOS LOS DIAS DE VACACIONES

    let diasVacaciones;
    //* mayor que >
    //* menor que <
    //* el mayor o igual que >=
    //* el menor o igual que <=
    //* and ó Y ó &&
    
    //* Años de antiguedad: 9
    /**
     * V           &&(and)   V  =  Verdadero
     * años >= 5   &&  años <= 10 
     * V &&(and) F  = Falso
     * F && V = Falso
     */
    if(años < 5) {
      diasVacaciones = 14;
    } else if ( años >= 5 && años <= 10) {
      diasVacaciones = 21
    } else {
      diasVacaciones = 28
    }
  }
});