import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Thorin');
const player2 = new Character('Fili');
const player3 = new Character('Kili');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

console.log(player1);
console.log(player2);

const pvp = new PVP(player1, player2);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles:Battle[]) => {
  battles.forEach((battle:Battle) => {
    battle.fight();
    console.log(battle);
  });
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };