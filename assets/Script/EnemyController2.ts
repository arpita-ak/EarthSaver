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
    strength = 3;

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        //this.game = this.node.parent.getComponent('player');
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }

    onCollisionEnter(other, self) 
    {
        if (this.strength != 0)
            this.strength -= 1;
        // else
        //     cc.tween(this.node.getChildByName("score")).to(0.1, ({scale:1})).start();

        let enemyOpacity = 255;

        switch(this.strength)
        {
            case 0: enemyOpacity = 0; break;
            case 1: enemyOpacity = 100; break;
            case 2: enemyOpacity = 150; break;
        }

        cc.tween(this.node).to(0.3, ({opacity : enemyOpacity})).call(()=>{
            if (this.strength == 0)
            {
                this.node.destroy();
                this.game.gainScore(3);
            }
        }).start();

    }

    start () 
    {

    }

    update (dt) 
    {
        // move down and rotate positive
        this.node.y -= dt * Math.random() * 200 * this.deltaRotation;
        this.node.angle += dt * this.deltaRotation * 200;
    }
}
