import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private monster: SimpleFighter[];
  
  constructor(player:Fighter, monster:Monster[]) { 
    super(player);
    this.monster = monster;
  }

  attackPlayer = (index:number) => {
    this.player.attack(this.monster[index]);
    if (this.monster[index].lifePoints === -1) return 1;
    return 1;
  };

  attackMonster = (index:number) => {
    this.monster[index].attack(this.player);
    if (this.player.lifePoints === -1) return -1;
    return 1;
  };

  fight(): number {
    let winner = 1;
    this.monster.forEach((monster, index) => {
      while (
        this.monster[index].lifePoints !== -1
        || this.player.lifePoints !== -1
      ) {
        winner = this.attackPlayer(index);
        winner = this.attackMonster(index);
      }
    });
    return winner;
  }
}