const textArea = document.querySelector('textarea');
const button = document.querySelector('button');
const alertDisplay = document.getElementById('alert');
const resultDisplay = document.getElementById('result')

let nameList = [];

function listNamesToArray() {
  const textAreaValues = textArea.value.trim();
  if (textAreaValues) {
    let newName = textAreaValues.split(',');
    nameList.push(... newName);
  }
}

function draftRandomNameFromArray() {
  if (nameList.length > 0) {
    let namePosition = Math.floor(Math.random() * nameList.length);
    const pickedName = nameList[namePosition];
    alertDisplay.textContent = 'O nome sorteado foi:';
    resultDisplay.textContent = pickedName;
  } else {
    alertDisplay.textContent = 'A lista de nomes está vazia. Por favor, insira nomes antes de realizar o sorteio.'
  }
  
  nameList = []
};

button.addEventListener('click', () => {
  listNamesToArray();
  draftRandomNameFromArray();
})