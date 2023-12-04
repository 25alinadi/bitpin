import {IMarketCard} from "./currency.ts";

export interface IResponseData{
    count: number,
    next: string | null,
    previous: string | null,
    results: Array<IMarketCard>
}