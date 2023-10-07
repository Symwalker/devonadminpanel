import { Box } from '@mui/material'
import React from 'react'
import error from "../images/error.png"
const Error = () => {
  return (
    <div className='text-center mt-10'>

    <Box
  component="img"
  className='mx-auto'
  sx={{
      height:"50%",
      width: "45%",
      
    }}
    alt="The house from the offer."
    src={error}
/>
    </div>
  )
}

export default Error