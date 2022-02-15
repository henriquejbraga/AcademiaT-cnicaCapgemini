let n = 6 // Substitua o valor de 'n' a ser escolhido. E execute a função. No VScode é através do (Ctrl + Alt + N)

function trianguloInvertido(n) {
  let symbol = '*';
  let inputLine = '';
  let inputPosition = n;

  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
      if (columnIndex < inputPosition) {
        inputLine = inputLine + ' ';
      } else {
        inputLine = inputLine + symbol;
      }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
  };
}
trianguloInvertido(n);
