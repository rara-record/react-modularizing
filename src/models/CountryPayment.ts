type RoundUpStrategy = (amount: number) => number;

export class CountryPayment {
  private readonly _currencySign: string;
  private readonly algorithm: RoundUpStrategy;

  constructor(currencySign: string, roundUpAlgorithm: RoundUpStrategy) {
    this._currencySign = currencySign;
    this.algorithm = roundUpAlgorithm;
  }

  get currencySign(): string {
    return this._currencySign;
  }

  getRoundUpAmount(amount: number): number {
    return this.algorithm(amount);
  }

  getTip(amount: number): number {
    return calculateTipFor(this.getRoundUpAmount.bind(this))(amount);
  }
}

function calculateTipFor(getRoundUpAmount: (amount: number) => number) {
  return function (amount: number): number {
    const rounded = getRoundUpAmount(amount);
    return parseFloat((rounded - amount).toPrecision(10));
  };
}
