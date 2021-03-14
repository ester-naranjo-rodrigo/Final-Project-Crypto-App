export class CoinHistoricalDetail {
    
    constructor(
        private _date: string,
        private _open: number,
        private _high: number,
        private _low: number,
        private _close: number,
        private _adjClose: number,
        private _volume: number,
        private _unadjustedVolume: number,
        private _change: number,
        private _changePercent: number,
        private _vwap: number,
        private _label: string,
        private _changeOverTime: number
    ) {}

    public get changeOverTime(): number {
        return this._changeOverTime;
    }
    public set changeOverTime(value: number) {
        this._changeOverTime = value;
    }
    public get label(): string {
        return this._label;
    }
    public set label(value: string) {
        this._label = value;
    }
    public get vwap(): number {
        return this._vwap;
    }
    public set vwap(value: number) {
        this._vwap = value;
    }
    public get changePercent(): number {
        return this._changePercent;
    }
    public set changePercent(value: number) {
        this._changePercent = value;
    }
    public get change(): number {
        return this._change;
    }
    public set change(value: number) {
        this._change = value;
    }
    public get unadjustedVolume(): number {
        return this._unadjustedVolume;
    }
    public set unadjustedVolume(value: number) {
        this._unadjustedVolume = value;
    }
    public get volume(): number {
        return this._volume;
    }
    public set volume(value: number) {
        this._volume = value;
    }
    public get adjClose(): number {
        return this._adjClose;
    }
    public set adjClose(value: number) {
        this._adjClose = value;
    }
    public get close(): number {
        return this._close;
    }
    public set close(value: number) {
        this._close = value;
    }
    public get low(): number {
        return this._low;
    }
    public set low(value: number) {
        this._low = value;
    }
    public get high(): number {
        return this._high;
    }
    public set high(value: number) {
        this._high = value;
    }
    public get open(): number {
        return this._open;
    }
    public set open(value: number) {
        this._open = value;
    }
    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }
}
