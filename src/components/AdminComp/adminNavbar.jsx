import React, { useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Stack,
  Box,
  Drawer,
  Grid,
  Typography,
  Divider,
} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
// import Dropdownn from './dropdown';
import { AiOutlineLogout } from 'react-icons/ai';



const settings = ['First Page', 'Latest Page', 'Archive'];
const AdminNavbar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [isDraweropem, setDrawerOpen] = useState(false)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const logout = ()=>{
    localStorage.removeItem('token')
    // window.location.reload();
    navigate('/')
  }
  // const active = location.pathname 
  // console.log(location.pathname);
  return (
    <>
      <Box width={{ md: "100%", xs: "100%" }} sx={{ marginLeft: "auto", marginRight: "auto", width: "100%" }} >

        <AppBar position="static" sx={{  boxShadow: 'none'}}>
          <Toolbar sx={{ color: "black" }}>
            <Box display={{ xs: "flex", md: "none" }} sx={{ width: "100%", alignItems: "center" }}  >

              <IconButton
                size='large'
                edge="start"
                sx={{ color: "white" }}
                aria-label='meniIcon'
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>


              <Typography variant="h4" sx={{ color: "white", width: "100%", textAlign: "center", fontFamily: "Dancing Script, cursive" }}>Devon Eriksen  </Typography>


            </Box>
            <Drawer anchor='left' open={isDraweropem} onClose={() => setDrawerOpen(false)} PaperProps={{
              sx: {
                backgroundColor: "#000",
                border: "1px solid #0a291cd6"
              }
            }} >
              <Stack >
                <IconButton
                  size='large'
                  // edge= "end"
                  htmlColor="white"
                  aria-label='meniIcon'
                  onClick={() => setDrawerOpen(false)}
                  sx={{ marginLeft: "auto", marginRight: 0.5, color: "white", position: "absolute", right: 0 }}
                >
                  <CloseIcon htmlColor='white' />
                </IconButton>

              </Stack>
              <Stack direction={"column"} width="330px" height={"100%"} role="presentation" >

                {/* <Link to={"/"} sx={{textDecoration:"none"}}> */}
                <Typography variant="h4" sx={{ color: "white", marginTop: 6, marginBottom: 3, textAlign: "center",fontFamily: "Dancing Script, cursive" }}>Devon Eriksen</Typography>
                {/* <img src={logo} sx={{padding:2}} alt="" height={100} width={90} /> */}
                {/* </Link> */}


                <Link to='/admin-setup'>
                  <Button lassName={`${pathname === "/admin-setup/showemails" ? "activeClass" : "noActiveClass"} font-style`} sx={{color: "#FFFFFF" ,fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Emails</Button>
                </Link>
                
                <Link to='/admin-setup/addwritingarticles'>
                  <Button lassName={`${pathname === "/" ? "activeClass" : "noActiveClass"} font-style`} sx={{color: "#FFFFFF" ,fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Add articles</Button>
                </Link>

                <Link to='/admin-setup/showcontacts'>
                  <Button className={`${pathname === "/events" ? "activeClass" : "noActiveClass"} font-style`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Contact Info</Button>
                </Link>
                
                  <Button onClick={logout}  sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}><AiOutlineLogout color='red' size={30}/>
                  </Button>
                
              </Stack>
            </Drawer>

            <Grid style={{marginTop:"18px", marginBottom:"18px"}} container alignItems={"center"} display={{ xs: "none",md: "flex" }}>
              <Grid lg={6.5} md={2.5} item >
                <Typography color={"#ffffff"} textAlign={{md:"center", lg:"start"}} variant="h4" sx={{ paddingLeft:{ md:"0  px", lg:"33px"}, fontFamily: "Dancing Script, cursive" }}>Devon Eriksen</Typography>
              </Grid>
              <Grid item lg={5.5} md={9.5}>
                <Stack direction='row' justifyContent={{md:"center"}} width={"100%"} alignItems={"center"} spacing={3} paddingLeft={{md:21, lg:0}}>

                  <Link to='/admin-setup'>
                    <Button className={`${pathname === "/" ? "activeClass" : "noActiveClass"} font-style`} sx={{ fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Emails</Button>
                  </Link>
               
                
                  <Link to='/admin-setup/addwritingarticles'>
                    <Button className={`${pathname === "/writing" ? "activeClass" : "noActiveClass"}`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Add articles</Button>
                  </Link>
         

                   {/* </NavLink> */}
                  <Link to='/admin-setup/showcontacts'>
                    <Button className={`${pathname === "/contact" ? "activeClass" : "noActiveClass"}`} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}>Contact info</Button>
                  </Link>

                  
                    <Button onClick={logout} sx={{ color: "#FFFFFF", fontSize: "18px", fontFamily: "Poppins", fontWeight: 300 }}><AiOutlineLogout color='red' size={30}/></Button>
                

                  {/* end here */}
                </Stack>



              </Grid>

            </Grid>



          </Toolbar>
        </AppBar>

      </Box>

    </>
  )
}

export default AdminNavbar