window.__require=function t(e,o,n){function r(c,a){if(!o[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var l="function"==typeof __require&&__require;if(!a&&l)return l(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var p=o[c]={exports:{}};e[c][0].call(p.exports,function(t){return r(e[c][1][t]||t)},p,p.exports,t,e,o,n)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<n.length;c++)r(n[c]);return r}({EnemyController1:[function(t,e,o){"use strict";cc._RF.push(e,"95ffenyuj5EFbu7xf4VeGFw","EnemyController1");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.game=null,e.deltaRotation=0,e}return n(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0},e.prototype.onCollisionEnter=function(t,e){var o=this;cc.tween(this.node).to(.3,{scale:0}).call(function(){o.node.destroy()}).start(),this.game.gainScore(1)},e.prototype.start=function(){},e.prototype.update=function(t){this.node.y-=t*Math.random()*500*this.deltaRotation,this.node.angle+=t*this.deltaRotation*500},e=r([c],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],EnemyController2:[function(t,e,o){"use strict";cc._RF.push(e,"136ceoekiVEvbQmItlj/VnE","EnemyController2");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.game=null,e.deltaRotation=0,e.strength=3,e}return n(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0},e.prototype.onCollisionEnter=function(t,e){var o=this;0!=this.strength&&(this.strength-=1);var n=255;switch(this.strength){case 0:n=0;break;case 1:n=100;break;case 2:n=150}cc.tween(this.node).to(.3,{opacity:n}).call(function(){0==o.strength&&(o.node.destroy(),o.game.gainScore(3))}).start()},e.prototype.start=function(){},e.prototype.update=function(t){this.node.y-=t*Math.random()*500*this.deltaRotation,this.node.angle+=t*this.deltaRotation*500},e=r([c],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],EnemyController3:[function(t,e,o){"use strict";cc._RF.push(e,"65363t5epJIC7dkn17A9wxq","EnemyController3");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.game=null,e.deltaRotation=0,e.strength=5,e}return n(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0},e.prototype.onCollisionEnter=function(t,e){var o=this;0!=this.strength&&(this.strength-=1);var n=.2,r=255;switch(this.strength){case 0:n=.6,r=0;break;case 1:n=.5,r=100;break;case 2:n=.4,r=140;break;case 3:n=.3,r=190;break;case 4:n=.2,r=220}cc.tween(this.node).to(.3,{scale:n,opacity:r}).call(function(){0==o.strength&&(o.node.destroy(),o.game.gainScore(5))}).start()},e.prototype.start=function(){},e.prototype.update=function(t){this.node.y-=t*Math.random()*600*this.deltaRotation,this.node.angle+=t*this.deltaRotation*500},e=r([c],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],EnemyController4:[function(t,e,o){"use strict";cc._RF.push(e,"bf792WqKT5AD4krjz9I6piI","EnemyController4");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.game=null,e.deltaRotation=0,e.strength=2,e}return n(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0},e.prototype.onCollisionEnter=function(t,e){var o=this;0!=this.strength&&(this.strength-=1);var n=.2,r=255;switch(this.strength){case 0:n=.6,r=0;break;case 1:n=.5,r=100}cc.tween(this.node).to(.3,{scale:n,opacity:r}).call(function(){0==o.strength&&(o.node.destroy(),o.game.gainScore(10))}).start()},e.prototype.start=function(){},e.prototype.update=function(t){this.node.y-=t*Math.random()*800*this.deltaRotation,this.node.angle+=t*this.deltaRotation*500},e=r([c],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],LifeLineManager:[function(t,e,o){"use strict";cc._RF.push(e,"a781eVrpDVHU5GAeBdPgI24","LifeLineManager");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.CurrentLifelines=0,e.playerIconPrefab=null,e}return n(e,t),e.prototype.onLoad=function(){this.CurrentLifelines=3;for(var t=0;t<this.CurrentLifelines;t++){var e=cc.instantiate(this.playerIconPrefab);this.node.addChild(e)}},e.prototype.start=function(){},e.prototype.restart=function(){if(0==this.CurrentLifelines){this.CurrentLifelines=3;for(var t=0;t<this.CurrentLifelines;t++){var e=cc.instantiate(this.playerIconPrefab);this.node.addChild(e)}}},e.prototype.DecreaseLifeLine=function(){0!=this.CurrentLifelines&&(this.CurrentLifelines-=1,this.node.children[0].destroy(),this.node.getComponent(cc.Layout).updateLayout())},r([a(cc.Prefab)],e.prototype,"playerIconPrefab",void 0),e=r([c],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],MainScript:[function(t,e,o){"use strict";cc._RF.push(e,"584aeON8yBKVoOleimUpAHm","MainScript");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./LifeLineManager"),c=t("./PlayerController"),a=cc._decorator,s=a.ccclass,l=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.startScreen=null,e.restartScreen=null,e.EnemyPrefab=[],e.playerPrefab=null,e.weaponPrefab=[],e.scoreDisplay=null,e.highscoreDisplay=null,e.lifeLineManager=null,e.Music=null,e.bgmAudio=null,e.clickAudio=null,e.score=0,e.highScore=0,e.currentPlayerScript=null,e}return n(e,t),e.prototype.onLoad=function(){this.score=0,this.highScore=0,this.scoreDisplay.string="0",this.startScreen.active=!0},e.prototype.OnStartClick=function(){this.startScreen.active=!1,this.restartScreen.active=!1,this.lifeLineManager.restart(),this.score>this.highScore&&(this.highScore=this.score),this.score=0,this.scoreDisplay.string=this.score.toString(),this.highscoreDisplay.string=this.highScore.toString();var t=cc.instantiate(this.playerPrefab);this.node.getChildByName("player").addChild(t),this.currentPlayerScript=t.getComponent(c.PlayerController),this.currentPlayerScript.weaponParent=this.node.getChildByName("weapon"),this.currentPlayerScript.game=this,this.schedule(this.spawnNewRound,.5,cc.macro.REPEAT_FOREVER,0),cc.audioEngine.playMusic(this.bgmAudio,!0),cc.audioEngine.playEffect(this.clickAudio,!1),this.onVolumeToggleClicked()},e.prototype.spawnNewRound=function(){var t=cc.instantiate(this.EnemyPrefab[0]),e=t.getComponent("EnemyController1");this.score%5==0&&0!=this.score&&(e=(t=cc.instantiate(this.EnemyPrefab[1])).getComponent("EnemyController2")),this.score%5==0&&this.score>30&&(e=(t=cc.instantiate(this.EnemyPrefab[2])).getComponent("EnemyController3")),this.score%3==0&&this.score>20&&(e=(t=cc.instantiate(this.EnemyPrefab[3])).getComponent("EnemyController4")),this.node.getChildByName("enemies").addChild(t),t.setPosition(this.getNewEnemyPosition()),e.game=this,e.deltaRotation=Math.random()},e.prototype.gainScore=function(t){var e=this;this.score+=t,this.scoreDisplay.string=this.score.toString(),this.restartScreen.getChildByName("Score_value").getComponent(cc.Label).string=this.score.toString(),5==t&&(this.currentPlayerScript.EnableCollisionManager(!1,!0),this.currentPlayerScript.node.children[0].color=cc.Color.BLUE,cc.tween(this.currentPlayerScript.node.children[0]).to(5,{opacity:0}).start(),this.scheduleOnce(function(){e.currentPlayerScript.EnableCollisionManager(!0,!1)},10)),3==t&&(this.currentPlayerScript.weapon1=this.weaponPrefab[1],this.scheduleOnce(function(){e.currentPlayerScript.weapon1=e.weaponPrefab[0]},10)),10==t&&(this.currentPlayerScript.weapon1=this.weaponPrefab[2],this.scheduleOnce(function(){e.currentPlayerScript.weapon1=e.weaponPrefab[0]},10))},e.prototype.getNewEnemyPosition=function(){var t=Math.random()*Math.random()*2*(this.node.width/2-20)-250,e=Math.random()*Math.random()*5*(this.node.height/2-200)+200;return cc.v2(t,e)},e.prototype.OnPlayerDead=function(){if(this.lifeLineManager.DecreaseLifeLine(),0==this.lifeLineManager.CurrentLifelines)this.unschedule(this.spawnNewRound),this.node.getChildByName("enemies").destroyAllChildren(),this.node.getChildByName("player").destroyAllChildren(),this.restartScreen.active=!0,this.restartScreen.getChildByName("Score_value").getComponent(cc.Label).string=this.score.toString(),this.restartScreen.getChildByName("highScore_value").getComponent(cc.Label).string=this.highScore.toString(),cc.audioEngine.stopMusic();else{var t=cc.instantiate(this.playerPrefab);this.node.getChildByName("player").addChild(t),this.currentPlayerScript=t.getComponent(c.PlayerController),this.currentPlayerScript.weaponParent=this.node.getChildByName("weapon"),this.currentPlayerScript.game=this}},e.prototype.start=function(){},e.prototype.update=function(t){},e.prototype.onVolumeToggleClicked=function(){this.Music.isChecked?(cc.audioEngine.setEffectsVolume(0),cc.audioEngine.setMusicVolume(0)):(cc.audioEngine.setEffectsVolume(.1),cc.audioEngine.setMusicVolume(1))},r([l(cc.Node)],e.prototype,"startScreen",void 0),r([l(cc.Node)],e.prototype,"restartScreen",void 0),r([l(cc.Prefab)],e.prototype,"EnemyPrefab",void 0),r([l(cc.Prefab)],e.prototype,"playerPrefab",void 0),r([l(cc.Prefab)],e.prototype,"weaponPrefab",void 0),r([l(cc.Label)],e.prototype,"scoreDisplay",void 0),r([l(cc.Label)],e.prototype,"highscoreDisplay",void 0),r([l(i.default)],e.prototype,"lifeLineManager",void 0),r([l(cc.Toggle)],e.prototype,"Music",void 0),r([l({type:cc.AudioClip})],e.prototype,"bgmAudio",void 0),r([l({type:cc.AudioClip})],e.prototype,"clickAudio",void 0),e=r([s],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./LifeLineManager":"LifeLineManager","./PlayerController":"PlayerController"}],PlayerController:[function(t,e,o){"use strict";cc._RF.push(e,"642f1FsENhO2LgrtPI/r87f","PlayerController");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.game=null,e.weaponParent=null,e.weapon1=null,e.shootAudio=null,e.playerDeadAudio=null,e.offsetPos=cc.v3(0,0,0),e.delta=0,e}return n(e,t),e.prototype.onLoad=function(){var t=this;this.EnableCollisionManager(!1,!0),cc.tween(this.node).sequence(cc.tween(this.node).to(.5,{opacity:0}),cc.tween(this.node).to(.5,{opacity:255})).repeat(3).start(),this.scheduleOnce(function(){t.EnableCollisionManager(!0,!1)},4),this.node.on(cc.Node.EventType.TOUCH_START,this.OnTouchStart,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.OnTouchMove,this),this.node.on(cc.Node.EventType.TOUCH_END,this.OnTouchEnd,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.OnTouchEnd,this)},e.prototype.EnableCollisionManager=function(t,e){this.node&&(this.node.getComponent(cc.BoxCollider).enabled=t,this.node.children[0].active=e,this.node.children[0].opacity=100,this.node.children[0].color=cc.Color.GREEN)},e.prototype.OnTouchStart=function(t){this.delta=0},e.prototype.OnTouchMove=function(t){this.delta=t.getDelta().x,this.node.position=new cc.Vec3(t.getDelta().x+this.node.position.x,this.node.position.y,0)},e.prototype.OnTouchEnd=function(t){0==this.delta&&this.bulletfire()},e.prototype.bulletfire=function(){var t=cc.instantiate(this.weapon1);this.weaponParent.addChild(t);var e=cc.v3(0,0,0),o=cc.v3(0,0,0);this.node.convertToWorldSpaceAR(cc.v3(0,0,0),e),this.weaponParent.convertToNodeSpaceAR(e,o),t.setPosition(o),t.angle=0,cc.audioEngine.playEffect(this.shootAudio,!1)},e.prototype.onCollisionEnter=function(t,e){var o=this;this.EnableCollisionManager(!1,!1),cc.tween(this.node).to(.2,{scale:0}).call(function(){o.node.destroy(),o.game.OnPlayerDead()}).start(),console.log("Player is dead"),cc.audioEngine.playEffect(this.playerDeadAudio,!1)},e.prototype.start=function(){},e.prototype.update=function(t){},r([a(cc.Prefab)],e.prototype,"weapon1",void 0),r([a({type:cc.AudioClip})],e.prototype,"shootAudio",void 0),r([a({type:cc.AudioClip})],e.prototype,"playerDeadAudio",void 0),e=r([c],e)}(cc.Component);o.PlayerController=s,cc._RF.pop()},{}],WeaponController1:[function(t,e,o){"use strict";cc._RF.push(e,"4e2e1Nj6qJA1objbiX+wEo7","WeaponController1");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0},e.prototype.onCollisionEnter=function(t,e){this.node.destroy()},e.prototype.start=function(){},e.prototype.update=function(t){this.node.y+=500*t},e=r([c],e)}(cc.Component));o.default=a,cc._RF.pop()},{}]},{},["EnemyController1","EnemyController2","EnemyController3","EnemyController4","LifeLineManager","MainScript","PlayerController","WeaponController1"]);