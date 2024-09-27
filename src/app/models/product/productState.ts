import { Product } from "./product";
 
export interface ProductState {
    products: Product[];
    limit: number;
    skip: number;
    total: number;
    search: string;
    status: string;
    errorMessage: string;
}