import { SimpleFighter } from './Fighter';
import utils from './utils';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  attack(enemy:SimpleFighter):void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints:number):number {
    const damage = attackPoints;
    this._lifePoints = utils.damageLogic(damage, this._lifePoints);
    return this.lifePoints;
  }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }
}