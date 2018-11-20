export class ProductsFilter {

    brand: Array<string>;
    type: Array<string>;

    constructor() {
        this.brand = new Array<string>()
        this.type = new Array<string>()
    }
}