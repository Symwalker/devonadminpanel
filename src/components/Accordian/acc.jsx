import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchAllArticless } from "../../store/products";

const Accordion = ({ title, content, expanded, onToggle ,date,id}) => {
    const location = useLocation()
    // console.log(Date);
    const dispatch = useDispatch()
   const handleDelete = (id)=>{
    console.log(id);
    axios.delete(`https://wandering-pink-fedora.cyclic.app/api/articles/${id}`)
      .then(res => {
        // console.log(res.data.data)
        // setAllUsers(res.data.data)
        dispatch(fetchAllArticless())

      })
      .catch(err =>
        console.log('--------err', err)
      )
   }
  return (
    <div className={`collapsible ${expanded ? "open" : ""} w-3/4 mx-auto mt-4 `}>
      <div className="toggler" onClick={onToggle} />
    
      <div data-aos="zoom-out-down" style={{backgroundColor:"white" , height:"auto", marginBottom:"20px"}} className="box-shadow">
        <Box sx={{bgcolor:"#ff9b02", borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px"}} className=" text-black px-4 py-1">
        <Typography sx={{fontSize:"20px"}}>{title}</Typography>
        </Box>
        <div className="px-4 py-2" style={{color:"#000", fontSize:"18px"}}>

        {!expanded && (
          <div>
            <p>
              {content.substring(0, 200)}{" "}
              <span style={{ color: "blue", textDecoration: "underline",cursor:"pointer" }} onClick={onToggle}>
                Read more
              </span>
            </p>
          </div>
        )}
      {expanded && (
        <Box sx={{background:"none"}}>
          <p>
            {content}{" "}
            <span style={{ color: "blue", textDecoration: "underline",cursor:"pointer" }} onClick={onToggle}>
              See less
            </span>
          </p>
        </Box>

)}
        </div>
        <div className="flex justify-between px-4 py-2 items-center">
        <Typography fontFamily={"Domine, serif"} className="">{date}</Typography>
        {
    location.pathname === "/admin-setup/addwritingarticles" && localStorage.getItem("token") ? <Button onClick={()=>handleDelete(id)} sx={{bgcolor:"red", 
    ':hover': {
          bgcolor: 'red', // theme.palette.primary.main
          color: 'white',
        },}} variant="contained">Delete</Button> : null
}
</div>
</div>


    </div>
  );
};

export default Accordion;