// Ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
    let output = '';
  
    // Verifica se il numero è multiplo di 3
    if (i % 3 === 0) {
      output += 'Fizz';
    }
  
    // Verifica se il numero è multiplo di 5
    if (i % 5 === 0) {
      output += 'Buzz';
    }
  
    // Se il numero non è multiplo né di 3 né di 5, stampa il numero stesso
    if (output === '') {
      output = i;
    }
  
    // Stampa il risultato
    console.log(output);
  }
  
  