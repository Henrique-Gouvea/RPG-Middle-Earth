import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(
    name:string,
  ) {
    super(name);
    this._energyType = 'mana';
  }

  get energyType():EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    Necromancer._createdArchetypeInstances += 1;
    return Necromancer._createdArchetypeInstances;
  }
}