import { Stack } from '@mui/system';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import { removeFromCart } from '../Redux/Slice/CartSlice';

export default function CartPage() {
    const dispatch = useDispatch()
    const { products } = useSelector(x => x.cartState)

    const removeItem = (item) => {
        setTimeout(() => {
            dispatch(removeFromCart(item))
        }, 300)
    }
    return (
        <Box width="80%" m="auto">
            <Stack width="60%">
                {
                    products.map((x, i) => (
                        <Box display="flex" style={{
                            background: "lightgray",
                            borderRadius: "5px",
                        }} alignItems="center"
                            padding={2}
                            mt={1}
                            justifyContent="space-between" key={i} >
                            <Box>
                                <span>{x.name}</span>
                            </Box>
                            <Box>
                                <Button onClick={() => removeItem(x)} variant='contained' color='error'>Remove</Button>
                            </Box>
                        </Box>
                    ))
                }
            </Stack >
        </Box >
    )
}
