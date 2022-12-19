import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Nav() {
    const { products } = useSelector(x => x.cartState)
    return (
        <Box py={2} style={{
            background: "tomato",
        }}>
            <Stack direction="row" justifyContent='space-around' >
                <Stack>
                    <span>Logo</span>
                </Stack>
                <Stack direction="row">
                    <Box mx={2}> <Link to="/">Home</Link></Box>
                    <Box mx={2}> <Link to="/product">Product</Link></Box>
                    <Box mx={2}> <Link to="/cart">Cart</Link> {products.length}</Box>
                </Stack>
            </Stack>
        </Box>
    )
}
