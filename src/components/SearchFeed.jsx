import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import { Videos,NavbarHome,Footer } from './';
import { fetchFromApi } from '../utils/fetchFromApi';

export default function SearchFeed() {
    const [videos,setVideos]  = useState([]);
    const {searchTerm} = useParams();
    useEffect(()=>{
        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
    },[searchTerm]);

    return (
        <div className='home'>
                <NavbarHome/>
                <Box sx={{ overflowY: "auto", height: "90vh", flex: "2",paddingLeft:{xs:2,md:2} ,justifyContent:"center",alignItems:"center" }}>
                    <Typography mb={2} sx={{ color: "white" }} fontSize={{xs:"23px", md:"33px"}} fontWeight="bold" color='white'>
                        Results for <span style={{color:"aqua"}}>{searchTerm}</span>
                    </Typography>
                    
                    <Videos videos={videos} />
                </Box>
                <br />
                <Footer/>
        </div>
    )
}