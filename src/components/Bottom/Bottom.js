import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import bottom from "../../assets/img/bottom.png"
import group from "../../assets/img/Group.png"
import "./Bottom.css"
function Bottom() {
    return (
        <div className='Bottom'>
            <img src={bottom} alt="" />
            <div className="mul">
            <img src={group} alt="" />
            </div>
            <Container>
                <Grid container items spacing={4}>
                    <Grid item xs={12} md={12}>
                         <div className="flex">
                            <h2 className="title">Ready to get started?</h2>
                            <button>Download Now</button>
                            <a href="#">Get in Touch</a>
                         </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Bottom
