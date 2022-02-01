import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';

const mainFeaturedPost = {
    title: 'PartyFish',
    description: 'A free and open source party game for up to 10 players',
    image: 'https://images.unsplash.com/photo-1464925257126-6450e871c667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Recent Update 1.2',
        date: 'Jan 15',
        description:
            'This update included new party modes such as degenerate mode and normie mode',
        image: 'https://images.unsplash.com/photo-1626686707291-7bda5c45e8a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        imageLabel: 'Image Text',
    },
    {
        title: 'Release 1.0.1',
        date: 'Jan 1',
        description:
            'This is the first release of this project signifying the beginning of the end for quiplash',
        image: 'https://images.unsplash.com/photo-1629203805267-de9c6225e6de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageLabel: 'Image Text',
    },
    {
        title: 'Release 1.0.1',
        date: 'Jan 1',
        description:
            'This is the first release of this project signifying the beginning of the end for quiplash',
        image: 'https://images.unsplash.com/photo-1629203805267-de9c6225e6de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageLabel: 'Image Text',
    },
    {
        title: 'Release 1.0.1',
        date: 'Jan 1',
        description:
            'This is the first release of this project signifying the beginning of the end for quiplash',
        image: 'https://images.unsplash.com/photo-1629203805267-de9c6225e6de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
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