import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private player2: Fighter;
  
  constructor(player:Fighter, player2:Fighter) { 
    super(player);
    this.player2 = player2;
  }

  attackPlayer = () => {
    this.player.attack(this.player2);
    if (this.player2.lifePoints === -1) return 1;
  };

  attackPlayer2 = () => {
    this.player2.attack(this.player);
    if (this.player.lifePoints === -1) return -1;
  };

  fight(): number {
    while (this.player.lifePoints !== -1) {
      if (this.attackPlayer()) return 1;
      if (this.attackPlayer2()) return -1;
    }
    return 1;
  }
}