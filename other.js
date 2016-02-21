// 千位分隔符
function thousandSeparator(num) {
    var numStr = num.toString(),
        minus = false;

    if (numStr.indexOf('-') > -1) {
        numStr = numStr.substring(1);
        minus = true;
    }
    var numLen = numStr.length,
        count = Math.floor(numLen / 3);
    if (numLen === 3) {
        return num;
    } else {
        num = num / 1000;
        numstr = (num + '').replace('.', ',');
    }

    return numstr;
}
// 正则实现
function commafy(num) {
    num = num + '';
    var reg = /(-?\d+)(\d{3})/;

    if (reg.test(num)) {
        num = num.replace(reg, '$1,$2');
    }

    return num;
}
// commafy(123456789);
thousandSeparator(-123456789);