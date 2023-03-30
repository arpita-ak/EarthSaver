
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EnemyController4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf792WqKT5AD4krjz9I6piI', 'EnemyController4');
// Script/EnemyController4.ts

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
        _this.strength = 10;
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
        var enemyScale = 0.2;
        var enemyOpacity = 255;
        switch (this.strength) {
            case 0:
                enemyScale = 0.1;
                enemyOpacity = 50;
                break;
            case 1:
                enemyScale = 0.1;
                enemyOpacity = 100;
                break;
            case 2:
                enemyScale = 0.2;
                enemyOpacity = 125;
                break;
            case 3:
                enemyScale = 0.3;
                enemyOpacity = 150;
                break;
            case 4:
                enemyScale = 0.4;
                enemyOpacity = 100;
                break;
            case 5:
                enemyScale = 0.5;
                enemyOpacity = 125;
                break;
            case 6:
                enemyScale = 0.6;
                enemyOpacity = 150;
                break;
            case 7:
                enemyScale = 0.7;
                enemyOpacity = 175;
                break;
            case 8:
                enemyScale = 0.8;
                enemyOpacity = 200;
                break;
            case 9:
                enemyScale = 0.9;
                enemyOpacity = 225;
                break;
            case 10:
                enemyScale = 1;
                enemyOpacity = 255;
                break;
        }
        cc.tween(this.node).to(0.3, ({ scale: enemyScale, opacity: enemyOpacity })).call(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteUNvbnRyb2xsZXI0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFEMUQ7UUFBQSxxRUErREM7UUEzREcsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGNBQVEsR0FBRyxFQUFFLENBQUM7O0lBeURsQixDQUFDO0lBdkRHLHdCQUF3QjtJQUV4QixpQ0FBTSxHQUFOO1FBRUksc0RBQXNEO1FBQ3RELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQTVCLGlCQWlDQztRQS9CRyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUN2QixPQUFPO1FBQ1AsZ0ZBQWdGO1FBRWhGLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLFlBQVksR0FBRyxHQUFHLENBQUM7UUFFdkIsUUFBTyxJQUFJLENBQUMsUUFBUSxFQUNwQjtZQUNJLEtBQUssQ0FBQztnQkFBRSxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7Z0JBQUMsTUFBTTtZQUNuRCxLQUFLLENBQUM7Z0JBQUUsVUFBVSxHQUFHLEdBQUcsQ0FBQztnQkFBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUFDLE1BQU07WUFDcEQsS0FBSyxDQUFDO2dCQUFFLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztnQkFBQyxNQUFNO1lBQ3BELEtBQUssQ0FBQztnQkFBRSxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7Z0JBQUMsTUFBTTtZQUNwRCxLQUFLLENBQUM7Z0JBQUUsVUFBVSxHQUFHLEdBQUcsQ0FBQztnQkFBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUFDLE1BQU07WUFDcEQsS0FBSyxDQUFDO2dCQUFFLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztnQkFBQyxNQUFNO1lBQ3BELEtBQUssQ0FBQztnQkFBRSxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7Z0JBQUMsTUFBTTtZQUNwRCxLQUFLLENBQUM7Z0JBQUUsVUFBVSxHQUFHLEdBQUcsQ0FBQztnQkFBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUFDLE1BQU07WUFDcEQsS0FBSyxDQUFDO2dCQUFFLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztnQkFBQyxNQUFNO1lBQ3BELEtBQUssQ0FBQztnQkFBRSxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7Z0JBQUMsTUFBTTtZQUNwRCxLQUFLLEVBQUU7Z0JBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUFDLE1BQU07U0FDdEQ7UUFFRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUcsVUFBVSxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdFLElBQUksS0FBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQ3RCO2dCQUNJLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFZixDQUFDO0lBRUQsZ0NBQUssR0FBTDtJQUdBLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQVEsRUFBRTtRQUVOLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztJQUNyRCxDQUFDO0lBN0RnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQThEcEM7SUFBRCx1QkFBQztDQTlERCxBQThEQyxDQTlENkMsRUFBRSxDQUFDLFNBQVMsR0E4RHpEO2tCQTlEb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteUNvbnRyb2xsZXIxIGV4dGVuZHMgY2MuQ29tcG9uZW50IFxyXG57XHJcblxyXG4gICAgZ2FtZSA9IG51bGw7XHJcbiAgICBkZWx0YVJvdGF0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgc3RyZW5ndGggPSAxMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy90aGlzLmdhbWUgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgncGxheWVyJyk7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSBcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5zdHJlbmd0aCAhPSAwKVxyXG4gICAgICAgICAgICB0aGlzLnN0cmVuZ3RoIC09IDE7XHJcbiAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY29yZVwiKSkudG8oMC4xLCAoe3NjYWxlOjF9KSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbGV0IGVuZW15U2NhbGUgPSAwLjI7XHJcbiAgICAgICAgbGV0IGVuZW15T3BhY2l0eSA9IDI1NTtcclxuXHJcbiAgICAgICAgc3dpdGNoKHRoaXMuc3RyZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIDA6IGVuZW15U2NhbGUgPSAwLjE7IGVuZW15T3BhY2l0eSA9IDUwOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOiBlbmVteVNjYWxlID0gMC4xOyBlbmVteU9wYWNpdHkgPSAxMDA7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IGVuZW15U2NhbGUgPSAwLjI7IGVuZW15T3BhY2l0eSA9IDEyNTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzogZW5lbXlTY2FsZSA9IDAuMzsgZW5lbXlPcGFjaXR5ID0gMTUwOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OiBlbmVteVNjYWxlID0gMC40OyBlbmVteU9wYWNpdHkgPSAxMDA7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDU6IGVuZW15U2NhbGUgPSAwLjU7IGVuZW15T3BhY2l0eSA9IDEyNTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjogZW5lbXlTY2FsZSA9IDAuNjsgZW5lbXlPcGFjaXR5ID0gMTUwOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA3OiBlbmVteVNjYWxlID0gMC43OyBlbmVteU9wYWNpdHkgPSAxNzU7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDg6IGVuZW15U2NhbGUgPSAwLjg7IGVuZW15T3BhY2l0eSA9IDIwMDsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgOTogZW5lbXlTY2FsZSA9IDAuOTsgZW5lbXlPcGFjaXR5ID0gMjI1OyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDogZW5lbXlTY2FsZSA9IDE7IGVuZW15T3BhY2l0eSA9IDI1NTsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMywgKHtzY2FsZSA6IGVuZW15U2NhbGUsIG9wYWNpdHkgOiBlbmVteU9wYWNpdHl9KSkuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdHJlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSBcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy8gbW92ZSBkb3duIGFuZCByb3RhdGUgcG9zaXRpdmVcclxuICAgICAgICB0aGlzLm5vZGUueSAtPSBkdCAqIE1hdGgucmFuZG9tKCkgKiAxMDAgKiB0aGlzLmRlbHRhUm90YXRpb247XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlICs9IGR0ICogdGhpcy5kZWx0YVJvdGF0aW9uICogNTAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==