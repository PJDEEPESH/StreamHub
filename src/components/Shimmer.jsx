import React from 'react';
import { Box,Avatar} from '@mui/material';
export default function Shimmer() {
    return (
        <div style={{display:'flex',
                    flexWrap:'wrap',
                    }}>
        {Array(12).fill("").map((e,index)=>(
            <Box>
                <Box key={index} sx={{
                    width:{xs:'360px',md:'330px'},
                    display:'flex', 
                    margin:"3px",
                    opacity:"0.4",
                    height: '180px',
                    backgroundColor:'#D3D3D3',
                    border:'1px solid grey',
                    borderRadius:'7px',
                    marginBottom:'12px'
                }}></Box>
                <Box sx={{ margin:{sx:{xs:'10px',opacity:'0.6',md:'15px'}} ,display:'flex',justifyContent:'space-around'}}>
                    <Avatar sx={{backgroundColor:'grey',color:'grey'}}></Avatar>
                    <Box sx={{marginBottom:'15px'}}>
                        <div style={{width:'250px',borderRadius:'6px',opacity:'0.5',backgroundColor:'grey',marginRight:'10px', height:'25px' ,marginBottom:'10px'}}></div>
                        <div style={{width:'100px',opacity:'0.5',borderRadius:'3px',height:'15px',backgroundColor:'grey'}}></div>
                    </Box>
                </Box>
            </Box>

            ))}
        </div>
    )
}