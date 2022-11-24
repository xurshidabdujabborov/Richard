import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import richard from "../../assets/img/richard.png"
import "./Navbars.css"
function Navbars() {
  return (
    <div className='nav'>
      <Container>
        <Grid container items spacing={12}>
          <Grid item xs={12} md={4}>
            <img src={richard} alt="" />
          </Grid>
          <Grid item xs={12} md={8}>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">How to Use</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Navbars
