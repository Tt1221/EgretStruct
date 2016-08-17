/**
 * Create By Tt. 2016/7/22
 * */
/**
 * 异步加载图片资源
 * */
class AsyncRes {
    public static getRes(item,url) {
        RES.getResAsync(url,function() {
            item.source = RES.getRes(url);
        },this);
    }
}

/**
 * 添加按钮监听
 * */
class TouchTap {
    public static add (item,callback,target){
        item.addEventListener(egret.TouchEvent.TOUCH_TAP,callback,target);
    }
    public static remove (item,callback,target){
        item.removeEventListener(egret.TouchEvent.TOUCH_TAP,callback,target);
    }
}
/**
 * 平台检测
 * */
class PlatUntils {
    public static isNative() {
        return egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE;
    }
}

/**
 * 消息打印
 * */
class Log {
    public static isDebug = true;
    //信息
    public static info(msg) {
        console.info(msg);
    }
    //警告
    public static warn(msg) {
        console.warn("%c" + msg,"color: yellow;");
    }
    //错误
    public static error(msg) {
        console.error(msg);
    }
    //debug专用
    public static debug(msg) {
        if(!Log.isDebug) return;
        console.log("%c  " + msg,"color: green;");
    }
}

/**
 * 界面控制
 * */
class StageManager {
    public static stage : eui.UILayer;
    //添加显示节点
    public static popDisplayObjectContainer(db: eui.Component) {
        var stage = egret.MainContext.instance.stage;
        stage.addChild(db);
    }
    //删除显示节点
    public static removeDisplayObjContainerByName(dbName: string): void {
        var stage = egret.MainContext.instance.stage;
        var db: any = stage.getChildByName(dbName);
        if(!db) return;
        stage.removeChild(db);
    }
    //获取显示节点
    public static removeDisplayObjContainer(db: any): void {
        var stage = egret.MainContext.instance.stage;
        if(!db.stage) {
            console.error("传入了错误的显示容器->" + db);
            return;
        }
        stage.removeChild(db);
    }
    //获取显示节点
    public static getDisplayObjContainerByName(dbName: string): any {
        var stage = egret.MainContext.instance.stage;
        var db: any = stage.getChildByName(dbName);
        if(!db) return;
        return db;
    }
}

//存档
class DataStore {
    //读取链接数据
    public static getLinkData(name: string) {
        if(PlatUntils.isNative()) return;
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
        var r = window.location.search.substr(1).match(reg);
        if(r != null) return (r[2]); return null;
    }
    //写入数据
    public static writeLocalData(key: string,value: any) {
        egret.localStorage.setItem(key,value);
    }
    //读取数据
    public static readLocalData(key: string,defaultValue?: string): string {
        if(defaultValue == undefined || defaultValue == null) defaultValue = "";
        var value = egret.localStorage.getItem(key);
        return (value == "" || value == undefined || value == null) ? defaultValue : value;
    }
}

