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
    strength = 5;

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

        let enemyScale = 0.2;
        let enemyOpacity = 255;

        switch(this.strength)
        {
            case 0: enemyScale = 0.6; enemyOpacity = 0; break;
            case 1: enemyScale = 0.5; enemyOpacity = 100; break;
            case 2: enemyScale = 0.4; enemyOpacity = 140; break;
            case 3: enemyScale = 0.3; enemyOpacity = 190; break;
            case 4: enemyScale = 0.2; enemyOpacity = 220; break;
        }

        cc.tween(this.node).to(0.3, ({scale : enemyScale, opacity : enemyOpacity})).call(()=>{
            if (this.strength == 0)
            {
                this.node.destroy();
                this.game.gainScore(5);
            }
        }).start();

    }

    start () 
    {

    }

    update (dt) 
    {
        // move down and rotate positive
        this.node.y -= dt * Math.random() * 600 * this.deltaRotation;
        this.node.angle += dt * this.deltaRotation * 500;
    }
}
