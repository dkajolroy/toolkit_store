import React from 'react'
import { Stack } from '@mui/system';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export default function HomePage() {
    const dispatch = useDispatch()
    const { products } = useSelector(x => x.productState)
    return (
        <Stack>
            <Box display='flex' justifyContent='center' mt={20}>
                <Button variant='contained'>Increment</Button>
                <Box>
                    {products.length}
                </Box>
                <Button variant='contained' color='secondary' >Decrement</Button>
            </Box>
        </Stack>
    )
}
