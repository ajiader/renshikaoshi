/// <summary>
/// POST方法请求
/// </summary>
/// <param name="url">请求URL</param>
/// <param name="data">发送的数据JSON对象或者JSON对象的字符串</param>
/// <param name="success">请求成功的回调函数，签名为funcion onSuccess(data),data是返回的数据，这JSON对象</param>
/// <param name="error">
/// 请求异常的回调函数，签名为function onError(request,status,error),request为XMLHTTPRequest对象，
/// status为http请求状态码,error为异常消息
/// </param>
///<param name="options">ajax请求设置，可选，参见JQuery.Ajax的Settings参数</param>
function Post(url, data, success, error) {
    _request(url, data, "POST", success, error);
}

/// <summary>
/// GET方法请求
/// </summary>
/// <param name="url">请求URL</param>
/// <param name="data">发送的数据JSON对象</param>
/// <param name="success">请求成功的回调函数，签名为funcion onSuccess(data),data是返回的数据，这JSON对象</param>
/// <param name="error">
/// 请求异常的回调函数，签名为function onError(request,status,error),request为XMLHTTPRequest对象，
/// status为http请求状态码,error为异常消息
/// </param>
///<param name="options">ajax请求设置，可选，参见JQuery.Ajax的Settings参数</param>
function Get(url, data, success, error) {
    _request(url, data, "GET", success, error);
}

/// <summary>
/// http请求函数
/// </summary>
/// <param name="url">请求URL</param>
/// <param name="data">发送的数据JSON对象</param>
/// <param name="methord">请求方法,GET或者POST</param>
/// <param name="success">请求成功的回调函数，签名为funcion onSuccess(data),data是请求返回的数据，为JSON对象</param>
/// <param name="error">
/// 请求异常的回调函数，签名为function onError(request,status,error),request为XMLHTTPRequest对象，
/// status为http请求状态码,error为异常消息
/// </param>
///<param name="options">ajax请求设置，可选，参见JQuery.Ajax的Settings参数</param>
function _request(url, data, methord, success, error) {
    if (methord == "POST") {
        //data = $.type(data) == "string" ? data : JSON.stringify(data);
    }
    var ops = {
        type: methord,
        //        contentType: "application/json; charset=utf-8",
        //        headers: { "Client-Type": "web" },
        url: url,
        dataType: "json",
        data: data, //{ "type": "userregister" ,"username":"lxm"}        
        cache: false,
        error: error,
        success: success
    };    
    $.ajax(ops);
}



/*
*对String对象的扩展，为基增加类似C#的string.Format方法
*args:参列表，当参数个数为1且参数类型为object时，枚举该参数的属性成员来替换源字符中{属性名}的占位符
*/
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}
