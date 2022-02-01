import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { LinkContainer } from "react-router-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';

import FishIcon from "../images/fish.png";

const ResponsiveAppBar = () => {
    return (
        <AppBar style={{background: "#1dd1a1", color:"#222f3e"}} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={FishIcon} alt="fishicon" style={{ width: "50px", height: "50px"}}></img>
                    <LinkContainer to="/">
                            <Button
                                sx={{ my: 2, color: "#222f3e", textTransform: 'none', display: 'block', fontSize: 20 }}
                            >
                                PartyFishGames
                            </Button>
                    </LinkContainer>

                    {/* Logo from https://www.flaticon.com/free-icon/fish_1864557 */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <LinkContainer to="/about_us">
                            <Button
                                sx={{ my: 2, color: "#222f3e", textTransform: 'none', display: 'block' }}
                            >
                                About Us
                        </Button>
                        </LinkContainer>
                        <LinkContainer to="/installation">
                            <Button
                                sx={{ my: 2, color: "#222f3e", textTransform: 'none', display: 'block' }}
                            >
                                Installation
                            </Button>
                        </LinkContainer>
                        <LinkContainer to="/contribution">
                        <Button
                            sx={{ my: 2, color: "#222f3e", textTransform: 'none', display: 'block' }}
                        >
                            Contribution
                        </Button>
                        </LinkContainer>
                        <LinkContainer to="/screenshots">
                        <Button
                            sx={{ my: 2, color: "#222f3e", textTransform: 'none', display: 'block' }}
                        >
                            Screenshots
                        </Button>
                        </LinkContainer>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton href="https://github.com/partyfishgames">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton href="https://discord.gg/atwZbthwMd">
                            <i class="fab fa-discord"></i>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
