    import { Product } from "./product";

export class Delivery {
    public id!: number;
    public feedback!:string;
    public deliveryStatus!: string;
    public total!: number;
    public orderCreatedAt!: Date;
    public userid!: number;
    public products!: Product[];
    constructor() { }
}
