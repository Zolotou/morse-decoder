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
    let exprArray = expr.split("");
    let exprArray10 = [];
    let resultArray= [];

    for(let i=0; i< expr.length; i++){
        if (i%9 == 0){
            exprArray10.push(exprArray.slice(0,10).join(''));
            exprArray.splice(0,10);
        }
        else if (i== expr.length-1){
            exprArray10.push('');
        }
        
    }

    // make dots and slashes
    for (let i=0; i< exprArray10.length; i++){
        if (exprArray10[i] == ''){
            continue;
        }
        else if (exprArray10[i] == '**********'){
            resultArray.push(' ');
        }
        else {
            let letterMorse=[];
            for(let j=0; j< 10; j++){
                if(exprArray10[i].charAt(j) == '1'){
                    if(exprArray10[i].charAt(j+1) == '1'){
                        letterMorse.push('-');
                    }
                    else letterMorse.push('.');

                    j++;
                }
            }
            resultArray.push(letterMorse.join(''));
        }
    }

    // make letters from dots and slashes
    let result = resultArray.map(function(num){
        if(num === ' ') return ' ';
        return MORSE_TABLE[num];
    })

    return result.join('');
}

module.exports = {
    decode
}