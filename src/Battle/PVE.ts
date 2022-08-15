import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private monster: SimpleFighter[];
  
  constructor(player:Fighter, monster:Array<SimpleFighter | Monster>) { 
    super(player);
    this.monster = monster;
  }

  fight(): number {
    this.monster.forEach((monster) => {
      while (
        monster.lifePoints !== -1
        && this.player.lifePoints !== -1
      ) {
        monster.attack(this.player);
        this.player.attack(monster);
      }
    });
    if (this.player.lifePoints === -1) return -1;
    return 1;
  }
}