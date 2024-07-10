import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function App() {
  return (
    <>
      <hr style={{color:'white'}} />
      <p style={{textAlign:'center',color:'grey'}}>Follow me on :</p>
      <div style={{justifyContent:'center',display:'flex',paddingBottom:'20px',gap:'8px'}}>
        <a className='btn btn-light' href="https://wa.me/917075087601" target='_blank' rel="noreferrer"><WhatsAppIcon /></a>
        <a className='btn btn-light' href="https://www.linkedin.com/in/p-j-deepesh-27546a20b/" target='_blank' rel="noreferrer"><LinkedInIcon /></a>
        <a className='btn btn-light' href="https://www.instagram.com/deepu_deepesh_/" target='_blank' rel="noreferrer"><InstagramIcon /></a>
        <a className='btn btn-light' href="https://github.com/PJDEEPESH" target='_blank' rel="noreferrer"><GitHubIcon /></a>
      </div>
      <div style={{textAlign:'center',padding:'15px 0px',color:'white',backgroundColor:'#333333',opacity:'0.5'}}>
          Developed By PJ Deepesh
      </div>
    </>
  );
}
