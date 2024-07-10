import { useEffect, useState, useRef } from 'react';
//import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material'
import { SideBar, Videos, NavbarHome, TopSearchBar } from './';
import { fetchFromApi } from '../utils/fetchFromApi';
// import Spinner from './Spinner';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [selectedCategory1, setSelectedCategory1] = useState('New');
    const [videos, setVideos] = useState([]);
    const topRef = useRef(null);

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behaviour: 'smooth' });
        }
        fetchFromApi(`search?part=snippet&q=${selectedCategory}&type=video`)
            .then((data) => setVideos(data.items))

    }, [selectedCategory]);

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behaviour: 'smooth' });
        }
        fetchFromApi(`search?part=snippet&q=${selectedCategory1}&type=video`)
            .then((data) => setVideos(data.items))

    }, [selectedCategory1]);


    return (
        <div className='home' style={{ backgroundColor: "black" }}>

            <div ref={topRef} />
            <NavbarHome />
            <Stack sx={{ overflowY: "auto", flexDirection: { sx: "column", md: "row" } }}>
                <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid grey", px: { xs: 0, md: 1 } }}>
                    <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>

                <Box sx={{ overflowY: "auto", height: "90vh", flex: "2", p: { xs: 2, md: 1 } }}>
                    <Typography mb={2} sx={{ color: "aqua", fontSize: { xs: "22px", md: "30px" } }} fontWeight="bold" color='white'>
                        {selectedCategory}<span style={{ color: "white" }}> Videos</span>
                    </Typography>
                    <Videos videos={videos} />

                </Box>
                <Box sx={{ height: { sx: "auto", md: "92vh" }, borderLeft: "1px solid grey", p: { xs: 2, md: 1 } }}>
                    <Typography sx={{ fontSize: { sm: '15px', md: '17px' }, fontFamily: "Sans-serif", fontWeight: 'bold', color: "aqua" }}>Top Searches...</Typography>
                    <TopSearchBar selectedCategory1={selectedCategory1} setSelectedCategory1={setSelectedCategory1} />
                </Box>

            </Stack>

        </div>
    )
}