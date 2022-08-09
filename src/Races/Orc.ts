import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static _numberOfCreatedInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Orc._numberOfCreatedInstances += 1;
    return Orc._numberOfCreatedInstances;
  }
}