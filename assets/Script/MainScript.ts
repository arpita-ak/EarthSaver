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
    canvas: cc.Node = null;

    @property(cc.Node)
    startScreen: cc.Node = null;

    @property(cc.Node)
    restartScreen: cc.Node = null;

    @property(cc.Prefab)
    EnemyPrefab: cc.Prefab[] = [];

    @property(cc.Prefab)
    playerPrefab : cc.Prefab = null;

    @property(cc.Prefab)
    weaponPrefab: cc.Prefab[] = [];

    @property(cc.Label)
    scoreDisplay: cc.Label = null;

    @property(cc.Label)
    highscoreDisplay: cc.Label = null;

    @property(LifeLineManager)
    lifeLineManager: LifeLineManager = null;

    @property(cc.Toggle)
    Music: cc.Toggle = null;

    @property({type: cc.AudioClip})
    bgmAudio: cc.AudioClip = null;

    @property({type: cc.AudioClip})
    clickAudio: cc.AudioClip = null;

    score: number = 0;
    highScore: number = 0;

    // LIFE-CYCLE CALLBACKS:
    currentPlayerScript: PlayerController = null;

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
        this.node.getChildByName("player").addChild(newPlayer);

        this.currentPlayerScript = newPlayer.getComponent(PlayerController);
        this.currentPlayerScript.weaponParent = this.node.getChildByName("weapon");
        this.currentPlayerScript.game = this;

        // generate 2 enemies every second
        this.schedule(this.spawnNewRound, 10, cc.macro.REPEAT_FOREVER, 0);

        // start music
        cc.audioEngine.playMusic(this.bgmAudio, true);
        cc.audioEngine.playEffect(this.clickAudio, false);
        this.onVolumeToggleClicked();

    }

    spawnNewRound()
    {
        let newRound = cc.instantiate(this.EnemyPrefab[0]);
        let enemyControllerScript = newRound.getComponent('EnemyController1')

        // different enemy who needs 3 fire to die
        if (this.score%5 == 0 && this.score != 0) 
        {
            newRound = cc.instantiate(this.EnemyPrefab[1]);
            enemyControllerScript = newRound.getComponent('EnemyController2')
        }

        // different enemy who needs 5 fire to die AND EXPANDS
        if (this.score%5 == 0 && this.score > 30) 
        {
            newRound = cc.instantiate(this.EnemyPrefab[2]);
            enemyControllerScript = newRound.getComponent('EnemyController3')
        }

        // different enemy who needs 10 fire to die AND EXPANDS
        if (this.score%3 == 0 && this.score > 20) 
        {
            newRound = cc.instantiate(this.EnemyPrefab[3]);
            enemyControllerScript = newRound.getComponent('EnemyController4')
        }

        // different enemy who needs 15 fire to die who fades
        if (this.score%4 == 0 && this.score > 0) 
        {
            newRound = cc.instantiate(this.EnemyPrefab[4]);
            enemyControllerScript = newRound.getComponent('EnemyController5')
        }

        // Enemy 6 who needs 50 fire to die and who fires enemy 1
        if (this.score == 0 ) 
        {
            newRound = cc.instantiate(this.EnemyPrefab[6]);
            enemyControllerScript = newRound.getComponent('EnemyController7')
        }

        this.node.getChildByName("enemies").addChild(newRound);
        newRound.setPosition(this.getNewEnemyPosition()); 

        enemyControllerScript.game = this;
        enemyControllerScript.deltaRotation = Math.random();
    }

    gainScore(value: number) 
    {
        // Update the words of the scoreDisplay Label
        this.score += value;
        this.scoreDisplay.string = this.score.toString();
        this.restartScreen.getChildByName("Score_value").getComponent(cc.Label).string = this.score.toString();

        // protection for 5 seconds when you destroy enemy 3
        if (value == 5)
        {
            this.currentPlayerScript.EnableCollisionManager(false, true);
            this.currentPlayerScript.node.children[0].color = cc.Color.BLUE;
            cc.tween(this.currentPlayerScript.node.children[0]).to(5, ({opacity:0})).start();
            this.scheduleOnce(()=>{this.currentPlayerScript.EnableCollisionManager(true, false)}, 10);
        }

        if (value == 3)
        {
            this.currentPlayerScript.weapon1 = this.weaponPrefab[1];
            this.scheduleOnce(()=>{this.currentPlayerScript.weapon1 = this.weaponPrefab[0];}, 10);
        }
        
        if (value == 10)
        {
            this.currentPlayerScript.weapon1 = this.weaponPrefab[2];
            this.scheduleOnce(()=>{this.currentPlayerScript.weapon1 = this.weaponPrefab[0];}, 10);
        }
    }

    getNewEnemyPosition() 
    {
        var randX = (Math.random() - Math.random()) * (this.canvas.width/2);
        var randY = (Math.random()) * (this.canvas.height/2);
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
            this.node.getChildByName("enemies").destroyAllChildren();
            this.node.getChildByName("player").destroyAllChildren();

            this.restartScreen.active = true;
            this.restartScreen.getChildByName("Score_value").getComponent(cc.Label).string = this.score.toString();
            this.restartScreen.getChildByName("highScore_value").getComponent(cc.Label).string = this.highScore.toString();
            
            cc.audioEngine.stopMusic();
        }
        else
        {
            //continue
            
            // generate player  
            let newPlayer = cc.instantiate(this.playerPrefab)
            this.node.getChildByName("player").addChild(newPlayer);

            this.currentPlayerScript = newPlayer.getComponent(PlayerController);
            this.currentPlayerScript.weaponParent = this.node.getChildByName("weapon");
            this.currentPlayerScript.game = this;
        }
    }

    start () 
    {

    }

    update (dt) 
    {

    }

    onVolumeToggleClicked()
    {
        if (this.Music.isChecked)
        {
            cc.audioEngine.setEffectsVolume(0);
            cc.audioEngine.setMusicVolume(0);
        }
        else
        {
            cc.audioEngine.setEffectsVolume(0.1);
            cc.audioEngine.setMusicVolume(1);
        }
    }

}
