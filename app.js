// TODO tab title name should be whatever it is we are converting

const temp = [
  'fahrenheit',
  'celsius',
  'kelvin',
  'rankine',
  'réaumur',
  'delisle',
  'rømer',
  'newton',
];

const inputValue = document.querySelector('.input-field');
const inputValueArray = document.querySelectorAll('.input-option option');
const outputValue = document.querySelector('.output-field');

let hasValue = false;

document.querySelector('.btn').addEventListener('click', () => {
  const inputType = document.querySelector('.input-option').value;
  const outputType = document.querySelector('.output-option').value;
  const inputField = document.querySelector('.input-field');

  hasValue = inputField.value && true;

  document.querySelector('.input-option').value = outputType;
  document.querySelector('.output-option').value = inputType;
  updateSelectedOption();
  compute();
});

function updateSelectedOption() {
  const currentInputOption = document.querySelector('.input-option').value;
  const currentOutputOption = document.querySelector('.output-option').value;
  const newInputOption = document.querySelectorAll('.input-option option');
  const newOutputOption = document.querySelectorAll('.output-option option');

  // TODO refactor all for loops into forEach loop
  for (let index = 0; index < newInputOption.length; index++) {
    document
      .querySelectorAll('.input-option option')
      [index].removeAttribute('id');
    document
      .querySelectorAll('.output-option option')
      [index].classList.remove('hide-this');
  }

  for (let index = 0; index < newOutputOption.length; index++) {
    document
      .querySelectorAll('.output-option option')
      [index].removeAttribute('id');
    document
      .querySelectorAll('.input-option option')
      [index].classList.remove('hide-this');
  }

  for (let i = 0; i < newInputOption.length; i++) {
    const newInputOptionLoop = newInputOption[i];
    if (currentInputOption === newInputOptionLoop.value) {
      document
        .querySelectorAll('.input-option option')
        [i].setAttribute('id', 'input-selected');
      document
        .querySelectorAll('.output-option option')
        [i].classList.add('hide-this');
      break;
    }
  }

  for (let i = 0; i < newOutputOption.length; i++) {
    const newOutputOptionLoop = newOutputOption[i];
    if (currentOutputOption === newOutputOptionLoop.value) {
      document
        .querySelectorAll('.output-option option')
        [i].setAttribute('id', 'output-selected');
      document
        .querySelectorAll('.input-option option')
        [i].classList.add('hide-this');
      break;
    }
  }
  compute();
}

