# rock-paper-scissors
TOP Project: Rock Paper Scissors

Description:
This project makes a Rock Paper Scissors Game in the log console.

Pseudocode:
- Función (getComputerChoice) para que la computadora elija aleatoriamente "Rock", "Paper" o "Scissors" y la almacene en una variable.
    Esta función hará lo siguiente:
    - Creará una variable a la que se le asignará un número random del 1 al 3 (incluidos).
    - Hará un SWITCH que en función del número, asignará a otra variable el string "Rock", "Paper" o "Scissors".
    - La función devolverá el resultado de esa última variable.
- Función que pida la elección de la persona y almacene en una variable su valor.
    Esta función hará lo siguiente:
    - Solicitará mediante prompt la elección del jugador.
    - Comprobará que la elección es una de las 3 posibilidades correctas, "Rock", "Paper", "Scissors", de no ser correcta mostrará un mensaje de error y solicitará de nuevo el prompt.
    - La función devolverá el valor del Prompt.
- Función que compare las elecciones y determine un ganador.
    Esta función hará lo siguiente:
    - Con SWITCH comparará todas las opciones posibles y determinará quién gana.
- Se almacena en una variable la cantidad de partidas ganadas por el jugador y en otra variable las partidas ganadas por la computadora.
- Función que active tanto la elección de la computadora como la del jugador.
