import { Grid, Typography } from "@mui/material";
import React from "react";
import profile from "../assets/profile.png";
import "../css/profile.css";

function About() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h2">Ravi Dharigond</Typography>
        <p>
          A passionate <span>fullstack developer</span> from India
        </p>
        <p style={{ color: "white" }}>
          Dedicated and results driven MERN Stack Developer with a passion for
          crafting efficient, scalable, and user- friendly web applications.
          Seeking a challenging position to utilize my skills and knowledge in
          full-stack development, where I can contribute to the success of a
          dynamic team. Eager to leverage my expertise in MongoDB, Express.js,
          React.js and Node.js to design and implement innovative solutions that
          meet the unique needs of clients and end-users.
        </p>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={profile}
          width="80%"
          height="70%"
          style={{ borderRadius: "80%" }}
          className="profile-image"
        />
      </Grid>
    </Grid>
  );
}

export default About;
