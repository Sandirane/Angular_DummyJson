

export interface Company {
    department: string
    name: string
    title: string
    address: Address2
}

export interface Address2 {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: Coordinates2
    country: string
}

export interface Coordinates2 {
    lat: number
    lng: number
}