// http流实现comet
function createStreamingClient(url, progress, finished) {
    var xhr = new XMLHttpRequest(),
        received = 0;
    xhr.open("get", url, true);
    xhr.onreadystatechange = function() {
        var result;
        if (xhr.readyState == 3) {
            //只取得最新数据并调整计数器
            result = xhr.responseText.substring(received);
            received += result.length;
            //调用 progress 回调函数
            progress(result);
        } else if (xhr.readyState == 4) {
            finished(xhr.responseText);
        }
    };
    xhr.send(null);
    return xhr;
}
var client = createStreamingClient("streaming.php", function(data) {
    alert("Received: " + data);
}, function(data) {
    alert("Done!");
});

// ajax跨域兼容性方案
function creatCrossReq(type, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(type, url, true);
        return xhr;
    } else if ((typeof xDomainRequest) != undefined) {
        var vxhr = new xDomainRequest();
        vxhr.open(type, url);
        return vxhr;
    } else {
        return null;
    }
}
var req = creatCrossReq('get', "htttp:www.baidu.com");
if (req) {
    req.onload = function() {
        console.log(req.responseText);
    };
    req.send(null);
}