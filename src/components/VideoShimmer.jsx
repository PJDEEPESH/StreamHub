import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import NavbarHome from './NavbarHome';
import {Shimmer} from "./";

export default function VideoShimmer() {
    return (
        <>
            <NavbarHome />

            <Box minHeight='95vh' sx={{ backgroundColor: 'black' }}>
                <br />
                <Box sx={{ backgroundColor: "black", width: "100%", top: { sm: "70px", md: "70px" }, p: 1 }}>
                    <Box sx={{ backgroundColor: 'grey', opacity: '0.4', borderRadius: '4px', height: { xs: "9cm", md: "11cm" } }} p={1} />
                    <Box sx={{ marginTop: '15px', opacity: '0.5', borderRadius: '4px', height: { xs: '2cm', md: '1.5cm' }, backgroundColor: 'grey', marginBottom: '15px' }} />
                    <Box sx={{ marginTop: { xs: '5px', md: '10px' }, height: { xs: '1cm', md: '2cm' }}}>
                        <Box sx={{ backgroundColor: 'black', display: 'flex' }}>
                            <Avatar sx={{ color: 'grey', backgroundColor: 'grey' }} />
                            <Box sx={{ width: { xs: '4cm', md: '5cm' }, color: 'white',opacity:'0.4' ,margin: '5px', marginLeft: '15px', borderRadius: '4px', backgroundColor: 'grey', height: '0.7cm' }} />
                        </Box>
                    </Box>
                    <Box sx={{backgroundColor:'grey',marginTop:{xs:'0.7cm',md:'-0.4cm'},opacity:'0.4',borderRadius:'4px',height:'3cm'}} />
                </Box>
                <br />
                <Box sx={{ justifyContent: "center", alignItems: "center", px: { xs: 1.5, md: 1 } }}>
                    <Typography sx={{ color:"aqua" , fontSize: { xs: "25px", md: "30px" }, paddingBottom: "4px",fontWeight:"bold" }}  >Recommended</Typography>
                    <hr style={{ color: "white", opacity: "0.6" }} />
                    <Shimmer/>
                </Box>

            </Box >
        </>
    )
}