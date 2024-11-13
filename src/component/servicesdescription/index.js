import { Typography } from '@mui/material'
import { color } from 'framer-motion'
import React from 'react'

const ServicesDescription = (props) => {
  return (
    <div className='container allpadding pb-0'>
       <Typography
        data-aos="fade-up"
        data-aos-delay="200"
       sx={{color:"#fff",fontSize:"40px",fontWeight:600,textAlign:"left"}}

       >
       {props.servicesdescription}
        </Typography> 
         
       
        
    </div>
  )
}

export default ServicesDescription