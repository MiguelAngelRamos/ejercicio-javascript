## CONTEXTO
Una corporación está buscando optimizar sus operaciones diarias y mejorar la eficiencia de su departamento de Recursos Humanos. Para lograrlo, han identificado una serie de tareas rutinarias y cálculos recurrentes que podrían automatizarse utilizando scripts. Entre estas tareas se incluyen la estimación de los días libres acumulados por los empleados, el cálculo de bonificaciones basadas en la antigüedad, la programación de turnos de trabajo y la gestión de permisos y vacaciones. La corporación cree que implementando soluciones automatizadas para estas tareas, pueden ahorrar tiempo y reducir errores.

PROBLEMA
Se busca desarrollar un sistema que, entre otras funcionalidades, pueda calcular automáticamente la antigüedad de los empleados y determinar sus beneficios correspondientes según las políticas de la empresa. Los criterios específicos son los siguientes:

1. Calcular la antigüedad del empleado en años y meses, basándose en la fecha de inicio de labores.
2. Determinar el número de días de vacaciones a los que el empleado tiene derecho, según su antigüedad, usando la siguiente tabla:

   - Menos de 5 años: 14 días
   - De 5 a 10 años: 21 días
   - Más de 10 años: 28 días

3. Calcular el bono por antigüedad que corresponde al empleado, utilizando la siguiente escala:

   - Por cada año completo de trabajo, el empleado recibe una bonificación equivalente al 2% de su salario mensual.

4. Establecer si el empleado califica para un día adicional de permiso en el año, si su cumpleaños cae en un día laboral.
5. Validar que la fecha de inicio de labores no sea una fecha futura.
6. Asegurar que las fechas de inicio de labores y de cálculo estén correctamente formateadas y sean válidas.

Se necesita un mensaje que refleje el estado actual del empleado con respecto a sus vacaciones acumuladas, bonificación por antigüedad y días de permiso especial, si aplica.

SOLUCIÓN
a) Desarrollar un algoritmo o diagrama de flujo que organice lógicamente las consultas y cálculos necesarios para abordar los puntos del 1 al 6.

b) Implementar un script en JavaScript que genere un "informe" personalizado para cada empleado con base en los datos ingresados. Por ejemplo:
   - "El empleado tiene una antigüedad de 3 años y 4 meses, con derecho a 14 días de vacaciones y una bonificación de $600. No califica para un día de permiso adicional este año."
   - "El empleado tiene una antigüedad de 11 años y 2 meses, con derecho a 28 días de vacaciones y una bonificación de $2640. Califica para un día de permiso adicional por su cumpleaños."

DESARROLLO
1. Crear el "algoritmo" o diagrama de flujo correspondiente que detalle la secuencia de pasos para resolver el problema planteado.
2. Codificar el script en JavaScript requerido, realizando pruebas con distintas fechas de inicio y condiciones para verificar la precisión del mensaje generado.
