
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EnemyController3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65363t5epJIC7dkn17A9wxq', 'EnemyController3');
// Script/EnemyController3.ts

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
        _this.strength = 5;
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
                enemyScale = 0.6;
                enemyOpacity = 0;
                break;
            case 1:
                enemyScale = 0.5;
                enemyOpacity = 100;
                break;
            case 2:
                enemyScale = 0.4;
                enemyOpacity = 140;
                break;
            case 3:
                enemyScale = 0.3;
                enemyOpacity = 190;
                break;
            case 4:
                enemyScale = 0.2;
                enemyOpacity = 220;
                break;
        }
        cc.tween(this.node).to(0.3, ({ scale: enemyScale, opacity: enemyOpacity })).call(function () {
            if (_this.strength == 0) {
                _this.node.destroy();
                _this.game.gainScore(5);
            }
        }).start();
    };
    EnemyController1.prototype.start = function () {
    };
    EnemyController1.prototype.update = function (dt) {
        // move down and rotate positive
        this.node.y -= dt * Math.random() * 300 * this.deltaRotation;
        this.node.angle += dt * this.deltaRotation * 300;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteUNvbnRyb2xsZXIzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFEMUQ7UUFBQSxxRUF5REM7UUFyREcsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGNBQVEsR0FBRyxDQUFDLENBQUM7O0lBbURqQixDQUFDO0lBakRHLHdCQUF3QjtJQUV4QixpQ0FBTSxHQUFOO1FBRUksc0RBQXNEO1FBQ3RELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQTVCLGlCQTJCQztRQXpCRyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUN2QixPQUFPO1FBQ1AsZ0ZBQWdGO1FBRWhGLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLFlBQVksR0FBRyxHQUFHLENBQUM7UUFFdkIsUUFBTyxJQUFJLENBQUMsUUFBUSxFQUNwQjtZQUNJLEtBQUssQ0FBQztnQkFBRSxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQUMsTUFBTTtZQUNsRCxLQUFLLENBQUM7Z0JBQUUsVUFBVSxHQUFHLEdBQUcsQ0FBQztnQkFBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUFDLE1BQU07WUFDcEQsS0FBSyxDQUFDO2dCQUFFLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztnQkFBQyxNQUFNO1lBQ3BELEtBQUssQ0FBQztnQkFBRSxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7Z0JBQUMsTUFBTTtZQUNwRCxLQUFLLENBQUM7Z0JBQUUsVUFBVSxHQUFHLEdBQUcsQ0FBQztnQkFBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUFDLE1BQU07U0FDdkQ7UUFFRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUcsVUFBVSxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdFLElBQUksS0FBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQ3RCO2dCQUNJLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1FBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFZixDQUFDO0lBRUQsZ0NBQUssR0FBTDtJQUdBLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQVEsRUFBRTtRQUVOLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztJQUNyRCxDQUFDO0lBdkRnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXdEcEM7SUFBRCx1QkFBQztDQXhERCxBQXdEQyxDQXhENkMsRUFBRSxDQUFDLFNBQVMsR0F3RHpEO2tCQXhEb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteUNvbnRyb2xsZXIxIGV4dGVuZHMgY2MuQ29tcG9uZW50IFxyXG57XHJcblxyXG4gICAgZ2FtZSA9IG51bGw7XHJcbiAgICBkZWx0YVJvdGF0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgc3RyZW5ndGggPSA1O1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSBcclxuICAgIHtcclxuICAgICAgICAvL3RoaXMuZ2FtZSA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCdwbGF5ZXInKTtcclxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnN0cmVuZ3RoICE9IDApXHJcbiAgICAgICAgICAgIHRoaXMuc3RyZW5ndGggLT0gMTtcclxuICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjb3JlXCIpKS50bygwLjEsICh7c2NhbGU6MX0pKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBsZXQgZW5lbXlTY2FsZSA9IDAuMjtcclxuICAgICAgICBsZXQgZW5lbXlPcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICBzd2l0Y2godGhpcy5zdHJlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogZW5lbXlTY2FsZSA9IDAuNjsgZW5lbXlPcGFjaXR5ID0gMDsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTogZW5lbXlTY2FsZSA9IDAuNTsgZW5lbXlPcGFjaXR5ID0gMTAwOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiBlbmVteVNjYWxlID0gMC40OyBlbmVteU9wYWNpdHkgPSAxNDA7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6IGVuZW15U2NhbGUgPSAwLjM7IGVuZW15T3BhY2l0eSA9IDE5MDsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDogZW5lbXlTY2FsZSA9IDAuMjsgZW5lbXlPcGFjaXR5ID0gMjIwOyBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4zLCAoe3NjYWxlIDogZW5lbXlTY2FsZSwgb3BhY2l0eSA6IGVuZW15T3BhY2l0eX0pKS5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZ2FpblNjb3JlKDUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkgXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIFxyXG4gICAge1xyXG4gICAgICAgIC8vIG1vdmUgZG93biBhbmQgcm90YXRlIHBvc2l0aXZlXHJcbiAgICAgICAgdGhpcy5ub2RlLnkgLT0gZHQgKiBNYXRoLnJhbmRvbSgpICogMzAwICogdGhpcy5kZWx0YVJvdGF0aW9uO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSArPSBkdCAqIHRoaXMuZGVsdGFSb3RhdGlvbiAqIDMwMDtcclxuICAgIH1cclxufVxyXG4iXX0=