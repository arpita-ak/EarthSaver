
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
        _this.count = 0;
        return _this;
    }
    PlayerController.prototype.onLoad = function () {
        var _this = this;
        // disable collider and enable green highlight indicating player is safe
        this.EnableCollisionManager(false, true);
        this.EnableAutomaticShots(true);
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
        if (!this.node)
            return;
        var manager = this.node.getComponent(cc.BoxCollider);
        manager.enabled = flag;
        this.node.children[0].active = protect;
        this.node.children[0].opacity = 100;
        this.node.children[0].color = cc.Color.GREEN;
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
            //this.bulletfire()
        }
    };
    PlayerController.prototype.EnableAutomaticShots = function (enable) {
        if (enable)
            this.schedule(this.bulletfire, 0.2, cc.macro.REPEAT_FOREVER, 0);
        else
            this.unschedule(this.bulletfire);
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
        // disable collider to avoid any further collisions 
        // disable green highlight indicating player is not protected and is dying 
        this.EnableCollisionManager(false, false);
        this.node.destroy();
        this.count += 1;
        console.log("dead: ", this.count);
        this.game.OnPlayerDead();
        cc.tween(this.node).to(0.2, ({ scale: 0 })).call(function () {
        }).start();
        console.log("Player is dead: ", other);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBc0Msb0NBQVk7SUFEbEQ7UUFBQSxxRUFxSUM7UUFsSUcsZ0RBQWdEO1FBQ2hELG9CQUFvQjtRQUNwQixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVosb0JBQW9CO1FBQ3BCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFnSGhDLENBQUM7SUE5R0csaUNBQU0sR0FBTjtRQUFBLGlCQXVCQztRQXJCRyx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLFFBQVEsQ0FDTCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUMz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QyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXpCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRTlDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRVgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxnQ0FBSyxHQUFMO0lBR0EsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxFQUFFO0lBR1QsQ0FBQztJQXpIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzt3REFDQztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7NkRBQ007SUFoQjVCLGdCQUFnQjtRQUQ1QixPQUFPO09BQ0ssZ0JBQWdCLENBb0k1QjtJQUFELHVCQUFDO0NBcElELEFBb0lDLENBcElxQyxFQUFFLENBQUMsU0FBUyxHQW9JakQ7QUFwSVksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy9wcmVmYWIgY2Fubm90IHRha2UgcmVmZXJlbmNlcyBmcm9tIHNjZW5lIG5vZGVzXHJcbiAgICAvL0Bwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZSA9IG51bGw7XHJcblxyXG4gICAgLy9AcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdlYXBvblBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHdlYXBvbjE6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgc2hvb3RBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBwbGF5ZXJEZWFkQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9mZnNldFBvczogY2MuVmVjMyA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgcHJvdGVjdGVkIGRlbHRhOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIGNvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBjb2xsaWRlciBhbmQgZW5hYmxlIGdyZWVuIGhpZ2hsaWdodCBpbmRpY2F0aW5nIHBsYXllciBpcyBzYWZlXHJcbiAgICAgICAgdGhpcy5FbmFibGVDb2xsaXNpb25NYW5hZ2VyKGZhbHNlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLkVuYWJsZUF1dG9tYXRpY1Nob3RzKHRydWUpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNSwgKHtvcGFjaXR5OiAwfSkpLCBcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjUsICh7b3BhY2l0eTogMjU1fSkpKVxyXG4gICAgICAgIC5yZXBlYXQoMylcclxuICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgLy8gZW5hYmxlIGNvbGxpZGVyIGFuZCBkaXNhYmxlIGdyZWVuIGhpZ2hsaWdodCBpbmRpY2F0aW5nIHBsYXllciBpcyBub3QgcHJvdGVjdGVkIGFuZCByZWFkeSB0byBmaWdodFxyXG4gICAgICAgICAgICB0aGlzLkVuYWJsZUNvbGxpc2lvbk1hbmFnZXIodHJ1ZSwgZmFsc2UpXHJcbiAgICAgICAgfSwgNCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5PblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLk9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLk9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuT25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIEVuYWJsZUNvbGxpc2lvbk1hbmFnZXIoZmxhZzpib29sZWFuLCBwcm90ZWN0OmJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMubm9kZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSBmbGFnO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBwcm90ZWN0O1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5vcGFjaXR5ID0gMTAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG4gICAgfVxyXG5cclxuICAgIE9uVG91Y2hTdGFydChfZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnU3RhcnQnKTtcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBPblRvdWNoTW92ZShfZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnTW92aW5nJyk7XHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IF9ldmVudC5nZXREZWx0YSgpLng7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gbmV3IGNjLlZlYzMoX2V2ZW50LmdldERlbHRhKCkueCArIHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaClcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdFbmQnKTtcclxuICAgICAgICBpZiAodGhpcy5kZWx0YSA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInNob290XCIpO1xyXG4gICAgICAgICAgICAvL3RoaXMuYnVsbGV0ZmlyZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEVuYWJsZUF1dG9tYXRpY1Nob3RzKGVuYWJsZSA6IGJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGVuYWJsZSkgdGhpcy5zY2hlZHVsZSh0aGlzLmJ1bGxldGZpcmUsIDAuMiwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDApO1xyXG4gICAgICAgIGVsc2UgdGhpcy51bnNjaGVkdWxlKHRoaXMuYnVsbGV0ZmlyZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVsbGV0ZmlyZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5ld2ZpcmU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndlYXBvbjEpO1xyXG4gICAgICAgIHRoaXMud2VhcG9uUGFyZW50LmFkZENoaWxkKG5ld2ZpcmUpO1xyXG5cclxuICAgICAgICAvL2ZpbmQgdGhlIHBsYXllciBjdXJyZW50IHBvc2l0aW9uIGFuZCBhc3NpZ24gaXQgdG8gbmV3IHdlYXBvblxyXG4gICAgICAgIGxldCB3b3JsZHBvcyA9IGNjLnYzKDAsMCwwKTtcclxuICAgICAgICBsZXQgcG9zID0gY2MudjMoMCwwLDApO1xyXG4gICAgICAgIHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwwLDApLCB3b3JsZHBvcyk7XHJcbiAgICAgICAgdGhpcy53ZWFwb25QYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRwb3MsIHBvcyk7XHJcblxyXG4gICAgICAgIG5ld2ZpcmUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICBuZXdmaXJlLmFuZ2xlID0gMDtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2hvb3RBdWRpbywgZmFsc2UpOyAvLyBTaG9vdCBhdWRpb1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIFxyXG4gICAge1xyXG4gICAgICAgIC8vIGRpc2FibGUgY29sbGlkZXIgdG8gYXZvaWQgYW55IGZ1cnRoZXIgY29sbGlzaW9ucyBcclxuICAgICAgICAvLyBkaXNhYmxlIGdyZWVuIGhpZ2hsaWdodCBpbmRpY2F0aW5nIHBsYXllciBpcyBub3QgcHJvdGVjdGVkIGFuZCBpcyBkeWluZyBcclxuICAgICAgICB0aGlzLkVuYWJsZUNvbGxpc2lvbk1hbmFnZXIoZmFsc2UsIGZhbHNlKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5jb3VudCArPSAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVhZDogXCIsIHRoaXMuY291bnQpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5PblBsYXllckRlYWQoKTtcclxuICAgICAgICBcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMiwgKHtzY2FsZTowfSkpLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgaXMgZGVhZDogXCIsIG90aGVyKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGxheWVyRGVhZEF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSBcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=