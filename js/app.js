document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#form-empleado').addEventListener("submit", function(event) {
    event.preventDefault();

    // Referencias
    const fechaInicio = document.querySelector("#date-input").value;
    const salarioMensual = document.querySelector("#input-salario").value;
    const fechaCumple = document.querySelector("#input-cumple").value;

    console.log(fechaInicio);
    console.log(salarioMensual);
    console.log(fechaCumple);
  });
});