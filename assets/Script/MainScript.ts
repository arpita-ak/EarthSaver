// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import LifeLineManager from "./LifeLineManager";
import { PlayerController } from "./PlayerController";

const {ccclass, property} = cc._decorator;

@ccclass

export default class MainScript extends cc.Component {

    @property(cc.Node)
    startScreen: cc.Node = null;

    @property(cc.Node)
    restartScreen: cc.Node = null;

    @property(cc.Prefab)
    EnemyPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    playerPrefab : cc.Prefab = null;

    @property(cc.Label)
    scoreDisplay: cc.Label = null;

    @property(cc.Label)
    highscoreDisplay: cc.Label = null;

    @property(LifeLineManager)
    lifeLineManager: LifeLineManager = null;

    score: number = 0;
    highScore: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        this.score = 0;
        this.highScore = 0;
        this.scoreDisplay.string = '0';
        this.startScreen.active = true;
    }

    OnStartClick() // or restart
    {
        this.startScreen.active = false;
        this.restartScreen.active = false;

        //update life lines 
        this.lifeLineManager.restart();

        //update score and highscore
        if (this.score > this.highScore)
            this.highScore = this.score;
        this.score = 0;
        this.scoreDisplay.string = this.score.toString()
        this.highscoreDisplay.string = this.highScore.toString();

        // generate player
        let newPlayer = cc.instantiate(this.playerPrefab)
        this.node.addChild(newPlayer);

        let playerControllerScript = newPlayer.getComponent(PlayerController);
        playerControllerScript.weaponParent = this.node.getChildByName("weapon");
        playerControllerScript.game = this;

        // generate 2 enemies every second
        this.schedule(this.spawnNewRound, 0.5, cc.macro.REPEAT_FOREVER, 0);
    }

    spawnNewRound()
    {
        let newRound = cc.instantiate(this.EnemyPrefab);
        this.node.getChildByName("enemies").addChild(newRound);
        newRound.setPosition(this.getNewEnemyPosition()); 

        let enemyControllerScript = newRound.getComponent('EnemyController1')
        enemyControllerScript.game = this;
        enemyControllerScript.deltaRotation = Math.random();
    }

    gainScore() 
    {
        // Update the words of the scoreDisplay Label
        this.score += 1;
        this.scoreDisplay.string = this.score.toString();
        this.restartScreen.getChildByName("Score_value").getComponent(cc.Label).string = this.score.toString();
    }

    getNewEnemyPosition() 
    {
        var randX = Math.random() * Math.random() *2* (this.node.width/2 - 20)-250;
        var randY = Math.random() * Math.random() *5* (this.node.height/2 - 200)+ 200;
        //console.log(randX,randY);
        return cc.v2(randX, randY);
    }

    OnPlayerDead()
    {
        this.lifeLineManager.DecreaseLifeLine();

        if (this.lifeLineManager.CurrentLifelines == 0)
        {
            // restart 
            this.unschedule(this.spawnNewRound);
            this.node.getChildByName("enemies").children.forEach(e=>(e.destroy()));

            this.restartScreen.active = true;
            this.restartScreen.getChildByName("Score_value").getComponent(cc.Label).string = this.score.toString();
            this.restartScreen.getChildByName("highScore_value").getComponent(cc.Label).string = this.highScore.toString();
        }
        else
        {
            //continue
            
            // generate player  
            let newPlayer = cc.instantiate(this.playerPrefab)
            this.node.addChild(newPlayer);

            let playerControllerScript = newPlayer.getComponent(PlayerController);
            playerControllerScript.weaponParent = this.node.getChildByName("weapon");
            playerControllerScript.game = this;
        }
    }

    start () 
    {

    }

    update (dt) 
    {

    }

}
