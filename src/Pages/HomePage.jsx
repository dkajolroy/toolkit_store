import React, { useEffect } from 'react'
import { Stack } from '@mui/system';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../Redux/Slice/CartSlice';

export default function HomePage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])


    const { users } = useSelector(x => x.productState)
    return (
        <Stack>
            <Box display='flex' justifyContent='center' mt={20}>
                <Button variant='contained' >Increment</Button>
                <Box fontSize={50} mx={5}>
                    {users.length}
                </Box>
                <Button variant='contained' color='secondary' >Decrement</Button>
            </Box>
        </Stack>
    )
}
