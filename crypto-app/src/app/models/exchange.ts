export class Exchange {

    constructor(
        private _symbol: string,
        private _name: string,
        private _price: number,
        private _changesPercentage: number,
        private _change: number,
        private _dayLow: number,
        private _dayHigh: number,
        private _yearHigh: number,
        private _yearLow: number,
        private _marketCap: number,
        private _priceAvg50: number,
        private _priceAvg200: number,
        private _volume: number,
        private _avgVolume: number,
        private _exchange: string,
        private _open: number,
        private _previousClose: number,
        private _eps: number,
        private _pe: number,
        private _earningsAnnouncement: number,
        private _sharesOutstanding: number,
        private _timestamp: number,
        
    ) {}

    public get timestamp(): number {
        return this._timestamp;
    }
    public set timestamp(value: number) {
        this._timestamp = value;
    }
    public get sharesOutstanding(): number {
        return this._sharesOutstanding;
    }
    public set sharesOutstanding(value: number) {
        this._sharesOutstanding = value;
    }
    public get earningsAnnouncement(): number {
        return this._earningsAnnouncement;
    }
    public set earningsAnnouncement(value: number) {
        this._earningsAnnouncement = value;
    }
    public get pe(): number {
        return this._pe;
    }
    public set pe(value: number) {
        this._pe = value;
    }
    public get eps(): number {
        return this._eps;
    }
    public set eps(value: number) {
        this._eps = value;
    }
    public get previousClose(): number {
        return this._previousClose;
    }
    public set previousClose(value: number) {
        this._previousClose = value;
    }
    public get open(): number {
        return this._open;
    }
    public set open(value: number) {
        this._open = value;
    }
    public get exchange(): string {
        return this._exchange;
    }
    public set exchange(value: string) {
        this._exchange = value;
    }
    public get avgVolume(): number {
        return this._avgVolume;
    }
    public set avgVolume(value: number) {
        this._avgVolume = value;
    }
    public get volume(): number {
        return this._volume;
    }
    public set volume(value: number) {
        this._volume = value;
    }
    public get priceAvg200(): number {
        return this._priceAvg200;
    }
    public set priceAvg200(value: number) {
        this._priceAvg200 = value;
    }
    public get priceAvg50(): number {
        return this._priceAvg50;
    }
    public set priceAvg50(value: number) {
        this._priceAvg50 = value;
    }
    public get marketCap(): number {
        return this._marketCap;
    }
    public set marketCap(value: number) {
        this._marketCap = value;
    }
    public get yearLow(): number {
        return this._yearLow;
    }
    public set yearLow(value: number) {
        this._yearLow = value;
    }
    public get yearHigh(): number {
        return this._yearHigh;
    }
    public set yearHigh(value: number) {
        this._yearHigh = value;
    }
    public get dayHigh(): number {
        return this._dayHigh;
    }
    public set dayHigh(value: number) {
        this._dayHigh = value;
    }
    public get dayLow(): number {
        return this._dayLow;
    }
    public set dayLow(value: number) {
        this._dayLow = value;
    }
    public get change(): number {
        return this._change;
    }
    public set change(value: number) {
        this._change = value;
    }
    public get changesPercentage(): number {
        return this._changesPercentage;
    }
    public set changesPercentage(value: number) {
        this._changesPercentage = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get symbol(): string {
        return this._symbol;
    }
    public set symbol(value: string) {
        this._symbol = value;
    }

}
