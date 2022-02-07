import { Grid, Paper } from "@mui/material";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ForumIcon from "@mui/icons-material/Forum";
import BugReportIcon from "@mui/icons-material/BugReport";
import CodeIcon from "@mui/icons-material/Code";
import MergeIcon from "@mui/icons-material/Merge";

export default function Contribution() {
  return (
    <div className="Contribution">
      <h5
        style={{
          color: "#023E8A",
          marginTop: 20,
          marginBottom: 0,
          fontStyle: "italic",
        }}
      >
        How can you contribute?
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
        <List margin-left={10} padding={10}>
          <ListItem>
            <ListItemIcon>
              <SportsEsportsIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Play Partyfish Games!" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ForumIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Communicate Ideas, Thoughts, and Opinions in the Discord Servers" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BugReportIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Post Bugs to Github Issues and Discord Bug-Tracking Server" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CodeIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Contribute Code to the Github Repositories" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MergeIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Comment Reviews on Github Pull Requests" />
          </ListItem>
        </List>
      </Paper>
      <h5
        style={{
          color: "#023E8A",
          marginTop: 20,
          marginBottom: 0,
          fontStyle: "italic",
        }}
      >
        Development Workflow for Contributing Code
      </h5>
      <Grid container spacing={1} marginTop={0.5}>
        <Grid item xs={12} md={6}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Clone Repository</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Branch onto Release</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Create Branch for Feature / Bug Fix
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Code !!</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Commit and Push Code to Feature / Bug Branch
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Create Pull Request into Release Branch
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>Pull Request Approved/Denied</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid item xs={12} md={6}>
          <p></p>
          <p>
            The master branch will hold the latest-released game version for
            players. In order to ensure players are always playing a cohesive
            version of the game, code development will always branch off of a
            release branch, called release-one, release-two, and so on.
          </p>
          <p>
            When beginning your code development, create a branch with a short
            but descriptive name outlining the purpose of the code (i.e. of the
            feature's or bug's name).
          </p>
          <p>
            When you are finished coding, commit and push the code to your
            feature or bug fix branch. Then, create a pull request to merge the
            branch into the most current release branch. Be sure to add the
            repo's organizers as reviewers.
          </p>
          <p>
            Your new code will either be approved, denied, or asked for
            revision. When the game developers are ready to release a new
            version of the game to players, they will merge the most current
            release branch into the master branch.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
