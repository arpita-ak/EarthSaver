"use strict";
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