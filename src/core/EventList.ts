module core {
    //监听对照列表
    export class dtEvent {
        public static LoginSuccess = "Event_Login_Success";
        public static RunGame: EventSturct = { eventName: "Event_Run_Game",eventClass: EntryLayout_RunGame };
    }
    //基础类
    export class EventSturctBase {
        public EventName: string;
        public EventData: any;
        public constructor(name: string) {
            this.EventName = name;
        }
        public setData (data) {
            this.EventData = data;
        }
        public getData() {
            return this.EventData;
        }
    }
    //实用类
    export class EntryLayout_RunGame extends EventSturctBase {
        public constructor(name: string,data: any) {
            super(name);
            this.setData(data);
        }
    }
}
