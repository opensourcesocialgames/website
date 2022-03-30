import { Paper, Grid, Box} from "@mui/material";


export default function Announcements() {
    return (
        <div>
            <h5
                style={{
                color: "#023E8A",
                marginTop: 20,
                marginBottom: 0,
                fontStyle: "italic",
                }}
            >
                News
            </h5>
            <Box>
                <Paper
                    sx={{pb:1 }}
                    elevation={4}
                    >
                    <h5 style={{color: "#023E8A", marginTop: 20,}}
                    >
                        Whats up with PartyFish!?
                    </h5>
                    <h5 style={{color: "#bf9000", my: 3, mx: 10 }}>
                        <u>Announcements</u>
                    </h5>
                    <p>
                        The moment you have all been waiting for is here...
                    </p>
                    <p>
                        PartyFish is soon to be OFFICIAL
                    </p>
                    <p>
                        We are excited to announce that as 3/31/22 the PartyFish platform 
                        will officially be up and running. Subsequently PartyFish's first game,
                        Trivalry, will also be up an running! Trivalry combines speed and correctness, as well 
                        as rivalry into one super intuitive group game! Happy Playing!
                    </p>
                </Paper>
            </Box>
            <Box sx={{mb: 2, mt: 1}}>
                <Paper
                    sx={{pb:1}}
                    elevation={4}
                >
                <h5 style={{color: "#023E8A"}}>
                    Video Tutorial
                </h5>
                <iframe  width="560" height="315"src="https://www.youtube.com/embed/UCBAYMIhinM" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
                </Paper> 
            </Box>
            <Box sx={{mb: 2, mt: 1,}}>
                <Paper 
                    sx={{ pb:2,}}
                    elevation={4}
                >
                    <h5 style={{color: "#023E8A"}}>
                        Look How Far We've Come!
                    </h5>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                    >
                        <Grid item xs={6}>
                            <Paper elevation={4} sx={{py:1, px:1,my:1, mx:1,}}>
                                <h5 style={{color: "#bf9000", my: 3, mx: 10 }}>
                                    <u>Original Goals</u>
                                </h5>
                                <p>    
                                    At the start of this project the team set out with
                                    creating a MVP that consisted of:</p>
                                <body>1. One complete trivia game</body>
                                <body>2. One host running on an EC2 that supports one game at a time</body> 
                                <body>3. Four to eight players to play</body>
                                <body>4. A fun and smooth user experience</body>
                                <body>5. Clear documentation for contributors</body>
                                
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper elevation={4} sx={{py:1, px:1,my:1, mx:1,}}>
                                <h5 style={{color: "#bf9000", my: 3, mx: 10 }}>
                                    <u>Current Features</u>
                                </h5>
                                <p>   
                                    Since declaring our MVP 13 weeks ago the team has created a product
                                    that has:</p>
                                <body>1. One complete trivia game</body>
                                <body>2. One host running on an EC2 that supports MULTIPLE games at a time </body>
                                <body>3. Four to eight players to play</body>
                                <body>4. A fun and smooth user experience</body>
                                <body>5. Clear documentation for contributors</body>
                                
                            </Paper>
                        </Grid>
                    </Grid>
                    <Paper elevation={4} sx={{py:1, px:1,my:1, mx:1,}}>
                        <h5 style={{color: "#bf9000", my: 3, mx: 10 }}>
                            <u>Work Summary</u>
                        </h5>
                        <p>    
                            But in all seriousness, this project was super complex
                            and had a lot of moving parts, which include but are 
                            not limited to: </p>
                        <body>1. Creating and configuring an AWS account that hosts the EC2 instance that runs the server</body>
                        <body>2. Creating, coding, and testing the game logic not just so that it works but works well and is fun and unique </body>
                        <body>3. Creating and formatting the database that connects to the EC2 to hold the game questions </body>
                        <body>4. Game styling</body>
                        
                    </Paper>
                </Paper>
            </Box>
        </div>
    );
}