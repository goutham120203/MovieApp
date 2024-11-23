// src/components/Sidebar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { Whatshot, Movie, LocalMovies, EmojiEmotions, Theaters, Psychology, Science, Favorite, Public } from "@mui/icons-material";

const drawerWidth = 240;

function Sidebar() {
  const navigate = useNavigate();

  const categories = [
    { name: "Popular", icon: <Whatshot />, path: "" },
    { name: "Action", icon: <Movie />, path: "action" },
    { name: "Adventure", icon: <LocalMovies />, path: "adventure" },
    { name: "Comedy", icon: <EmojiEmotions />, path: "comedy" },
    { name: "Drama", icon: <Theaters />, path: "drama" },
    { name: "Horror", icon: <Psychology />, path: "horror" },
    { name: "Sci-Fi", icon: <Science />, path: "sci_fi" },
    { name: "Romance", icon: <Favorite />, path: "romance" },
    { name: "Documentary", icon: <Public />, path: "documentary" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{ 
        display: { xs: "none", sm: "block" }, 
        "& .MuiDrawer-paper": { 
          width: drawerWidth, 
          backgroundColor: "transparent" 
        } 
      }}
    >
      <Toolbar sx={{ backgroundColor: "transparent" }} />
      <List>
        {categories.map((category) => (
          <ListItem key={category.name} disablePadding>
            <ListItemButton onClick={() => navigate(`/${category.path}`)}>
              <ListItemIcon>{category.icon}</ListItemIcon>
              <ListItemText primary={category.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
