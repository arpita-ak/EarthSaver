// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyController1 extends cc.Component 
{


    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        //this.game = this.node.parent.getComponent('player');
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    }

    onCollisionEnter(other, self) 
    {
        cc.tween(this.node).to(0.3, ({scale:0})).call(()=>{this.node.destroy();}).start();
    }

    start () 
    {

    }

    update (dt) 
    {
        // move down
        this.node.y -= dt * 100;
    }
}
