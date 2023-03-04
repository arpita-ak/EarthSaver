
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/EnemyController1');
require('./assets/Script/LifeLineManager');
require('./assets/Script/MainScript');
require('./assets/Script/PlayerController');
require('./assets/Script/WeaponController1');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/WeaponController1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e2e1Nj6qJA1objbiX+wEo7', 'WeaponController1');
// Script/WeaponController1.ts

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
var WeaponController1 = /** @class */ (function (_super) {
    __extends(WeaponController1, _super);
    function WeaponController1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    WeaponController1.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    WeaponController1.prototype.onCollisionEnter = function (other, self) {
        this.node.destroy();
    };
    WeaponController1.prototype.start = function () {
    };
    WeaponController1.prototype.update = function (dt) {
        // fire moving move up 
        this.node.y += dt * 500;
    };
    WeaponController1 = __decorate([
        ccclass
    ], WeaponController1);
    return WeaponController1;
}(cc.Component));
exports.default = WeaponController1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXZWFwb25Db250cm9sbGVyMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQStDLHFDQUFZO0lBQTNEOztJQXlCQSxDQUFDO0lBdkJHLHdCQUF3QjtJQUV4QixrQ0FBTSxHQUFOO1FBRUksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFFMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsaUNBQUssR0FBTDtJQUdBLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQVEsRUFBRTtRQUVOLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUMsR0FBRyxDQUFDO0lBQzFCLENBQUM7SUF4QmdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBeUJyQztJQUFELHdCQUFDO0NBekJELEFBeUJDLENBekI4QyxFQUFFLENBQUMsU0FBUyxHQXlCMUQ7a0JBekJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXBvbkNvbnRyb2xsZXIxIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSBcclxuICAgIHtcclxuICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSBcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZmlyZSBtb3ZpbmcgbW92ZSB1cCBcclxuICAgICAgICB0aGlzLm5vZGUueSArPSBkdCo1MDA7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EnemyController1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95ffenyuj5EFbu7xf4VeGFw', 'EnemyController1');
// Script/EnemyController1.ts

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
        cc.tween(this.node).to(0.2, ({ scale: 0 })).call(function () { _this.node.destroy(); }).start();
        this.game.gainScore();
    };
    EnemyController1.prototype.start = function () {
    };
    EnemyController1.prototype.update = function (dt) {
        // move down and rotate positive
        this.node.y -= dt * Math.random() * 500 * this.deltaRotation;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteUNvbnRyb2xsZXIxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFEMUQ7UUFBQSxxRUFpQ0M7UUE3QkcsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLG1CQUFhLEdBQVcsQ0FBQyxDQUFDOztJQTRCOUIsQ0FBQztJQTFCRyx3QkFBd0I7SUFFeEIsaUNBQU0sR0FBTjtRQUVJLHNEQUFzRDtRQUN0RCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELDJDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUE1QixpQkFJQztRQUZHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUssS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGdDQUFLLEdBQUw7SUFHQSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFRLEVBQUU7UUFFTixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFDckQsQ0FBQztJQS9CZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FnQ3BDO0lBQUQsdUJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQzZDLEVBQUUsQ0FBQyxTQUFTLEdBZ0N6RDtrQkFoQ29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXlDb250cm9sbGVyMSBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG5cclxuICAgIGdhbWUgPSBudWxsO1xyXG4gICAgZGVsdGFSb3RhdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy90aGlzLmdhbWUgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgncGxheWVyJyk7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSBcclxuICAgIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMiwgKHtzY2FsZTowfSkpLmNhbGwoKCk9Pnt0aGlzLm5vZGUuZGVzdHJveSgpO30pLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSBcclxuICAgIHtcclxuICAgICAgICAvLyBtb3ZlIGRvd24gYW5kIHJvdGF0ZSBwb3NpdGl2ZVxyXG4gICAgICAgIHRoaXMubm9kZS55IC09IGR0ICogTWF0aC5yYW5kb20oKSAqIDUwMCAqIHRoaXMuZGVsdGFSb3RhdGlvbjtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgKz0gZHQgKiB0aGlzLmRlbHRhUm90YXRpb24gKiA1MDA7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
        //audioEngine.playEffect(this.laserAudio, false); // Shoot audio
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
    };
    PlayerController.prototype.start = function () {
    };
    PlayerController.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Prefab)
    ], PlayerController.prototype, "weapon1", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBc0Msb0NBQVk7SUFEbEQ7UUFBQSxxRUE2R0M7UUExR0csZ0RBQWdEO1FBQ2hELG9CQUFvQjtRQUNwQixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVosb0JBQW9CO1FBQ3BCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFaEIsZUFBUyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQStGaEMsQ0FBQztJQTdGRyxpQ0FBTSxHQUFOO1FBQUEsaUJBc0JDO1FBcEJHLHdFQUF3RTtRQUN4RSxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQixRQUFRLENBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsRUFDM0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUNqRCxNQUFNLENB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QUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXRELE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbEIsZ0VBQWdFO0lBQ3BFLENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFBNUIsaUJBWUM7UUFWRyxvREFBb0Q7UUFDcEQsMkVBQTJFO1FBQzNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFMUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRVgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxnQ0FBSyxHQUFMO0lBR0EsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxFQUFFO0lBR1QsQ0FBQztJQWpHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNNO0lBVmpCLGdCQUFnQjtRQUQ1QixPQUFPO09BQ0ssZ0JBQWdCLENBNEc1QjtJQUFELHVCQUFDO0NBNUdELEFBNEdDLENBNUdxQyxFQUFFLENBQUMsU0FBUyxHQTRHakQ7QUE1R1ksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy9wcmVmYWIgY2Fubm90IHRha2UgcmVmZXJlbmNlcyBmcm9tIHNjZW5lIG5vZGVzXHJcbiAgICAvL0Bwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZSA9IG51bGw7XHJcblxyXG4gICAgLy9AcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdlYXBvblBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHdlYXBvbjE6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9mZnNldFBvczogY2MuVmVjMyA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgcHJvdGVjdGVkIGRlbHRhOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBjb2xsaWRlciBhbmQgZW5hYmxlIGdyZWVuIGhpZ2hsaWdodCBpbmRpY2F0aW5nIHBsYXllciBpcyBzYWZlXHJcbiAgICAgICAgdGhpcy5FbmFibGVDb2xsaXNpb25NYW5hZ2VyKGZhbHNlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgIC5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjUsICh7b3BhY2l0eTogMH0pKSwgXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC41LCAoe29wYWNpdHk6IDI1NX0pKSlcclxuICAgICAgICAucmVwZWF0KDMpXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjb2xsaWRlciBhbmQgZGlzYWJsZSBncmVlbiBoaWdobGlnaHQgaW5kaWNhdGluZyBwbGF5ZXIgaXMgbm90IHByb3RlY3RlZCBhbmQgcmVhZHkgdG8gZmlnaHRcclxuICAgICAgICAgICAgdGhpcy5FbmFibGVDb2xsaXNpb25NYW5hZ2VyKHRydWUsIGZhbHNlKVxyXG4gICAgICAgIH0sIDQpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuT25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5PblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5PblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLk9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBFbmFibGVDb2xsaXNpb25NYW5hZ2VyKGZsYWc6Ym9vbGVhbiwgcHJvdGVjdDpib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtYW5hZ2VyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gZmxhZztcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gcHJvdGVjdDtcclxuICAgIH1cclxuXHJcbiAgICBPblRvdWNoU3RhcnQoX2V2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ1N0YXJ0Jyk7XHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgT25Ub3VjaE1vdmUoX2V2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKVxyXG4gICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ01vdmluZycpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSBfZXZlbnQuZ2V0RGVsdGEoKS54O1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKF9ldmVudC5nZXREZWx0YSgpLnggKyB0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIE9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnRW5kJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsdGEgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzaG9vdFwiKTtcclxuICAgICAgICAgICAgdGhpcy5idWxsZXRmaXJlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVsbGV0ZmlyZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5ld2ZpcmU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndlYXBvbjEpO1xyXG4gICAgICAgIHRoaXMud2VhcG9uUGFyZW50LmFkZENoaWxkKG5ld2ZpcmUpO1xyXG5cclxuICAgICAgICAvL2ZpbmQgdGhlIHBsYXllciBjdXJyZW50IHBvc2l0aW9uIGFuZCBhc3NpZ24gaXQgdG8gbmV3IHdlYXBvblxyXG4gICAgICAgIGxldCB3b3JsZHBvcyA9IGNjLnYzKDAsMCwwKTtcclxuICAgICAgICBsZXQgcG9zID0gY2MudjMoMCwwLDApO1xyXG4gICAgICAgIHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwwLDApLCB3b3JsZHBvcyk7XHJcbiAgICAgICAgdGhpcy53ZWFwb25QYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRwb3MsIHBvcyk7XHJcblxyXG4gICAgICAgIG5ld2ZpcmUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICBuZXdmaXJlLmFuZ2xlID0gMDtcclxuICAgICAgICAvL2F1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5sYXNlckF1ZGlvLCBmYWxzZSk7IC8vIFNob290IGF1ZGlvXHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikgXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBjb2xsaWRlciB0byBhdm9pZCBhbnkgZnVydGhlciBjb2xsaXNpb25zIFxyXG4gICAgICAgIC8vIGRpc2FibGUgZ3JlZW4gaGlnaGxpZ2h0IGluZGljYXRpbmcgcGxheWVyIGlzIG5vdCBwcm90ZWN0ZWQgYW5kIGlzIGR5aW5nIFxyXG4gICAgICAgIHRoaXMuRW5hYmxlQ29sbGlzaW9uTWFuYWdlcihmYWxzZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMiwgKHtzY2FsZTowfSkpLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLk9uUGxheWVyRGVhZCgpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIGlzIGRlYWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSBcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '584aeON8yBKVoOleimUpAHm', 'MainScript');
