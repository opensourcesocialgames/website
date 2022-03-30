import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Working from "../images/screenshots/working.png"
import Working1 from "../images/screenshots/working1.png"
import Redux from "../images/screenshots/redux.png"
import Demo from "../images/screenshots/new_demo.png"
import ServerSetup from "../images/screenshots/partyfishnetworking.jpg"
import HomePage from "../images/screenshots/new_partyfishHP.png"
import Logic from "../images/screenshots/roundLogic.png"
import Networking from "../images/screenshots/networking.png"

export default function Screenshots() {
  return (
    <div className="Screenshots" id="Screenshots">
      <h5
        style={{
          color: "#023E8A",
          marginTop: 20,
          marginBottom: 20,
          fontStyle: "italic",
        }}
      >
        Screenshots of Development and Gameplay
      </h5>
      <br></br>
      {itemData.length &&
        <Box justify-content={"center"}>
          <ImageList variant="quilted" cols={4} rowHeight={150}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  src={`${item.img}?w=${121* item.cols}&h=${1 * item.rows}&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=${121 * item.cols}&h=${1 * item.rows}&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.7) 50%, ' +
                      'rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%)',
                  }}
                  title={item.title}
                  position="bottom"
                  actionPosition="left"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      }
    </div>
  );
}

const itemData = [
   // To add images, use the structure below. Order of the images does not matter.
   {
    img: HomePage,
    title: "PartyFishHomePage",
    rows: 2,
    cols: 2,
     }, 
     {
      img: Demo,
      title: "Game Demo",
      rows: 2,
      cols: 2,
     }, 
     {
      img: Networking,
      title: "Networking Connections",
      rows: 3,
      cols: 2,
    },      
     {
       img: ServerSetup,
       title: "Server Setup",
       rows: 3,
       cols: 2,
     },
     {
      img: Working,
      title: "Working Hard",
      rows: 2,
      cols: 2,
      },
     {
       img: Working1,
       title: "Hardly Working",
       rows: 2,
       cols: 2,
     },
     {
      img: Redux,
      title: "Redux Diagram",
      rows: 2,
      cols: 2,
    },
     {
      img: Logic,
      title: "Round Logic",
      rows: 2,
      cols: 2,
    },

];
