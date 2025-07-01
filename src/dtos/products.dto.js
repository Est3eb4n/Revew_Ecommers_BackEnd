export default class ProductDTO{
    code;
    name;
    description;
    images;
    price;
    stock;
    brand;
    condition;
    category;
    sizes;
    colors;
    VAT;

    constructor(data) {
        this.code = data.code;
        this.name = data.name;
        this.description = data.description;
        this.images = data.images || [];
        this.price = data.price;
        this.stock = data.stock;
        this.brand = data.brand;
        this.condition = data.condition || 'new';
        this.category = data.category;
        this.sizes = data.sizes || [];
        this.colors = data.colors || [];
        this.VAT = data.VAT || 0;
        this.updateTimestamps();
    }
}