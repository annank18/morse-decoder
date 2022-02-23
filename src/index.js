const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let Arrays = [];
  let morse =[];
  let morse2 =[];
  let morse3 = [];
  for (let i = 0; i < expr.length; i += 2) {
    Arrays.push(expr.slice(i, i+2));
  }

Arrays.forEach(item => {
  if (item === '10') {
    item = '.';
  } else if (item === '11') {
    item = '-';
  } else if (item === '00') {
    item = '';
  }
  morse.push(item);
})
 
for (let i = 0; i < morse.length; i += 5) {
  morse2.push(morse.slice(i, i+5));
}

for (let i = 0; i < morse2.length; i++) {
  morse = morse2[i].filter(item => item != '' && item != '**');
  morse3.push(morse);
}

morse2 = [];

for (let i = 0; i < morse3.length; i++) {
  morse = morse3[i].join('');
  morse2.push(morse);
}

let res = morse2.map(b => {
  if (MORSE_TABLE[b] === undefined) {
    return b = ' ';
  } else {
    return MORSE_TABLE[b];
  }
  
}).join('');
return res;
}

module.exports = {
    decode
}