import { Product } from "./product";
import { UserAddress } from "./user-address";

export class User {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public role!: string;
    public userAddress!: UserAddress;
    public cartlist!: Product[];
    constructor() { }
}
