var nums = require('./convert.js');

function buildPrintNums() {

    var numArray = nums.convert('910');
    var digits = getDigits();
    var needPrintNums = [];

    numArray.forEach(function (num) {
        var existedDigit = findExistedDigit(num, digits);
        needPrintNums.push(existedDigit);
    });

    return needPrintNums;
}

exports.buildPrintNums = buildPrintNums;

function getDigits() {

    return [
        {name: "0", led: [["._."], ["|.|"], ["|_|"]]},
        {name: "1", led: [["..."], ["..|"], ["..|"]]},
        {name: "2", led: [["._."], ["._|"], ["|_."]]},
        {name: "3", led: [["._."], ["._|"], ["._|"]]},
        {name: "4", led: [["..."], ["|_|"], ["..|"]]},
        {name: "5", led: [["._."], ["|_."], ["._|"]]},
        {name: "6", led: [["._."], ["|_."], ["|_|"]]},
        {name: "7", led: [["._."], ["..|"], ["..|"]]},
        {name: "8", led: [["._."], ["|_|"], ["|_|"]]},
        {name: "9", led: [["._."], ["|_|"], ["..|"]]}
    ];
}

function findExistedDigit(num, digits) {
    var existedDigit;

    digits.forEach(function (digit) {
        if (digit.name === num) {
            existedDigit = digit;
        }
    });

    return existedDigit;
}
