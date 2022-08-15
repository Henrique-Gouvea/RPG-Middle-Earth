import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private player2: Fighter;
  
  constructor(player:Fighter, player2:Fighter) { 
    super(player);
    this.player2 = player2;
  }

  fight(): number {
    while (this.player2.lifePoints > 0 && this.player.lifePoints > 0) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    console.log(this.player.lifePoints);
    
    if (this.player.lifePoints === -1) {
      console.log('player2 win');
    } else console.log('player1 win');
    if (this.player.lifePoints === -1) return -1;
    return 1;
  }
}