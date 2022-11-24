import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import gam from "../../assets/img/gamburger.png"
import cola from "../../assets/img/gamburger 2.png"
import "./Status.css"
function Status() {
    return (
        <div className='status'>
            <Container>
                <Grid container items spacing={4}>
                    <Grid item xs={12} md={6} sm={6} xl={6}>
                        <div className="box">
                            <span className="uno">Aenean Consectetur Porta</span>
                            <h2 className="title">Sem Risus Elit <br /> Vestibulum</h2>
                            <p className="text">Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}  xl={6}>
                        <img src={gam} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}  xl={6}>
                        <img src={cola} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}  xl={6}>
                        <div className="box">
                            <span className="uno">Aenean Consectetur Porta</span>
                            <h2 className="title">Sem Risus Elit <br /> Vestibulum</h2>
                            <p className="text">Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Status
