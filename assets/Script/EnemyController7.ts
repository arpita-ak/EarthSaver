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

    @property(cc.Prefab)
    enemy6: cc.Prefab = null;

    game = null;
    deltaRotation: number = 0;
    strength = 50;

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        //this.game = this.node.parent.getComponent('player');
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;

        this.schedule(this.fireEnemy1, 1, cc.macro.REPEAT_FOREVER, 0);
    }

    onCollisionEnter(other, self) 
    {
        let enemyOpacity = this.node.opacity
        if (this.strength != 0)
        {
            this.strength -= 1; 
            enemyOpacity -= 5;
        }
        // else
        //     cc.tween(this.node.getChildByName("score")).to(0.1, ({scale:1})).start();

        cc.tween(this.node).to(0.3, ({opacity : enemyOpacity})).call(()=>{
            if (this.strength == 0)
            {
                this.node.destroy();
                this.game.gainScore(50);
            }
        }).start();

    }

    fireEnemy1()
    {
        let newEnemy = cc.instantiate(this.enemy6);
        newEnemy.parent = this.node.parent;
        newEnemy.setPosition(this.node.getPosition());
    }

    start () 
    {

    }

    update (dt) 
    {
        // move down and rotate positive
        this.node.y -= dt * Math.random() * this.deltaRotation;
        this.node.x += dt *500* (this.deltaRotation-0.5);
        this.node.angle += dt * this.deltaRotation * 500;
    }
}
