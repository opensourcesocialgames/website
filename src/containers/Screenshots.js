import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import BlobFishParty from "../images/blobfish.png";

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
      <img src={BlobFishParty} alt="Blobfish Party"></img>
      <br></br>
      <br></br>
      <p>
        We currently don't have any screenshots of our development or gameplay, but we will upload media once we have our first release!
      </p>
      <Box sx={{ overflowY: "scroll" }} justify-content={"center"}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

const itemData = [
/* To add images, use the structure below. Order of the images does not matter.
  {
    img: "",
    title: "",
  },
  {
    img: "",
    title: "",
  }, 
  */
];
