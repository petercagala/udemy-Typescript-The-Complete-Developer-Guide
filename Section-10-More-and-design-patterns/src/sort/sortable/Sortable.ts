
export interface Sortable {
    compare(leftIndex: number, rightIndex: number): boolean;

    swap(leftIndex: number, rightIndex: number): void;

    getLength(): number;
}