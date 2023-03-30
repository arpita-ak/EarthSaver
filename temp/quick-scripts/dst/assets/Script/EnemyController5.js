
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EnemyController5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f735blIhCtD+YL2XhjNjpmA', 'EnemyController5');
// Script/EnemyController5.ts

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
        _this.strength = 15;
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
        var enemyOpacity = this.node.opacity;
        if (this.strength != 0) {
            this.strength -= 1;
            enemyOpacity -= 20;
        }
        // else
        //     cc.tween(this.node.getChildByName("score")).to(0.1, ({scale:1})).start();
        cc.tween(this.node).to(0.3, ({ opacity: enemyOpacity })).call(function () {
            if (_this.strength == 0) {
                _this.node.destroy();
                _this.game.gainScore(10);
            }
        }).start();
    };
    EnemyController1.prototype.start = function () {
    };
    EnemyController1.prototype.update = function (dt) {
        // move down and rotate positive
        this.node.y -= dt * Math.random() * 100 * this.deltaRotation;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteUNvbnRyb2xsZXI1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFEMUQ7UUFBQSxxRUFpREM7UUE3Q0csVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGNBQVEsR0FBRyxFQUFFLENBQUM7O0lBMkNsQixDQUFDO0lBekNHLHdCQUF3QjtJQUV4QixpQ0FBTSxHQUFOO1FBRUksc0RBQXNEO1FBQ3RELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQTVCLGlCQW1CQztRQWpCRyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUN0QjtZQUNJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1lBQ25CLFlBQVksSUFBSSxFQUFFLENBQUM7U0FDdEI7UUFDRCxPQUFPO1FBQ1AsZ0ZBQWdGO1FBRWhGLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRyxZQUFZLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pELElBQUksS0FBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQ3RCO2dCQUNJLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFZixDQUFDO0lBRUQsZ0NBQUssR0FBTDtJQUdBLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQVEsRUFBRTtRQUVOLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztJQUNyRCxDQUFDO0lBL0NnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQWdEcEM7SUFBRCx1QkFBQztDQWhERCxBQWdEQyxDQWhENkMsRUFBRSxDQUFDLFNBQVMsR0FnRHpEO2tCQWhEb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteUNvbnRyb2xsZXIxIGV4dGVuZHMgY2MuQ29tcG9uZW50IFxyXG57XHJcblxyXG4gICAgZ2FtZSA9IG51bGw7XHJcbiAgICBkZWx0YVJvdGF0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgc3RyZW5ndGggPSAxNTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy90aGlzLmdhbWUgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgncGxheWVyJyk7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSBcclxuICAgIHtcclxuICAgICAgICBsZXQgZW5lbXlPcGFjaXR5ID0gdGhpcy5ub2RlLm9wYWNpdHlcclxuICAgICAgICBpZiAodGhpcy5zdHJlbmd0aCAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdHJlbmd0aCAtPSAxOyBcclxuICAgICAgICAgICAgZW5lbXlPcGFjaXR5IC09IDIwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjb3JlXCIpKS50bygwLjEsICh7c2NhbGU6MX0pKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMywgKHtvcGFjaXR5IDogZW5lbXlPcGFjaXR5fSkpLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RyZW5ndGggPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5nYWluU2NvcmUoMTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkgXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIFxyXG4gICAge1xyXG4gICAgICAgIC8vIG1vdmUgZG93biBhbmQgcm90YXRlIHBvc2l0aXZlXHJcbiAgICAgICAgdGhpcy5ub2RlLnkgLT0gZHQgKiBNYXRoLnJhbmRvbSgpICogMTAwICogdGhpcy5kZWx0YVJvdGF0aW9uO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSArPSBkdCAqIHRoaXMuZGVsdGFSb3RhdGlvbiAqIDUwMDtcclxuICAgIH1cclxufVxyXG4iXX0=