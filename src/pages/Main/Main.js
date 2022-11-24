import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import header from "../../assets/img/header.png"
import "./Main.css"
function Main() {
    return (
       <main>
         <Container>
                <Grid container items spacing={4}>
                    <Grid item xs={12} md={7}>
                       <div className="car">
                        <h1>Momentum</h1>
                        <p>Launch your product — and savor the momentum.</p>
                        <button>Get the App</button>
                       </div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <img src={header} alt="" />
                    </Grid>
                </Grid>
            </Container>
       </main>
    )
}

export default Main
