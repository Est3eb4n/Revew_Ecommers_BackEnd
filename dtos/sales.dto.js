export default class SalesDTO{
    reference;
    date;
    paymentMethod;
    client;
    seller;
    details;

    constructor(data) {
        this.reference=data.reference;
        this.date=data.date;
        this.paymentMethod=data.paymentMethod;
        this.client=data.client;
        this.seller=data.seller;
        this.details=data.details;
    }
}