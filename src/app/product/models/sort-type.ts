export class SortType {
    value: string;
    viewValue: string;
}

export const SortTypes: Array<SortType> = [
    { value: 'price', viewValue: 'Lowest price' },
    { value: '-price', viewValue: 'Highest price' },
    { value: '-rating', viewValue: 'Best rating' }
];