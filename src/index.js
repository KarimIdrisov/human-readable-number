module.exports = function toReadable(number) {

    const defs = {
        '': '',
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '15': 'fifteen',
        '18': 'eighteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '80': 'eighty',
    }

    function getLess100(number) {
        if (number < 20) {
            if (defs[number.toString()]) {
                return defs[number.toString()];
            }

            return `${defs[(number % 10).toString()]}teen`;
        }

        if (number < 100) {
            if (defs[(number - number % 10)]) {
                return `${defs[(number - number % 10)]} ${defs[number % 10 || '']}`.trim();
            }

            return `${defs[(number - number % 10) / 10]}ty ${defs[number % 10 || '']}`.trim();
        }
    }

    // return only if number < 100
    if (number < 100) {
        return getLess100(number);
    }


    // if > 100

    const hundreds = Math.floor(number / 100);
    const other = number % 100;

    if (other === 0) {
        return `${defs[hundreds]} hundred`;
    }

    return `${defs[hundreds]} hundred ${getLess100(other)}`.trim();
}
