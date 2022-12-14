import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
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
    Ranger._createdArchetypeInstances += 1;
    return Ranger._createdArchetypeInstances;
  }
}