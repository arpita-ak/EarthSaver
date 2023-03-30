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
    strength = 10;

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
            case 0: enemyScale = 0.1; enemyOpacity = 50; break;
            case 1: enemyScale = 0.1; enemyOpacity = 100; break;
            case 2: enemyScale = 0.2; enemyOpacity = 125; break;
            case 3: enemyScale = 0.3; enemyOpacity = 150; break;
            case 4: enemyScale = 0.4; enemyOpacity = 100; break;
            case 5: enemyScale = 0.5; enemyOpacity = 125; break;
            case 6: enemyScale = 0.6; enemyOpacity = 150; break;
            case 7: enemyScale = 0.7; enemyOpacity = 175; break;
            case 8: enemyScale = 0.8; enemyOpacity = 200; break;
            case 9: enemyScale = 0.9; enemyOpacity = 225; break;
            case 10: enemyScale = 1; enemyOpacity = 255; break;
        }

        cc.tween(this.node).to(0.3, ({scale : enemyScale, opacity : enemyOpacity})).call(()=>{
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
