import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static _numberOfCreatedInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Dwarf._numberOfCreatedInstances += 1;
    return Dwarf._numberOfCreatedInstances;
  }
}