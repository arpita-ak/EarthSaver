
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EnemyController2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '136ceoekiVEvbQmItlj/VnE', 'EnemyController2');
// Script/EnemyController2.ts

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
        _this.strength = 3;
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
        if (this.strength != 0)
            this.strength -= 1;
        // else
        //     cc.tween(this.node.getChildByName("score")).to(0.1, ({scale:1})).start();
        var enemyOpacity = 255;
        switch (this.strength) {
            case 0:
                enemyOpacity = 0;
                break;
            case 1:
                enemyOpacity = 100;
                break;
            case 2:
                enemyOpacity = 150;
                break;
        }
        cc.tween(this.node).to(0.3, ({ opacity: enemyOpacity })).call(function () {
            if (_this.strength == 0) {
                _this.node.destroy();
                _this.game.gainScore(3);
            }
        }).start();
    };
    EnemyController1.prototype.start = function () {
    };
    EnemyController1.prototype.update = function (dt) {
        // move down and rotate positive
        this.node.y -= dt * Math.random() * 200 * this.deltaRotation;
        this.node.angle += dt * this.deltaRotation * 200;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteUNvbnRyb2xsZXIyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFEMUQ7UUFBQSxxRUFzREM7UUFsREcsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGNBQVEsR0FBRyxDQUFDLENBQUM7O0lBZ0RqQixDQUFDO0lBOUNHLHdCQUF3QjtJQUV4QixpQ0FBTSxHQUFOO1FBRUksc0RBQXNEO1FBQ3RELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQTVCLGlCQXdCQztRQXRCRyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUN2QixPQUFPO1FBQ1AsZ0ZBQWdGO1FBRWhGLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUV2QixRQUFPLElBQUksQ0FBQyxRQUFRLEVBQ3BCO1lBQ0ksS0FBSyxDQUFDO2dCQUFFLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNoQyxLQUFLLENBQUM7Z0JBQUUsWUFBWSxHQUFHLEdBQUcsQ0FBQztnQkFBQyxNQUFNO1lBQ2xDLEtBQUssQ0FBQztnQkFBRSxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUFDLE1BQU07U0FDckM7UUFFRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUcsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6RCxJQUFJLEtBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUN0QjtnQkFDSSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQjtRQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWYsQ0FBQztJQUVELGdDQUFLLEdBQUw7SUFHQSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFRLEVBQUU7UUFFTixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFDckQsQ0FBQztJQXBEZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FxRHBDO0lBQUQsdUJBQUM7Q0FyREQsQUFxREMsQ0FyRDZDLEVBQUUsQ0FBQyxTQUFTLEdBcUR6RDtrQkFyRG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXlDb250cm9sbGVyMSBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG5cclxuICAgIGdhbWUgPSBudWxsO1xyXG4gICAgZGVsdGFSb3RhdGlvbjogbnVtYmVyID0gMDtcclxuICAgIHN0cmVuZ3RoID0gMztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy90aGlzLmdhbWUgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgncGxheWVyJyk7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSBcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5zdHJlbmd0aCAhPSAwKVxyXG4gICAgICAgICAgICB0aGlzLnN0cmVuZ3RoIC09IDE7XHJcbiAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY29yZVwiKSkudG8oMC4xLCAoe3NjYWxlOjF9KSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbGV0IGVuZW15T3BhY2l0eSA9IDI1NTtcclxuXHJcbiAgICAgICAgc3dpdGNoKHRoaXMuc3RyZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIDA6IGVuZW15T3BhY2l0eSA9IDA7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IGVuZW15T3BhY2l0eSA9IDEwMDsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogZW5lbXlPcGFjaXR5ID0gMTUwOyBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4zLCAoe29wYWNpdHkgOiBlbmVteU9wYWNpdHl9KSkuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdHJlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSBcclxuICAgIHtcclxuICAgICAgICAvLyBtb3ZlIGRvd24gYW5kIHJvdGF0ZSBwb3NpdGl2ZVxyXG4gICAgICAgIHRoaXMubm9kZS55IC09IGR0ICogTWF0aC5yYW5kb20oKSAqIDIwMCAqIHRoaXMuZGVsdGFSb3RhdGlvbjtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgKz0gZHQgKiB0aGlzLmRlbHRhUm90YXRpb24gKiAyMDA7XHJcbiAgICB9XHJcbn1cclxuIl19