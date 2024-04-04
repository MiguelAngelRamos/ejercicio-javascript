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

  function calcularInformacionEmpleado(fechaInicio, salarioMensual, fechaCumpleStr) {

    const inicio = new Date(fechaInicio); // Se considera la fecha en que el trabajador comenzo a trabajar.
    const hoy = new Date(); // 24 de abril del 2024
    const fechaCumpleaños = new Date(fechaCumpleStr);
    // Valida que fecha de inicio no sea futura
    if(inicio > hoy) {
      return "La fecha de inicio no puede ser en el futuro, el empleado debe tener antiguedad en la empresa"
    }

    //* CALCULO DE ANTIGUEDAD

    let años = hoy.getFullYear() - inicio.getFullYear(); // getFullYear() obtienes el año solamente 
             // 2024 - 2023 = 1 año
             //* para javascript abril 3
             //* 01 dic 2023    a 24 abril 2024
             //*    11                3
             //* 3 - 11 = -8
             //? 24 de Abril 2023  a 24 de abril 2024
             //? 24 de abril 2023 <- getMonth() nos devuelve 3 
             //? 24 de abril 2024 <- getMonth() nos devuelve 3
            // cuando la resta de los meses es 0 lleva un año trabajando
    let mes= hoy.getMonth() - inicio.getMonth() ; // getMonth() obtienes solo el mes
   
    //  V   ||  F = V
    //  F   ||  V = V
    //  F   ||  F = F
    //  V   ||  V = V
    //* getDate() : Retorna el dia del mes (1 - 31)
    //* getMonth(): Retorna el mes del año (0 - 11), donde 0 es enero y 11 es diciembre
    //* getFullYear(): Retorna el año completo (2024)
    //*                 01 de abril del 2024 - 24 de abril 2024
    if( mes < 0 || (mes === 0 && hoy.getDate() < inicio.getDate())) {
        años = años - 1; // años--;
    }

    //* operador ternario
    //* -8
    mes = mes >= 0 ? mes: 12 + mes;
  
    // console.log("Años: " +  años + " y meses: " + mes);
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

    
  //  - Menos de 5 años: 14 días
  //  - De 5 a 10 años: 21 días
  //  - Más de 10 años: 28 días

    if(años < 5) {
      diasVacaciones = 14;
    } else if ( años >= 5 && años <= 10) {
      diasVacaciones = 21
    } else if(años > 10) {
      diasVacaciones = 28
    }

    //* - Por cada año completo de trabajo, el empleado recibe una bonificación equivalente al 2% de su salario mensual.
    let bono = (salarioMensual * 0.02) * años;

    let calificaDiaAdicional = false;
    //* 4. Establecer si el empleado califica para un día adicional de permiso en el año, si su cumpleaños cae en un día laboral.
    if(fechaCumpleaños.getDay() > 0 && fechaCumpleaños.getDay() < 6) {
      calificaDiaAdicional = true;
    }

    let mensaje = "El empleado tiene una antiguedad de: " + años + " años y " + mes + " meses, con derecho a:  " + diasVacaciones + " días de vacaciones y una bonificación de: " + bono;

    if(calificaDiaAdicional) {
      mensaje = mensaje + " Califica para un día de permiso adicional por su cumpleaños";
    } else {
      mensaje = mensaje + " No Califica para un día de permiso adicional por su cumpleaños";
    }

    return mensaje;
  }

});