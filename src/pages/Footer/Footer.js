import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import range from "../../assets/img/range.png"
import "./Footer.css"
function Footer() {
    return (
        <footer>
            <Container>
                <h2 className="title">Get updates from Richard</h2>
                <p className="text">New course alerts, discounts and free lessons</p>
                <Grid container items spacing={4}>
                    <Grid item xs={12} md={12}>
                        <form action="#">
                            <input type="text" placeholder='Enter your email' />
                            <button>Subscribe</button>
                        </form>
                    </Grid>
                </Grid>
                <div className="img">
                    <img src={range} alt="" />
                </div>
                <ul>
                    <li>
                        <a href="#">Email</a>
                    </li>
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#">Twitter </a>
                    </li>
                    <li>
                        <a href="#">Image License Info</a>
                    </li>
                    <li>
                        <a href="#">Powered by Webflow</a>
                    </li>
                </ul>
            </Container>
        </footer>
    )
}

export default Footer
