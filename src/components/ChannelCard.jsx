import React from 'react';
import { Box,CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { Link } from "react-router-dom";


export default function ChannelCard({ channelDetail, marginTop }) {
    return (
        <div>
                <Box sx={{
                    boxShadow: "none",
                    borderRadius: "8px",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    height: "275px",
                    margin: "auto",
                    marginTop,
                    textAlign: "center"
                }} width={{ xs: "100%", md: "355px" }}>
                    <Link to={`/channel/${channelDetail?.id?.channelId}`} style={{textDecoration:"none"}}>
                        <CardContent sx={{ display: 'flex',flexDirection:"column", justifyContent: "center", alignItems: "center", textAlign: "center" }} >
                            <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url}
                                sx={{ borderRadius: '50%', mb: 2, height: '180px', width: '180px', border: "1px solid black" }} />
                            <Typography variant='h6' fontWeight="bold" mt="3px" color="white" >
                                {channelDetail?.snippet?.title}<CheckCircle sx={{ fontSize: 14, color: "grey", ml: '5px' }} />
                            </Typography>
                            {channelDetail?.statistics?.subscriberCount && (
                                <Typography variant='h6' color="white">
                                    {`${parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers`}
                                </Typography>
                            )}

                        </CardContent>
                    </Link>
                </Box>
        </div>
    )
}