// Script/MainScript.ts

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
var LifeLineManager_1 = require("./LifeLineManager");
var PlayerController_1 = require("./PlayerController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainScript = /** @class */ (function (_super) {
    __extends(MainScript, _super);
    function MainScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startScreen = null;
        _this.restartScreen = null;
        _this.EnemyPrefab = null;
        _this.playerPrefab = null;
        _this.scoreDisplay = null;
        _this.highscoreDisplay = null;
        _this.lifeLineManager = null;
        _this.score = 0;
        _this.highScore = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    MainScript.prototype.onLoad = function () {
        this.score = 0;
        this.highScore = 0;
        this.scoreDisplay.string = '0';
        this.startScreen.active = true;
    };
    MainScript.prototype.OnStartClick = function () {
        this.startScreen.active = false;
        this.restartScreen.active = false;
        //update life lines 
        this.lifeLineManager.restart();
        //update score and highscore
        if (this.score > this.highScore)
            this.highScore = this.score;
        this.score = 0;
        this.scoreDisplay.string = this.score.toString();
        this.highscoreDisplay.string = this.highScore.toString();
        // generate player
        var newPlayer = cc.instantiate(this.playerPrefab);
        this.node.addChild(newPlayer);
        var playerControllerScript = newPlayer.getComponent(PlayerController_1.PlayerController);
        playerControllerScript.weaponParent = this.node.getChildByName("weapon");
        playerControllerScript.game = this;
        // generate 2 enemies every second
        this.schedule(this.spawnNewRound, 0.5, cc.macro.REPEAT_FOREVER, 0);
    };
    MainScript.prototype.spawnNewRound = function () {
        var newRound = cc.instantiate(this.EnemyPrefab);
        this.node.getChildByName("enemies").addChild(newRound);
        newRound.setPosition(this.getNewEnemyPosition());
        var enemyControllerScript = newRound.getComponent('EnemyController1');
        enemyControllerScript.game = this;
        enemyControllerScript.deltaRotation = Math.random();
    };
    MainScript.prototype.gainScore = function () {
        // Update the words of the scoreDisplay Label
        this.score += 1;
        this.scoreDisplay.string = this.score.toString();
        this.restartScreen.getChildByName("Score_value").getComponent(cc.Label).string = this.score.toString();
    };
    MainScript.prototype.getNewEnemyPosition = function () {
        var randX = Math.random() * Math.random() * 2 * (this.node.width / 2 - 20) - 250;
        var randY = Math.random() * Math.random() * 5 * (this.node.height / 2 - 200) + 200;
        //console.log(randX,randY);
        return cc.v2(randX, randY);
    };
    MainScript.prototype.OnPlayerDead = function () {
        this.lifeLineManager.DecreaseLifeLine();
        if (this.lifeLineManager.CurrentLifelines == 0) {
            // restart 
            this.unschedule(this.spawnNewRound);
            this.node.getChildByName("enemies").children.forEach(function (e) { return (e.destroy()); });
            this.restartScreen.active = true;
            this.restartScreen.getChildByName("Score_value").getComponent(cc.Label).string = this.score.toString();
            this.restartScreen.getChildByName("highScore_value").getComponent(cc.Label).string = this.highScore.toString();
        }
        else {
            //continue
            // generate player  
            var newPlayer = cc.instantiate(this.playerPrefab);
            this.node.addChild(newPlayer);
            var playerControllerScript = newPlayer.getComponent(PlayerController_1.PlayerController);
            playerControllerScript.weaponParent = this.node.getChildByName("weapon");
            playerControllerScript.game = this;
        }
    };
    MainScript.prototype.start = function () {
    };
    MainScript.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Node)
    ], MainScript.prototype, "startScreen", void 0);
    __decorate([
        property(cc.Node)
    ], MainScript.prototype, "restartScreen", void 0);
    __decorate([
        property(cc.Prefab)
    ], MainScript.prototype, "EnemyPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], MainScript.prototype, "playerPrefab", void 0);
    __decorate([
        property(cc.Label)
    ], MainScript.prototype, "scoreDisplay", void 0);
    __decorate([
        property(cc.Label)
    ], MainScript.prototype, "highscoreDisplay", void 0);
    __decorate([
        property(LifeLineManager_1.default)
    ], MainScript.prototype, "lifeLineManager", void 0);
    MainScript = __decorate([
        ccclass
    ], MainScript);
    return MainScript;
}(cc.Component));
exports.default = MainScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFEQUFnRDtBQUNoRCx1REFBc0Q7QUFFaEQsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUkxQztJQUF3Qyw4QkFBWTtJQUZwRDtRQUFBLHFFQWtJQztRQTdIRyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFlLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFHbEMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBRXhDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUF3RzFCLENBQUM7SUF0R0csd0JBQXdCO0lBRXhCLDJCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFFSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWxDLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsZUFB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QXNCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRCwwQkFBSyxHQUFMO0lBR0EsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBUSxFQUFFO0lBR1YsQ0FBQztJQTNIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNZO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ1c7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDZTtJQUdsQztRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO3VEQUNjO0lBckJ2QixVQUFVO1FBRjlCLE9BQU87T0FFYSxVQUFVLENBZ0k5QjtJQUFELGlCQUFDO0NBaElELEFBZ0lDLENBaEl1QyxFQUFFLENBQUMsU0FBUyxHQWdJbkQ7a0JBaElvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IExpZmVMaW5lTWFuYWdlciBmcm9tIFwiLi9MaWZlTGluZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyQ29udHJvbGxlciB9IGZyb20gXCIuL1BsYXllckNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RhcnRTY3JlZW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmVzdGFydFNjcmVlbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEVuZW15UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwbGF5ZXJQcmVmYWIgOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlRGlzcGxheTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGhpZ2hzY29yZURpc3BsYXk6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTGlmZUxpbmVNYW5hZ2VyKVxyXG4gICAgbGlmZUxpbmVNYW5hZ2VyOiBMaWZlTGluZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgaGlnaFNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJzAnO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTY3JlZW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBPblN0YXJ0Q2xpY2soKSAvLyBvciByZXN0YXJ0XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGFydFNjcmVlbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIGxpZmUgbGluZXMgXHJcbiAgICAgICAgdGhpcy5saWZlTGluZU1hbmFnZXIucmVzdGFydCgpO1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSBzY29yZSBhbmQgaGlnaHNjb3JlXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiB0aGlzLmhpZ2hTY29yZSlcclxuICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMuaGlnaHNjb3JlRGlzcGxheS5zdHJpbmcgPSB0aGlzLmhpZ2hTY29yZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBnZW5lcmF0ZSBwbGF5ZXJcclxuICAgICAgICBsZXQgbmV3UGxheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJQcmVmYWIpXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1BsYXllcik7XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJDb250cm9sbGVyU2NyaXB0ID0gbmV3UGxheWVyLmdldENvbXBvbmVudChQbGF5ZXJDb250cm9sbGVyKTtcclxuICAgICAgICBwbGF5ZXJDb250cm9sbGVyU2NyaXB0LndlYXBvblBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndlYXBvblwiKTtcclxuICAgICAgICBwbGF5ZXJDb250cm9sbGVyU2NyaXB0LmdhbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBnZW5lcmF0ZSAyIGVuZW1pZXMgZXZlcnkgc2Vjb25kXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnNwYXduTmV3Um91bmQsIDAuNSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduTmV3Um91bmQoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBuZXdSb3VuZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuRW5lbXlQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImVuZW1pZXNcIikuYWRkQ2hpbGQobmV3Um91bmQpO1xyXG4gICAgICAgIG5ld1JvdW5kLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3RW5lbXlQb3NpdGlvbigpKTsgXHJcblxyXG4gICAgICAgIGxldCBlbmVteUNvbnRyb2xsZXJTY3JpcHQgPSBuZXdSb3VuZC5nZXRDb21wb25lbnQoJ0VuZW15Q29udHJvbGxlcjEnKVxyXG4gICAgICAgIGVuZW15Q29udHJvbGxlclNjcmlwdC5nYW1lID0gdGhpcztcclxuICAgICAgICBlbmVteUNvbnRyb2xsZXJTY3JpcHQuZGVsdGFSb3RhdGlvbiA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FpblNjb3JlKCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB3b3JkcyBvZiB0aGUgc2NvcmVEaXNwbGF5IExhYmVsXHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uZ2V0Q2hpbGRCeU5hbWUoXCJTY29yZV92YWx1ZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdFbmVteVBvc2l0aW9uKCkgXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHJhbmRYID0gTWF0aC5yYW5kb20oKSAqIE1hdGgucmFuZG9tKCkgKjIqICh0aGlzLm5vZGUud2lkdGgvMiAtIDIwKS0yNTA7XHJcbiAgICAgICAgdmFyIHJhbmRZID0gTWF0aC5yYW5kb20oKSAqIE1hdGgucmFuZG9tKCkgKjUqICh0aGlzLm5vZGUuaGVpZ2h0LzIgLSAyMDApKyAyMDA7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyYW5kWCxyYW5kWSk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XHJcbiAgICB9XHJcblxyXG4gICAgT25QbGF5ZXJEZWFkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpZmVMaW5lTWFuYWdlci5EZWNyZWFzZUxpZmVMaW5lKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpZmVMaW5lTWFuYWdlci5DdXJyZW50TGlmZWxpbmVzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyByZXN0YXJ0IFxyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zcGF3bk5ld1JvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZW5lbWllc1wiKS5jaGlsZHJlbi5mb3JFYWNoKGU9PihlLmRlc3Ryb3koKSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0U2NyZWVuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydFNjcmVlbi5nZXRDaGlsZEJ5TmFtZShcIlNjb3JlX3ZhbHVlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRTY3JlZW4uZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoU2NvcmVfdmFsdWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmhpZ2hTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NvbnRpbnVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBwbGF5ZXIgIFxyXG4gICAgICAgICAgICBsZXQgbmV3UGxheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJQcmVmYWIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdQbGF5ZXIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBsYXllckNvbnRyb2xsZXJTY3JpcHQgPSBuZXdQbGF5ZXIuZ2V0Q29tcG9uZW50KFBsYXllckNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJDb250cm9sbGVyU2NyaXB0LndlYXBvblBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndlYXBvblwiKTtcclxuICAgICAgICAgICAgcGxheWVyQ29udHJvbGxlclNjcmlwdC5nYW1lID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkgXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a781eVrpDVHU5GAeBdPgI24', 'NewScript');
// Script/NewScript.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOZXdTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQWtCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMaWZlTGluZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUR6RDtRQUFBLHFFQWdEQztRQTdDRyxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFHN0Isc0JBQWdCLEdBQWUsSUFBSSxDQUFDOztRQXlDcEMsaUJBQWlCO0lBQ3JCLENBQUM7SUF4Q0csd0JBQXdCO0lBRXhCLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQzFDO1lBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCwrQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFFSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEVBQzlCO1lBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUMxQixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUMxQztnQkFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtTQUNKO0lBQ0wsQ0FBQztJQUVELDBDQUFnQixHQUFoQjtRQUVJLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUN6QjtZQUNJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BEO0lBQ0wsQ0FBQztJQXZDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUNnQjtJQUxuQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBK0NuQztJQUFELHNCQUFDO0NBL0NELEFBK0NDLENBL0M0QyxFQUFFLENBQUMsU0FBUyxHQStDeEQ7a0JBL0NvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWZlTGluZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEN1cnJlbnRMaWZlbGluZXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBsYXllckljb25QcmVmYWIgOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5DdXJyZW50TGlmZWxpbmVzID0gMztcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5DdXJyZW50TGlmZWxpbmVzOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbmV3SWNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGxheWVySWNvblByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdJY29uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuICAgICBcclxuICAgIHJlc3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLkN1cnJlbnRMaWZlbGluZXMgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQ3VycmVudExpZmVsaW5lcyA9IDM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLkN1cnJlbnRMaWZlbGluZXM7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0ljb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXllckljb25QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0ljb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERlY3JlYXNlTGlmZUxpbmUoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLkN1cnJlbnRMaWZlbGluZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkN1cnJlbnRMaWZlbGluZXMgLT0gMTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYXlvdXQpLnVwZGF0ZUxheW91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
