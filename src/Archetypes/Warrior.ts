import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(
    name:string,
  ) {
    super(name);
    this._energyType = 'stamina';
  }

  get energyType():EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    Warrior._createdArchetypeInstances += 1;
    return Warrior._createdArchetypeInstances;
  }
}