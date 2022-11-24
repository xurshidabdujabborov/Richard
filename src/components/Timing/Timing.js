import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./Timing.css"
function Timing() {
    return (
        <div className='Timing'>
            <Container>
                <Grid container items spacing={4}>
                    <Grid item xs={12} md={3}>
                       <div className="card">
                           <h1>+12k</h1>
                            <h4>Nibh Elit Tristique</h4>
                       </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                       <div className="card">
                           <h1>+84</h1>
                            <h4>Aenean Condimentum</h4>
                       </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                       <div className="card">
                           <h1>3,07</h1>
                            <h4>Quam Inceptos</h4>
                       </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                       <div className="card">
                           <h1>24h</h1>
                            <h4>Ullamcorper</h4>
                       </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Timing
