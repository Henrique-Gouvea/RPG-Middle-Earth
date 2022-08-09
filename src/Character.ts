import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

const generateAleatoryNumber1to10 = () => Math.floor(Math.random() * 10 + 1);

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private numberAleatory:number;

  constructor(private name:string) {
    this.numberAleatory = generateAleatoryNumber1to10();
    this._race = new Elf(name, this.numberAleatory);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = generateAleatoryNumber1to10();
    this._defense = generateAleatoryNumber1to10();
    this._dexterity = this.numberAleatory;
    this._energy = {
      type_: this._archetype.energyType,
      amount: 10,
    };
  }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get maxLifePoints(): number { return this._maxLifePoints; }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }

  get energy(): Energy { return { ...this._energy }; }
  
  attack(enemy:Fighter):void {
    enemy.receiveDamage(this.strength);
  }

  special(enemy:Fighter):void {
    console.log(`resre${this._strength + enemy.defense}`);
  }

  levelUp():void {
    if ((this._maxLifePoints + 2) > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else this._maxLifePoints += 2;

    this._strength += 2;
    this._defense += 2;
    this._dexterity += 2;
    this._energy = {
      type_: this._archetype.energyType,
      amount: 10,
    };
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints:number):number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      const newLife = this._lifePoints - damage;
      if (newLife <= 0) {
        this._lifePoints = -1;
        return -1;
      } 
      this._lifePoints = newLife;
      return newLife;
    } return this._lifePoints;
  }
}