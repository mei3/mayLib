// 千位分隔符
function thousandSeparator(num) {
    var numStr = num.toString();

    if (numStr.indexOf('-') > -1) {
        numStr = numStr.substring(1);
    }
    var numLen = numStr.length,
        count = Math.floor(numLen / 3),
        numArr = [];

    if (numLen === 3) {
        return num;
    }

    // 消除位数为3的倍数且大于3的情况
    if (numLen % 3 === 0) {
        count--;
    }
    // 获得最后三位并插入numArr
    while (count--) {
        num = num / 1000;
        casArr = num.toString().split('.');
        numArr.push(casArr[1]);
        num = parseInt(num);
        if (count == 0) {
            numArr.push(casArr[0]);
        }
    }

    // 规划分组数字顺序
    num = numArr.reverse().join(',');
    // console.log(num);
    return num;
}