var dn;
(function (dn) {
    //游戏资源的路径等
    var Resource = (function () {
        function Resource() {
        }
        var d = __define,c=Resource,p=c.prototype;
        Resource.res_dt_res_json_prefix = "resource/";
        //        public static loading_thm = "resource/shsy.brnn.loading.thm.json";
        //        public static loading_res = "resource/shsy.brnn.loading.res.json";
        Resource.group_loading = "loading";
        Resource.game_thm = "resource/shsy.dn.thm.json";
        Resource.game_res = "resource/shsy.dn.res.json";
        Resource.group_game = "game";
        Resource.group_room = "room";
        Resource.group_config = "config";
        Resource.group_sound = "sound";
        Resource.group_fnt = "fnt";
        Resource.group_shop = "popShop";
        Resource.group_rank = "popRank";
        Resource.group_help = "popHelp";
        Resource.group_tips = "popTips";
        Resource.group_banker = "popBanker";
        Resource.group_history = "popHistory";
        return Resource;
    }());
    dn.Resource = Resource;
    egret.registerClass(Resource,'dn.Resource');
    var LocalKey = (function () {
        function LocalKey() {
        }
        var d = __define,c=LocalKey,p=c.prototype;
        LocalKey.music = "shsy.fknn.music";
        LocalKey.effect = "shsy.fknn.effect";
        return LocalKey;
    }());
    dn.LocalKey = LocalKey;
    egret.registerClass(LocalKey,'dn.LocalKey');
    //弹出框的文字信息
    var GameNoticWords = (function () {
        function GameNoticWords() {
        }
        var d = __define,c=GameNoticWords,p=c.prototype;
        GameNoticWords.Email_lingqu_str1 = "恭喜你获得";
        GameNoticWords.Email_lingqu_str2 = "!";
        GameNoticWords.Duty_wancheng_str = "好的，马上就去~";
        GameNoticWords.Duty_lingqu_str1 = "恭喜你获得";
        GameNoticWords.Duty_lingqu_str2 = "奖励!";
        GameNoticWords.Mall_Buy_str = "不足请前往充值";
        return GameNoticWords;
    }());
    dn.GameNoticWords = GameNoticWords;
    egret.registerClass(GameNoticWords,'dn.GameNoticWords');
    //游戏内用的关键提示字
    var GameWords = (function () {
        function GameWords() {
        }
        var d = __define,c=GameWords,p=c.prototype;
        GameWords.init = function (data) {
            //初始化数据
            if (!data) {
                GameWords.Coin = new GameWordsObj("金币", "resource/");
                GameWords.Diamond = new GameWordsObj("钻石", "resource/");
            }
        };
        return GameWords;
    }());
    dn.GameWords = GameWords;
    egret.registerClass(GameWords,'dn.GameWords');
    //游戏内关键字及资源目标位置
    var GameWordsObj = (function () {
        function GameWordsObj(str, res1, res2, res3, res4, res5) {
            this.str = str;
            this.res1 = res1;
            this.res2 = res2;
            this.res3 = res3;
            this.res4 = res4;
            this.res5 = res5;
        }
        var d = __define,c=GameWordsObj,p=c.prototype;
        return GameWordsObj;
    }());
    dn.GameWordsObj = GameWordsObj;
    egret.registerClass(GameWordsObj,'dn.GameWordsObj');
})(dn || (dn = {}));
