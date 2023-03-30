"use strict";
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