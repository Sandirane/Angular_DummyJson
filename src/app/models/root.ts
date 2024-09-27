import { Product } from "./product/product";
import { User } from "./user/user";
 
export interface Root {
    users: User[]
    products: Product[];
    
    total: number
    skip: number
    limit: number
}