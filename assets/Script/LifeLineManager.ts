// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class LifeLineManager extends cc.Component {

    CurrentLifelines: number = 0;

    @property(cc.Prefab)
    playerIconPrefab : cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.CurrentLifelines = 3;
        
        for (let i=0; i<this.CurrentLifelines; i++)
        {
            let newIcon = cc.instantiate(this.playerIconPrefab);
            this.node.addChild(newIcon);
        }
    }

    start () {

    }
     
    restart()
    {
        if (this.CurrentLifelines == 0)
        {
            this.CurrentLifelines = 3;
            for (let i=0; i<this.CurrentLifelines; i++)
            {
                let newIcon = cc.instantiate(this.playerIconPrefab);
                this.node.addChild(newIcon);
            }
        }
    }

    DecreaseLifeLine()
    {
        if (this.CurrentLifelines!=0)
        {
            this.CurrentLifelines -= 1;
            this.node.children[0].destroy();
            this.node.getComponent(cc.Layout).updateLayout();
        }
    }

    // update (dt) {}
}
