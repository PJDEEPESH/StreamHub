import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Stack, Box,Avatar } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { demoVideoUrl, demoChannelUrl } from '../utils/constants';


export default function VideoCard({ video: { id: { videoId }, snippet } }) {

    return (
        <div className='card'>
            <Card sx={{ width: { md: '328px', xs: '360px' }}}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} onClick={()=>{console.log(videoId)}} style={{textDecoration:"none"}} >
                    <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: {sx:{sm:370,md:358}}, height: 170 }} />
                </Link>
                <CardContent sx={{ backgroundColor: '#1e1e1e', height:"100px"}}>          
                    <Stack direction="row" spacing={2} sx={{ backgroundColor: '#1e1e1e'}}>
                        <Box sx={{ backgroundColor: '#1e1e1e'}}>
                            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ backgroundColor: '#1e1e1e',textDecoration:"none"}}>
                                <Avatar sx={{bgcolor:"aqua", color:"black",fontFamily:"'Vast Shadow', serif"}}>{snippet?.channelTitle.charAt(0).toUpperCase()}</Avatar>
                            </Link>
                        </Box>
                        <Box sx={{ backgroundColor: '#1e1e1e'}}>
                            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{textDecoration:"none"}} >
                                <Typography fontWeight="bold" color='#FFF' sx={{ backgroundColor: '#1e1e1e', fontSize:{md:'16px'}}}>
                                    {snippet?.title.slice(0, 50)}
                                </Typography>
                            </Link>
                             <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{textDecoration:"none"}} >
                                <Typography variant='subtitle2' fontWeight="bold" color="grey" sx={{ backgroundColor: '#1e1e1e'}} >
                                    {snippet?.channelTitle.slice(0,30)}
                                    <CheckCircle sx={{ fontSize: 12, color: "grey", ml: '5px' , backgroundColor: '#1e1e1e' }} />
                                </Typography>
                            </Link> 
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </div>

    )
}