import { User } from "./user"

export interface Root {
    users: User[]
    total: number
    skip: number
    limit: number
}