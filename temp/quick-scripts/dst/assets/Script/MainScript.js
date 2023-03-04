
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
        this.node.addChild(newPlayer);
        var playerControllerScript = newPlayer.getComponent(PlayerController_1.PlayerController);
        playerControllerScript.weaponParent = this.node.getChildByName("weapon");
        playerControllerScript.game = this;
        // generate 2 enemies every second
        this.schedule(this.spawnNewRound, 0.5, cc.macro.REPEAT_FOREVER, 0);
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
            this.node.getChildByName("enemies").children.forEach(function (e) { return (e.destroy()); });
            this.restartScreen.active = true;
            this.restartScreen.getChildByName("Score_value").getComponent(cc.Label).string = this.score.toString();
            this.restartScreen.getChildByName("highScore_value").getComponent(cc.Label).string = this.highScore.toString();
        }
        else {
            //continue
            // generate player  
            var newPlayer = cc.instantiate(this.playerPrefab);
            this.node.addChild(newPlayer);
            var playerControllerScript = newPlayer.getComponent(PlayerController_1.PlayerController);
            playerControllerScript.weaponParent = this.node.getChildByName("weapon");
            playerControllerScript.game = this;
        }
    };
    MainScript.prototype.start = function () {
    };
    MainScript.prototype.update = function (dt) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUFnRDtBQUNoRCx1REFBc0Q7QUFFaEQsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUkxQztJQUF3Qyw4QkFBWTtJQUZwRDtRQUFBLHFFQWtJQztRQTdIRyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFlLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFHbEMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBRXhDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUF3RzFCLENBQUM7SUF0R0csd0JBQXdCO0lBRXhCLDJCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFFSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWxDLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsZUFB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QXNCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRCwwQkFBSyxHQUFMO0lBR0EsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBUSxFQUFFO0lBR1YsQ0FBQztJQTNIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNZO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ1c7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDZTtJQUdsQztRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO3VEQUNjO0lBckJ2QixVQUFVO1FBRjlCLE9BQU87T0FFYSxVQUFVLENBZ0k5QjtJQUFELGlCQUFDO0NBaElELEFBZ0lDLENBaEl1QyxFQUFFLENBQUMsU0FBUyxHQWdJbkQ7a0JBaElvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IExpZmVMaW5lTWFuYWdlciBmcm9tIFwiLi9MaWZlTGluZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyQ29udHJvbGxlciB9IGZyb20gXCIuL1BsYXllckNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RhcnRTY3JlZW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmVzdGFydFNjcmVlbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEVuZW15UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwbGF5ZXJQcmVmYWIgOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlRGlzcGxheTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGhpZ2hzY29yZURpc3BsYXk6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTGlmZUxpbmVNYW5hZ2VyKVxyXG4gICAgbGlmZUxpbmVNYW5hZ2VyOiBMaWZlTGluZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgaGlnaFNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJzAnO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTY3JlZW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBPblN0YXJ0Q2xpY2soKSAvLyBvciByZXN0YXJ0XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGFydFNjcmVlbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIGxpZmUgbGluZXMgXHJcbiAgICAgICAgdGhpcy5saWZlTGluZU1hbmFnZXIucmVzdGFydCgpO1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSBzY29yZSBhbmQgaGlnaHNjb3JlXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiB0aGlzLmhpZ2hTY29yZSlcclxuICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMuaGlnaHNjb3JlRGlzcGxheS5zdHJpbmcgPSB0aGlzLmhpZ2hTY29yZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBnZW5lcmF0ZSBwbGF5ZXJcclxuICAgICAgICBsZXQgbmV3UGxheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJQcmVmYWIpXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1BsYXllcik7XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJDb250cm9sbGVyU2NyaXB0ID0gbmV3UGxheWVyLmdldENvbXBvbmVudChQbGF5ZXJDb250cm9sbGVyKTtcclxuICAgICAgICBwbGF5ZXJDb250cm9sbGVyU2NyaXB0LndlYXBvblBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndlYXBvblwiKTtcclxuICAgICAgICBwbGF5ZXJDb250cm9sbGVyU2NyaXB0LmdhbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBnZW5lcmF0ZSAyIGVuZW1pZXMgZXZlcnkgc2Vjb25kXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnNwYXduTmV3Um91bmQsIDAuNSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduTmV3Um91bmQoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBuZXdSb3VuZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuRW5lbXlQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImVuZW1pZXNcIikuYWRkQ2hpbGQobmV3Um91bmQpO1xyXG4gICAgICAgIG5ld1JvdW5kLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3RW5lbXlQb3NpdGlvbigpKTsgXHJcblxyXG4gICAgICAgIGxldCBlbmVteUNvbnRyb2xsZXJTY3JpcHQgPSBuZXdSb3VuZC5nZXRDb21wb25lbnQoJ0VuZW15Q29udHJvbGxlcjEnKVxyXG4gICAgICAgIGVuZW15Q29udHJvbGxlclNjcmlwdC5nYW1lID0gdGhpcztcclxuICAgICAgICBlbmVteUNvbnRyb2xsZXJTY3JpcHQuZGVsdGFSb3RhdGlvbiA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FpblNjb3JlKCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB3b3JkcyBvZiB0aGUgc2NvcmVEaXNwbGF5IExhYmVsXHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uZ2V0Q2hpbGRCeU5hbWUoXCJTY29yZV92YWx1ZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdFbmVteVBvc2l0aW9uKCkgXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHJhbmRYID0gTWF0aC5yYW5kb20oKSAqIE1hdGgucmFuZG9tKCkgKjIqICh0aGlzLm5vZGUud2lkdGgvMiAtIDIwKS0yNTA7XHJcbiAgICAgICAgdmFyIHJhbmRZID0gTWF0aC5yYW5kb20oKSAqIE1hdGgucmFuZG9tKCkgKjUqICh0aGlzLm5vZGUuaGVpZ2h0LzIgLSAyMDApKyAyMDA7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyYW5kWCxyYW5kWSk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XHJcbiAgICB9XHJcblxyXG4gICAgT25QbGF5ZXJEZWFkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpZmVMaW5lTWFuYWdlci5EZWNyZWFzZUxpZmVMaW5lKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpZmVMaW5lTWFuYWdlci5DdXJyZW50TGlmZWxpbmVzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyByZXN0YXJ0IFxyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zcGF3bk5ld1JvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZW5lbWllc1wiKS5jaGlsZHJlbi5mb3JFYWNoKGU9PihlLmRlc3Ryb3koKSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0U2NyZWVuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydFNjcmVlbi5nZXRDaGlsZEJ5TmFtZShcIlNjb3JlX3ZhbHVlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoU2NvcmVfdmFsdWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmhpZ2hTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NvbnRpbnVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBwbGF5ZXIgIFxyXG4gICAgICAgICAgICBsZXQgbmV3UGxheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJQcmVmYWIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdQbGF5ZXIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBsYXllckNvbnRyb2xsZXJTY3JpcHQgPSBuZXdQbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllckNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJDb250cm9sbGVyU2NyaXB0LndlYXBvblBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndlYXBvblwiKTtcclxuICAgICAgICAgICAgcGxheWVyQ29udHJvbGxlclNjcmlwdC5nYW1lID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkgXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19