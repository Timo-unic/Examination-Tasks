import { Grid, Typography } from '@mui/material'
import productsArray from 'utils/productsArray'
import ButtonsItem from './ButtonsItem'

type Props = {}

type ProductProps = {
    title: string
    description: string
    price: number
    item: number
}

const Buttons = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="div"
                sx={{
                    margin: '50px 0 20px 15px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                Перше завдання:
            </Typography>
            <Grid container sx={{ justifyContent: 'center' }}>
                {productsArray.map((product: ProductProps) => (
                    <Grid item>
                        <ButtonsItem
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            item={product.item}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Buttons
