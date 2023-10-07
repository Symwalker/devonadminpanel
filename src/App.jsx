import './App.css';
import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom';

import Layout from './pages/Layout';


import AdminControl from './pages/Admin';
import Login from './pages/Login';
import ShowEmails from './components/AdminComp/showEmail';
import ShowContactinfo from './components/AdminComp/Contactinfo';
import AddArticles from './components/AdminComp/addArticles';


const App = () => {
  let routes = [
    {
      path: "/", // The base path
      element: <Layout />,
      children: [
        {
          index:true,
          // path: "/login", // Full path to the login page
          element: <Login />,
        },
        {
          path: "admin-setup", // Full path to the admin-setup page
          element: <AdminControl/>,
          children: [
            { index: true, element: <ShowEmails /> },
            { path: "showcontacts", element: <ShowContactinfo /> },
            { path: "addwritingarticles", element: <AddArticles /> },
          ]
        }

      ]
    },
    
  ];
  

const element = useRoutes(routes)
return (
    <>
 
        {/* <Navbar /> */}


        {element}
        
   

   
    </>
)

    }
export default App






// import './App.css';
// import React from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Navbar from './components/navbar/Navbar';
// import Layout from './pages/Layout';
// import Novels from './pages/Novels';
// import OrbitalSpace from './pages/OrbitalSpace';
// import Footer from './components/Footer/footer';
// import { Box } from '@mui/material';
// import bg from "./images/bg.jpg"
// import TheftofFire from './pages/TheftofFire';
// import Contact from './pages/Contact';
// import NewsEmail from './components/Newsletter/newsEmail';
// import Events from './pages/Events';
// import Media from './pages/media';
// import AdminControl from './pages/Admin';
// import ShowEmails from './components/AdminComp/showEmail';
// import AdminNavbar from './components/AdminComp/adminNavbar';
// import ShowContactinfo from './components/AdminComp/Contactinfo';
// import AddArticles from './components/AdminComp/addArticles';
// import WritersThought from './pages/WritersThought';
// import Login from './pages/Login';

// const App = () => {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith('/admin-setup' || '/admin-setup/showemails' || '/admin-setup/showcontacts' || '/admin-setup/addwritingarticles' || '/admin-setup/login');

//   const adminRoutes = (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//       <Route path="/admin-setup" element={<AdminControl />} />
//       <Route path="/admin-setup/showemails" element={<ShowEmails />} />
//       <Route path="/admin-setup/showcontacts" element={<ShowContactinfo />} />
//       <Route path="/admin-setup/addwritingarticles" element={<AddArticles />} />
//       <Route path="/admin-setup/login" element={<Login />} />
//       </Route>
//     </Routes>   
//   );

//   const mainRoutes = (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/novels" element={<Novels />} />
//         <Route path="/theft-of-fire" element={<TheftofFire />} />
//         <Route path="/orbital-space" element={<OrbitalSpace />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/media" element={<Media />} />
//         <Route path="/writing" element={<WritersThought />} />
//       </Route>
//     </Routes>
//   );

//   return (
//     <>
//       <Box
//         sx={{
//           backgroundSize: 'contain',
//           position: "relative",
//           backgroundRepeat: 'repeat',
//           backgroundImage: isAdminRoute ? 'none' : `url(${bg})`,
//         }}
//       >
//         {!isAdminRoute && <Navbar />}
//         {isAdminRoute ? adminRoutes : mainRoutes}        
//         {!isAdminRoute && <NewsEmail />}
//         {!isAdminRoute && <Footer />}
//       </Box>
//     </>
//   );
// }

// export default App;


