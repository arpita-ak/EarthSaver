// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export class PlayerController extends cc.Component {

    //prefab cannot take references from scene nodes
    //@property(cc.Node)
    game = null;

    //@property(cc.Node)
    weaponParent: cc.Node = null;

    @property(cc.Prefab)
    weapon1: cc.Prefab = null;

    @property({type: cc.AudioClip})
    shootAudio: cc.AudioClip = null;

    @property({type: cc.AudioClip})
    playerDeadAudio: cc.AudioClip = null;

    protected offsetPos: cc.Vec3 = cc.v3(0, 0, 0);
    protected delta: number = 0;

    onLoad()
    {
        // disable collider and enable green highlight indicating player is safe
        this.EnableCollisionManager(false, true);

        cc.tween(this.node)
        .sequence(
            cc.tween(this.node).to(0.5, ({opacity: 0})), 
            cc.tween(this.node).to(0.5, ({opacity: 255})))
        .repeat(3)
        .start();

        this.scheduleOnce(()=>{
            // enable collider and disable green highlight indicating player is not protected and ready to fight
            this.EnableCollisionManager(true, false)
        }, 4);

        this.node.on(cc.Node.EventType.TOUCH_START, this.OnTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.OnTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.OnTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnTouchEnd, this);
        
    }
    
    EnableCollisionManager(flag:boolean, protect:boolean)
    {
        let manager = this.node.getComponent(cc.BoxCollider);
        manager.enabled = flag;
        this.node.children[0].active = protect;
        this.node.children[0].opacity = 100;
        this.node.children[0].color = cc.Color.GREEN;
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
        cc.audioEngine.playEffect(this.shootAudio, false); // Shoot audio
    }

    onCollisionEnter(other, self) 
    {
        // disable collider to avoid any further collisions 
        // disable green highlight indicating player is not protected and is dying 
        this.EnableCollisionManager(false, false);

        cc.tween(this.node).to(0.2, ({scale:0})).call(()=>{
            this.node.destroy();
            this.game.OnPlayerDead();
        }).start();

        console.log("Player is dead");
        cc.audioEngine.playEffect(this.playerDeadAudio, false);
    }

    start() 
    {

    }

    update(dt) 
    {
        
    }
}
