
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/EnemyController1');
require('./assets/Script/LifeLineManager');
require('./assets/Script/MainScript');
require('./assets/Script/PlayerController');
require('./assets/Script/WeaponController1');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/WeaponController1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e2e1Nj6qJA1objbiX+wEo7', 'WeaponController1');
// Script/WeaponController1.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WeaponController1 = /** @class */ (function (_super) {
    __extends(WeaponController1, _super);
    function WeaponController1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    WeaponController1.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    WeaponController1.prototype.onCollisionEnter = function (other, self) {
        this.node.destroy();
    };
    WeaponController1.prototype.start = function () {
    };
    WeaponController1.prototype.update = function (dt) {
        // fire moving move up 
        this.node.y += dt * 500;
    };
    WeaponController1 = __decorate([
        ccclass
    ], WeaponController1);
    return WeaponController1;
}(cc.Component));
exports.default = WeaponController1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25Db250cm9sbGVyMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQStDLHFDQUFZO0lBQTNEOztJQXlCQSxDQUFDO0lBdkJHLHdCQUF3QjtJQUV4QixrQ0FBTSxHQUFOO1FBRUksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFFMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsaUNBQUssR0FBTDtJQUdBLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQVEsRUFBRTtRQUVOLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUMsR0FBRyxDQUFDO0lBQzFCLENBQUM7SUF4QmdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBeUJyQztJQUFELHdCQUFDO0NBekJELEFBeUJDLENBekI4QyxFQUFFLENBQUMsU0FBUyxHQXlCMUQ7a0JBekJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXBvbkNvbnRyb2xsZXIxIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSBcclxuICAgIHtcclxuICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSBcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZmlyZSBtb3ZpbmcgbW92ZSB1cCBcclxuICAgICAgICB0aGlzLm5vZGUueSArPSBkdCo1MDA7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EnemyController1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95ffenyuj5EFbu7xf4VeGFw', 'EnemyController1');
// Script/EnemyController1.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyController1 = /** @class */ (function (_super) {
    __extends(EnemyController1, _super);
    function EnemyController1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.game = null;
        _this.deltaRotation = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    EnemyController1.prototype.onLoad = function () {
        //this.game = this.node.parent.getComponent('player');
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    EnemyController1.prototype.onCollisionEnter = function (other, self) {
        var _this = this;
        cc.tween(this.node).to(0.2, ({ scale: 0 })).call(function () { _this.node.destroy(); }).start();
        this.game.gainScore();
    };
    EnemyController1.prototype.start = function () {
    };
    EnemyController1.prototype.update = function (dt) {
        // move down and rotate positive
        this.node.y -= dt * Math.random() * 500 * this.deltaRotation;
        this.node.angle += dt * this.deltaRotation * 500;
    };
    EnemyController1 = __decorate([
        ccclass
    ], EnemyController1);
    return EnemyController1;
}(cc.Component));
exports.default = EnemyController1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteUNvbnRyb2xsZXIxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFEMUQ7UUFBQSxxRUFpQ0M7UUE3QkcsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLG1CQUFhLEdBQVcsQ0FBQyxDQUFDOztJQTRCOUIsQ0FBQztJQTFCRyx3QkFBd0I7SUFFeEIsaUNBQU0sR0FBTjtRQUVJLHNEQUFzRDtRQUN0RCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELDJDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUE1QixpQkFJQztRQUZHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUssS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGdDQUFLLEdBQUw7SUFHQSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFRLEVBQUU7UUFFTixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFDckQsQ0FBQztJQS9CZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FnQ3BDO0lBQUQsdUJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQzZDLEVBQUUsQ0FBQyxTQUFTLEdBZ0N6RDtrQkFoQ29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXlDb250cm9sbGVyMSBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG5cclxuICAgIGdhbWUgPSBudWxsO1xyXG4gICAgZGVsdGFSb3RhdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy90aGlzLmdhbWUgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgncGxheWVyJyk7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSBcclxuICAgIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMiwgKHtzY2FsZTowfSkpLmNhbGwoKCk9Pnt0aGlzLm5vZGUuZGVzdHJveSgpO30pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSBcclxuICAgIHtcclxuICAgICAgICAvLyBtb3ZlIGRvd24gYW5kIHJvdGF0ZSBwb3NpdGl2ZVxyXG4gICAgICAgIHRoaXMubm9kZS55IC09IGR0ICogTWF0aC5yYW5kb20oKSAqIDUwMCAqIHRoaXMuZGVsdGFSb3RhdGlvbjtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgKz0gZHQgKiB0aGlzLmRlbHRhUm90YXRpb24gKiA1MDA7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '642f1FsENhO2LgrtPI/r87f', 'PlayerController');
// Script/PlayerController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //prefab cannot take references from scene nodes
        //@property(cc.Node)
        _this.game = null;
        //@property(cc.Node)
        _this.weaponParent = null;
        _this.weapon1 = null;
        _this.shootAudio = null;
        _this.playerDeadAudio = null;
        _this.offsetPos = cc.v3(0, 0, 0);
        _this.delta = 0;
        return _this;
    }
    PlayerController.prototype.onLoad = function () {
        var _this = this;
        // disable collider and enable green highlight indicating player is safe
        this.EnableCollisionManager(false, true);
        cc.tween(this.node)
            .sequence(cc.tween(this.node).to(0.5, ({ opacity: 0 })), cc.tween(this.node).to(0.5, ({ opacity: 255 })))
            .repeat(3)
            .start();
        this.scheduleOnce(function () {
            // enable collider and disable green highlight indicating player is not protected and ready to fight
            _this.EnableCollisionManager(true, false);
        }, 4);
        this.node.on(cc.Node.EventType.TOUCH_START, this.OnTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.OnTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.OnTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnTouchEnd, this);
    };
    PlayerController.prototype.EnableCollisionManager = function (flag, protect) {
        var manager = this.node.getComponent(cc.BoxCollider);
        manager.enabled = flag;
        this.node.children[0].active = protect;
    };
    PlayerController.prototype.OnTouchStart = function (_event) {
        //console.log('Start');
        this.delta = 0;
    };
    PlayerController.prototype.OnTouchMove = function (_event) {
        //console.log('Moving');
        this.delta = _event.getDelta().x;
        this.node.position = new cc.Vec3(_event.getDelta().x + this.node.position.x, this.node.position.y, 0);
    };
    PlayerController.prototype.OnTouchEnd = function (event) {
        //console.log('End');
        if (this.delta == 0) {
            //console.log("shoot");
            this.bulletfire();
        }
    };
    PlayerController.prototype.bulletfire = function () {
        var newfire = cc.instantiate(this.weapon1);
        this.weaponParent.addChild(newfire);
        //find the player current position and assign it to new weapon
        var worldpos = cc.v3(0, 0, 0);
        var pos = cc.v3(0, 0, 0);
        this.node.convertToWorldSpaceAR(cc.v3(0, 0, 0), worldpos);
        this.weaponParent.convertToNodeSpaceAR(worldpos, pos);
        newfire.setPosition(pos);
        newfire.angle = 0;
        cc.audioEngine.playEffect(this.shootAudio, false); // Shoot audio
    };
    PlayerController.prototype.onCollisionEnter = function (other, self) {
        var _this = this;
        // disable collider to avoid any further collisions 
        // disable green highlight indicating player is not protected and is dying 
        this.EnableCollisionManager(false, false);
        cc.tween(this.node).to(0.2, ({ scale: 0 })).call(function () {
            _this.node.destroy();
            _this.game.OnPlayerDead();
        }).start();
        console.log("Player is dead");
        cc.audioEngine.playEffect(this.playerDeadAudio, false);
    };
    PlayerController.prototype.start = function () {
    };
    PlayerController.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "weapon1", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PlayerController.prototype, "shootAudio", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PlayerController.prototype, "playerDeadAudio", void 0);
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.PlayerController = PlayerController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBc0Msb0NBQVk7SUFEbEQ7UUFBQSxxRUFvSEM7UUFqSEcsZ0RBQWdEO1FBQ2hELG9CQUFvQjtRQUNwQixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVosb0JBQW9CO1FBQ3BCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBZ0doQyxDQUFDO0lBOUZHLGlDQUFNLEdBQU47UUFBQSxpQkFzQkM7UUFwQkcsd0VBQXdFO1FBQ3hFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLFFBQVEsQ0FDTCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUMzQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENB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SSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzt3REFDQztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7NkRBQ007SUFoQjVCLGdCQUFnQjtRQUQ1QixPQUFPO09BQ0ssZ0JBQWdCLENBbUg1QjtJQUFELHVCQUFDO0NBbkhELEFBbUhDLENBbkhxQyxFQUFFLENBQUMsU0FBUyxHQW1IakQ7QUFuSFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy9wcmVmYWIgY2Fubm90IHRha2UgcmVmZXJlbmNlcyBmcm9tIHNjZW5lIG5vZGVzXHJcbiAgICAvL0Bwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZSA9IG51bGw7XHJcblxyXG4gICAgLy9AcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdlYXBvblBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHdlYXBvbjE6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgc2hvb3RBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBwbGF5ZXJEZWFkQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9mZnNldFBvczogY2MuVmVjMyA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgcHJvdGVjdGVkIGRlbHRhOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBjb2xsaWRlciBhbmQgZW5hYmxlIGdyZWVuIGhpZ2hsaWdodCBpbmRpY2F0aW5nIHBsYXllciBpcyBzYWZlXHJcbiAgICAgICAgdGhpcy5FbmFibGVDb2xsaXNpb25NYW5hZ2VyKGZhbHNlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgIC5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjUsICh7b3BhY2l0eTogMH0pKSwgXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC41LCAoe29wYWNpdHk6IDI1NX0pKSlcclxuICAgICAgICAucmVwZWF0KDMpXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjb2xsaWRlciBhbmQgZGlzYWJsZSBncmVlbiBoaWdobGlnaHQgaW5kaWNhdGluZyBwbGF5ZXIgaXMgbm90IHByb3RlY3RlZCBhbmQgcmVhZHkgdG8gZmlnaHRcclxuICAgICAgICAgICAgdGhpcy5FbmFibGVDb2xsaXNpb25NYW5hZ2VyKHRydWUsIGZhbHNlKVxyXG4gICAgICAgIH0sIDQpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuT25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5PblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5PblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLk9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBFbmFibGVDb2xsaXNpb25NYW5hZ2VyKGZsYWc6Ym9vbGVhbiwgcHJvdGVjdDpib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtYW5hZ2VyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gZmxhZztcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gcHJvdGVjdDtcclxuICAgIH1cclxuXHJcbiAgICBPblRvdWNoU3RhcnQoX2V2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ1N0YXJ0Jyk7XHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgT25Ub3VjaE1vdmUoX2V2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ01vdmluZycpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSBfZXZlbnQuZ2V0RGVsdGEoKS54O1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKF9ldmVudC5nZXREZWx0YSgpLnggKyB0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIE9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnRW5kJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsdGEgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzaG9vdFwiKTtcclxuICAgICAgICAgICAgdGhpcy5idWxsZXRmaXJlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVsbGV0ZmlyZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5ld2ZpcmU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndlYXBvbjEpO1xyXG4gICAgICAgIHRoaXMud2VhcG9uUGFyZW50LmFkZENoaWxkKG5ld2ZpcmUpO1xyXG5cclxuICAgICAgICAvL2ZpbmQgdGhlIHBsYXllciBjdXJyZW50IHBvc2l0aW9uIGFuZCBhc3NpZ24gaXQgdG8gbmV3IHdlYXBvblxyXG4gICAgICAgIGxldCB3b3JsZHBvcyA9IGNjLnYzKDAsMCwwKTtcclxuICAgICAgICBsZXQgcG9zID0gY2MudjMoMCwwLDApO1xyXG4gICAgICAgIHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwwLDApLCB3b3JsZHBvcyk7XHJcbiAgICAgICAgdGhpcy53ZWFwb25QYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRwb3MsIHBvcyk7XHJcblxyXG4gICAgICAgIG5ld2ZpcmUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICBuZXdmaXJlLmFuZ2xlID0gMDtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2hvb3RBdWRpbywgZmFsc2UpOyAvLyBTaG9vdCBhdWRpb1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIFxyXG4gICAge1xyXG4gICAgICAgIC8vIGRpc2FibGUgY29sbGlkZXIgdG8gYXZvaWQgYW55IGZ1cnRoZXIgY29sbGlzaW9ucyBcclxuICAgICAgICAvLyBkaXNhYmxlIGdyZWVuIGhpZ2hsaWdodCBpbmRpY2F0aW5nIHBsYXllciBpcyBub3QgcHJvdGVjdGVkIGFuZCBpcyBkeWluZyBcclxuICAgICAgICB0aGlzLkVuYWJsZUNvbGxpc2lvbk1hbmFnZXIoZmFsc2UsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjIsICh7c2NhbGU6MH0pKS5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5PblBsYXllckRlYWQoKTtcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBpcyBkZWFkXCIpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5ZXJEZWFkQXVkaW8sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LifeLineManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a781eVrpDVHU5GAeBdPgI24', 'LifeLineManager');
// Script/LifeLineManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LifeLineManager = /** @class */ (function (_super) {
    __extends(LifeLineManager, _super);
    function LifeLineManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CurrentLifelines = 0;
        _this.playerIconPrefab = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    LifeLineManager.prototype.onLoad = function () {
        this.CurrentLifelines = 3;
        for (var i = 0; i < this.CurrentLifelines; i++) {
            var newIcon = cc.instantiate(this.playerIconPrefab);
            this.node.addChild(newIcon);
        }
    };
    LifeLineManager.prototype.start = function () {
    };
    LifeLineManager.prototype.restart = function () {
        if (this.CurrentLifelines == 0) {
            this.CurrentLifelines = 3;
            for (var i = 0; i < this.CurrentLifelines; i++) {
                var newIcon = cc.instantiate(this.playerIconPrefab);
                this.node.addChild(newIcon);
            }
        }
    };
    LifeLineManager.prototype.DecreaseLifeLine = function () {
        if (this.CurrentLifelines != 0) {
            this.CurrentLifelines -= 1;
            this.node.children[0].destroy();
            this.node.getComponent(cc.Layout).updateLayout();
        }
    };
    __decorate([
        property(cc.Prefab)
    ], LifeLineManager.prototype, "playerIconPrefab", void 0);
    LifeLineManager = __decorate([
        ccclass
    ], LifeLineManager);
    return LifeLineManager;
}(cc.Component));
exports.default = LifeLineManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMaWZlTGluZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUR6RDtRQUFBLHFFQWdEQztRQTdDRyxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFHN0Isc0JBQWdCLEdBQWUsSUFBSSxDQUFDOztRQXlDcEMsaUJBQWlCO0lBQ3JCLENBQUM7SUF4Q0csd0JBQXdCO0lBRXhCLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQzFDO1lBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCwrQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFFSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEVBQzlCO1lBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUMxQixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUMxQztnQkFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtTQUNKO0lBQ0wsQ0FBQztJQUVELDBDQUFnQixHQUFoQjtRQUVJLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFFLENBQUMsRUFDNUI7WUFDSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNwRDtJQUNMLENBQUM7SUF2Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDZ0I7SUFMbkIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQStDbkM7SUFBRCxzQkFBQztDQS9DRCxBQStDQyxDQS9DNEMsRUFBRSxDQUFDLFNBQVMsR0ErQ3hEO2tCQS9Db0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlmZUxpbmVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBDdXJyZW50TGlmZWxpbmVzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwbGF5ZXJJY29uUHJlZmFiIDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuQ3VycmVudExpZmVsaW5lcyA9IDM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuQ3VycmVudExpZmVsaW5lczsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ljb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXllckljb25QcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3SWNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICByZXN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5DdXJyZW50TGlmZWxpbmVzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRMaWZlbGluZXMgPSAzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5DdXJyZW50TGlmZWxpbmVzOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdJY29uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJJY29uUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdJY29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBEZWNyZWFzZUxpZmVMaW5lKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5DdXJyZW50TGlmZWxpbmVzIT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5DdXJyZW50TGlmZWxpbmVzIC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
