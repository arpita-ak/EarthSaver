
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
        this.schedule(this.spawnNewRound, 0.5, cc.macro.REPEAT_FOREVER, 0);
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
        // different enemy who needs 5 fire to die AND EXPANDS
        if (this.score % 3 == 0 && this.score > 20) {
            newRound = cc.instantiate(this.EnemyPrefab[3]);
            enemyControllerScript = newRound.getComponent('EnemyController4');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUFnRDtBQUNoRCx1REFBc0Q7QUFFaEQsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUkxQztJQUF3Qyw4QkFBWTtJQUZwRDtRQUFBLHFFQWlOQztRQTVNRyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFnQixFQUFFLENBQUM7UUFHOUIsa0JBQVksR0FBZSxJQUFJLENBQUM7UUFHaEMsa0JBQVksR0FBZ0IsRUFBRSxDQUFDO1FBRy9CLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUdsQyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFHeEMsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLHdCQUF3QjtRQUN4Qix5QkFBbUIsR0FBcUIsSUFBSSxDQUFDOztJQXdLakQsQ0FBQztJQXRLRywyQkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBWSxHQUFaO1FBRUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVsQyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUvQiw0QkFBNEI7UUFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpELGtCQUFrQjtRQUNsQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUNBQWdCLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRXJDLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5FLGNBQWM7UUFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFFakMsQ0FBQztJQUVELGtDQUFhLEdBQWI7UUFFSSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUVyRSwwQ0FBMEM7UUFDMUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQ3hDO1lBQ0ksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtTQUNwRTtRQUVELHNEQUFzRDtRQUN0RCxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFDeEM7WUFDSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MscUJBQXFCLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1NBQ3BFO1FBRUQsc0RBQXNEO1FBQ3RELElBQUksSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUN4QztZQUNJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUE7U0FDcEU7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBRWpELHFCQUFxQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEMscUJBQXFCLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLEtBQWE7UUFBdkIsaUJBMkJDO1FBekJHLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFdkcsb0RBQW9EO1FBQ3BELElBQUksS0FBSyxJQUFJLENBQUMsRUFDZDtZQUNJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2hFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pGLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSyxLQUFJLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzdGO1FBRUQsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUNkO1lBQ0ksSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSyxLQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekY7UUFFRCxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQ2Y7WUFDSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFLLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN6RjtJQUNMLENBQUM7SUFFRCx3Q0FBbUIsR0FBbkI7UUFFSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFFLENBQUMsR0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBQyxHQUFHLENBQUM7UUFDM0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRSxDQUFDLEdBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUUsR0FBRyxDQUFDO1FBQzlFLDJCQUEyQjtRQUMzQixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBWSxHQUFaO1FBRUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXhDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEVBQzlDO1lBQ0ksV0FBVztZQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUV4RCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2RyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFL0csRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUM5QjthQUVEO1lBQ0ksVUFBVTtZQUVWLG9CQUFvQjtZQUNwQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFdkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUNBQWdCLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVELDBCQUFLLEdBQUw7SUFHQSxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFRLEVBQUU7SUFHVixDQUFDO0lBRUQsMENBQXFCLEdBQXJCO1FBRUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDeEI7WUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO2FBRUQ7WUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQTFNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNZO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1c7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNlO0lBR2xDO1FBREMsUUFBUSxDQUFDLHlCQUFlLENBQUM7dURBQ2M7SUFHeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7Z0RBQ0Q7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO2tEQUNDO0lBakNmLFVBQVU7UUFGOUIsT0FBTztPQUVhLFVBQVUsQ0ErTTlCO0lBQUQsaUJBQUM7Q0EvTUQsQUErTUMsQ0EvTXVDLEVBQUUsQ0FBQyxTQUFTLEdBK01uRDtrQkEvTW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgTGlmZUxpbmVNYW5hZ2VyIGZyb20gXCIuL0xpZmVMaW5lTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJDb250cm9sbGVyIH0gZnJvbSBcIi4vUGxheWVyQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblNjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdGFydFNjcmVlbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByZXN0YXJ0U2NyZWVuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgRW5lbXlQcmVmYWI6IGNjLlByZWZhYltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBsYXllclByZWZhYiA6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHdlYXBvblByZWZhYjogY2MuUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZURpc3BsYXk6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBoaWdoc2NvcmVEaXNwbGF5OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KExpZmVMaW5lTWFuYWdlcilcclxuICAgIGxpZmVMaW5lTWFuYWdlcjogTGlmZUxpbmVNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxyXG4gICAgTXVzaWM6IGNjLlRvZ2dsZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmdtQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgY2xpY2tBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBzY29yZTogbnVtYmVyID0gMDtcclxuICAgIGhpZ2hTY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGN1cnJlbnRQbGF5ZXJTY3JpcHQ6IFBsYXllckNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCAoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJzAnO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTY3JlZW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBPblN0YXJ0Q2xpY2soKSAvLyBvciByZXN0YXJ0XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGFydFNjcmVlbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIGxpZmUgbGluZXMgXHJcbiAgICAgICAgdGhpcy5saWZlTGluZU1hbmFnZXIucmVzdGFydCgpO1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSBzY29yZSBhbmQgaGlnaHNjb3JlXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiB0aGlzLmhpZ2hTY29yZSlcclxuICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMuaGlnaHNjb3JlRGlzcGxheS5zdHJpbmcgPSB0aGlzLmhpZ2hTY29yZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBnZW5lcmF0ZSBwbGF5ZXJcclxuICAgICAgICBsZXQgbmV3UGxheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJQcmVmYWIpXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGxheWVyXCIpLmFkZENoaWxkKG5ld1BsYXllcik7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllclNjcmlwdCA9IG5ld1BsYXllci5nZXRDb21wb25lbnQoUGxheWVyQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyU2NyaXB0LndlYXBvblBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndlYXBvblwiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQuZ2FtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGdlbmVyYXRlIDIgZW5lbWllcyBldmVyeSBzZWNvbmRcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd25OZXdSb3VuZCwgMC41LCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMCk7XHJcblxyXG4gICAgICAgIC8vIHN0YXJ0IG11c2ljXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtQXVkaW8sIHRydWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbGlja0F1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5vblZvbHVtZVRvZ2dsZUNsaWNrZWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25OZXdSb3VuZCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5ld1JvdW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy5FbmVteVByZWZhYlswXSk7XHJcbiAgICAgICAgbGV0IGVuZW15Q29udHJvbGxlclNjcmlwdCA9IG5ld1JvdW5kLmdldENvbXBvbmVudCgnRW5lbXlDb250cm9sbGVyMScpXHJcblxyXG4gICAgICAgIC8vIGRpZmZlcmVudCBlbmVteSB3aG8gbmVlZHMgMyBmaXJlIHRvIGRpZVxyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlJTUgPT0gMCAmJiB0aGlzLnNjb3JlICE9IDApIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3Um91bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkVuZW15UHJlZmFiWzFdKTtcclxuICAgICAgICAgICAgZW5lbXlDb250cm9sbGVyU2NyaXB0ID0gbmV3Um91bmQuZ2V0Q29tcG9uZW50KCdFbmVteUNvbnRyb2xsZXIyJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRpZmZlcmVudCBlbmVteSB3aG8gbmVlZHMgNSBmaXJlIHRvIGRpZSBBTkQgRVhQQU5EU1xyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlJTUgPT0gMCAmJiB0aGlzLnNjb3JlID4gMzApIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3Um91bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkVuZW15UHJlZmFiWzJdKTtcclxuICAgICAgICAgICAgZW5lbXlDb250cm9sbGVyU2NyaXB0ID0gbmV3Um91bmQuZ2V0Q29tcG9uZW50KCdFbmVteUNvbnRyb2xsZXIzJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRpZmZlcmVudCBlbmVteSB3aG8gbmVlZHMgNSBmaXJlIHRvIGRpZSBBTkQgRVhQQU5EU1xyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlJTMgPT0gMCAmJiB0aGlzLnNjb3JlID4gMjApIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3Um91bmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkVuZW15UHJlZmFiWzNdKTtcclxuICAgICAgICAgICAgZW5lbXlDb250cm9sbGVyU2NyaXB0ID0gbmV3Um91bmQuZ2V0Q29tcG9uZW50KCdFbmVteUNvbnRyb2xsZXI0JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImVuZW1pZXNcIikuYWRkQ2hpbGQobmV3Um91bmQpO1xyXG4gICAgICAgIG5ld1JvdW5kLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3RW5lbXlQb3NpdGlvbigpKTsgXHJcblxyXG4gICAgICAgIGVuZW15Q29udHJvbGxlclNjcmlwdC5nYW1lID0gdGhpcztcclxuICAgICAgICBlbmVteUNvbnRyb2xsZXJTY3JpcHQuZGVsdGFSb3RhdGlvbiA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FpblNjb3JlKHZhbHVlOiBudW1iZXIpIFxyXG4gICAge1xyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgd29yZHMgb2YgdGhlIHNjb3JlRGlzcGxheSBMYWJlbFxyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMucmVzdGFydFNjcmVlbi5nZXRDaGlsZEJ5TmFtZShcIlNjb3JlX3ZhbHVlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBwcm90ZWN0aW9uIGZvciA1IHNlY29uZHMgd2hlbiB5b3UgZGVzdHJveSBlbmVteSAzXHJcbiAgICAgICAgaWYgKHZhbHVlID09IDUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQuRW5hYmxlQ29sbGlzaW9uTWFuYWdlcihmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllclNjcmlwdC5ub2RlLmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuQkxVRTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jdXJyZW50UGxheWVyU2NyaXB0Lm5vZGUuY2hpbGRyZW5bMF0pLnRvKDUsICh7b3BhY2l0eTowfSkpLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57dGhpcy5jdXJyZW50UGxheWVyU2NyaXB0LkVuYWJsZUNvbGxpc2lvbk1hbmFnZXIodHJ1ZSwgZmFsc2UpfSwgMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09IDMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQud2VhcG9uMSA9IHRoaXMud2VhcG9uUHJlZmFiWzFdO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e3RoaXMuY3VycmVudFBsYXllclNjcmlwdC53ZWFwb24xID0gdGhpcy53ZWFwb25QcmVmYWJbMF07fSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodmFsdWUgPT0gMTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQud2VhcG9uMSA9IHRoaXMud2VhcG9uUHJlZmFiWzJdO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e3RoaXMuY3VycmVudFBsYXllclNjcmlwdC53ZWFwb24xID0gdGhpcy53ZWFwb25QcmVmYWJbMF07fSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdFbmVteVBvc2l0aW9uKCkgXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHJhbmRYID0gTWF0aC5yYW5kb20oKSAqIE1hdGgucmFuZG9tKCkgKjIqICh0aGlzLm5vZGUud2lkdGgvMiAtIDIwKS0yNTA7XHJcbiAgICAgICAgdmFyIHJhbmRZID0gTWF0aC5yYW5kb20oKSAqIE1hdGgucmFuZG9tKCkgKjUqICh0aGlzLm5vZGUuaGVpZ2h0LzIgLSAyMDApKyAyMDA7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyYW5kWCxyYW5kWSk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XHJcbiAgICB9XHJcblxyXG4gICAgT25QbGF5ZXJEZWFkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpZmVMaW5lTWFuYWdlci5EZWNyZWFzZUxpZmVMaW5lKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpZmVMaW5lTWFuYWdlci5DdXJyZW50TGlmZWxpbmVzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyByZXN0YXJ0IFxyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zcGF3bk5ld1JvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZW5lbWllc1wiKS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGxheWVyXCIpLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0U2NyZWVuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydFNjcmVlbi5nZXRDaGlsZEJ5TmFtZShcIlNjb3JlX3ZhbHVlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoU2NvcmVfdmFsdWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmhpZ2hTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY29udGludWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHBsYXllciAgXHJcbiAgICAgICAgICAgIGxldCBuZXdQbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXllclByZWZhYilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGxheWVyXCIpLmFkZENoaWxkKG5ld1BsYXllcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQgPSBuZXdQbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllckNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQud2VhcG9uUGFyZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid2VhcG9uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJTY3JpcHQuZ2FtZSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSBcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Wb2x1bWVUb2dnbGVDbGlja2VkKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5NdXNpYy5pc0NoZWNrZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKDApO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSgwLjEpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==