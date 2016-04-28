var numArray = convertNumArray('910');

var needPrintNums = buildPrintNums(numArray);

console.log(printDigits(needPrintNums));

//exports.add = mainTest;

function convertNumArray(input) {
    var numArray = input.split("");

    return numArray;
}

function buildPrintNums(numArray) {
    var digits = getDigits();

    var needPrintNums = [];
    numArray.forEach(function (num) {
        var existedDigit = findExistedDigit(num, digits);
        needPrintNums.push(existedDigit);
    });

    return needPrintNums;
}

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

function printDigits(nums) {
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

