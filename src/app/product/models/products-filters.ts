export class ProductsFilter {

    isFilter: boolean;
    ids: Array<string>;
    text: string;
    constructor() {
        this.isFilter = false;
        this.ids = new Array<string>()
    }
}