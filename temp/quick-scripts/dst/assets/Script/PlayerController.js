
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBc0Msb0NBQVk7SUFEbEQ7UUFBQSxxRUF3SEM7UUFySEcsZ0RBQWdEO1FBQ2hELG9CQUFvQjtRQUNwQixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVosb0JBQW9CO1FBQ3BCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBb0doQyxDQUFDO0lBbEdHLGlDQUFNLEdBQU47UUFBQSxpQkFzQkM7UUFwQkcsd0VBQXdFO1FBQ3hFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLFFBQVEsQ0FDTCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUMzQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENB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QVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsZ0NBQUssR0FBTDtJQUdBLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQU8sRUFBRTtJQUdULENBQUM7SUE1R0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7d0RBQ0M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzZEQUNNO0lBaEI1QixnQkFBZ0I7UUFENUIsT0FBTztPQUNLLGdCQUFnQixDQXVINUI7SUFBRCx1QkFBQztDQXZIRCxBQXVIQyxDQXZIcUMsRUFBRSxDQUFDLFNBQVMsR0F1SGpEO0FBdkhZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vcHJlZmFiIGNhbm5vdCB0YWtlIHJlZmVyZW5jZXMgZnJvbSBzY2VuZSBub2Rlc1xyXG4gICAgLy9AcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWUgPSBudWxsO1xyXG5cclxuICAgIC8vQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3ZWFwb25QYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB3ZWFwb24xOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuQXVkaW9DbGlwfSlcclxuICAgIHNob290QXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgcGxheWVyRGVhZEF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvZmZzZXRQb3M6IGNjLlZlYzMgPSBjYy52MygwLCAwLCAwKTtcclxuICAgIHByb3RlY3RlZCBkZWx0YTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGRpc2FibGUgY29sbGlkZXIgYW5kIGVuYWJsZSBncmVlbiBoaWdobGlnaHQgaW5kaWNhdGluZyBwbGF5ZXIgaXMgc2FmZVxyXG4gICAgICAgIHRoaXMuRW5hYmxlQ29sbGlzaW9uTWFuYWdlcihmYWxzZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAuc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC41LCAoe29wYWNpdHk6IDB9KSksIFxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNSwgKHtvcGFjaXR5OiAyNTV9KSkpXHJcbiAgICAgICAgLnJlcGVhdCgzKVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAvLyBlbmFibGUgY29sbGlkZXIgYW5kIGRpc2FibGUgZ3JlZW4gaGlnaGxpZ2h0IGluZGljYXRpbmcgcGxheWVyIGlzIG5vdCBwcm90ZWN0ZWQgYW5kIHJlYWR5IHRvIGZpZ2h0XHJcbiAgICAgICAgICAgIHRoaXMuRW5hYmxlQ29sbGlzaW9uTWFuYWdlcih0cnVlLCBmYWxzZSlcclxuICAgICAgICB9LCA0KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLk9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuT25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuT25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5PblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgRW5hYmxlQ29sbGlzaW9uTWFuYWdlcihmbGFnOmJvb2xlYW4sIHByb3RlY3Q6Ym9vbGVhbilcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy5ub2RlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICBsZXQgbWFuYWdlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IGZsYWc7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHByb3RlY3Q7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLm9wYWNpdHkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICB9XHJcblxyXG4gICAgT25Ub3VjaFN0YXJ0KF9ldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaClcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdTdGFydCcpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIE9uVG91Y2hNb3ZlKF9ldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaClcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdNb3ZpbmcnKTtcclxuICAgICAgICB0aGlzLmRlbHRhID0gX2V2ZW50LmdldERlbHRhKCkueDtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBuZXcgY2MuVmVjMyhfZXZlbnQuZ2V0RGVsdGEoKS54ICsgdGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBPblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ0VuZCcpO1xyXG4gICAgICAgIGlmICh0aGlzLmRlbHRhID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2hvb3RcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0ZmlyZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1bGxldGZpcmUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBuZXdmaXJlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy53ZWFwb24xKTtcclxuICAgICAgICB0aGlzLndlYXBvblBhcmVudC5hZGRDaGlsZChuZXdmaXJlKTtcclxuXHJcbiAgICAgICAgLy9maW5kIHRoZSBwbGF5ZXIgY3VycmVudCBwb3NpdGlvbiBhbmQgYXNzaWduIGl0IHRvIG5ldyB3ZWFwb25cclxuICAgICAgICBsZXQgd29ybGRwb3MgPSBjYy52MygwLDAsMCk7XHJcbiAgICAgICAgbGV0IHBvcyA9IGNjLnYzKDAsMCwwKTtcclxuICAgICAgICB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsMCwwKSwgd29ybGRwb3MpO1xyXG4gICAgICAgIHRoaXMud2VhcG9uUGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkcG9zLCBwb3MpO1xyXG5cclxuICAgICAgICBuZXdmaXJlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgbmV3ZmlyZS5hbmdsZSA9IDA7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNob290QXVkaW8sIGZhbHNlKTsgLy8gU2hvb3QgYXVkaW9cclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSBcclxuICAgIHtcclxuICAgICAgICAvLyBkaXNhYmxlIGNvbGxpZGVyIHRvIGF2b2lkIGFueSBmdXJ0aGVyIGNvbGxpc2lvbnMgXHJcbiAgICAgICAgLy8gZGlzYWJsZSBncmVlbiBoaWdobGlnaHQgaW5kaWNhdGluZyBwbGF5ZXIgaXMgbm90IHByb3RlY3RlZCBhbmQgaXMgZHlpbmcgXHJcbiAgICAgICAgdGhpcy5FbmFibGVDb2xsaXNpb25NYW5hZ2VyKGZhbHNlLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4yLCAoe3NjYWxlOjB9KSkuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuT25QbGF5ZXJEZWFkKCk7XHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgaXMgZGVhZFwiKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGxheWVyRGVhZEF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSBcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=