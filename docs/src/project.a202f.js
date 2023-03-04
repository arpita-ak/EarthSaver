window.__require=function t(e,o,n){function r(i,p){if(!o[i]){if(!e[i]){var a=i.split("/");if(a=a[a.length-1],!e[a]){var s="function"==typeof __require&&__require;if(!p&&s)return s(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+i+"'")}i=a}var u=o[i]={exports:{}};e[i][0].call(u.exports,function(t){return r(e[i][1][t]||t)},u,u.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({EnemyController1:[function(t,e,o){"use strict";cc._RF.push(e,"95ffenyuj5EFbu7xf4VeGFw","EnemyController1");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.game=null,e}return n(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0},e.prototype.onCollisionEnter=function(t,e){var o=this;cc.tween(this.node).to(.2,{scale:0}).call(function(){o.node.destroy()}).start(),this.game.gainScore()},e.prototype.start=function(){},e.prototype.update=function(t){this.node.y-=t*Math.random()*100,this.node.angle+=t*Math.random()*50},e=r([i],e)}(cc.Component));o.default=p,cc._RF.pop()},{}],MainScript:[function(t,e,o){"use strict";cc._RF.push(e,"584aeON8yBKVoOleimUpAHm","MainScript");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.startScreen=null,e.EnemyPrefab=null,e.player=null,e.scoreDisplay=null,e.highscoreDisplay=null,e.score=0,e.highScore=0,e}return n(e,t),e.prototype.onLoad=function(){this.score=0,this.highScore=0,this.scoreDisplay.string="0"},e.prototype.OnStartClick=function(){this.startScreen.active=!1,this.schedule(this.spawnNewRound,.5,cc.macro.REPEAT_FOREVER,0)},e.prototype.spawnNewRound=function(){var t=cc.instantiate(this.EnemyPrefab);this.node.addChild(t),t.setPosition(this.getNewEnemyPosition()),t.getComponent("EnemyController1").game=this},e.prototype.gainScore=function(){this.score+=1,this.scoreDisplay.string=this.score.toString()},e.prototype.getNewEnemyPosition=function(){var t=Math.random()*Math.random()*2*(this.node.width/2-20)-250,e=Math.random()*Math.random()*5*(this.node.height/2-200)+200;return console.log(t,e),cc.v2(t,e)},e.prototype.start=function(){},e.prototype.update=function(t){},r([p(cc.Node)],e.prototype,"startScreen",void 0),r([p(cc.Prefab)],e.prototype,"EnemyPrefab",void 0),r([p(cc.Node)],e.prototype,"player",void 0),r([p(cc.Label)],e.prototype,"scoreDisplay",void 0),r([p(cc.Label)],e.prototype,"highscoreDisplay",void 0),e=r([i],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],PlayerController:[function(t,e,o){"use strict";cc._RF.push(e,"642f1FsENhO2LgrtPI/r87f","PlayerController");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.gameNode=null,e.weaponParent=null,e.weapon1=null,e.offsetPos=cc.v3(0,0,0),e.delta=0,e}return n(e,t),e.prototype.onLoad=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.OnTouchStart,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.OnTouchMove,this),this.node.on(cc.Node.EventType.TOUCH_END,this.OnTouchEnd,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.OnTouchEnd,this)},e.prototype.OnTouchStart=function(t){this.delta=0},e.prototype.OnTouchMove=function(t){this.delta=t.getDelta().x,this.node.position=new cc.Vec3(t.getDelta().x+this.node.position.x,this.node.position.y,0)},e.prototype.OnTouchEnd=function(t){0==this.delta&&this.bulletfire()},e.prototype.bulletfire=function(){var t=cc.instantiate(this.weapon1);this.weaponParent.addChild(t);var e=cc.v3(0,0,0),o=cc.v3(0,0,0);this.node.convertToWorldSpaceAR(cc.v3(0,0,0),e),this.weaponParent.convertToNodeSpaceAR(e,o),t.setPosition(o),t.angle=0},e.prototype.start=function(){},e.prototype.update=function(t){},r([p(cc.Node)],e.prototype,"gameNode",void 0),r([p(cc.Node)],e.prototype,"weaponParent",void 0),r([p(cc.Prefab)],e.prototype,"weapon1",void 0),e=r([i],e)}(cc.Component);o.PlayerController=a,cc._RF.pop()},{}],WeaponController1:[function(t,e,o){"use strict";cc._RF.push(e,"4e2e1Nj6qJA1objbiX+wEo7","WeaponController1");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0},e.prototype.onCollisionEnter=function(t,e){this.node.destroy()},e.prototype.start=function(){},e.prototype.update=function(t){this.node.y+=500*t},e=r([i],e)}(cc.Component));o.default=p,cc._RF.pop()},{}]},{},["EnemyController1","MainScript","PlayerController","WeaponController1"]);