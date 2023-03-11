import { Button, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'

type Props = {}

type ProductProps = {
    title: string
    description: string
    price: number
    currency: string
    item: number
}

type CurrencyData = {
    currName: string
    currRate: number
}

const ProductsList = (Props: Props) => {
    // const [currencyCount,setCurrencyCount] = useState<number>(750)
    const [currencyValue, setCurrencyValue] = useState<CurrencyData>({
        currName: 'EUR',
        currRate: 1,
    })
    const [totalData, setTotalData] = useState<number>(0)

    const changeCurrencyEur = () => {
        setCurrencyValue({ currName: 'EUR', currRate: 1 })
    }
    const changeCurrencyUsd = () => {
        setCurrencyValue({ currName: 'USD', currRate: 1.02 })
    }
    const changeCurrencyUah = () => {
        setCurrencyValue({ currName: 'UAH', currRate: 40.5 })
    }

    const addProductToTotal = (price: number) => {
        setTotalData((prevState) => prevState + price)
    }
    return (
        <>
            <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ margin: '30px 0' }}
            >
                <span className="second-task">Друге завдання:</span> <br /> Our
                shop page
            </Typography>
            <Typography
                component="div"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '15px',
                }}
            >
                <Button variant="outlined" onClick={() => changeCurrencyEur()}>
                    EUR
                </Button>
                <Button variant="outlined" onClick={() => changeCurrencyUsd()}>
                    USD
                </Button>
                <Button variant="outlined" onClick={() => changeCurrencyUah()}>
                    UAH
                </Button>
            </Typography>

            <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                {productsArray.map((product: ProductProps) => (
                    <Grid item>
                        <ProductsListItem
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            currency={product.currency}
                            item={product.item}
                            currencyValue={currencyValue}
                            addProductToTotal={addProductToTotal}
                            changeCurrencyEur={changeCurrencyEur}
                            changeCurrencyUsd={changeCurrencyUsd}
                            changeCurrencyUah={changeCurrencyUah}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography
                variant="h4"
                component="div"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '15px',
                }}
            >
                total: {totalData * currencyValue.currRate}
            </Typography>
        </>
    )
}

export default ProductsList
