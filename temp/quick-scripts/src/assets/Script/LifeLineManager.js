"use strict";
cc._RF.push(module, 'a781eVrpDVHU5GAeBdPgI24', 'LifeLineManager');
// Script/LifeLineManager.ts

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
var LifeLineManager = /** @class */ (function (_super) {
    __extends(LifeLineManager, _super);
    function LifeLineManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CurrentLifelines = 0;
        _this.playerIconPrefab = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    LifeLineManager.prototype.onLoad = function () {
        this.CurrentLifelines = 3;
        for (var i = 0; i < this.CurrentLifelines; i++) {
            var newIcon = cc.instantiate(this.playerIconPrefab);
            this.node.addChild(newIcon);
        }
    };
    LifeLineManager.prototype.start = function () {
    };
    LifeLineManager.prototype.restart = function () {
        if (this.CurrentLifelines == 0) {
            this.CurrentLifelines = 3;
            for (var i = 0; i < this.CurrentLifelines; i++) {
                var newIcon = cc.instantiate(this.playerIconPrefab);
                this.node.addChild(newIcon);
            }
        }
    };
    LifeLineManager.prototype.DecreaseLifeLine = function () {
        if (this.CurrentLifelines) {
            this.CurrentLifelines -= 1;
            this.node.children[0].destroy();
            this.node.getComponent(cc.Layout).updateLayout();
        }
    };
    __decorate([
        property(cc.Prefab)
    ], LifeLineManager.prototype, "playerIconPrefab", void 0);
    LifeLineManager = __decorate([
        ccclass
    ], LifeLineManager);
    return LifeLineManager;
}(cc.Component));
exports.default = LifeLineManager;

cc._RF.pop();