function compute() {
  const inputID = document.querySelector('#input-selected').value;
  const outputID = document.querySelector('#output-selected').value;
  const inputField = document.querySelector('.input-field');

  hasValue = inputField.value && true;

  if (hasValue) {
    switch (true) {
      // fahrenheit to celsius
      case inputID === temp[0] && outputID === temp[1]:
        outputValue.value = (
          (5 / 9) *
          (parseFloat(inputValue.value) - 32)
        ).toFixed(4);
        break;

      // fahrenheit to kelvin
      case inputID === temp[0] && outputID === temp[2]:
        outputValue.value = (
          (parseFloat(inputValue.value) - 32) * (5 / 9) +
          273.15
        ).toFixed(4);
        break;

      // fahrenheit to rankine
      case inputID === temp[0] && outputID === temp[3]:
        outputValue.value = (parseFloat(inputValue.value) + 459.67).toFixed(4);
        break;

      // fahrenheit to réaumur
      case inputID === temp[0] && outputID === temp[4]:
        outputValue.value = (
          (parseFloat(inputValue.value) - 32) *
          (4 / 9)
        ).toFixed(4);
        break;

      // fahrenheit to delisle
      case inputID === temp[0] && outputID === temp[5]:
        outputValue.value = (
          (212 - parseFloat(inputValue.value)) *
          (5 / 6)
        ).toFixed(4);
        break;

      // fahrenheit to rømer
      case inputID === temp[0] && outputID === temp[6]:
        outputValue.value = (
          (parseFloat(inputValue.value) - 32) * (7 / 24) +
          7.5
        ).toFixed(4);
        break;

      // fahrenheit to newton
      case inputID === temp[0] && outputID === temp[7]:
        outputValue.value = (
          (parseFloat(inputValue.value) - 32) *
          (11 / 60)
        ).toFixed(4);
        break;

      // celsius to fahrenheit
      case inputID === temp[1] && outputID === temp[0]:
        outputValue.value = (
          parseFloat(inputValue.value) * (9 / 5) +
          32
        ).toFixed(4);
        break;

      // celsius to kelvin
      case inputID === temp[1] && outputID === temp[2]:
        outputValue.value = (parseFloat(inputValue.value) + 273.15).toFixed(4);
        break;

      // celsius to rankine
      case inputID === temp[1] && outputID === temp[3]:
        outputValue.value = (
          (parseFloat(inputValue.value) + 273.15) *
          (9 / 5)
        ).toFixed(4);
        break;

      // celsius to réaumur
      case inputID === temp[1] && outputID === temp[4]:
        outputValue.value = (parseFloat(inputValue.value) * (4 / 5)).toFixed(4);
        break;

      // celsius to delisle
      case inputID === temp[1] && outputID === temp[5]:
        outputValue.value = (
          (100 - parseFloat(inputValue.value)) *
          (3 / 2)
        ).toFixed(4);
        break;

      // celsius to rømer
      case inputID === temp[1] && outputID === temp[6]:
        outputValue.value = (
          parseFloat(inputValue.value) * (21 / 40) +
          7.5
        ).toFixed(4);
        break;

      // celsius to newton
      case inputID === temp[1] && outputID === temp[7]:
        outputValue.value = (parseFloat(inputValue.value) * (33 / 100)).toFixed(
          4
        );
        break;

      //  kelvin to fahrenheit
      case inputID === temp[2] && outputID === temp[0]:
        outputValue.value = parseFloat(
          (inputValue.value * 9) / 5 - 459.67
        ).toFixed(4);
        break;

      //  kelvin to celsius
      case inputID === temp[2] && outputID === temp[1]:
        outputValue.value = (parseFloat(inputValue.value) - 273.15).toFixed(4);
        break;

      //  kelvin to rankine
      case inputID === temp[2] && outputID === temp[3]:
        outputValue.value = (parseFloat(inputValue.value) * (9 / 5)).toFixed(4);
        break;

      //  kelvin to réaumur
      case inputID === temp[2] && outputID === temp[4]:
        outputValue.value = (
          parseFloat(inputValue.value - 273.15) *
          (4 / 5)
        ).toFixed(4);
        break;

      //  kelvin to delisle
      case inputID === temp[2] && outputID === temp[5]:
        outputValue.value = (
          (373.15 - parseFloat(inputValue.value)) *
          (3 / 2)
        ).toFixed(4);
        break;

      //  kelvin to rømer
      case inputID === temp[2] && outputID === temp[6]:
        outputValue.value = (
          ((parseFloat(inputValue.value) - 273.15) * 21) / 40 +
          7.5
        ).toFixed(4);
        break;

      //  kelvin to newton
      case inputID === temp[2] && outputID === temp[7]:
        outputValue.value = (
          ((parseFloat(inputValue.value) - 273.15) * 33) /
          100
        ).toFixed(4);
        break;

      //  rankine to fahrenheit
      case inputID === temp[3] && outputID === temp[0]:
        outputValue.value = (parseFloat(inputValue.value) - 459.67).toFixed(4);
        break;

      // rankine to celsius
      case inputID === temp[3] && outputID === temp[1]:
        outputValue.value = (
          parseFloat(inputValue.value - 491.67) *
          (5 / 9)
        ).toFixed(4);
        break;

      //  rankine to kelvin
      case inputID === temp[3] && outputID === temp[2]:
        outputValue.value = ((parseFloat(inputValue.value) * 5) / 9).toFixed(4);
        break;

      //  rankine to réaumur
      case inputID === temp[3] && outputID === temp[4]:
        outputValue.value = (
          (parseFloat(inputValue.value - 491.67) * 4) /
          9
        ).toFixed(4);
        break;

      //  rankine to delisle
      case inputID === temp[3] && outputID === temp[5]:
        outputValue.value = (
          (671.67 - parseFloat(inputValue.value)) *
          (5 / 6)
        ).toFixed(4);
        break;

      //  rankine to rømer
      case inputID === temp[3] && outputID === temp[6]:
        outputValue.value = (
          (parseFloat(inputValue.value) - 491.67) * (7 / 24) +
          7.5
        ).toFixed(4);
        break;

      //  rankine to newton
      case inputID === temp[3] && outputID === temp[7]:
        outputValue.value = (
          (parseFloat(inputValue.value) - 491.67) *
          (11 / 60)
        ).toFixed(4);
        break;

      // réaumur to fahrenheit
      case inputID === temp[4] && outputID === temp[0]:
        outputValue.value = (
          parseFloat(inputValue.value) * (9 / 4) +
          32
        ).toFixed(4);
        break;

      // réaumur to celsius
      case inputID === temp[4] && outputID === temp[1]:
        outputValue.value = (parseFloat(inputValue.value) * (5 / 4)).toFixed(4);
        break;

      // réaumur to kelvin
      case inputID === temp[4] && outputID === temp[2]:
        outputValue.value = (
          parseFloat(inputValue.value) * (5 / 4) +
          273.15
        ).toFixed(4);
        break;

      // réaumur to rankine
      case inputID === temp[4] && outputID === temp[3]:
        outputValue.value = (
          parseFloat(inputValue.value) * (9 / 4) +
          491.67
        ).toFixed(4);
        break;

      // réaumur to delisle
      case inputID === temp[4] && outputID === temp[5]:
        outputValue.value = (
          parseFloat(80 - inputValue.value) *
          (15 / 8)
        ).toFixed(4);
        break;

      // réaumur to rømer
      case inputID === temp[4] && outputID === temp[6]:
        outputValue.value = (
          parseFloat(inputValue.value) * (21 / 32) +
          7.5
        ).toFixed(4);
        break;

      // réaumur to newton
      case inputID === temp[4] && outputID === temp[7]:
        outputValue.value = (parseFloat(inputValue.value) * (33 / 80)).toFixed(
          4
        );
        break;

      // delisle to fahrenheit
      case inputID === temp[5] && outputID === temp[0]:
        outputValue.value = (
          212 - parseFloat((inputValue.value * 6) / 5)
        ).toFixed(4);
        break;

      // delisle to celsius
      case inputID === temp[5] && outputID === temp[1]:
        outputValue.value = (
          100 -
          parseFloat(inputValue.value) * (2 / 3)
        ).toFixed(4);
        break;

      // delisle to kelvin
      case inputID === temp[5] && outputID === temp[2]:
        outputValue.value = (
          373.15 -
          parseFloat(inputValue.value) * (2 / 3)
        ).toFixed(4);
        break;

      // delisle to rankine
      case inputID === temp[5] && outputID === temp[3]:
        outputValue.value = (
          671.67 -
          parseFloat(inputValue.value) * (6 / 5)
        ).toFixed(4);
        break;

      // delisle to réaumur
      case inputID === temp[5] && outputID === temp[4]:
        outputValue.value = (
          80 -
          parseFloat(inputValue.value) * (8 / 15)
        ).toFixed(4);
        break;

      // delisle to rømer
      case inputID === temp[5] && outputID === temp[6]:
        outputValue.value = (
          60 -
          parseFloat(inputValue.value) * (7 / 20)
        ).toFixed(4);
        break;

      // delisle to newton
      case inputID === temp[5] && outputID === temp[7]:
        outputValue.value = (
          33 -
          parseFloat(inputValue.value) * (11 / 50)
        ).toFixed(4);
        break;

      // rømer to fahrenheit
      case inputID === temp[6] && outputID === temp[0]:
        outputValue.value = (
          parseFloat(inputValue.value - 7.5) * (24 / 7) +
          32
        ).toFixed(4);
        break;

      // rømer to celsius
      case inputID === temp[6] && outputID === temp[1]:
        outputValue.value = (
          parseFloat(inputValue.value - 7.5) *
          (40 / 21)
        ).toFixed(4);
        break;

      // rømer to kelvin
      case inputID === temp[6] && outputID === temp[2]:
        outputValue.value = (
          parseFloat(inputValue.value - 7.5) * (40 / 21) +
          273.15
        ).toFixed(4);
        break;

      // rømer to rankine
      case inputID === temp[6] && outputID === temp[3]:
        outputValue.value = (
          parseFloat(inputValue.value - 7.5) * (24 / 7) +
          491.67
        ).toFixed(4);
        break;

      // rømer to réaumur
      case inputID === temp[6] && outputID === temp[4]:
        outputValue.value = (
          parseFloat(inputValue.value - 7.5) *
          (32 / 21)
        ).toFixed(4);
        break;

      // rømer to delisle
      case inputID === temp[6] && outputID === temp[5]:
        outputValue.value = (
          parseFloat(60 - inputValue.value) *
          (20 / 7)
        ).toFixed(4);
        break;

      // rømer to newton
      case inputID === temp[6] && outputID === temp[7]:
        outputValue.value = (
          parseFloat(inputValue.value - 7.5) *
          (22 / 35)
        ).toFixed(4);
        break;

      // newton to fahrenheit
      case inputID === temp[7] && outputID === temp[0]:
        outputValue.value = (
          parseFloat(inputValue.value) * (60 / 11) +
          32
        ).toFixed(4);
        break;

      // newton to celsius
      case inputID === temp[7] && outputID === temp[1]:
        outputValue.value = (parseFloat(inputValue.value) * (100 / 33)).toFixed(
          4
        );
        break;

      // newton to kelvin
      case inputID === temp[7] && outputID === temp[2]:
        outputValue.value = (
          parseFloat(inputValue.value) * (100 / 33) +
          273.15
        ).toFixed(4);
        break;

      // newton to rankine
      case inputID === temp[7] && outputID === temp[3]:
        outputValue.value = (
          parseFloat(inputValue.value) * (60 / 11) +
          491.67
        ).toFixed(4);
        break;

      // newton to réaumur
      case inputID === temp[7] && outputID === temp[4]:
        outputValue.value = (parseFloat(inputValue.value) * (80 / 33)).toFixed(
          4
        );
        break;

      // newton to delisle
      case inputID === temp[7] && outputID === temp[5]:
        outputValue.value = (
          parseFloat(33 - inputValue.value) *
          (50 / 11)
        ).toFixed(4);
        break;

      // newton to rømer
      case inputID === temp[7] && outputID === temp[6]:
        outputValue.value = (
          parseFloat(inputValue.value) * (35 / 22) +
          7.5
        ).toFixed(4);
        break;

      default:
        console.log('not working');
        outputValue.value = ' ';
        break;
    }
  }
}
inputValue.addEventListener('input', () => {
  inputValue.value === '' ? (outputValue.value = '') : compute();
});
