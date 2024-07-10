import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChannelCard, Videos,NavbarHome,Footer } from "./";
import { fetchFromApi } from '../utils/fetchFromApi';

export default function ChannelDetail() {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    console.log(channelDetail, videos)

    useEffect(() => {
        fetchFromApi(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]));

        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items));
    }, [id])



    return (

        <div>
            <NavbarHome/>
            <Box minHeight="95vh" sx={{background:"black"}}>
                <Box>
                    <div style={{
                        background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(253,187,45,1) 100%)',
                        zIndex:'10',
                        height:'250px'
                    }} />
                    <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
                </Box>
                <Box display="flex" sx={{paddingLeft:{xs:2.1}}}>
                    <Box sx={{mr:{sx:{md:"0px",sm:'100px'}}, paddingLeft:{sx:{xs:0,md:2}},overflowY: "auto"}} />
                        <Videos videos={videos} />
                </Box>
            </Box>
            <Footer />
        </div>

    )
}