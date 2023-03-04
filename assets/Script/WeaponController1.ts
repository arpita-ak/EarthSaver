// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class WeaponController1 extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }

    onCollisionEnter(other, self) 
    {
      this.node.destroy();
    }

    start () 
    {

    }

    update (dt) 
    {
        // fire moving move up 
        this.node.y += dt*500;
    }
}
