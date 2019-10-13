import uuid from "uuid";
import { ParsedQuery } from 'query-string';
import { SortOrder, SortKey, SortInfo } from '../types/General';
import { useLocation } from 'react-router-dom'
import { parse } from 'query-string'

export const sleep = (milliseconds = 500) => new Promise(resolve => setTimeout(resolve, milliseconds))

export class EnumHelper {
    static getKeys<T>(e: T): string[] {
        return Object.keys(e)
    }
}

export const canvasCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
}

const getSortOrderFromSearchParams = (searchParams: ParsedQuery): SortOrder => {
    switch (searchParams.sort_order) {
        case "asc": return "asc";
        case "desc": return "desc";
        default: return undefined;
    }
}

const getSortKeyFromSearchParams = (searchParams: ParsedQuery): SortKey => {
    return typeof searchParams.sort_key === "string" ? searchParams.sort_key : undefined
}

export const getSortFromSearchParams = (searchParams: ParsedQuery): SortInfo => {
    let sortKey = getSortKeyFromSearchParams(searchParams)
    let sortOrder = getSortOrderFromSearchParams(searchParams)
    return { sortKey, sortOrder }
}

export const cycleSort = (sort: SortOrder, isNewKey: boolean): SortOrder => {
    if (isNewKey) return "asc";
    switch (sort) {
        case "asc": return "desc";
        case "desc": return undefined;
        default: return "asc";
    }
}

export function useSearchParams() {
    const location = useLocation();
    return parse(location.search);
}
