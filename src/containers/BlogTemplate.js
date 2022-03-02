import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import BubblesBackground from "../images/bubbles.png";
import GameConsoles from '../images/gameconsoles.png';
import GameGraphic from '../images/gamegraphic.png';


const mainFeaturedPost = {
    title: 'PartyFish',
    description: 'A free and open source gaming platform with interactive games for all!',
    image: BubblesBackground,
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Platform Protoype Release',
        date: '3/3/2022',
        description:
            'This is the prototype of the gaming platform, PartyFish. We are marking the beginning of the end for quiplash. Get ready for tons of fun!',
        image: GameConsoles,
        imageLabel: 'Image Text',
        link: 'https://www.partyfish.app',
        announcement: 'Quiplash Who?',
    },
    {
        title: 'Trivalry Prototype Release',
        date: '3/3/2022',
        description:
            'This is the protoype of PartyFish\'s first game, Trivalry. The team has been hard at work so that you can play a few rounds of Trivalry... Lets see what you got!',
        image: GameGraphic,
        imageLabel: 'Image Text',
        link: 'https://www.partyfish.app',
        announcement: 'Can you survive this trivia Game?',
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