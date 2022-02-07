import React from "react";
import Grid from "@mui/material/Grid";
import NDCS from "../images/ndcs.jpg";
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

import "./AboutUs.css"

export default function AboutUs() {

  return (
    <div className="AboutUs">
      <h5
        style={{
          color: "#023E8A",
          marginTop: 20,
          marginBottom: 0,
          fontStyle: "italic",
        }}
      >
        About the Project
      </h5>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={6}>
          <img src={NDCS} alt="NDCS logo"></img>
        </Grid>
        <Grid item xs={6}>
          <p>
            This project was started as part of the University of Notre Dame CSE Open Source Software Development course.
          </p>
          <p>
            Our group of 5 students hope to create a fun and easy to use open source Jackbox-style game for all to enjoy!
          </p>
        </Grid>
      </Grid>
      <h5
        style={{
          color: "#023E8A",
          marginBottom: 30,
          fontStyle: "italic",
        }}
      >
        Founding Members
      </h5>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={2}>
          <Avatar alt="Chase Saca" src="https://github.com/chase-saca.png" />
          <Link target="_blank" href="https://github.com/chase-saca" underline="none">
            Chase Saca
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Avatar alt="Abby Leone" src="https://github.com/aleone2.png" />
          <Link target="_blank" href="https://github.com/aleone2" underline="none">
            Abby Leone
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Avatar alt="Ronan McCarter" src="https://github.com/rpmccarter.png" />
          <Link target="_blank" href="https://github.com/rpmccarter" underline="none">
            Ronan McCarter
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Avatar alt="Daniel McCarthy" src="https://github.com/dan-mccarthy265.png" />
          <Link target="_blank" href="https://github.com/dan-mccarthy265" underline="none">
            Daniel McCarthy
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Avatar alt="John Gordley" src="https://github.com/jgordley.png" />
          <Link target="_blank" href="https://github.com/jgordley" underline="none">
            John Gordley
          </Link>
        </Grid>
      </Grid>
      <h5
        style={{
          color: "#023E8A",
          marginTop: 50,
          marginBottom: 30,
          fontStyle: "italic",
        }}
      >
        Contributors
      </h5>
      <p>
        No outside contributors yet! Check out the <b>Contribute</b> page of this site for info on how to help with the project.
      </p>
    </div>
  );
}