import React from 'react';
import { Stack } from '@mui/material';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {categories} from "../utils/constants"
import LogoutIcon from '@mui/icons-material/Logout';
import "./Components.css"

export default function SideBar({selectedCategory,setSelectedCategory}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Stack
                direction="row" sx={{overflowY:"auto",height:{sx:"auto",md:"95%"},flexDirection:{md:"column"}}}
            >
                {categories.map((category)=>(
                    <button className='category-btn' style={{
                        backgroundColor : category.name === selectedCategory && 'aqua',
                        color : category.name === selectedCategory && 'black',
                    }}
                    key={category.name}
                    onClick={()=>{setSelectedCategory(category.name)}}
                    >
                        <span style={{color:category.name===selectedCategory?"black":"aqua"}}>{category.icon}</span>
                        <span style={{opacity:category.name===selectedCategory?"1":"0.8"}}>{category.name}</span>
                    </button>
                ))}      
                <Button className='btn btn-dark category-btn' onClick={handleShow} style={{opacity:'0.8',paddingLeft:"25px"}}>LogOut <LogoutIcon style={{color:"aqua",paddingLeft:"5px"}}/></Button> 
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    >
                <Modal.Header className='bg-dark text-light'>
                <Modal.Title>LogOut</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-light'>
                <h6>If you click 'Yes' then you will be logged out.</h6>
                </Modal.Body>
                <Modal.Footer className='bg-dark text-light'>
                <Button variant="warning" onClick={()=>{
                     window.open("/", "_blank", "noopener,noreferrer");
                     document.body.style.opacity = 0;
                    setTimeout(() => {
                    window.location.href = "about:blank";
                    window.close(); 
                    }, 500);
                }} >
                    Yes,sure
                </Button>
                <Button variant="secondary" onClick={handleClose}>Back</Button>
                </Modal.Footer>
            </Modal>         
                    </Stack>
        </>
    )
}