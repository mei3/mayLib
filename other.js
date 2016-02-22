// 第一种实现千位分隔符
function thousandSeparator(num) {
    var numStr = num + '';

    // 去掉符号后转化为字符串
    if (numStr.indexOf('-') > -1 || numStr.indexOf('+') > -1) {
        numStr = numStr.substring(1);

    }
    var numLen = numStr.length,
        count = Math.floor(numLen / 3);
    if (numLen <= 3) {
        return num;
    } else {
        num = num / 1000;
        numstr = (num + '').replace('.', ',');
    }
    return numstr;
}
// 正则实现前卫分隔符
function commafy(num) {
    num = num + '';
    var reg = /(-?\d+)(\d{3})/;

    if (reg.test(num)) {
        num = num.replace(reg, '$1,$2');
    }

    return num;
}



/**
 * 设置Cookie （通用函数）
 * @param {string} cookieName Cookie 名称
 * @param {string} cookieValue Cookie 值
 * @param {string} nDays Cookie 过期天数
 */
function SetCookie(cookieName, cookieValue, nDays) {

    /* 当前日期 */
    var today = new Date();
    /* Cookie 过期时间 */
    var expire = new Date();
    /* 如果未设置nDays参数或者nDays为0，取默认值 1 */
    if (nDays == null || nDays == 0)
        nDays = 1;
    /* 计算Cookie过期时间 */
    expire.setTime(today.getTime() + nDays * 24 * 60 * 60 * 1000); //获取毫秒数
    /* 设置Cookie值 */
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
}


/**
 * 读取指定的Cookie值
 * @param {string} cookieName Cookie名称
 */

// 方法1：

function GetCookie(cookieName) {
    var strCookie = document.cookie;
    // 将多cookie切割为多个名/值对
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        // 遍历cookie数组，处理每个cookie对
        var arr = arrCookie[i].split("=");
        // 找到名称为cookieName的cookie，并返回它的值
        if (arr[0] == "username")
            return arr[1];
    }
    return "";

}
/**删除cookie
 *@param {string} cookie的名称
 */
function deleteCookie(username) {
    var date = new Date();
    // // 删除一个cookie，就是将其过期时间设定为一个过去的时间
    date.setTime(date.getTime() - 10000);

    document.cookie = name + "=v; expire=" + date.toGMTString();

}