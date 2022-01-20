import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import FishIcon from "../images/fish.png";

function MainFeaturedPost(props) {
    const { post } = props;

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: "white",
                mb: 4,
                pb: 20,
                pt: 10,
                mt: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${post.image})`,
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                }}
            />
            <Grid container justifyContent="center">
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <img src={FishIcon} style={{width: "100px", height: "100px"}} alt="fish logo"></img>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {post.description}
                        </Typography>
                        <Button variant="contained">
                            Try it now!
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

MainFeaturedPost.propTypes = {
    post: PropTypes.shape({
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageText: PropTypes.string.isRequired,
        linkText: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default MainFeaturedPost;