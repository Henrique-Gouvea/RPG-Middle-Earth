import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private player2: Fighter;
  
  constructor(player:Fighter, player2:Fighter) { 
    super(player);
    this.player2 = player2;
  }

  // attackPlayer = () => {
  //   this.player.attack(this.player2);
  //   if (this.player2.lifePoints === -1) return 1;
  // };

  // attackPlayer2 = () => {
  //   this.player2.attack(this.player);
  //   if (this.player.lifePoints === -1) return -1;
  // };

  fight(): number {
    while (this.player2.lifePoints > 0 && this.player.lifePoints > 0) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
      // this.attackPlayer();
      // this.attackPlayer2();
    }
    if (this.player.lifePoints === -1) return -1;
    return 1;
  }
}