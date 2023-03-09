import { Button, Card, CardActions, CardContent } from '@mui/material'

type Props = {
    title: string
    description: string
    price: number
    currency: string
    item: number
}

const ProductsListItem = ({
    title,
    description,
    price,
    currency,
    item,
}: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-title">{title} </div>
                <div className="product-desc">{description} </div>
                <div className="product-price">{price} </div>
            </CardContent>
            <CardActions>
                <Button variant="outlined">Buy</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
