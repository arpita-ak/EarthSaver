
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
        _this.EnemyPrefab2 = null;
        _this.EnemyPrefab3 = null;
        _this.playerPrefab = null;
        _this.scoreDisplay = null;
        _this.highscoreDisplay = null;
        _this.lifeLineManager = null;
        _this.Music = null;
        _this.bgmAudio = null;
        _this.clickAudio = null;
        _this.score = 0;
        _this.highScore = 0;
        // LIFE-CYCLE CALLBACKS:
        _this.currentPlayerScript = null;
        return _this;
    }
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
        this.currentPlayerScript = newPlayer.getComponent(PlayerController_1.PlayerController);
        this.currentPlayerScript.weaponParent = this.node.getChildByName("weapon");
        this.currentPlayerScript.game = this;
        // generate 2 enemies every second
        this.schedule(this.spawnNewRound, 0.5, cc.macro.REPEAT_FOREVER, 0);
        // start music
        cc.audioEngine.playMusic(this.bgmAudio, true);
        cc.audioEngine.playEffect(this.clickAudio, false);
        this.onVolumeToggleClicked();
    };
    MainScript.prototype.spawnNewRound = function () {
        var newRound = cc.instantiate(this.EnemyPrefab);
        var enemyControllerScript = newRound.getComponent('EnemyController1');
        // different enemy who needs 3 fire to die
        if (this.score % 5 == 0 && this.score != 0) {
            newRound = cc.instantiate(this.EnemyPrefab2);
            enemyControllerScript = newRound.getComponent('EnemyController2');
        }
        // different enemy who needs 5 fire to die AND EXPANDS
        if (this.score % 5 == 0 && this.score > 30) {
            newRound = cc.instantiate(this.EnemyPrefab3);
            enemyControllerScript = newRound.getComponent('EnemyController3');
        }
        this.node.getChildByName("enemies").addChild(newRound);
        newRound.setPosition(this.getNewEnemyPosition());
        enemyControllerScript.game = this;
        enemyControllerScript.deltaRotation = Math.random();
    };
    MainScript.prototype.gainScore = function (value) {
        var _this = this;
        // Update the words of the scoreDisplay Label
        this.score += value;
        this.scoreDisplay.string = this.score.toString();
        this.restartScreen.getChildByName("Score_value").getComponent(cc.Label).string = this.score.toString();
        // protection for 5 seconds when you destroy enemy 3
        if (value == 5) {
            this.currentPlayerScript.EnableCollisionManager(false, true);
            cc.tween(this.currentPlayerScript.node.children[0]).to(5, ({ opacity: 0 })).start();
            this.scheduleOnce(function () { _this.currentPlayerScript.EnableCollisionManager(true, false); }, 5);
        }
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
            this.currentPlayerScript = newPlayer.getComponent(PlayerController_1.PlayerController);
            this.currentPlayerScript.weaponParent = this.node.getChildByName("weapon");
            this.currentPlayerScript.game = this;
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
    ], MainScript.prototype, "EnemyPrefab2", void 0);
    __decorate([
        property(cc.Prefab)
    ], MainScript.prototype, "EnemyPrefab3", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUFnRDtBQUNoRCx1REFBc0Q7QUFFaEQsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUkxQztJQUF3Qyw4QkFBWTtJQUZwRDtRQUFBLHFFQWdNQztRQTNMRyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixrQkFBWSxHQUFlLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFHbEMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBR3hDLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0Qix3QkFBd0I7UUFDeEIseUJBQW1CLEdBQXFCLElBQUksQ0FBQzs7SUFvSmpELENBQUM7SUFsSkcsMkJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxH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Q0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNZO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1k7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNlO0lBR2xDO1FBREMsUUFBUSxDQUFDLHlCQUFlLENBQUM7dURBQ2M7SUFHeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7Z0RBQ0Q7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO2tEQUNDO0lBcENmLFVBQVU7UUFGOUIsT0FBTztPQUVhLFVBQVUsQ0E4TDlCO0lBQUQsaUJBQUM7Q0E5TEQsQUE4TEMsQ0E5THVDLEVBQUUsQ0FBQyxTQUFTLEdBOExuRDtrQkE5TG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgTGlmZUxpbmVNYW5hZ2VyIGZyb20gXCIuL0xpZmVMaW5lTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJDb250cm9sbGVyIH0gZnJvbSBcIi4vUGxheWVyQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblNjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdGFydFNjcmVlbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByZXN0YXJ0U2NyZWVuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgRW5lbXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEVuZW15UHJlZmFiMjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgRW5lbXlQcmVmYWIzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwbGF5ZXJQcmVmYWIgOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlRGlzcGxheTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGhpZ2hzY29yZURpc3BsYXk6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTGlmZUxpbmVNYW5hZ2VyKVxyXG4gICAgbGlmZUxpbmVNYW5hZ2VyOiBMaWZlTGluZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXHJcbiAgICBNdXNpYzogY2MuVG9nZ2xlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBiZ21BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBjbGlja0F1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgaGlnaFNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgY3VycmVudFBsYXllclNjcmlwdDogUGxheWVyQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkICgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuaGlnaFNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5zdGFydFNjcmVlbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIE9uU3RhcnRDbGljaygpIC8vIG9yIHJlc3RhcnRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXJ0U2NyZWVuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVzdGFydFNjcmVlbi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy91cGRhdGUgbGlmZSBsaW5lcyBcclxuICAgICAgICB0aGlzLmxpZmVMaW5lTWFuYWdlci5yZXN0YXJ0KCk7XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIHNjb3JlIGFuZCBoaWdoc2NvcmVcclxuICAgICAgICBpZiAodGhpcy5zY29yZSA+IHRoaXMuaGlnaFNjb3JlKVxyXG4gICAgICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5oaWdoc2NvcmVEaXNwbGF5LnN0cmluZyA9IHRoaXMuaGlnaFNjb3JlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIGdlbmVyYXRlIHBsYXllclxyXG4gICAgICAgIGxldCBuZXdQbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXllclByZWZhYilcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJcIikuYWRkQ2hpbGQobmV3UGxheWVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyU2NyaXB0ID0gbmV3UGxheWVyLmdldENvbXBvbmVudChQbGF5ZXJDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQud2VhcG9uUGFyZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid2VhcG9uXCIpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllclNjcmlwdC5nYW1lID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gZ2VuZXJhdGUgMiBlbmVtaWVzIGV2ZXJ5IHNlY29uZFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5zcGF3bk5ld1JvdW5kLCAwLjUsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAwKTtcclxuXHJcbiAgICAgICAgLy8gc3RhcnQgbXVzaWNcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ21BdWRpbywgdHJ1ZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaWNrQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm9uVm9sdW1lVG9nZ2xlQ2xpY2tlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bk5ld1JvdW5kKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbmV3Um91bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkVuZW15UHJlZmFiKTtcclxuICAgICAgICBsZXQgZW5lbXlDb250cm9sbGVyU2NyaXB0ID0gbmV3Um91bmQuZ2V0Q29tcG9uZW50KCdFbmVteUNvbnRyb2xsZXIxJylcclxuXHJcbiAgICAgICAgLy8gZGlmZmVyZW50IGVuZW15IHdobyBuZWVkcyAzIGZpcmUgdG8gZGllXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUlNSA9PSAwICYmIHRoaXMuc2NvcmUgIT0gMCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXdSb3VuZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuRW5lbXlQcmVmYWIyKTtcclxuICAgICAgICAgICAgZW5lbXlDb250cm9sbGVyU2NyaXB0ID0gbmV3Um91bmQuZ2V0Q29tcG9uZW50KCdFbmVteUNvbnRyb2xsZXIyJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRpZmZlcmVudCBlbmVteSB3aG8gbmVlZHMgNSBmaXJlIHRvIGRpZSBBTkQgRVhQQU5EU1xyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlJTUgPT0gMCAmJiB0aGlzLnNjb3JlID4gMzApIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3Um91bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkVuZW15UHJlZmFiMyk7XHJcbiAgICAgICAgICAgIGVuZW15Q29udHJvbGxlclNjcmlwdCA9IG5ld1JvdW5kLmdldENvbXBvbmVudCgnRW5lbXlDb250cm9sbGVyMycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJlbmVtaWVzXCIpLmFkZENoaWxkKG5ld1JvdW5kKTtcclxuICAgICAgICBuZXdSb3VuZC5zZXRQb3NpdGlvbih0aGlzLmdldE5ld0VuZW15UG9zaXRpb24oKSk7IFxyXG5cclxuICAgICAgICBlbmVteUNvbnRyb2xsZXJTY3JpcHQuZ2FtZSA9IHRoaXM7XHJcbiAgICAgICAgZW5lbXlDb250cm9sbGVyU2NyaXB0LmRlbHRhUm90YXRpb24gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhaW5TY29yZSh2YWx1ZTogbnVtYmVyKSBcclxuICAgIHtcclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHdvcmRzIG9mIHRoZSBzY29yZURpc3BsYXkgTGFiZWxcclxuICAgICAgICB0aGlzLnNjb3JlICs9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uZ2V0Q2hpbGRCeU5hbWUoXCJTY29yZV92YWx1ZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gcHJvdGVjdGlvbiBmb3IgNSBzZWNvbmRzIHdoZW4geW91IGRlc3Ryb3kgZW5lbXkgM1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSA1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyU2NyaXB0LkVuYWJsZUNvbGxpc2lvbk1hbmFnZXIoZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQubm9kZS5jaGlsZHJlblswXSkudG8oNSwgKHtvcGFjaXR5OjB9KSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9Pnt0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQuRW5hYmxlQ29sbGlzaW9uTWFuYWdlcih0cnVlLCBmYWxzZSl9LCA1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV3RW5lbXlQb3NpdGlvbigpIFxyXG4gICAge1xyXG4gICAgICAgIHZhciByYW5kWCA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLnJhbmRvbSgpICoyKiAodGhpcy5ub2RlLndpZHRoLzIgLSAyMCktMjUwO1xyXG4gICAgICAgIHZhciByYW5kWSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLnJhbmRvbSgpICo1KiAodGhpcy5ub2RlLmhlaWdodC8yIC0gMjAwKSsgMjAwO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmFuZFgscmFuZFkpO1xyXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCwgcmFuZFkpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uUGxheWVyRGVhZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5saWZlTGluZU1hbmFnZXIuRGVjcmVhc2VMaWZlTGluZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saWZlTGluZU1hbmFnZXIuQ3VycmVudExpZmVsaW5lcyA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gcmVzdGFydCBcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc3Bhd25OZXdSb3VuZCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImVuZW1pZXNcIikuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBsYXllclwiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydFNjcmVlbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uZ2V0Q2hpbGRCeU5hbWUoXCJTY29yZV92YWx1ZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0U2NyZWVuLmdldENoaWxkQnlOYW1lKFwiaGlnaFNjb3JlX3ZhbHVlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5oaWdoU2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NvbnRpbnVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBwbGF5ZXIgIFxyXG4gICAgICAgICAgICBsZXQgbmV3UGxheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJQcmVmYWIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBsYXllclwiKS5hZGRDaGlsZChuZXdQbGF5ZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyU2NyaXB0ID0gbmV3UGxheWVyLmdldENvbXBvbmVudChQbGF5ZXJDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyU2NyaXB0LndlYXBvblBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndlYXBvblwiKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyU2NyaXB0LmdhbWUgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSBcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkgXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uVm9sdW1lVG9nZ2xlQ2xpY2tlZCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuTXVzaWMuaXNDaGVja2VkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSgwKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoMC4xKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=