export interface Admin {
    firstName: string,
    lastName: string,
    role: "owner" | "manager",
    email: string,
    password: string,
    _id?: any
}

interface Review {
    author: string,
    message: string,
    rating: number,
    createdDate: Date
}
interface Character {
    key: string,
    value: string
}

export interface Product {
    _id: any,
    title: string,
    images: string[],
    price: number,
    rating: number,
    active: boolean,
    characteristics: Character[],
    description: string,
    reviews: Review[],
    slug: string
}