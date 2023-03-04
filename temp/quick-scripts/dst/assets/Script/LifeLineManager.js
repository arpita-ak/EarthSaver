
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LifeLineManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        if (this.CurrentLifelines != 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMaWZlTGluZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUR6RDtRQUFBLHFFQWdEQztRQTdDRyxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFHN0Isc0JBQWdCLEdBQWUsSUFBSSxDQUFDOztRQXlDcEMsaUJBQWlCO0lBQ3JCLENBQUM7SUF4Q0csd0JBQXdCO0lBRXhCLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQzFDO1lBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCwrQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFFSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEVBQzlCO1lBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUMxQixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUMxQztnQkFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtTQUNKO0lBQ0wsQ0FBQztJQUVELDBDQUFnQixHQUFoQjtRQUVJLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFFLENBQUMsRUFDNUI7WUFDSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNwRDtJQUNMLENBQUM7SUF2Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDZ0I7SUFMbkIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQStDbkM7SUFBRCxzQkFBQztDQS9DRCxBQStDQyxDQS9DNEMsRUFBRSxDQUFDLFNBQVMsR0ErQ3hEO2tCQS9Db0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlmZUxpbmVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBDdXJyZW50TGlmZWxpbmVzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwbGF5ZXJJY29uUHJlZmFiIDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuQ3VycmVudExpZmVsaW5lcyA9IDM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuQ3VycmVudExpZmVsaW5lczsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ljb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXllckljb25QcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3SWNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICByZXN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5DdXJyZW50TGlmZWxpbmVzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRMaWZlbGluZXMgPSAzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5DdXJyZW50TGlmZWxpbmVzOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdJY29uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJJY29uUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdJY29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBEZWNyZWFzZUxpZmVMaW5lKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5DdXJyZW50TGlmZWxpbmVzIT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5DdXJyZW50TGlmZWxpbmVzIC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=