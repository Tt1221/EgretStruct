module dt {
    /**
     * FIXWIDTH 屏幕适配方案
     * */
    export class ScreenEventBase {
        public callBack: Function;
        public target: any;
        public id: number;
        constructor(callBack,target) {
            this.callBack = callBack;
            this.target = target;
        }
        public setId(id) {
            this.id = id;
        }
    }
    export class ScreenAdaptation {
        public designWidth: number;//设计宽度
        public designHeight: number;//设计高度
        public viewWidth: number;//屏幕宽度
        public viewHeight: number;//屏幕高度
        public clientWidth: number;//客户端显示宽度
        public clientHeight: number;//客户端显示高度
        public timer: egret.Timer;
        public recordData: any;
        public eventList: Array<ScreenEventBase>;
        private isVerticalScreen: boolean;
        public constructor() {
            var self = this;
            self.eventId = 0;
            self.eventList = [];
            self.recordData = {};
            self.recordData.viewWidth = 0;
            self.recordData.viewHeight = 0;
            self.designWidth = 480;
            self.designHeight = 800;
            self.timer = new egret.Timer(30);
            self.timer.addEventListener(egret.TimerEvent.TIMER,self.auto,self);
            self.timer.start();
            self.isVerticalScreen = true;
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize",function() {
                if(window.orientation === 180 || window.orientation === 0) {
                    self.isVerticalScreen = true;
                }
                if(window.orientation === 90 || window.orientation === -90) {
                    self.isVerticalScreen = false;
                }
            },false);
        }
        private auto() {
            var stage = egret.MainContext.instance.stage;
            if(this.isVerticalScreen) {
                this.viewWidth = document.documentElement.clientWidth;
                this.viewHeight = document.documentElement.clientHeight;
            } else {
                this.viewWidth = document.documentElement.clientHeight;
                this.viewHeight = document.documentElement.clientWidth;
            }
            if(this.viewWidth / this.viewHeight > 0.7) {
                egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
            } else {
                egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
            }
            if(stage.scaleMode != egret.StageScaleMode.FIXED_WIDTH) return;
            this.clientWidth = this.viewWidth;
            this.clientHeight = this.viewWidth * this.designHeight / this.designWidth;
            if(this.recordData.viewWidth != this.viewWidth ||
                this.recordData.viewHeight != this.viewHeight ||
                this.recordData.eventStr != this.getEventListStr()
            ) {
                this.eventList.forEach(function(dt) {
                    dt.callBack.call(dt.target);
                })
            }
            this.recordData.viewWidth = this.viewWidth;
            this.recordData.viewHeight = this.viewHeight;
            this.recordData.eventStr = this.getEventListStr();
        }
        private getEventListStr() {
            var str = "";
            this.eventList.forEach(function(data) {
                str += "_" + data.id;
            })
            return str;
        }
        //--------------------
        //  接口
        //--------------------
        public eventId: number;
        public addEventListenerToAuto(e: ScreenEventBase): number {
            this.eventId++;
            e.setId(this.eventId);
            this.eventList.push(e);
            return e.id;
        }
        public removeEventListenerFromAuto(eId) {
            this.eventList = this.eventList.filter(function(data) {
                return data.id != eId;
            });
        }
        //获取黑边高度(需要位移值) +-值
        public getBlackPoint(): number {
            var blackViewHeigth = this.viewHeight - this.clientHeight;
            var blackHeigthPoint = blackViewHeigth * (800 / this.clientHeight);
            return Math.round(blackHeigthPoint * 10) / 10;
        }
        //获取界面缩小百分比
        public getScalePer(): number {
            var blackViewHeigth = this.viewHeight - this.clientHeight;
            var blackHeigthPoint = blackViewHeigth * (800 / this.clientHeight);
            var per = 1 + (blackHeigthPoint / 800);
            per = Math.round(per * 1000) / 1000;
            return per;
        }
        private static _ScreenAdaptation: ScreenAdaptation;
        public static getInstance() {
            if(!ScreenAdaptation._ScreenAdaptation) {
                ScreenAdaptation._ScreenAdaptation = new ScreenAdaptation();
            }
            return ScreenAdaptation._ScreenAdaptation;
        }
    }
    export function screenAdaptation() {
        return ScreenAdaptation.getInstance();
    }
}
