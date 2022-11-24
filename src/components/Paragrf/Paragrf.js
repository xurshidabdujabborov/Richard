import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import sos from "../../assets/img/sos.png"
import foto from "../../assets/img/foto.png"
import "./Paragrf.css"
function Slider() {
    return (
        <div className='paragrf'>
            <Container>
                <Grid container items spacing={4}>
                    <Grid item xs={12} md={12}>
                        <div className="img">
                            <img src={sos} alt="" />
                            <p>HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi <br /> erat porttitor ligula, eget lacinia odio sem nec elit. Pus sit amet fermentum. Donec id elit non mi porta <br /> gravida at  eget metus.  Etiam porta sem malesuada magna mollis euismod.ing</p>
                            <div className="flex">
                                <p className="text">Joshua Home</p>
                                <p className="text">New York Times</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <div className="foto">
                <img src={foto}  alt="" />
                </div> 
            </Container>
        </div>
    )
}

export default Slider