// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import MenuIcon from "@mui/icons-material/Menu"; // Menu icon
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import { Box, Container } from "@mui/material";
// import highmastlogo from "../../assets/img/logo/highmastlogo.png";
// import { Link } from "react-router-dom"; // Import Link for routing
// import "./index.css";

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   return (
//     <>
//       <AppBar
//         className="container"
//         position="absolute" // Change to absolute to overlap the banner
//         sx={{
//           backgroundColor: "transparent", // Make background transparent
//           boxShadow: "none", // Remove default AppBar shadow
//           left:"0",
//           right:"0",
//           padding:"0px"
//         }}
//       >
//         <Toolbar className="navpadding" sx={{ justifyContent: "space-between", }}>
//           <Typography component="div">
//             <img
//               src={highmastlogo}
//               alt="Logo"
//               style={{ width: "200px", height: "75px" }}
//             />
//           </Typography>

//           <IconButton
//             edge="end"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="top" // Open from the right
//         open={drawerOpen}
//         onClose={toggleDrawer(false)}
//         variant="persistent" // Keeps the drawer open
//         sx={{
//           "& .MuiDrawer-paper": {
//             height: "100vh", // Full height
//             width: "100%", // Full width
//             display: "flex",
//             overflowY: "auto",
//             flexDirection: "column",
//             justifyContent: "center", // Center vertically
//             alignItems: "center", // Center horizontally
//             boxSizing: "border-box",
//             backgroundColor: "#f0f0f0", // Background color for the drawer
//             padding: "20px",
//           },
//         }}
//       >
//         <IconButton
//           onClick={toggleDrawer(false)}
//           aria-label="close menu"
//           sx={{
//             position: "absolute",
//             top: 0,
//             right: 0,
//             margin: "10px",
//           }}
//         >
//           <MenuIcon />
//         </IconButton>

//         <div
//           style={{
//             display: "flex",
//             width: "100%",
//             justifyContent: "space-around",
//           }}
//         >
//           <List>
//             <ListItem
//               button
//               component={Link}
//               to="/home"
//               onClick={toggleDrawer(false)}
//             >
//               <ListItemText primary="Home" />
//             </ListItem>
//             <ListItem
//               button
//               component={Link}
//               to="/about"
//               onClick={toggleDrawer(false)}
//             >
//               <ListItemText primary="About" />
//             </ListItem>
//           </List>
//           <List>
//             <ListItem
//               button
//               component={Link}
//               to="/services"
//               onClick={toggleDrawer(false)}
//             >
//               <ListItemText primary="Services" />
//             </ListItem>
//             <ListItem
//               button
//               component={Link}
//               to="/contact"
//               onClick={toggleDrawer(false)}
//             >
//               <ListItemText primary="Contact" />
//             </ListItem>
//           </List>
//         </div>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;
import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import highmastlogo from "../../assets/img/logo/highmastlogo.png";
import { Link } from "react-router-dom";
import emailcall from "../../assets/img/elements/contact-mail.png";
import "./index.css";

const Navbar = () => {
  let Data = {
    navlinks: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "About Us",
        url: "/about-us",
      },
      {
        name: "Services",
        url: "/services",
      },
      {
        name: "Supply",
        url: "/supply",
      },
      {
        name: "Contact",
        url: "/contact",
      },
    ],
  };

  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setFixed(window.pageYOffset > 0));
    }
  }, []);

  return (
    <Box
      sx={{
        position: fixed ? "fixed" : "absolute",
        width: "100%",
        zIndex: 999,
        height: 80,
        display: "flex",
        alignItems: "center",
        transition: "0.5s ease all",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%", minWidth: "800px" }}
        >
          <Stack
            sx={{
              border: fixed ? "1px solid #d7d7d7" : "1px solid #121a27",
              height: 70,
              mt: 3,
              borderRadius: 2,
              backgroundColor: fixed ? "rgb(16 59 81 / 15%)" : "transparent",
              backdropFilter: fixed && "blur(5px)",
              alignItems: "center",
              paddingLeft: "20px",
              paddingRight: "20px",
              flexGrow: 1, 
            }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
            mt={1}
          >
            {/* Logo */}
            <img src={highmastlogo} width={150} alt="Highmast Logo" />

            {/* Navigation Links */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              {Data.navlinks.map((val, i) => (
                <Link to={val.url} key={i} style={{ textDecoration: "none" }}>
                  <Typography
                    fontFamily="poppins"
                    fontWeight={500}
                    textTransform={"uppercase"}
                    color="#fff"
                    margin="0px 20px"
                  >
                    {val.name}
                  </Typography>
                </Link>
              ))}
            </Stack>
            <Stack/>
          </Stack>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: fixed ? "1px solid #d7d7d7" : "1px solid #121a27",

              mt: 3,
              borderRadius: 2,
              backgroundColor: fixed ? "rgb(16 59 81 / 15%)" : "transparent",
              backdropFilter: fixed && "blur(5px)",
              padding: "10px 15px",
              height: 70,
              borderRadius: "8px",
              marginLeft: "5px",
              marginTop: "25px",
            }}
          >
            <img
              src={emailcall}
              alt="Email Call Icon"
              style={{ width: "30px", height: "30px" }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
