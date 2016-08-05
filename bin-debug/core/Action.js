var ImgAnimation = (function (_super) {
    __extends(ImgAnimation, _super);
    //构造函数
    function ImgAnimation(imgArr, isLoop) {
        _super.call(this);
        //添加一个timer达到修改图片的需求
        this.timer = new egret.Timer(100);
        //添加自动修改图片的监听
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.autoChangeImg, this);
        //给imgArray赋值 使用filter 防止因为imgArr的制空导致imgArray改变
        this.imgArray = imgArr.filter(function () { return true; });
        //初始化图片角标
        this.imgId = 0;
        //确认是否需要重复执行
        this.isLoop = isLoop ? true : false;
    }
    var d = __define,c=ImgAnimation,p=c.prototype;
    p.autoChangeImg = function () {
        if (this.imgArray.length == 0)
            return false;
        var url = this.imgArray[this.imgId];
        AsyncRes.getRes(this, url);
        this.imgId = this.imgId++ >= this.imgArray.length ? 0 : this.imgId++;
        //一个循环的结束
        if (this.imgId == 0) {
            if (this.isLoop)
                return true;
            this.clear();
            this.callBack.call(this.target, this.data ? this.data : null);
        }
        return true;
    };
    /**
     * 外部可调用的接口
     * */
    //开始循环
    p.play = function () {
        this.timer.start();
    };
    //停止动画
    p.stop = function () {
        this.timer.stop();
    };
    //移除动画
    p.clear = function () {
        this.timer.stop();
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.autoChangeImg, this);
        this.parent.removeChild(this);
    };
    //设置动画播放间隔速度
    p.setDelay = function (delay) {
        this.timer.delay = delay > 30 ? delay : 30;
    };
    //设置动画回调 回调中可进行一个数据的传输
    p.setCallBack = function (callBack, target, data) {
        this.callBack = callBack;
        this.target = target;
        if (data)
            this.data = data;
    };
    return ImgAnimation;
}(eui.Image));
egret.registerClass(ImgAnimation,'ImgAnimation');
//动画类
var Action = (function () {
    function Action() {
    }
    var d = __define,c=Action,p=c.prototype;
    //ImgArray 动画基础图片组  isloop动画是否循环播放
    Action.getImgAnimation = function (ImgArray, isLoop) {
        var ani = new ImgAnimation(ImgArray);
        return ani;
    };
    return Action;
}());
egret.registerClass(Action,'Action');
