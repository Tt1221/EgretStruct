/**
 * Create By Tt. 2016/7/22
 * */
/**
 * 异步加载图片资源
 * */
var AsyncRes = (function () {
    function AsyncRes() {
    }
    var d = __define,c=AsyncRes,p=c.prototype;
    AsyncRes.getRes = function (item, url) {
        RES.getResAsync(url, function () {
            item.source = RES.getRes(url);
        }, this);
    };
    return AsyncRes;
}());
egret.registerClass(AsyncRes,'AsyncRes');
/**
 * 消息打印
 * */
var Log = (function () {
    function Log() {
    }
    var d = __define,c=Log,p=c.prototype;
    //信息
    Log.info = function (msg) {
        console.info(msg);
    };
    //警告
    Log.warn = function (msg) {
        console.warn("%c" + msg, "color: yellow;");
    };
    //错误
    Log.error = function (msg) {
        console.error(msg);
    };
    //debug专用
    Log.debug = function (msg) {
        if (!Log.isDebug)
            return;
        console.log("%c  " + msg, "color: green;");
    };
    Log.isDebug = true;
    return Log;
}());
egret.registerClass(Log,'Log');
/**
 * 界面控制
 * */
var StageManager = (function () {
    function StageManager() {
    }
    var d = __define,c=StageManager,p=c.prototype;
    //添加显示节点
    StageManager.popDisplayObjectContainer = function (db) {
        var stage = egret.MainContext.instance.stage;
        stage.addChild(db);
    };
    //删除显示节点
    StageManager.removeDisplayObjContainerByName = function (dbName) {
        var stage = egret.MainContext.instance.stage;
        var db = stage.getChildByName(dbName);
        if (!db)
            return;
        stage.removeChild(db);
    };
    //获取显示节点
    StageManager.removeDisplayObjContainer = function (db) {
        var stage = egret.MainContext.instance.stage;
        if (!db.stage) {
            console.error("传入了错误的显示容器->" + db);
            return;
        }
        stage.removeChild(db);
    };
    //获取显示节点
    StageManager.getDisplayObjContainerByName = function (dbName) {
        var stage = egret.MainContext.instance.stage;
        var db = stage.getChildByName(dbName);
        if (!db)
            return;
        return db;
    };
    return StageManager;
}());
egret.registerClass(StageManager,'StageManager');
//存档
var DataStore = (function () {
    function DataStore() {
    }
    var d = __define,c=DataStore,p=c.prototype;
    //写入数据
    DataStore.writeLocalData = function (key, value) {
        egret.localStorage.setItem(key, value);
    };
    //读取数据
    DataStore.readLocalData = function (key, defaultValue) {
        if (defaultValue == undefined || defaultValue == null)
            defaultValue = "";
        var value = egret.localStorage.getItem(key);
        return (value == "" || value == undefined || value == null) ? defaultValue : value;
    };
    return DataStore;
}());
egret.registerClass(DataStore,'DataStore');
//字典结构 一个key 一个数据
var Dictionary = (function () {
    function Dictionary() {
        this.dataStore = new Array();
    }
    var d = __define,c=Dictionary,p=c.prototype;
    p.add = function (key, value) {
        this.dataStore[key] = value;
    };
    p.find = function (key) {
        return this.dataStore[key];
    };
    p.remove = function (key) {
        delete this.dataStore[key];
    };
    p.showAll = function () {
        for (var idx in this.dataStore) {
            console.log(idx + "->" + this.dataStore[idx]);
        }
    };
    p.count = function () {
        var num = 0;
        for (var key in Object.keys(this.dataStore)) {
            ++num;
        }
        return num;
    };
    p.clear = function () {
        for (var idx in this.dataStore) {
            delete this.dataStore[idx];
        }
    };
    return Dictionary;
}());
egret.registerClass(Dictionary,'Dictionary');
//数据的克隆
var DataClone = (function () {
    function DataClone() {
    }
    var d = __define,c=DataClone,p=c.prototype;
    DataClone.clone = function (data) {
        var cloeData = data instanceof Array ? [] : {};
        for (var idx in data) {
            if (typeof data[idx] == "object") {
                cloeData[idx] = DataClone.clone(data[idx]);
            }
            else {
                cloeData[idx] = data[idx];
            }
        }
        return cloeData;
    };
    return DataClone;
}());
egret.registerClass(DataClone,'DataClone');
