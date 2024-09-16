import { BigNumber } from 'bignumber.js';

const sum = (a: number, b: number) => new BigNumber(a).plus(b).toNumber();
const times = (a: number, b: number) => new BigNumber(a).times(b).toNumber();
const pow = (a: number, b: number) =>
  new BigNumber(a).exponentiatedBy(b).toNumber();
const dividedBy = (a: number, b: number) =>
  new BigNumber(a).dividedBy(b).toNumber();

export class ZenoParadox {
  private _achillesSpeed: number;
  private readonly _turtleSpeed: number;
  private _achillesPosition: number;
  private _turtlePosition: number;
  private _time: number;
  private _deltaExponent = 0;

  constructor(achillesSpeed: number, turtleSpeed: number, turtleLead: number) {
    this._achillesSpeed = achillesSpeed;
    this._turtleSpeed = turtleSpeed;
    this._achillesPosition = 0;
    this._turtlePosition = turtleLead;
    this._time = 0;
  }

  step(): void {
    const deltaTime = pow(10, -this._deltaExponent);

    this._time = sum(this._time, deltaTime);
    this._achillesPosition = sum(
      this._achillesPosition,
      times(this._achillesSpeed, deltaTime),
    );

    this._turtlePosition = sum(
      this._turtlePosition,
      times(this._turtleSpeed, deltaTime),
    );

    this._deltaExponent = this._deltaExponent + 1;
  }

  public get time(): number {
    return dividedBy(times(this._time, 100), 100);
  }

  public get achillesPosition(): number {
    return dividedBy(times(this._achillesPosition, 100), 100);
  }

  public get turtlePosition(): number {
    return dividedBy(times(this._turtlePosition, 100), 100);
  }
}
