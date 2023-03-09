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

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ margin: '30px 0' }}
            >
                Our shop page
            </Typography>
            <Typography component="div" sx={{ display: "flex", justifyContent: "center", marginBottom: "15px"}}>
                <Button variant='outlined'>EUR</Button>
                <Button variant='outlined'>USD</Button>
                <Button variant='outlined'>UAH</Button>
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
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProductsList
