

type ProductProps = {
title: string
description: string
price: number
currency: string
item: number
}

const productsArray: ProductProps[] = [
    {
    title: "iPhone 12",
    description: "This is iPhone 12...",
    price: 750,
    currency: "EUR",
    item: 1,
},
{
    title: "iPhone 8",
    description: "This is iPhone 8...",
    price: 850,
    currency: "EUR",
    item: 2,
},
{
    title: "iPhone X",
    description: "This is iPhone X...",
    price: 1250,
    currency: "EUR",
    item: 3,
}
]

export default productsArray