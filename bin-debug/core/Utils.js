var dn;
(function (dn) {
    var Utils = (function () {
        function Utils() {
        }
        var d = __define,c=Utils,p=c.prototype;
        //存档
        Utils.writeLocalData = function (key, value) {
            egret.localStorage.setItem(key, value);
        };
        Utils.readLocalData = function (key, defaultValue) {
            if (defaultValue == undefined || defaultValue == null)
                defaultValue = "";
            var value = egret.localStorage.getItem(key);
            return (value == "" || value == undefined || value == null) ? defaultValue : value;
        };
        Utils.getData = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)
                return (r[2]);
            return null;
        };
        return Utils;
    }());
    dn.Utils = Utils;
    egret.registerClass(Utils,'dn.Utils');
})(dn || (dn = {}));
