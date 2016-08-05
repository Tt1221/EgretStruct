var core;
(function (core) {
    var config = (function () {
        function config() {
        }
        var d = __define,c=config,p=c.prototype;
        //服务器地址
        config.IP_TAN = "http://192.168.1.88:8080/hall";
        config.IP_RWX = "http://192.168.1.254:8888/hall";
        config.IP_WAI = "wx.sunyoo51.com:9902";
        config.IP_WAI_____ = "www.sunyoo51.com:9902";
        config.IP_TEST = "192.168.1.160:9902";
        config.IP_NEI = "192.168.1.254:9902";
        config.ipAddress = config.IP_TEST; //IP
        //加载资源
        config.group_loading = 1; //加载进度条
        config.group_loadingWithLogin = 2; //登录页面
        config.group_hall = 3; //大厅资源（需要进行进度条加载）
        config.md5Key = "zhiyouniuniu@#$%&*";
        config.aesKey = "12345678901234567890123456789012";
        config.sid = ""; //123
        config.sign = "";
        config.pfUserId = ""; //支付用userId
        config.sdkAppid = "";
        config.openid = ""; //"ovRTywMxgg_HYs8tkry_n0kWDJOU"
        config.appid = "mq152823349e387837"; //
        config.version = "1.0.0";
        config.market = "";
        config.roomId = 0;
        config.choiceId = 0;
        return config;
    }());
    core.config = config;
    egret.registerClass(config,'core.config');
})(core || (core = {}));
