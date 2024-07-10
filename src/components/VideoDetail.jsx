import React, { useEffect, useState,useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { CheckCircle} from '@mui/icons-material';
import { NavbarHome,VideoShimmer,SeeMore ,Videos} from "./"
import { Stack, Typography, Box, Avatar} from '@mui/material';
import { fetchFromApi } from '../utils/fetchFromApi';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Visibility from '@mui/icons-material/Visibility';


export default function VideoDetail() {

    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos,setVideos] = useState(null);
    const topRef = useRef(null);

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView();
        }

        fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]));

        fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data)=> setVideos(data.items));
    }, [id]);

       if (videoDetail?.snippet == null) return <VideoShimmer/>; 
    
    const { snippet: { title, channelId, channelTitle, description, publishedAt }, statistics: { viewCount, likeCount } } = videoDetail;

    return (
        <div ref={topRef}>
        <Box minHeight="95vh" sx={{ background: "black" }}>
            <NavbarHome />
            <Stack direction={{ xs: "column", md: "row" }}>
                <Box>
                    <Box sx={{ position: "sticky", width: "100%", top:{sm:"70px",md:"70px"},p:1}}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                        <Typography color="white" sx={{fontSize:{sm:"10px",md:"25px"}}} fontWeight="bold" p={1} >
                            {title}
                        </Typography>
                        <Stack flexDirection={{xs:"column",md:"row"}} justifyContent="space-between" sx={{ color: "white" }} py={2} px={0.7}>

                            <Link to={`/channel/${channelId}`} style={{textDecoration:"none"}}>
                                <Typography fontWeight="bold" color='white' sx={{display:"flex",fontSize:{sm:"8px",md:"20px"} ,alignItems:"center"}}>
                                    <Avatar sx={{ bgcolor: "aqua", color: "black" ,marginRight:'10px' }} >{channelTitle.charAt(0).toUpperCase()}</Avatar>
                                    {channelTitle}
                                    <CheckCircle sx={{ fontSize: '17px', color: 'gray', ml: '5px' }} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="30px" alignItems="center" p={1} justifyContent="space-between" >
                                <Typography sx={{ opacity: 1,fontSize:{sm:"6px",md:"18px"}}}alignItems="center">
                                    <Visibility sx={{color:'aqua',fontSize:{sm:"6px",md:"28px"}}} />
                                    {` ${parseInt(viewCount).toLocaleString()}`} <span style={{opacity:0.8}}>views</span>
                                </Typography>
                                <Typography sx={{ opacity: 1,fontSize:{sm:"6px",md:"18px"},alignItems:"center"}}>
                                    
                                    <ThumbUpIcon  sx={{color:"aqua" , borderColor:"white"}} />
                                    {` ${parseInt(likeCount).toLocaleString()}`} <span style={{opacity:0.8}}>likes</span>
                                    
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box p={1}>
                            <Typography sx={{ color: "aqua", fontWeight: "bold",fontSize:{sm:"10px",md:"20px"} }}>
                                <u>Description</u> :
                                <div><span style={{ color: "white" }}>Released : </span>{publishedAt.substring(0, 10)}</div>
                            </Typography>
                            <Typography sx={{ color: 'white', opacity: '0.7', fontWeight: "bold" }} >
                                <SeeMore content={description} maxLines={3} />
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Stack>

            <Box sx={{justifyContent:"center" , alignItems:"center" , px:{xs:2,md:1} }}>
                <hr style={{color:"white" , opacity:"0.6"}}/>
                <Typography color="aqua" sx={{fontSize:{xs:"25px",md:"30px",paddingBottom:"6px"}}} fontWeight="bold" >Recommended</Typography>
                <Videos videos={videos} />
            </Box>

        </Box>
        </div>
    )
}