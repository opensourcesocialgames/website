import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

import FishIcon from "../images/fish.png";

const ResponsiveAppBar = () => {
    return (
        <AppBar style={{background: "#1dd1a1", color:"#222f3e"}} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={FishIcon} alt="fishicon" style={{ width: "50px", height: "50px"}}></img>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        PartyFish
                    </Typography>

                    {/* Logo from https://www.flaticon.com/free-icon/fish_1864557 */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            sx={{ my: 2, color: "#222f3e", textTransform: 'none', display: 'block' }}
                        >
                            Installation
                        </Button>
                        <Button
                            sx={{ my: 2, color: "#222f3e", textTransform: 'none', display: 'block' }}
                        >
                            Bug Reports
                        </Button>
                        <Button
                            sx={{ my: 2, color: "#222f3e", textTransform: 'none', display: 'block' }}
                        >
                            Contribute
                        </Button>
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
