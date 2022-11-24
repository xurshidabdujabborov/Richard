import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import images from "../../assets/img/IMAGE.png"
import ikki from "../../assets/img/IMAGE 1.png"
import uch from "../../assets/img/IMAGE 2.png"
import "./Work.css"
function Work() {
    return (
        <div className='paragrf'>
            <Container>
                <Grid container spacing={4}>
                    <Grid items md={6}>
                        <div className="nan">
                        <span className="uno">Aenean Consectetur</span>
                        <h2 className="title">s</h2>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique.</p>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <img src={images} alt="" />
                    </Grid>
                    <Grid item md={6}>
                        <img src={ikki} alt="" />
                    </Grid>
                    <Grid items md={6}>
                        <div className="nan">
                        <span className="uno">ConsectUltricies</span>
                        <h2 className="title">Amet Ipsum</h2>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique.</p>
                        </div>
                    </Grid>
                    <Grid items md={6}>
                        <div className="nan">
                        <span className="uno">Aenean Consectetur Porta</span>
                        <h2 className="title">Magna Porta Sit <br /> Bibendum</h2>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique.</p>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <img src={uch} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Work
