import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

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
      <h6
        style={{
          color: "#023E8A",
          marginBottom: 20,
        }}
      >
        We currently don't have any screenshots of our own, so for now enjoy
        some stock photos related to our project :)
      </h6>
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
  {
    img: "https://images.unsplash.com/photo-1570937943292-a574bd5bc722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpdmlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Trivia Night",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Computer on Desk",
  },
  {
    img: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Eat Sleep Code",
  },
  {
    img: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZyUyMHRvZ2V0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Computer on Couch",
  },
  {
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nJTIwdG9nZXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    title: "Collaboration",
  },
  {
    img: "https://images.unsplash.com/photo-1545580140-ab89a0426d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZSUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Friends Laughing",
  },
  {
    img: 'https://images.unsplash.com/photo-1642009189383-56dc22a2862d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGdhbWUlMjBuaWdodHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
    title: "Game Night"
  },
  {
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
    title: 'Katan Board'
  },
  {
    img: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
    title: 'Together We Create'
  },
  {
    img: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    title: 'Coding with Monitor'
  },
  {
    img: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9hcmQlMjBnYW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    title: 'Game Pieces'
  },
  {
    img: 'https://images.unsplash.com/photo-1565870100382-f0a510db3cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
    title: 'Two People Playing Games'
  }
];
