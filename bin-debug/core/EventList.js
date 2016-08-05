var core;
(function (core) {
    //监听数据基础类
    var EventSturctBase = (function () {
        function EventSturctBase(name) {
            this.EventName = name;
        }
        var d = __define,c=EventSturctBase,p=c.prototype;
        return EventSturctBase;
    }());
    core.EventSturctBase = EventSturctBase;
    egret.registerClass(EventSturctBase,'core.EventSturctBase');
    //具体的数据结构
    var EntryLayout_RunGame = (function (_super) {
        __extends(EntryLayout_RunGame, _super);
        function EntryLayout_RunGame(name, data) {
            _super.call(this, name);
            this.EventData = data;
        }
        var d = __define,c=EntryLayout_RunGame,p=c.prototype;
        p.getData = function () {
            return this.EventData;
        };
        return EntryLayout_RunGame;
    }(EventSturctBase));
    core.EntryLayout_RunGame = EntryLayout_RunGame;
    egret.registerClass(EntryLayout_RunGame,'core.EntryLayout_RunGame');
    //监听的列表
    var dtEvent = (function () {
        function dtEvent() {
        }
        var d = __define,c=dtEvent,p=c.prototype;
        dtEvent.LoginSuccess = "Event_Login_Success";
        dtEvent.RunGame = { eventName: "Event_Run_Game", eventMethod: EntryLayout_RunGame };
        return dtEvent;
    }());
    core.dtEvent = dtEvent;
    egret.registerClass(dtEvent,'core.dtEvent');
})(core || (core = {}));
