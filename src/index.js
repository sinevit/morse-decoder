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
    let decodeArr=[];
    for(let i = 0; i<expr.length; i+=10){
      let subs = expr.substr(i, 10);
      while(subs.includes('10') || subs.includes('11') ){
          subs = subs.replace(/10/,'.').replace(/11/,'-');
       }
       decodeArr.push(subs.replace(/[0-9]/g, ''))
    }

  let result = decodeArr.map(el => MORSE_TABLE[el] ? MORSE_TABLE[el]: ' ' );
   return result.join('');
}

module.exports = {
    decode
}