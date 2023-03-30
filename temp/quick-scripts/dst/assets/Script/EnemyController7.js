
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EnemyController7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52f326vjWxEUptHWzA1BmTT', 'EnemyController7');
// Script/EnemyController7.ts

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
        _this.enemy6 = null;
        _this.game = null;
        _this.deltaRotation = 0;
        _this.strength = 50;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    EnemyController1.prototype.onLoad = function () {
        //this.game = this.node.parent.getComponent('player');
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.schedule(this.fireEnemy1, 1, cc.macro.REPEAT_FOREVER, 0);
    };
    EnemyController1.prototype.onCollisionEnter = function (other, self) {
        var _this = this;
        var enemyOpacity = this.node.opacity;
        if (this.strength != 0) {
            this.strength -= 1;
            enemyOpacity -= 5;
        }
        // else
        //     cc.tween(this.node.getChildByName("score")).to(0.1, ({scale:1})).start();
        cc.tween(this.node).to(0.3, ({ opacity: enemyOpacity })).call(function () {
            if (_this.strength == 0) {
                _this.node.destroy();
                _this.game.gainScore(50);
            }
        }).start();
    };
    EnemyController1.prototype.fireEnemy1 = function () {
        var newEnemy = cc.instantiate(this.enemy6);
        newEnemy.parent = this.node.parent;
        newEnemy.setPosition(this.node.getPosition());
    };
    EnemyController1.prototype.start = function () {
    };
    EnemyController1.prototype.update = function (dt) {
        // move down and rotate positive
        this.node.y -= dt * Math.random() * this.deltaRotation;
        this.node.x += dt * 500 * (this.deltaRotation - 0.5);
        this.node.angle += dt * this.deltaRotation * 500;
    };
    __decorate([
        property(cc.Prefab)
    ], EnemyController1.prototype, "enemy6", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteUNvbnRyb2xsZXI3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFEMUQ7UUFBQSxxRUE4REM7UUF6REcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUFxRGxCLENBQUM7SUFuREcsd0JBQXdCO0lBRXhCLGlDQUFNLEdBQU47UUFFSSxzREFBc0Q7UUFDdEQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELDJDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUE1QixpQkFtQkM7UUFqQkcsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFDdEI7WUFDSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztZQUNuQixZQUFZLElBQUksQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTztRQUNQLGdGQUFnRjtRQUVoRixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUcsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6RCxJQUFJLEtBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUN0QjtnQkFDSSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQjtRQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWYsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFFSSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxnQ0FBSyxHQUFMO0lBR0EsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBUSxFQUFFO1FBRU4sZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUUsR0FBRyxHQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFDckQsQ0FBQztJQXhERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNLO0lBSlIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0E2RHBDO0lBQUQsdUJBQUM7Q0E3REQsQUE2REMsQ0E3RDZDLEVBQUUsQ0FBQyxTQUFTLEdBNkR6RDtrQkE3RG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXlDb250cm9sbGVyMSBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBlbmVteTY6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgZ2FtZSA9IG51bGw7XHJcbiAgICBkZWx0YVJvdGF0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgc3RyZW5ndGggPSA1MDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy90aGlzLmdhbWUgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgncGxheWVyJyk7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmZpcmVFbmVteTEsIDEsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSBcclxuICAgIHtcclxuICAgICAgICBsZXQgZW5lbXlPcGFjaXR5ID0gdGhpcy5ub2RlLm9wYWNpdHlcclxuICAgICAgICBpZiAodGhpcy5zdHJlbmd0aCAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdHJlbmd0aCAtPSAxOyBcclxuICAgICAgICAgICAgZW5lbXlPcGFjaXR5IC09IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVsc2VcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic2NvcmVcIikpLnRvKDAuMSwgKHtzY2FsZToxfSkpLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4zLCAoe29wYWNpdHkgOiBlbmVteU9wYWNpdHl9KSkuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdHJlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSg1MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaXJlRW5lbXkxKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbmV3RW5lbXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVuZW15Nik7XHJcbiAgICAgICAgbmV3RW5lbXkucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICBuZXdFbmVteS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkgXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIFxyXG4gICAge1xyXG4gICAgICAgIC8vIG1vdmUgZG93biBhbmQgcm90YXRlIHBvc2l0aXZlXHJcbiAgICAgICAgdGhpcy5ub2RlLnkgLT0gZHQgKiBNYXRoLnJhbmRvbSgpICogdGhpcy5kZWx0YVJvdGF0aW9uO1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IGR0ICo1MDAqICh0aGlzLmRlbHRhUm90YXRpb24tMC41KTtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgKz0gZHQgKiB0aGlzLmRlbHRhUm90YXRpb24gKiA1MDA7XHJcbiAgICB9XHJcbn1cclxuIl19