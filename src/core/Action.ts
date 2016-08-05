class ImgAnimation extends eui.Image{
    //图像数据
    private imgArray : Array<string>;
    //动画完成的回调
    private callBack: Function;
    //回调执行对象
    private target: any;
    //传输一个数据
    private data : any;
    //自循环计时器
    private timer   : egret.Timer;
    //当前图片角标
    private imgId : number;
    //是否循环
    private isLoop : boolean;
    //构造函数
    constructor (imgArr : Array<string>,isLoop?:boolean){
        super();
        //添加一个timer达到修改图片的需求
        this.timer = new egret.Timer(100);
        //添加自动修改图片的监听
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.autoChangeImg,this);
        //给imgArray赋值 使用filter 防止因为imgArr的制空导致imgArray改变
        this.imgArray = imgArr.filter(function(){return true});
        //初始化图片角标
        this.imgId = 0;
        //确认是否需要重复执行
        this.isLoop = isLoop ? true : false;
    }
    private autoChangeImg () {
        if(this.imgArray.length == 0)return false;
        var url = this.imgArray[this.imgId];
        AsyncRes.getRes(this,url);        
        this.imgId = this.imgId++ >= this.imgArray.length -1? 0 : this.imgId++;
        //一个循环的结束
        if(this.imgId == 0 ){
            if(this.isLoop)return true;
            this.clear();
            this.callBack.call(this.target,this.data?this.data:null);
        }
        return true;
    }
    /**
     * 外部可调用的接口
     * */
    //开始循环
    public play(){
        this.timer.start();
    }
    //停止动画
    public stop(){
        this.timer.stop();
    }
    //移除动画
    public clear(){
        this.timer.stop();
        this.timer.removeEventListener(egret.TimerEvent.TIMER,this.autoChangeImg,this);
        this.parent.removeChild(this);        
    }
    //设置动画播放间隔速度
    public setDelay(delay: number) {
        this.timer.delay = delay > 30 ? delay : 30;
    }
    //设置动画回调 回调中可进行一个数据的传输
    public setCallBack (callBack:Function,target:any,data?:any) {
        this.callBack = callBack;
        this.target = target;
        if(data)this.data = data;
    }
}
//动画类
class Action {
    //ImgArray 动画基础图片组  isloop动画是否循环播放
    public static getImgAnimation(ImgArray : Array<string>,isLoop?:boolean){
        var ani = new ImgAnimation(ImgArray,isLoop);
        return ani;
    }
}
