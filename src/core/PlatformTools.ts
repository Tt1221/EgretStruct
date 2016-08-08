/**
 * Create By Tt. 2016/7/22
 * */
/**
 * 异步加载图片资源
 * */
class AsyncRes {
    public static getRes(item: eui.Image,url: string) {
        RES.getResAsync(url,function(pTexture,pUrl) {
            item.source = pTexture;
        },this);
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
    //添加显示节点
    public static popDisplayObjectContainer(db: any) {
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

//字典结构 一个key 一个数据
class Dictionary {
    private dataStore : Array<any>;
    public constructor(){
        this.dataStore = new Array();
    }
    public add (key,value) {
        this.dataStore[key] = value;
    }
    public find (key){
        return this.dataStore[key];        
    }
    public remove (key){
        delete this.dataStore[key];
    }
    public showAll (){
        for(var idx in this.dataStore){
            console.log(idx + "->" + this.dataStore[idx]);
        }
    }
    public count ():number{
        var num = 0;
        for(var key in Object.keys(this.dataStore)){
            ++num;
        }
        return num;
    }
    public clear (){
        for(var idx in this.dataStore){
            delete this.dataStore[idx];
        }
    }
}

//数据的克隆
class DataClone {
    public static clone (data){
        var cloeData = data instanceof Array ? [] : {};
        for(var idx in data) {
            if(typeof data[idx] == "object") {
                cloeData[idx] = DataClone.clone(data[idx]);
            } else {
                cloeData[idx] = data[idx];
            }
        }
        return cloeData;
    }
}








