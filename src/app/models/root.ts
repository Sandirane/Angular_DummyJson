import { Product } from "./product";
import { User } from "./user"

export interface Root {
    users: User[]
    products: Product[];
    
    total: number
    skip: number
    limit: number
}