export class MyDate {
  constructor(
    private _year: number,
    private _month: number,
    private _day: number
  ) {}

  printFormat(): string {
    return `${this._day}/${this._month}/${this._year}`;
  }

  add(amount: number, type: 'day' | 'months' | 'years'): void {
    if (type === 'day') {
      this.addDay(amount);
    }

    if (type === 'months') {
      this.addMonths(amount);
    }

    if (type === 'years') {
      this.addYears(amount);
    }
  }

  private addDay(amount: number): void {
    this._day += amount;
  }

  private addMonths(amount: number): void {
    this._month += amount;
  }

  private addYears(amount: number): void {
    this._year += amount;
  }
}

const myDate = new MyDate(1993, 7, 1);
console.log(myDate.printFormat());
myDate.add(10, 'day');
console.log(myDate.printFormat());
myDate.add(2, 'months');
console.log(myDate.printFormat());