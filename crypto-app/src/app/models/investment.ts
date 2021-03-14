export class Investment {

    constructor(
        private _id: number,
        private _user: number,
        private _quantity: number,
        private _coin: string,
        private _dateInvestment: Date,

    ) {}

    public get dateInvestment(): Date {
        return this._dateInvestment;
    }
    public set dateInvestment(value: Date) {
        this._dateInvestment = value;
    }
    public get coin(): string {
        return this._coin;
    }
    public set coin(value: string) {
        this._coin = value;
    }
    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }
    public get user(): number {
        return this._user;
    }
    public set user(value: number) {
        this._user = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

}
