module core {
    /**
     * @监听中心
     * EventList中定义具体的事件及其结构
     * 实用前需要进行初始化--EventManager.init();
     * addEventListener     增加一个事件监听
     * removeEventListener  移除一个事件监听
     * dispatchEvent        执行事件
     * */
    //基础结构
    export interface EventSturct {
        eventName: string;
        eventClass: any;
    }
    export class EventManager {
        private static DOC: egret.DisplayObjectContainer;
        //接口 init
        public static init() {
            EventManager.DOC = new EventLayout();
        }
        //接口 addEventListener
        public static addEventListener(type: EventSturct,listener: Function,target: any):void;
        public static addEventListener(type: string,listener: Function,target: any): void;
        public static addEventListener(type: any,listener: Function,target: any) {
            if(typeof type == "string"){
                EventManager.DOC.addEventListener(type,listener,target);
                return;
            }
            EventManager.DOC.addEventListener(type.eventName,listener,target);
        }
        //接口 removeEventListener
        public static removeEventListener(type: EventSturct,listener: Function,target: any): void;
        public static removeEventListener(type: string,listener: Function,target: any): void;
        public static removeEventListener(type: any,listener: Function,target: any) {
            if(typeof type == "string") {
                EventManager.DOC.removeEventListener(type,listener,target);
                return;
            }
            EventManager.DOC.removeEventListener(type.eventName,listener,target);
        }
        //接口 dispatchEvent
        public static dispatchEvent(type: EventSturct,data?: any):void;
        public static dispatchEvent(type: string,data?: any):void;
        public static dispatchEvent(type: any,data?: any) {
            if(typeof type == "string") {
                var daterEvent: EventBase = new EventBase(type);
                if(data){
                    daterEvent.setData(data);
                }
                EventManager.DOC.dispatchEvent(daterEvent);
                return;
            }
            var daterEvent: EventBase = new EventBase(type.eventName);
            daterEvent.setData(new type.eventMethod(type.eventName,data));
            EventManager.DOC.dispatchEvent(daterEvent);
        }
        //接口 hasEventListener
        public static hasEventListener(type:EventSturct){
            EventManager.DOC.hasEventListener(type.eventName);
        }
    }
    //监听基础
    export class EventBase extends egret.Event {
        private EventData: any;
        public constructor(type: string,data?: any) {
            super(type);
        }
        public setData (data:any) {
            this.EventData = data;
        }
        public getData (){
            return this.EventData;
        }
    }
    //监听添加的公用显示容器
    export class EventLayout extends egret.DisplayObjectContainer{
        public constructor(){
            super();
            this.name = "EventLayout";
        }
    }
}
