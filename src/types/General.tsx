export type SortOrder = "asc" | "desc" | undefined
export type SortKey = string | undefined
export type SortInfo = {
    sortOrder: SortOrder;
    sortKey: SortKey;
}
