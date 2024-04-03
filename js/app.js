document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#form-empleado').addEventListener("submit", function(event) {
    event.preventDefault();

    // Referencias
    const fechaInicio = document.querySelector("#date-input").value;
    //* parseFloat()
    const salarioMensual = parseFloat(document.querySelector("#input-salario").value);
    const fechaCumple = document.querySelector("#input-cumple").value;
    console.log(Intl.NumberFormat().format(salarioMensual))
    console.log(fechaInicio);
    console.log(salarioMensual);
    console.log(fechaCumple);
  });
});