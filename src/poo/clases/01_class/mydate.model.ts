export class MyDate {

  _year: number;
  _month: number;
  _day: number;

  // default
  constructor();
  //parameterized constructors
  constructor(year: number );
  constructor(year: number , month: number );
  constructor(year: number , month: number,  day: number);


  constructor( year?: number , month?: number,  day?: number ){
    this._year = 19997;
    this._month = 1;
    this.:day = 1;

    if ( year !== undefined ){          
        this._year = year;
    }
    if ( month !== undefined ){
        this._month = month;
    }
    if ( day !== undefined ){
        this._day = day;
    }
  }

  get year() {
    return this._year;
  }
  
  get month() {
    return this._month;
  }
  get day(){
    return this._day;
  }

  get date():string{
    return `${this._day}/${this._month}/${this._year}`;
  }
}