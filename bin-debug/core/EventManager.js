var core;
(function (core) {
    /**
     * @监听中心
     * EventList中定义具体的事件及其结构
     * addEventListener     增加一个事件监听
     * removeEventListener  移除一个事件监听
     * dispatchEvent        执行事件
     * */
    var EventManager = (function () {
        function EventManager() {
        }
        var d = __define,c=EventManager,p=c.prototype;
        //接口 init
        EventManager.init = function () {
            EventManager.DOC = new EventLayout();
        };
        EventManager.addEventListener = function (type, listener, target) {
            if (typeof type == "string") {
                EventManager.DOC.addEventListener(type, listener, target);
                return;
            }
            EventManager.DOC.addEventListener(type.eventName, listener, target);
        };
        EventManager.removeEventListener = function (type, listener, target) {
            if (typeof type == "string") {
                EventManager.DOC.removeEventListener(type, listener, target);
                return;
            }
            EventManager.DOC.removeEventListener(type.eventName, listener, target);
        };
        EventManager.dispatchEvent = function (type, data) {
            if (typeof type == "string") {
                var daterEvent = new EventBase(type);
                if (data) {
                    daterEvent.setData(data);
                }
                EventManager.DOC.dispatchEvent(daterEvent);
                return;
            }
            var daterEvent = new EventBase(type.eventName);
            daterEvent.setData(new type.eventMethod(type.eventName, data));
            EventManager.DOC.dispatchEvent(daterEvent);
        };
        //接口 hasEventListener
        EventManager.hasEventListener = function (type) {
            EventManager.DOC.hasEventListener(type.eventName);
        };
        return EventManager;
    }());
    core.EventManager = EventManager;
    egret.registerClass(EventManager,'core.EventManager');
    //监听基础
    var EventBase = (function (_super) {
        __extends(EventBase, _super);
        function EventBase(type, data) {
            _super.call(this, type);
        }
        var d = __define,c=EventBase,p=c.prototype;
        p.setData = function (data) {
            this.EventData = data;
        };
        p.getData = function () {
            return this.EventData;
        };
        return EventBase;
    }(egret.Event));
    core.EventBase = EventBase;
    egret.registerClass(EventBase,'core.EventBase');
    //监听添加的公用显示容器
    var EventLayout = (function (_super) {
        __extends(EventLayout, _super);
        function EventLayout() {
            _super.call(this);
            this.name = "EventLayout";
        }
        var d = __define,c=EventLayout,p=c.prototype;
        return EventLayout;
    }(egret.DisplayObjectContainer));
    core.EventLayout = EventLayout;
    egret.registerClass(EventLayout,'core.EventLayout');
})(core || (core = {}));
