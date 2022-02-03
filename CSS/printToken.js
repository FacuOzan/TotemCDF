const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var ticketMDE = 1;
var ticketL = 1;
var ticketR = 1;










function askThisQuestionRecursively() {
  rl.write('Ticket de Mesa de Entrada: Presione 1 \n');
  rl.write('Ticket de Laboratorio Presione 2 \n');
  rl.write('Ticket de Laboratorio Presione 3 \n');
  rl.write('Para salir presione 0 \n');

  rl.question("Numero:  ", function(numeroIngresado) {
    switch (numeroIngresado) {
      case '1':
        rl.write(`Su numero para Mesa de Entrada es el ${Element.id(ticketMDE)} \n\n`);
        ticketMDE++;
        if (ticketMDE === 100) {
          ticketMDE = 1;
        }
        break;
      case '2':
        rl.write(`Su numero para Laboratorio es el: ${Element.id(ticketL)} \n\n`);
        ticketL++;
        if (ticketL === 100) {
          ticketL = 1;
        }
        break;
      case '3':
        rl.write(`Su numero para Recetas es el: ${Element.id((ticketR))} \n\n`);
        ticketR++;
        if (ticketR === 100) {
          ticketR = 1;
        }
        break;
      default:
        rl.write(`Solo 1, 2 y 3 son opciones válidas \n\n`);
    }
    rl.write('######################### \n\n')

    if(numeroIngresado === 0) {
      break;
    } else {
      askThisQuestionRecursively();
    }

  });
  askThisQuestionRecursively();
 
}

