// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass

export default class MainScript extends cc.Component {

    @property(cc.Node)
    startScreen: cc.Node = null;

    @property(cc.Prefab)
    EnemyPrefab: cc.Prefab = null;

    @property(cc.Node)
    player : cc.Node = null;

    @property(cc.Label)
    scoreDisplay: cc.Label = null;

    @property(cc.Label)
    highscoreDisplay: cc.Label = null;

    score: number = 0;
    highScore: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        this.score = 0;
        this.highScore = 0;
        this.scoreDisplay.string = '0';
    }

    OnStartClick()
    {
        this.startScreen.active = false;
        // generate 2 enemies every second
        this.schedule(this.spawnNewRound, 0.5, cc.macro.REPEAT_FOREVER, 0);
    }

    spawnNewRound()
    {
        let newRound = cc.instantiate(this.EnemyPrefab);
        this.node.addChild(newRound);
        newRound.setPosition(this.getNewEnemyPosition()); 
        newRound.getComponent('EnemyController1').game = this;
    }

    gainScore() 
    {
        // Update the words of the scoreDisplay Label
        this.score += 1;
        this.scoreDisplay.string = this.score.toString();
    }

    getNewEnemyPosition() 
    {
        var randX = Math.random() * Math.random() *2* (this.node.width/2 - 20)-250;
        var randY = Math.random() * Math.random() *5* (this.node.height/2 - 200)+ 200;
        console.log(randX,randY);
        return cc.v2(randX, randY);
    }

    start () 
    {

    }

    update (dt) 
    {

    }
}
