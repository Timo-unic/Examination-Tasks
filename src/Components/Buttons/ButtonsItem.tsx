import { Button, Card, CardActions } from '@mui/material'
import { useState } from 'react'

type Props = {
    title: string
    description: string
    price: number
    item: number
}

const ButtonsItem = ({ title, description, price, item }: Props) => {
    const [count, setCount] = useState<number>(0)
    const counterClickBtn = () => {
        setCount(count + 1)
    }
    return (
        <Card variant="outlined">
            <CardActions>
                <Button variant="outlined" onClick={() => counterClickBtn()}>
                    change count({count})
                </Button>
            </CardActions>
        </Card>
    )
}

export default ButtonsItem
