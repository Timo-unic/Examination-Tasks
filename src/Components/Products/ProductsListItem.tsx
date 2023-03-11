import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    price: number
    currency: string
    item: number
    currencyValue: {
        currName: string
        currRate: number
    }
    addProductToTotal: (price: number) => void
    changeCurrencyEur: (price: number) => void
    changeCurrencyUsd: (price: number) => void
    changeCurrencyUah: (price: number) => void
}

const ProductsListItem = ({
    title,
    description,
    price,
    currency,
    item,
    currencyValue,
    addProductToTotal,
    changeCurrencyEur,
    changeCurrencyUsd,
    changeCurrencyUah,
}: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <div className="product-price">
                    {currencyValue.currName} {price * currencyValue.currRate}
                </div>
            </CardContent>
            <CardActions className="btn-buy">
                <Button
                    variant="outlined"
                    onClick={() => addProductToTotal(price)}
                >
                    Buy
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
