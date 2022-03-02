import React from "react";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import WifiIcon from '@mui/icons-material/Wifi';
import ListItemText from '@mui/material/ListItemText';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Divider from '@mui/material/Divider';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AddIcon from '@mui/icons-material/Add';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkContainer } from 'react-router-bootstrap';
import Link from "@mui/material/Link";



export default function Installation() {
  return (
    <div className="Installation">
      <h5 style={{ color: "#023E8A", marginTop: 20, marginBottom: 10, marginRight: 175, fontStyle: "italic",}}>
        Jokes on you . . . 
      </h5>
      <h5 style={{ color: "#023E8A", marginTop: 10, marginBottom: 20, marginLeft: 175, fontStyle: "italic",}}>
          . . . No installation needed!
      </h5>
      
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
          >
          <Grid item xs={6} >
            <Paper elevation={4} sx={{py:1, px:1,my:1, mx:1, }}>
              <h5 style={{color: "#bf9000", marginTop: 3, marginBottom: 3, marginLeft: 10, marginRight: 10 }}>
                So What Do We Need?
              </h5>
            </Paper>
          </Grid >
          <Grid item xs={6} >
            <Paper elevation={4} sx={{py:1, px:1,my:1, mx:1,}}>
              <h5 style={{color: "#bf9000", marginTop: 3, marginBottom: 3, marginLeft: 10, marginRight: 10 }}>
                Getting Started
              </h5>
            </Paper>
          </Grid>
        </Grid>
          <Grid container
            direction="row"
            
            
          >
            <Grid item xs={6} style={{height:"100%",}} >
            <Paper elevation={6} sx={{py:1, px:1 ,my:1, mx:1,}} style={{height:"100%"}}>
            {needs.map((need) =>(
              <List>
                <Divider color="#023E8A"/>
                  <ListItem >
                    <ListItemIcon>
                      {need.icon}
                    </ListItemIcon>
                    <ListItemText primary={need.text}/>
                  </ListItem>
                  <Divider color="#023E8A"/>
              </List>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={6} style={{height:"100%"}} >
            <Paper elevation={6} sx={{py:2, px:1 ,my:1, mx:1,}} style={{height:"100%"}}>
              <Divider color="#023E8A"/>
              <p>
                1. On all devices head to
              </p>
              <Link target="_blank" href="https://www.partyfish.app">
                https://www.partyfish.app
              </Link>
              <p></p>
              <Divider color="#023E8A"/>
              <p >
                2. Choose one device to host the game. Once this is done the 
                screen will show a room code which all other users will enter
                to become participants of that specific session!
              </p>
              <Divider color="#023E8A"/>
              <p >
                3. Enter the room code shown on the host device to become 
                a participant of that specific session!
              </p>
              <Divider color="#023E8A"/>
              <p >
                4. The rest is up to you! Make the odds be ever in your favor :)
              </p>
              <Divider color="#023E8A"/>
            </Paper>
          </Grid>
        </Grid>
      
      <Paper elevation={4} sx={{py:1, px:1,my:1, mx:1,}}>
      <Paper elevation={4} sx={{py:1, px:1,my:1, mx:1,}}>
        <h5 style={{color: "#bf9000", marginTop: 3, marginBottom: 3, marginLeft: 10, marginRight: 10 }}>
          What if I want to Install and Run the Source Code?
        </h5>
      </Paper>
      <Paper elevation={6} sx={{py:1, px:1 ,my:1, mx:1,}}>
        <List>
        <Divider color="#023E8A"/>
        <LinkContainer to={'/contribution'}>
          <ListItem button >
            <ListItemIcon>
              <AddIcon sx={{color:"#023E8A"}} />
            </ListItemIcon>
            <ListItemText primary="Head over to our Contributions page to learn more about our Workflow" />
          </ListItem>
          </LinkContainer>
          <Divider color="#023E8A"/>
          <ListItem button component="a" target="_blank" href="https://github.com/partyfishgames/partyfish/">
            <ListItemIcon>
              <GitHubIcon sx={{color:"#023E8A"}} />
            </ListItemIcon>
            <ListItemText primary="Head straight to the Github Repository " />
          </ListItem>
          <Divider color="#023E8A"/>
        </List>
      </Paper>
      </Paper>
    </div>
  );
}

const needs = [
  {
    text: "Internet Connection",
    icon: <WifiIcon sx={{color:"#023E8A"}}/>
  },

  {
    text: "A device to Host",
    icon: <HomeIcon sx={{color:"#023E8A"}}/>
  },
  {
    text: "Devices to Play",
    icon: <PlayCircleIcon sx={{color:"#023E8A"}}/>
  },
  {
    text: "4-8 Super Fun Friends",
    icon: <GroupAddIcon sx={{color:"#023E8A"}}/>
  },
  {
    text: "To be prepared to have FUN",
    icon: <CelebrationIcon sx={{color:"#023E8A"}}/>
  },
]