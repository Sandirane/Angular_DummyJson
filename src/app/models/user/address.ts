
export interface Address {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: Coordinates
    country: string
}

export interface Coordinates {
    lat: number
    lng: number
}