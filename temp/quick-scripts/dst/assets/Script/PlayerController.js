
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
        this.node.children[0].opacity = 100;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBc0Msb0NBQVk7SUFEbEQ7UUFBQSxxRUFxSEM7UUFsSEcsZ0RBQWdEO1FBQ2hELG9CQUFvQjtRQUNwQixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVosb0JBQW9CO1FBQ3BCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBaUdoQyxDQUFDO0lBL0ZHLGlDQUFNLEdBQU47UUFBQSxpQkFzQkM7UUFwQkcsd0VBQXdFO1FBQ3hFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLFFBQVEsQ0FDTCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUMzQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENB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O1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO3dEQUNDO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzs2REFDTTtJQWhCNUIsZ0JBQWdCO1FBRDVCLE9BQU87T0FDSyxnQkFBZ0IsQ0FvSDVCO0lBQUQsdUJBQUM7Q0FwSEQsQUFvSEMsQ0FwSHFDLEVBQUUsQ0FBQyxTQUFTLEdBb0hqRDtBQXBIWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvL3ByZWZhYiBjYW5ub3QgdGFrZSByZWZlcmVuY2VzIGZyb20gc2NlbmUgbm9kZXNcclxuICAgIC8vQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lID0gbnVsbDtcclxuXHJcbiAgICAvL0Bwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd2VhcG9uUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgd2VhcG9uMTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBzaG9vdEF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuQXVkaW9DbGlwfSlcclxuICAgIHBsYXllckRlYWRBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb2Zmc2V0UG9zOiBjYy5WZWMzID0gY2MudjMoMCwgMCwgMCk7XHJcbiAgICBwcm90ZWN0ZWQgZGVsdGE6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICAvLyBkaXNhYmxlIGNvbGxpZGVyIGFuZCBlbmFibGUgZ3JlZW4gaGlnaGxpZ2h0IGluZGljYXRpbmcgcGxheWVyIGlzIHNhZmVcclxuICAgICAgICB0aGlzLkVuYWJsZUNvbGxpc2lvbk1hbmFnZXIoZmFsc2UsIHRydWUpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNSwgKHtvcGFjaXR5OiAwfSkpLCBcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjUsICh7b3BhY2l0eTogMjU1fSkpKVxyXG4gICAgICAgIC5yZXBlYXQoMylcclxuICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgLy8gZW5hYmxlIGNvbGxpZGVyIGFuZCBkaXNhYmxlIGdyZWVuIGhpZ2hsaWdodCBpbmRpY2F0aW5nIHBsYXllciBpcyBub3QgcHJvdGVjdGVkIGFuZCByZWFkeSB0byBmaWdodFxyXG4gICAgICAgICAgICB0aGlzLkVuYWJsZUNvbGxpc2lvbk1hbmFnZXIodHJ1ZSwgZmFsc2UpXHJcbiAgICAgICAgfSwgNCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5PblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLk9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLk9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuT25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIEVuYWJsZUNvbGxpc2lvbk1hbmFnZXIoZmxhZzpib29sZWFuLCBwcm90ZWN0OmJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSBmbGFnO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBwcm90ZWN0O1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5vcGFjaXR5ID0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIE9uVG91Y2hTdGFydChfZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnU3RhcnQnKTtcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBPblRvdWNoTW92ZShfZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnTW92aW5nJyk7XHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IF9ldmVudC5nZXREZWx0YSgpLng7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gbmV3IGNjLlZlYzMoX2V2ZW50LmdldERlbHRhKCkueCArIHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaClcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdFbmQnKTtcclxuICAgICAgICBpZiAodGhpcy5kZWx0YSA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInNob290XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1bGxldGZpcmUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidWxsZXRmaXJlKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbmV3ZmlyZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMud2VhcG9uMSk7XHJcbiAgICAgICAgdGhpcy53ZWFwb25QYXJlbnQuYWRkQ2hpbGQobmV3ZmlyZSk7XHJcblxyXG4gICAgICAgIC8vZmluZCB0aGUgcGxheWVyIGN1cnJlbnQgcG9zaXRpb24gYW5kIGFzc2lnbiBpdCB0byBuZXcgd2VhcG9uXHJcbiAgICAgICAgbGV0IHdvcmxkcG9zID0gY2MudjMoMCwwLDApO1xyXG4gICAgICAgIGxldCBwb3MgPSBjYy52MygwLDAsMCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MygwLDAsMCksIHdvcmxkcG9zKTtcclxuICAgICAgICB0aGlzLndlYXBvblBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZHBvcywgcG9zKTtcclxuXHJcbiAgICAgICAgbmV3ZmlyZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIG5ld2ZpcmUuYW5nbGUgPSAwO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zaG9vdEF1ZGlvLCBmYWxzZSk7IC8vIFNob290IGF1ZGlvXHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikgXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBjb2xsaWRlciB0byBhdm9pZCBhbnkgZnVydGhlciBjb2xsaXNpb25zIFxyXG4gICAgICAgIC8vIGRpc2FibGUgZ3JlZW4gaGlnaGxpZ2h0IGluZGljYXRpbmcgcGxheWVyIGlzIG5vdCBwcm90ZWN0ZWQgYW5kIGlzIGR5aW5nIFxyXG4gICAgICAgIHRoaXMuRW5hYmxlQ29sbGlzaW9uTWFuYWdlcihmYWxzZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMiwgKHtzY2FsZTowfSkpLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLk9uUGxheWVyRGVhZCgpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIGlzIGRlYWRcIik7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBsYXllckRlYWRBdWRpbywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkgXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkgXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19