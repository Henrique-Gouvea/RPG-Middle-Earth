import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private monster: SimpleFighter[];
  
  constructor(player:Fighter, monster:Array<SimpleFighter | Monster>) { 
    super(player);
    this.monster = monster;
  }

  // attackPlayer = (index:number) => {
  //   this.player.attack(this.monster[index]);
  //   if (this.monster[index].lifePoints === -1) return 1;
  //   return 1;
  // };

  // attackMonster = (index:number) => {
  //   this.monster[index].attack(this.player);
  //   if (this.player.lifePoints === -1) return -1;
  //   return 1;
  // };

  fight(): number {
    this.monster.forEach((monster, index) => {
      while (
        this.monster[index].lifePoints > 0
        && this.player.lifePoints > 0
      ) {
        this.monster[index].attack(this.player);
        this.player.attack(this.monster[index]);
      }
    });
    if (this.player.lifePoints === -1) return -1;
    return 1;
  }
}