
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
        _this.canvas = null;
        _this.startScreen = null;
        _this.restartScreen = null;
        _this.EnemyPrefab = [];
        _this.playerPrefab = null;
        _this.weaponPrefab = [];
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
        this.schedule(this.spawnNewRound, 10, cc.macro.REPEAT_FOREVER, 0);
        // start music
        cc.audioEngine.playMusic(this.bgmAudio, true);
        cc.audioEngine.playEffect(this.clickAudio, false);
        this.onVolumeToggleClicked();
    };
    MainScript.prototype.spawnNewRound = function () {
        var newRound = cc.instantiate(this.EnemyPrefab[0]);
        var enemyControllerScript = newRound.getComponent('EnemyController1');
        // different enemy who needs 3 fire to die
        if (this.score % 5 == 0 && this.score != 0) {
            newRound = cc.instantiate(this.EnemyPrefab[1]);
            enemyControllerScript = newRound.getComponent('EnemyController2');
        }
        // different enemy who needs 5 fire to die AND EXPANDS
        if (this.score % 5 == 0 && this.score > 30) {
            newRound = cc.instantiate(this.EnemyPrefab[2]);
            enemyControllerScript = newRound.getComponent('EnemyController3');
        }
        // different enemy who needs 10 fire to die AND EXPANDS
        if (this.score % 3 == 0 && this.score > 20) {
            newRound = cc.instantiate(this.EnemyPrefab[3]);
            enemyControllerScript = newRound.getComponent('EnemyController4');
        }
        // different enemy who needs 15 fire to die who fades
        if (this.score % 4 == 0 && this.score > 0) {
            newRound = cc.instantiate(this.EnemyPrefab[4]);
            enemyControllerScript = newRound.getComponent('EnemyController5');
        }
        // Enemy 6 who needs 50 fire to die and who fires enemy 1
        if (this.score == 0) {
            newRound = cc.instantiate(this.EnemyPrefab[6]);
            enemyControllerScript = newRound.getComponent('EnemyController7');
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
            this.currentPlayerScript.node.children[0].color = cc.Color.BLUE;
            cc.tween(this.currentPlayerScript.node.children[0]).to(5, ({ opacity: 0 })).start();
            this.scheduleOnce(function () { _this.currentPlayerScript.EnableCollisionManager(true, false); }, 10);
        }
        if (value == 3) {
            this.currentPlayerScript.weapon1 = this.weaponPrefab[1];
            this.scheduleOnce(function () { _this.currentPlayerScript.weapon1 = _this.weaponPrefab[0]; }, 10);
        }
        if (value == 10) {
            this.currentPlayerScript.weapon1 = this.weaponPrefab[2];
            this.scheduleOnce(function () { _this.currentPlayerScript.weapon1 = _this.weaponPrefab[0]; }, 10);
        }
    };
    MainScript.prototype.getNewEnemyPosition = function () {
        var randX = (Math.random() - Math.random()) * (this.canvas.width / 2);
        var randY = (Math.random()) * (this.canvas.height / 2);
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
    ], MainScript.prototype, "canvas", void 0);
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
        property(cc.Prefab)
    ], MainScript.prototype, "weaponPrefab", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUFnRDtBQUNoRCx1REFBc0Q7QUFFaEQsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUkxQztJQUF3Qyw4QkFBWTtJQUZwRDtRQUFBLHFFQWtPQztRQTdORyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLGlCQUFXLEdBQWdCLEVBQUUsQ0FBQztRQUc5QixrQkFBWSxHQUFlLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFnQixFQUFFLENBQUM7UUFHL0Isa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBR2xDLHFCQUFlLEdBQW9CLElBQUksQ0FBQztRQUd4QyxXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRzlCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFFdEIsd0JBQXdCO1FBQ3hCLHlCQUFtQixHQUFxQixJQUFJLENBQUM7O0lBc0xqRCxDQUFDO0lBcExHLDJCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0s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QyxDQWhPdUMsRUFBRSxDQUFDLFNBQVMsR0FnT25EO2tCQWhPb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBMaWZlTGluZU1hbmFnZXIgZnJvbSBcIi4vTGlmZUxpbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFBsYXllckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9QbGF5ZXJDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbnZhczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdGFydFNjcmVlbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByZXN0YXJ0U2NyZWVuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgRW5lbXlQcmVmYWI6IGNjLlByZWZhYltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBsYXllclByZWZhYiA6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHdlYXBvblByZWZhYjogY2MuUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZURpc3BsYXk6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBoaWdoc2NvcmVEaXNwbGF5OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KExpZmVMaW5lTWFuYWdlcilcclxuICAgIGxpZmVMaW5lTWFuYWdlcjogTGlmZUxpbmVNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxyXG4gICAgTXVzaWM6IGNjLlRvZ2dsZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmdtQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgY2xpY2tBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBzY29yZTogbnVtYmVyID0gMDtcclxuICAgIGhpZ2hTY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGN1cnJlbnRQbGF5ZXJTY3JpcHQ6IFBsYXllckNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCAoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJzAnO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTY3JlZW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBPblN0YXJ0Q2xpY2soKSAvLyBvciByZXN0YXJ0XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGFydFNjcmVlbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIGxpZmUgbGluZXMgXHJcbiAgICAgICAgdGhpcy5saWZlTGluZU1hbmFnZXIucmVzdGFydCgpO1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSBzY29yZSBhbmQgaGlnaHNjb3JlXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiB0aGlzLmhpZ2hTY29yZSlcclxuICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMuaGlnaHNjb3JlRGlzcGxheS5zdHJpbmcgPSB0aGlzLmhpZ2hTY29yZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBnZW5lcmF0ZSBwbGF5ZXJcclxuICAgICAgICBsZXQgbmV3UGxheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJQcmVmYWIpXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGxheWVyXCIpLmFkZENoaWxkKG5ld1BsYXllcik7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllclNjcmlwdCA9IG5ld1BsYXllci5nZXRDb21wb25lbnQoUGxheWVyQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyU2NyaXB0LndlYXBvblBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndlYXBvblwiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQuZ2FtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGdlbmVyYXRlIDIgZW5lbWllcyBldmVyeSBzZWNvbmRcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd25OZXdSb3VuZCwgMTAsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAwKTtcclxuXHJcbiAgICAgICAgLy8gc3RhcnQgbXVzaWNcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ21BdWRpbywgdHJ1ZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmNsaWNrQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm9uVm9sdW1lVG9nZ2xlQ2xpY2tlZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bk5ld1JvdW5kKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbmV3Um91bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkVuZW15UHJlZmFiWzBdKTtcclxuICAgICAgICBsZXQgZW5lbXlDb250cm9sbGVyU2NyaXB0ID0gbmV3Um91bmQuZ2V0Q29tcG9uZW50KCdFbmVteUNvbnRyb2xsZXIxJylcclxuXHJcbiAgICAgICAgLy8gZGlmZmVyZW50IGVuZW15IHdobyBuZWVkcyAzIGZpcmUgdG8gZGllXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUlNSA9PSAwICYmIHRoaXMuc2NvcmUgIT0gMCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXdSb3VuZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuRW5lbXlQcmVmYWJbMV0pO1xyXG4gICAgICAgICAgICBlbmVteUNvbnRyb2xsZXJTY3JpcHQgPSBuZXdSb3VuZC5nZXRDb21wb25lbnQoJ0VuZW15Q29udHJvbGxlcjInKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGlmZmVyZW50IGVuZW15IHdobyBuZWVkcyA1IGZpcmUgdG8gZGllIEFORCBFWFBBTkRTXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUlNSA9PSAwICYmIHRoaXMuc2NvcmUgPiAzMCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXdSb3VuZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuRW5lbXlQcmVmYWJbMl0pO1xyXG4gICAgICAgICAgICBlbmVteUNvbnRyb2xsZXJTY3JpcHQgPSBuZXdSb3VuZC5nZXRDb21wb25lbnQoJ0VuZW15Q29udHJvbGxlcjMnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGlmZmVyZW50IGVuZW15IHdobyBuZWVkcyAxMCBmaXJlIHRvIGRpZSBBTkQgRVhQQU5EU1xyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlJTMgPT0gMCAmJiB0aGlzLnNjb3JlID4gMjApIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3Um91bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkVuZW15UHJlZmFiWzNdKTtcclxuICAgICAgICAgICAgZW5lbXlDb250cm9sbGVyU2NyaXB0ID0gbmV3Um91bmQuZ2V0Q29tcG9uZW50KCdFbmVteUNvbnRyb2xsZXI0JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRpZmZlcmVudCBlbmVteSB3aG8gbmVlZHMgMTUgZmlyZSB0byBkaWUgd2hvIGZhZGVzXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUlNCA9PSAwICYmIHRoaXMuc2NvcmUgPiAwKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld1JvdW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy5FbmVteVByZWZhYls0XSk7XHJcbiAgICAgICAgICAgIGVuZW15Q29udHJvbGxlclNjcmlwdCA9IG5ld1JvdW5kLmdldENvbXBvbmVudCgnRW5lbXlDb250cm9sbGVyNScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFbmVteSA2IHdobyBuZWVkcyA1MCBmaXJlIHRvIGRpZSBhbmQgd2hvIGZpcmVzIGVuZW15IDFcclxuICAgICAgICBpZiAodGhpcy5zY29yZSA9PSAwICkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXdSb3VuZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuRW5lbXlQcmVmYWJbNl0pO1xyXG4gICAgICAgICAgICBlbmVteUNvbnRyb2xsZXJTY3JpcHQgPSBuZXdSb3VuZC5nZXRDb21wb25lbnQoJ0VuZW15Q29udHJvbGxlcjcnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZW5lbWllc1wiKS5hZGRDaGlsZChuZXdSb3VuZCk7XHJcbiAgICAgICAgbmV3Um91bmQuc2V0UG9zaXRpb24odGhpcy5nZXROZXdFbmVteVBvc2l0aW9uKCkpOyBcclxuXHJcbiAgICAgICAgZW5lbXlDb250cm9sbGVyU2NyaXB0LmdhbWUgPSB0aGlzO1xyXG4gICAgICAgIGVuZW15Q29udHJvbGxlclNjcmlwdC5kZWx0YVJvdGF0aW9uID0gTWF0aC5yYW5kb20oKTtcclxuICAgIH1cclxuXHJcbiAgICBnYWluU2NvcmUodmFsdWU6IG51bWJlcikgXHJcbiAgICB7XHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB3b3JkcyBvZiB0aGUgc2NvcmVEaXNwbGF5IExhYmVsXHJcbiAgICAgICAgdGhpcy5zY29yZSArPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5yZXN0YXJ0U2NyZWVuLmdldENoaWxkQnlOYW1lKFwiU2NvcmVfdmFsdWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIHByb3RlY3Rpb24gZm9yIDUgc2Vjb25kcyB3aGVuIHlvdSBkZXN0cm95IGVuZW15IDNcclxuICAgICAgICBpZiAodmFsdWUgPT0gNSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllclNjcmlwdC5FbmFibGVDb2xsaXNpb25NYW5hZ2VyKGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyU2NyaXB0Lm5vZGUuY2hpbGRyZW5bMF0uY29sb3IgPSBjYy5Db2xvci5CTFVFO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQubm9kZS5jaGlsZHJlblswXSkudG8oNSwgKHtvcGFjaXR5OjB9KSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9Pnt0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQuRW5hYmxlQ29sbGlzaW9uTWFuYWdlcih0cnVlLCBmYWxzZSl9LCAxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT0gMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllclNjcmlwdC53ZWFwb24xID0gdGhpcy53ZWFwb25QcmVmYWJbMV07XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57dGhpcy5jdXJyZW50UGxheWVyU2NyaXB0LndlYXBvbjEgPSB0aGlzLndlYXBvblByZWZhYlswXTt9LCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAxMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllclNjcmlwdC53ZWFwb24xID0gdGhpcy53ZWFwb25QcmVmYWJbMl07XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57dGhpcy5jdXJyZW50UGxheWVyU2NyaXB0LndlYXBvbjEgPSB0aGlzLndlYXBvblByZWZhYlswXTt9LCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld0VuZW15UG9zaXRpb24oKSBcclxuICAgIHtcclxuICAgICAgICB2YXIgcmFuZFggPSAoTWF0aC5yYW5kb20oKSAtIE1hdGgucmFuZG9tKCkpICogKHRoaXMuY2FudmFzLndpZHRoLzIpO1xyXG4gICAgICAgIHZhciByYW5kWSA9IChNYXRoLnJhbmRvbSgpKSAqICh0aGlzLmNhbnZhcy5oZWlnaHQvMik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyYW5kWCxyYW5kWSk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XHJcbiAgICB9XHJcblxyXG4gICAgT25QbGF5ZXJEZWFkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpZmVMaW5lTWFuYWdlci5EZWNyZWFzZUxpZmVMaW5lKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpZmVMaW5lTWFuYWdlci5DdXJyZW50TGlmZWxpbmVzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyByZXN0YXJ0IFxyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zcGF3bk5ld1JvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZW5lbWllc1wiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGxheWVyXCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0U2NyZWVuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydFNjcmVlbi5nZXRDaGlsZEJ5TmFtZShcIlNjb3JlX3ZhbHVlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoU2NvcmVfdmFsdWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmhpZ2hTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY29udGludWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHBsYXllciAgXHJcbiAgICAgICAgICAgIGxldCBuZXdQbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXllclByZWZhYilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGxheWVyXCIpLmFkZENoaWxkKG5ld1BsYXllcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQgPSBuZXdQbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllckNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQud2VhcG9uUGFyZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid2VhcG9uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQuZ2FtZSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSBcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Wb2x1bWVUb2dnbGVDbGlja2VkKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5NdXNpYy5pc0NoZWNrZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKDApO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSgwLjEpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==