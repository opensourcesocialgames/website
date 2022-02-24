import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from "@mui/material/Link";
//import CssIcon from '@mui/icons-material/Css';
//import HtmlIcon from '@mui/icons-material/Html';
//import JavascriptIcon from '@mui/icons-material/Javascript';
//import LightbulbIcon from '@mui/icons-material/Lightbulb';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p:3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export default function Documentation() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <div className="Documentation">
        <br></br>
        <Box
          sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex',}}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            //centered={true}
            sx={{minWidth: '20%', borderRight: 1, borderColor: 'divider', borderWidth: 2,}}
          >
            {tabs.map((tab) => (
            <Tab 
            label={`${tab.name}`}
            {...a11yProps(`${tab.num}`)}
            sx={{wrap: false}}
            />
            ))}
            </Tabs>
            {tabs.map((tab) => (
              <Paper elevation={3} sx={{maxWidth:'80%'}}>
                <TabPanel value={value} index={tab.num}>
                    <Paper elevation={3}>
                      <h5 style={{color: "#023E8A", marginTop: 3, marginBottom: 3, }}>
                        {tab.name}
                      </h5>
                    </Paper>
                    <Box>
                      <Paper elevation={3} sx={{py:1, px:2,my:1, mx:1,}}>
                        <p style={{color: "#bf9000", marginTop: 5, marginBottom: 5, fontStyle: "oblique"}}>
                          {tab.header}
                        </p>
                      </Paper>
                      <Paper elevation={3} sx={{py:1, px:1, my:1, mx:1}}  >
                      {tab.body}
                      </Paper>
                    </Box>
                </TabPanel>
              </Paper>
            ))}
          </Box>       
      </div>
    );
  }

  const tabs = [
    {
      name: 'Overview',
      header:  "Come and learn about the behind the scenes of PartyFish!",
      body:
        <Box>
          <body>
            <Link target="_blank" href="#https://partyfish.netlify.app/">
              <u>Who are we?</u>
            </Link>
          </body>
          <p>
              As can be read about on our About Us Page, we are a group of five
              Notre Dame students who have choosen to create a social game for 
              our Open Source class semester long project!  
          </p>
          <body>
            <Link target="_blank" href="https://opensource.com/">
              <u>Open Source</u>
            </Link>
          </body>
          <p>
            The Open Source mindset is one in which the developers believe
            that communal coding is better than programming done for monetization.
            The software produced by Open Source projects is avaliable at no cost
            to anyone who has interest. 

            Anyone is able to take the source code of an Open Source project modify,
            enhance, or completely its purpose! Subscribers to the Open Source mentality
            believe that is allows for more creative and diverse end products!

            That being said there are ~some~ rules when it comes to Open Source. This is 
            where liscensing comes into play. Different liscences effect the bounds of what
            can be done with the source code in the future!
          </p>
          <body>
            <Link target="_blank" href="https://opensource.org/licenses/gpl-license">
              <u>Liscencing - GPL</u>
            </Link>
          </body>
          <p>
            The team has choosen to Liscence our project under the GNU General 
            Public Liscence (GPL). In laymans terms this means that anyone is able
            to take our project, change the source code, and monetize it. However, 
            they must share the changes that they have made to the source code!
          </p>
        </Box>,
      num: 0,
    },
    {
      name: 'Programming Languages',
      header:"Different languages are called for across the different developmental areas!",
      body:
        <Box>
          <body>
            <Link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS" >
              <u>CSS</u>
            </Link>
              + 
            <Link target="_blank" href="https://html.com/" >
            <u>HTML</u>
            </Link>
          </body>
          <p>
            In true webdeveloping fashion the team used aspects of CSS 
            and HTML to style the front-ends of our project 
            (including this website)! CSS and HTML have
            allowed us to stlye and layout our products as we see fit.  
          </p>
          <body>
            <Link target="_blank" href="https://www.javascript.com/" >
              <u>JavaScript</u>
            </Link>
          </body>
          <p align="center">
            JavaScript, often shortened to JS among the coding community, 
            is a high-level object oriented language. It has been crucial in 
            the development of this wiki page! It is also used in the PartyFish
            Games. JavaScript is the language responsible for the stylish game screens 
            our users see!  
          </p>    
          <body>
            <Link target="_blank" href="https://www.typescriptlang.org/" >
              <u>Typscript</u>
            </Link>
          </body>
          <p>
            Typescript is the majority language used in the development of PartyFish!
            It intergrates flawlessly with the rest of the stack that we have choosen.
            It is a strongly typed language that builds on JavaScript which makes it better at scaling. 
            In addition Typescript has allowed us to catch errors early on in the development
            process, which saves us time in the debugging process!
          </p>
        </Box>,
      num: 1,
    },
    {
      name: 'Front-End',
      header: "Resources used in the development of our Front-Ends!",
      body:
        <Box>
          <body>
            <Link target="_blank" href="https://mui.com/" >
              <u>Material UI</u>
            </Link>
          </body>
          <p>
            Material UI has been an incredible resource that has helped us to make this website athetically pleasing (hopefully) 
            as well as easy to use. Material UI has aided us in styling most if not all aspects of our front-ends. The resource
            provided myriad templates for all components. The App Bar, Box, Paper, Tabs, and Tab Panel on this page were
            styled with Material UI! Our super fun and awesome game was also styled with components from Material UI.  
          </p> 
          <body>
            <Link target="_blank" href="https://reactjs.org/" >
              <u>React</u>
            </Link>
          </body>
          <p align="center">
          React is a JavaScript used in the development of user interface, and as you can see, we have a few of those. This library
          efficiently updates the user view upon data changes allowing for us to present our users with a seemless experience.
          This library is behind the scenes of this wiki, and the screens which a player see while competing in the best game ever!
          Make sure to play and see what the React library has allowed us to create! 
          </p>
        </Box>,
      num: 2,
    },
    {
      name: 'Networking',
      header: "Resources used to aid in Networking across the project!",
      body:
        <Box>
          <body>
            <Link target="_blank" href="https://expressjs.com/" >
              <u>Express</u>
            </Link>
          </body>
          <p>
            Express is a Node.js we application framework that provides 
            many features for web and mobile applications. As a middle-based 
            software is allows the team to funnel incoming request from the clients
            through steps where it process the request and respond accordingly. 
            Functionality like this is key in game situations where the host and players
            need to be able to communicate back and forth seemingly instantly.
          </p> 
          <body>
            <Link target="_blank" href="https://redux.js.org/" >
              <u>Redux</u>
            </Link>
          </body>
          <p align="center">
          Redux is a state container for JS apps that allows us to maintain our many
          and constantly changing states which affect both the server and client. It
          has made it possible to write logically and centralized code. In addition it
          aids in debugging and will make testing and finding issues simpler.
          </p>
          <body>
            <Link target="_blank" href="https://socket.io/" >
              <u>Socket.IO</u>
            </Link>
          </body>
          <p align="center">
            Socket.IO has enabled bidirectional, real-time, and event-based communication
            between the server and the clients. The team has found many features of Socket.IO
            that greatly assisted in the quick progress of the games development.
          </p>
        </Box>,
      num: 3,
    },
    {
      name: 'Back-End',
      header: "Checkout out the technologies used to develop our Back-End!",
      body:
        <Box>
          <body>
              <Link target="_blank" href="https://www.npmjs.com/" >
                <u>npm</u>
              </Link>
            </body>
            <p>
              npm is the package manager for the Node.js platform. It centralizes
              all the modules so that node can find them and then handle the dependencies.
              Upon installation the majority of the work is done for you! This allows for 
              productive and safe development!
            </p> 
            <body>
              <Link target="_blank" href="https://nodejs.org/en/" >
                <u>Node.JS</u>
              </Link>
            </body>
            <p align="center">
              Node.js is a runtime system/platform that allows for building fast and scalable network 
              applicaitons with ease. It uses an event-driven, non-blocking I/O model
              that has made it perfect tool for developing a product around real-time
              data exchanges. 
            </p>
            <body>
              <Link target="_blank" href="https://webpack.js.org/" >
                <u>WebPack</u>
              </Link>
            </body>
            <p align="center">
            Webpack is the tool that has allowed up to compile the JavaScript modules which
            were created with npm. Given our large number of files Webpack aids in condensing
            these files into what is needed to make PartyFish swim!
            </p>
        </Box>,
      num: 4,
    },
    {
      name: 'DataBases',
      header: "Learn how we keep track of all our information!",
      body:
        <Box>
          <body>
              <Link target="_blank"href="https://docs.aws.amazon.com/dynamodb/index.html" >
                <u>DynamoDB</u>
              </Link>
            </body>
            <p>
              DynamoDB is the database we choose to use to house the questions and answers that will be presented
              throughout the games. Being that DynamoDB is an AWS product we were able to intergrate it into our EC2 
              instance without fear of losing the integretting of the questions being that this project is Open Source!
            </p> 
        </Box>,
      num: 5,
    },
  ]