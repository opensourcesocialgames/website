import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import BubblesBackground from "../images/bubbles.png";
import GameConsoles from '../images/gameconsoles.png';
import GameGraphic from '../images/gamegraphic.png';

const mainFeaturedPost = {
    title: 'PartyFishGames',
    description: 'A free and open source gaming platform with interactive games for all!',
    image: BubblesBackground,
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Game Platform Release',
        date: 'Date TBD',
        description:
            'This is the first release of the gaming platform, PartyFishGames. Let this mark the beginning of the end for quiplash.',
        image: GameConsoles,
        imageLabel: 'Image Text',
    },
    {
        title: 'Trivalry Game Release',
        date: 'Date TBD',
        description:
            'This is the launch of PartyFishGame\'s first game, Trivalry, a fun and exciting mix of trivia and survivor.',
        image: GameGraphic,
        imageLabel: 'Image Text',
    },
];

export default function Blog() {
    return (
        <div>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
        </div>
    );
}