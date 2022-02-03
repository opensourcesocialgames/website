import { Grid, Paper, Card, CardContent } from "@mui/material";
import React from "react";

export default function Contribution() {

  return (
    <div className="Contribution">
      <h5 style={{ color:"#023E8A", marginTop:20, marginBottom:0, fontStyle:"italic"}}>
          How can I contribute?
      </h5>
      <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'white',
                color: "#222f3e",
                mb: 4,
                pb: 20,
                pt: 10,
                mt: 1,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
            elevation={3}
        >
        
      </Paper>
      <h5 style={{ color:"#023E8A", marginTop:20, marginBottom:0, fontStyle:"italic"}}>
          Development Workflow
      </h5>
      <Grid container spacing={1} marginTop={0.5}>
        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
            <p>
              Insert timeline or something cool here.
            </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
              <p>
                The master branch will hold the latest-released game version for players. Our code development will branch off of a release branch, called release-one/two/three/… 
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}