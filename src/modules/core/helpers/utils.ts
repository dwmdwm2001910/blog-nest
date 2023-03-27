import { isNil } from 'lodash';

export function toBoolean(value?: string | boolean): boolean {
    if (isNil(value)) return false;
    if (typeof value === 'boolean') return value;
    try {
        return JSON.parse(value.toLowerCase());
    } catch (error) {
        return value as unknown as boolean;
    }
}

export function toNull(value?: string | null): string | null | undefined {
    return value === 'null' ? null : value;
}
