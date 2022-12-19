import React, { useEffect } from 'react'
import { Stack } from '@mui/system';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../Redux/Slice/ProductSlice';
import { addToCart } from '../Redux/Slice/CartSlice';

export default function HomePage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])


    const { users } = useSelector(x => x.productState)
    const addCart = (item) => {
        dispatch(addToCart(item))
    }
    return (
        <Stack direction="row" flexWrap="wrap">
            {
                users.map((x, i) => (
                    <Box key={i} width="20%" >
                        <Box
                            m={1}
                            borderRadius={1}
                            display="flex"
                            flexDirection="column"
                            boxShadow="0 5px 10px gray">
                            <Box style={{ background: "lightgray" }} height={120}></Box>
                            <Box my={1}>
                                <span >{x.name}</span>
                            </Box>
                            <Button onClick={() => addCart(x)} variant='contained' color='secondary' >
                                Add to Cart
                            </Button>
                        </Box>
                    </Box>
                ))
            }
        </Stack>
    )
}
