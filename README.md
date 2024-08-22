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
- Función (getHumanChoice) que pida la elección de la persona y almacene en una variable su valor.
    Esta función hará lo siguiente:
    - Solicitará mediante prompt la elección del jugador.
    - La función devolverá el valor del Prompt.
- Función que compare las elecciones y determine un ganador.
    Esta función hará lo siguiente:
    - Con SWITCH comparará todas las opciones posibles y determinará quién gana.
- Se almacena en una variable la cantidad de partidas ganadas por el jugador y en otra variable las partidas ganadas por la computadora.
- Función que active tanto la elección de la computadora como la del jugador.

Funcionamiento:
El juego dispone de 3 botones, desde los que el jugador elige su opción.
Al pulsar uno de esos botones, se activará automáticamente el juego (playRound).
El juego mostrará en un div el score, y anunciará el ganador a los 5 juegos.

PSEUDOCODE:
- Función que recoge en qué botón se ha hecho el click y lanza la función playRound.
- Función playGround con un argumento (la elección hecha por el usuario mediante el botón). Esta función debe lanzar la elección del pc y compararla con la elección del jugador. Además esta función llamará al la función de display que mostrará en pantalla el score.

PSSEUDOCODE:
 - Cuando el jugador pulse un botón, recoge el valor del botón que ha pulsado e inicia la ronda de juego.
 - Al iniciar la ronda de juego con el argumento del valor del botón pulsado, se inicia la función para crear la opción de la máquina.
 - Tras conseguir la opción de la máquina, se inicia la comparación de valores, lo que da lugar a un ganador.
 - Al reconocer un ganador, se actualiza su score y se muestra en pantalla el score de ambos.
 - Al realizar 5 rondas, se finaliza el juego dando lugar a un ganador.