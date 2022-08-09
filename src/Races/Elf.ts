import Race from './Race';

export default class ELf extends Race {
  private _maxLifePoints: number;
  static _numberOfCreatedInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    ELf._numberOfCreatedInstances += 1;
    return ELf._numberOfCreatedInstances;
  }
}