var digits = require('./buildNums.js');

function printDigits() {

    var nums = digits.buildPrintNums();
    var row1 = '';
    var row2 = '';
    var row3 = '';

    nums.forEach(function (num) {
        row1 += num.led[0] + ' ';
        row2 += num.led[1] + ' ';
        row3 += num.led[2] + ' ';
    });

    return '\n' + row1 + '\n' + row2 + '\n' + row3 + '\n';
}

exports.printDigits = printDigits;
//console.log(printDigits());



