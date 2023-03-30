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

    game = null;
    deltaRotation: number = 0;
    strength = 15;

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        //this.game = this.node.parent.getComponent('player');
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }

    onCollisionEnter(other, self) 
    {
        let enemyOpacity = this.node.opacity
        if (this.strength != 0)
        {
            this.strength -= 1; 
            enemyOpacity -= 20;
        }
        // else
        //     cc.tween(this.node.getChildByName("score")).to(0.1, ({scale:1})).start();

        cc.tween(this.node).to(0.3, ({opacity : enemyOpacity})).call(()=>{
            if (this.strength == 0)
            {
                this.node.destroy();
                this.game.gainScore(10);
            }
        }).start();

    }

    start () 
    {

    }

    update (dt) 
    {
        // move down and rotate positive
        this.node.y -= dt * Math.random() * 100 * this.deltaRotation;
        this.node.angle += dt * this.deltaRotation * 500;
    }
}
