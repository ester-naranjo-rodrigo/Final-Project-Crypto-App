import { CoinHistoricalDetail } from "./coin-historical-detail";

export class CoinHistorical {

    constructor(
        private _symbol: string,
        private _historical: CoinHistoricalDetail[]
    ) {}

    public get historical(): CoinHistoricalDetail[] {
        return this._historical;
    }
    public set historical(value: CoinHistoricalDetail[]) {
        this._historical = value;
    }
    public get symbol(): string {
        return this._symbol;
    }
    public set symbol(value: string) {
        this._symbol = value;
    }

}
