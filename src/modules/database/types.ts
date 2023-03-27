import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';

export interface PaginateMeta {
    itemCount: number;
    totalItems?: number;
    perPage: number;
    totalPages?: number;
    currentPage: number;
}

export interface PaginateOptions {
    page: number;
    limit: number;
}

export interface PaginateReturn<E extends ObjectLiteral> {
    meta: PaginateMeta;
    items: E[];
}

export type QueryHook<Entity> = (
    qb: SelectQueryBuilder<Entity>,
) => Promise<SelectQueryBuilder<Entity>>;
