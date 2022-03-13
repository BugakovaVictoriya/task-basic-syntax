export function romanToInteger(str) {
    let result = 0;
    let arNum = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let roNum = [
        'I',
        'IV',
        'V',
        'IX',
        'X',
        'XL',
        'L',
        'XC',
        'C',
        'CD',
        'D',
        'CM',
        'M',
    ];
    let i = 12;
    let posit = 0;
    while (i >= 0 && posit < str.length) {
        if (str.substr(posit, roNum[i].length) == roNum[i]) {
            result += arNum[i];
            posit += roNum[i].length;
        } else {
            i--;
        }
    }
    return result;
}
