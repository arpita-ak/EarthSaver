// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export class PlayerController extends cc.Component {

    @property(cc.Node)
    gameNode: cc.Node = null;

    @property(cc.Node)
    weaponParent: cc.Node = null;

    @property(cc.Prefab)
    weapon1: cc.Prefab = null;

    protected offsetPos: cc.Vec3 = cc.v3(0, 0, 0);
    protected delta: number = 0;

    onLoad()
    {
        this.node.on(cc.Node.EventType.TOUCH_START, this.OnTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.OnTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.OnTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnTouchEnd, this);
    }

    OnTouchStart(_event: cc.Event.EventTouch)
    {
        //console.log('Start');
        this.delta = 0;
    }

    OnTouchMove(_event: cc.Event.EventTouch)
    {
        //console.log('Moving');
        this.delta = _event.getDelta().x;
        this.node.position = new cc.Vec3(_event.getDelta().x + this.node.position.x, this.node.position.y, 0);
    }

    OnTouchEnd(event: cc.Event.EventTouch)
    {
        //console.log('End');
        if (this.delta == 0)
        {
            //console.log("shoot");
            this.bulletfire()
        }
    }

    bulletfire()
    {
        let newfire: cc.Node = cc.instantiate(this.weapon1);
        this.weaponParent.addChild(newfire);

        //find the player current position and assign it to new weapon
        let worldpos = cc.v3(0,0,0);
        let pos = cc.v3(0,0,0);
        this.node.convertToWorldSpaceAR(cc.v3(0,0,0), worldpos);
        this.weaponParent.convertToNodeSpaceAR(worldpos, pos);

        newfire.setPosition(pos);
        newfire.angle = 0;
        //audioEngine.playEffect(this.laserAudio, false); // Shoot audio
    }

    start() 
    {

    }

    update(dt) 
    {
        
    }
}
