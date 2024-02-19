function criptografar() {
  let inputText = document.getElementById('textoInput').value.toLowerCase();
  let textoOutput = document.getElementsByClassName('textoOutput')[0];

  if (inputText === '') {
    alert('Digite um texto para criptografar/decriptografar');
    return;
  }

  if (inputText.match(/[^a-z\s]/)) {
    alert('Não é permitido caracteres especiais ou números');
    return;
  }

  const textoCriptografado = inputText
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

  textoOutput.innerHTML = textoCriptografado;
}

// copiar o texto
function copy() {
  let textoOutput = document.getElementsByClassName('textoOutput')[0].innerHTML;

  // verificar se estar vazio
  if (textoOutput.trim() === '') {
    alert('Nada para copiar😑');
    return;
  }
  navigator.clipboard.writeText(textoOutput);

  alert('Texto copiado, use com sabedoria😜');
}

// decriptografar
function descriptografar() {
  let inputText = document.getElementById('textoInput').value.toLowerCase();
  let textoOutput = document.getElementsByClassName('textoOutput')[0];

  if (inputText === '') {
    alert('Digite um texto para criptografar/decriptografar');
    return;
  }

  if (inputText.match(/[^a-z\s]/)) {
    alert('Não é permitido caracteres especiais ou números');
    return;
  }

  const textoDecriptografado = inputText
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  textoOutput.innerHTML = textoDecriptografado;
}
