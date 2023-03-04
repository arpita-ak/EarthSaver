
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '584aeON8yBKVoOleimUpAHm', 'MainScript');
// Script/MainScript.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LifeLineManager_1 = require("./LifeLineManager");
var PlayerController_1 = require("./PlayerController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startScreen = null;
        _this.restartScreen = null;
        _this.EnemyPrefab = null;
        _this.playerPrefab = null;
        _this.scoreDisplay = null;
        _this.highscoreDisplay = null;
        _this.lifeLineManager = null;
        _this.Music = null;
        _this.bgmAudio = null;
        _this.clickAudio = null;
        _this.score = 0;
        _this.highScore = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    MainScript.prototype.onLoad = function () {
        this.score = 0;
        this.highScore = 0;
        this.scoreDisplay.string = '0';
        this.startScreen.active = true;
    };
    MainScript.prototype.OnStartClick = function () {
        this.startScreen.active = false;
        this.restartScreen.active = false;
        //update life lines 
        this.lifeLineManager.restart();
        //update score and highscore
        if (this.score > this.highScore)
            this.highScore = this.score;
        this.score = 0;
        this.scoreDisplay.string = this.score.toString();
        this.highscoreDisplay.string = this.highScore.toString();
        // generate player
        var newPlayer = cc.instantiate(this.playerPrefab);
        this.node.getChildByName("player").addChild(newPlayer);
        var playerControllerScript = newPlayer.getComponent(PlayerController_1.PlayerController);
        playerControllerScript.weaponParent = this.node.getChildByName("weapon");
        playerControllerScript.game = this;
        // generate 2 enemies every second
        this.schedule(this.spawnNewRound, 0.5, cc.macro.REPEAT_FOREVER, 0);
        // start music
        cc.audioEngine.playMusic(this.bgmAudio, true);
        cc.audioEngine.playEffect(this.clickAudio, false);
        this.onVolumeToggleClicked();
    };
    MainScript.prototype.spawnNewRound = function () {
        var newRound = cc.instantiate(this.EnemyPrefab);
        this.node.getChildByName("enemies").addChild(newRound);
        newRound.setPosition(this.getNewEnemyPosition());
        var enemyControllerScript = newRound.getComponent('EnemyController1');
        enemyControllerScript.game = this;
        enemyControllerScript.deltaRotation = Math.random();
    };
    MainScript.prototype.gainScore = function () {
        // Update the words of the scoreDisplay Label
        this.score += 1;
        this.scoreDisplay.string = this.score.toString();
        this.restartScreen.getChildByName("Score_value").getComponent(cc.Label).string = this.score.toString();
    };
    MainScript.prototype.getNewEnemyPosition = function () {
        var randX = Math.random() * Math.random() * 2 * (this.node.width / 2 - 20) - 250;
        var randY = Math.random() * Math.random() * 5 * (this.node.height / 2 - 200) + 200;
        //console.log(randX,randY);
        return cc.v2(randX, randY);
    };
    MainScript.prototype.OnPlayerDead = function () {
        this.lifeLineManager.DecreaseLifeLine();
        if (this.lifeLineManager.CurrentLifelines == 0) {
            // restart 
            this.unschedule(this.spawnNewRound);
            this.node.getChildByName("enemies").destroyAllChildren();
            this.node.getChildByName("player").destroyAllChildren();
            this.restartScreen.active = true;
            this.restartScreen.getChildByName("Score_value").getComponent(cc.Label).string = this.score.toString();
            this.restartScreen.getChildByName("highScore_value").getComponent(cc.Label).string = this.highScore.toString();
            cc.audioEngine.stopMusic();
        }
        else {
            //continue
            // generate player  
            var newPlayer = cc.instantiate(this.playerPrefab);
            this.node.getChildByName("player").addChild(newPlayer);
            var playerControllerScript = newPlayer.getComponent(PlayerController_1.PlayerController);
            playerControllerScript.weaponParent = this.node.getChildByName("weapon");
            playerControllerScript.game = this;
        }
    };
    MainScript.prototype.start = function () {
    };
    MainScript.prototype.update = function (dt) {
    };
    MainScript.prototype.onVolumeToggleClicked = function () {
        if (this.Music.isChecked) {
            cc.audioEngine.setEffectsVolume(0);
            cc.audioEngine.setMusicVolume(0);
        }
        else {
            cc.audioEngine.setEffectsVolume(0.1);
            cc.audioEngine.setMusicVolume(1);
        }
    };
    __decorate([
        property(cc.Node)
    ], MainScript.prototype, "startScreen", void 0);
    __decorate([
        property(cc.Node)
    ], MainScript.prototype, "restartScreen", void 0);
    __decorate([
        property(cc.Prefab)
    ], MainScript.prototype, "EnemyPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], MainScript.prototype, "playerPrefab", void 0);
    __decorate([
        property(cc.Label)
    ], MainScript.prototype, "scoreDisplay", void 0);
    __decorate([
        property(cc.Label)
    ], MainScript.prototype, "highscoreDisplay", void 0);
    __decorate([
        property(LifeLineManager_1.default)
    ], MainScript.prototype, "lifeLineManager", void 0);
    __decorate([
        property(cc.Toggle)
    ], MainScript.prototype, "Music", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], MainScript.prototype, "bgmAudio", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], MainScript.prototype, "clickAudio", void 0);
    MainScript = __decorate([
        ccclass
    ], MainScript);
    return MainScript;
}(cc.Component));
exports.default = MainScript;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUFnRDtBQUNoRCx1REFBc0Q7QUFFaEQsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUkxQztJQUF3Qyw4QkFBWTtJQUZwRDtRQUFBLHFFQWtLQztRQTdKRyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFlLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFHbEMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBR3hDLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUErSDFCLENBQUM7SUE3SEcsd0JBQXdCO0lBRXhCLDJCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFFSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENB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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1k7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNlO0lBR2xDO1FBREMsUUFBUSxDQUFDLHlCQUFlLENBQUM7dURBQ2M7SUFHeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7Z0RBQ0Q7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO2tEQUNDO0lBOUJmLFVBQVU7UUFGOUIsT0FBTztPQUVhLFVBQVUsQ0FnSzlCO0lBQUQsaUJBQUM7Q0FoS0QsQUFnS0MsQ0FoS3VDLEVBQUUsQ0FBQyxTQUFTLEdBZ0tuRDtrQkFoS29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgTGlmZUxpbmVNYW5hZ2VyIGZyb20gXCIuL0xpZmVMaW5lTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJDb250cm9sbGVyIH0gZnJvbSBcIi4vUGxheWVyQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblNjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdGFydFNjcmVlbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByZXN0YXJ0U2NyZWVuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgRW5lbXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBsYXllclByZWZhYiA6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmVEaXNwbGF5OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaGlnaHNjb3JlRGlzcGxheTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShMaWZlTGluZU1hbmFnZXIpXHJcbiAgICBsaWZlTGluZU1hbmFnZXI6IExpZmVMaW5lTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcclxuICAgIE11c2ljOiBjYy5Ub2dnbGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuQXVkaW9DbGlwfSlcclxuICAgIGJnbUF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuQXVkaW9DbGlwfSlcclxuICAgIGNsaWNrQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgc2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBoaWdoU2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuaGlnaFNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5zdGFydFNjcmVlbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIE9uU3RhcnRDbGljaygpIC8vIG9yIHJlc3RhcnRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXJ0U2NyZWVuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVzdGFydFNjcmVlbi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy91cGRhdGUgbGlmZSBsaW5lcyBcclxuICAgICAgICB0aGlzLmxpZmVMaW5lTWFuYWdlci5yZXN0YXJ0KCk7XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIHNjb3JlIGFuZCBoaWdoc2NvcmVcclxuICAgICAgICBpZiAodGhpcy5zY29yZSA+IHRoaXMuaGlnaFNjb3JlKVxyXG4gICAgICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5oaWdoc2NvcmVEaXNwbGF5LnN0cmluZyA9IHRoaXMuaGlnaFNjb3JlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIGdlbmVyYXRlIHBsYXllclxyXG4gICAgICAgIGxldCBuZXdQbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXllclByZWZhYilcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJcIikuYWRkQ2hpbGQobmV3UGxheWVyKTtcclxuXHJcbiAgICAgICAgbGV0IHBsYXllckNvbnRyb2xsZXJTY3JpcHQgPSBuZXdQbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllckNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHBsYXllckNvbnRyb2xsZXJTY3JpcHQud2VhcG9uUGFyZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid2VhcG9uXCIpO1xyXG4gICAgICAgIHBsYXllckNvbnRyb2xsZXJTY3JpcHQuZ2FtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGdlbmVyYXRlIDIgZW5lbWllcyBldmVyeSBzZWNvbmRcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd25OZXdSb3VuZCwgMC41LCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMCk7XHJcblxyXG4gICAgICAgIC8vIHN0YXJ0IG11c2ljXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtQXVkaW8sIHRydWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbGlja0F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5vblZvbHVtZVRvZ2dsZUNsaWNrZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25OZXdSb3VuZCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5ld1JvdW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy5FbmVteVByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZW5lbWllc1wiKS5hZGRDaGlsZChuZXdSb3VuZCk7XHJcbiAgICAgICAgbmV3Um91bmQuc2V0UG9zaXRpb24odGhpcy5nZXROZXdFbmVteVBvc2l0aW9uKCkpOyBcclxuXHJcbiAgICAgICAgbGV0IGVuZW15Q29udHJvbGxlclNjcmlwdCA9IG5ld1JvdW5kLmdldENvbXBvbmVudCgnRW5lbXlDb250cm9sbGVyMScpXHJcbiAgICAgICAgZW5lbXlDb250cm9sbGVyU2NyaXB0LmdhbWUgPSB0aGlzO1xyXG4gICAgICAgIGVuZW15Q29udHJvbGxlclNjcmlwdC5kZWx0YVJvdGF0aW9uID0gTWF0aC5yYW5kb20oKTtcclxuICAgIH1cclxuXHJcbiAgICBnYWluU2NvcmUoKSBcclxuICAgIHtcclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHdvcmRzIG9mIHRoZSBzY29yZURpc3BsYXkgTGFiZWxcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMucmVzdGFydFNjcmVlbi5nZXRDaGlsZEJ5TmFtZShcIlNjb3JlX3ZhbHVlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld0VuZW15UG9zaXRpb24oKSBcclxuICAgIHtcclxuICAgICAgICB2YXIgcmFuZFggPSBNYXRoLnJhbmRvbSgpICogTWF0aC5yYW5kb20oKSAqMiogKHRoaXMubm9kZS53aWR0aC8yIC0gMjApLTI1MDtcclxuICAgICAgICB2YXIgcmFuZFkgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5yYW5kb20oKSAqNSogKHRoaXMubm9kZS5oZWlnaHQvMiAtIDIwMCkrIDIwMDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJhbmRYLHJhbmRZKTtcclxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKTtcclxuICAgIH1cclxuXHJcbiAgICBPblBsYXllckRlYWQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGlmZUxpbmVNYW5hZ2VyLkRlY3JlYXNlTGlmZUxpbmUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGlmZUxpbmVNYW5hZ2VyLkN1cnJlbnRMaWZlbGluZXMgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHJlc3RhcnQgXHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNwYXduTmV3Um91bmQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJlbmVtaWVzXCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0U2NyZWVuLmdldENoaWxkQnlOYW1lKFwiU2NvcmVfdmFsdWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydFNjcmVlbi5nZXRDaGlsZEJ5TmFtZShcImhpZ2hTY29yZV92YWx1ZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuaGlnaFNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb250aW51ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgcGxheWVyICBcclxuICAgICAgICAgICAgbGV0IG5ld1BsYXllciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGxheWVyUHJlZmFiKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJcIikuYWRkQ2hpbGQobmV3UGxheWVyKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXJDb250cm9sbGVyU2NyaXB0ID0gbmV3UGxheWVyLmdldENvbXBvbmVudChQbGF5ZXJDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgcGxheWVyQ29udHJvbGxlclNjcmlwdC53ZWFwb25QYXJlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3ZWFwb25cIik7XHJcbiAgICAgICAgICAgIHBsYXllckNvbnRyb2xsZXJTY3JpcHQuZ2FtZSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSBcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Wb2x1bWVUb2dnbGVDbGlja2VkKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5NdXNpYy5pc0NoZWNrZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKDApO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSgwLjEpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==