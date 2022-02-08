import React from "react";
import { Grid, Paper } from "@mui/material";

import NDCS from "../images/ndcs.png";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import { LinkContainer } from 'react-router-bootstrap';

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <h5
        style={{
          color: "#023E8A",
          marginTop: 20,
          marginBottom: 15,
          fontStyle: "italic",
        }}
      >
        About the Project
      </h5>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "white",
          color: "#222f3e",
          mb: 4,
          mt: 1,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        elevation={3}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginTop={0}
          spacing={1}
        >
          <Grid item xs={6}>
            <img src={NDCS} alt="NDCS logo" height='80%' width='80%'></img>
          </Grid>
          <Grid item xs={6} paddingRight={5}>
            <p>
              PartyFish is an open-source project that was started as part of
              the University of Notre Dame's CSE Open Source Software
              Development course.
            </p>
            <p>
              Throughout the course, our group of five students hopes to create
              a fun, interactive, and easy to use open source Jackbox-style game
              for all to enjoy!
            </p>
            <p>
              We hope that you enjoy our project by playing the games we
              developed or even contributing games of your own!
            </p>
          </Grid>
        </Grid>
      </Paper>
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
        alignItems="center"
      >
        <Grid item xs={2}>
          <Avatar alt="Chase Saca" src="https://github.com/chase-saca.png" />
          <Link
            target="_blank"
            href="https://github.com/chase-saca"
            underline="none"
          >
            Chase Saca
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Avatar alt="Abby Leone" src="https://github.com/aleone2.png" />
          <Link
            target="_blank"
            href="https://github.com/aleone2"
            underline="none"
          >
            Abby Leone
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Avatar
            alt="Ronan McCarter"
            src="https://github.com/rpmccarter.png"
          />
          <Link
            target="_blank"
            href="https://github.com/rpmccarter"
            underline="none"
          >
            Ronan McCarter
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Avatar
            alt="Daniel McCarthy"
            src="https://github.com/dan-mccarthy265.png"
          />
          <Link
            target="_blank"
            href="https://github.com/dan-mccarthy265"
            underline="none"
          >
            Daniel McCarthy
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Avatar alt="John Gordley" src="https://github.com/jgordley.png" />
          <Link
            target="_blank"
            href="https://github.com/jgordley"
            underline="none"
          >
            John Gordley
          </Link>
        </Grid>
      </Grid>
      <h5
        style={{
          color: "#023E8A",
          marginTop: 50,
          marginBottom: 20,
          fontStyle: "italic",
        }}
      >
        Contributors
      </h5>
      <p>
        There are no outside contributors yet! Check out the{" "}
        <LinkContainer to="/contribution">
          <Link>
          <b>Contribute</b>
          </Link>
        </LinkContainer>{" "}
        page of this site for info on how to help with the project.
      </p>
    </div>
  );
}
