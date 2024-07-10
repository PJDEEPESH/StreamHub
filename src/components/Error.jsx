import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Error(){
    return(
        <Box sx={{backgroundColor:'black'}}>
            <h1 style={{color:'white'}}>
                URL not Found.....!
            </h1>
            <Link className='btn-lg btn-success'>Back to home</Link>
        </Box>
    )
}