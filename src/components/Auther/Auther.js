import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./Auther.css"
function Auther() {
    return (
        <div className='Auther'>
            <Container>
                <Grid container items spacing={4}>
                    <Grid item xs={12} md={4}>
                        <div className="box">
                            <svg width="79" height="35" viewBox="0 0 79 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M78.7879 18.9189C78.7879 20.6604 76.0745 22.0721 72.7273 22.0721H6.06061C2.71333 22.0721 0 20.6604 0 18.9189C0 17.1774 2.71333 15.7658 6.06061 15.7658H72.7273C76.0745 15.7658 78.7879 17.1774 78.7879 18.9189ZM15.1515 25.2252H6.06061C6.06061 30.4497 14.2006 34.6847 24.2424 34.6847H54.5455C64.5873 34.6847 72.7273 30.4497 72.7273 25.2252H15.1515ZM12.1212 12.6126H6.06061V6.30631C6.06061 2.82333 11.4873 0 18.1818 0H60.6061C67.3006 0 72.7273 2.82333 72.7273 6.30631V12.6126H12.1212ZM60.6061 7.88288C60.6061 8.75347 61.963 9.45946 63.6364 9.45946C65.3097 9.45946 66.6667 8.75347 66.6667 7.88288C66.6667 7.0123 65.3097 6.30631 63.6364 6.30631C61.963 6.30631 60.6061 7.0123 60.6061 7.88288ZM48.4848 4.72973C48.4848 5.60032 49.8418 6.30631 51.5151 6.30631C53.1885 6.30631 54.5455 5.60032 54.5455 4.72973C54.5455 3.85914 53.1885 3.15315 51.5151 3.15315C49.8418 3.15315 48.4848 3.85914 48.4848 4.72973ZM36.3636 7.88288C36.3636 8.75347 37.7206 9.45946 39.3939 9.45946C41.0673 9.45946 42.4242 8.75347 42.4242 7.88288C42.4242 7.0123 41.0673 6.30631 39.3939 6.30631C37.7206 6.30631 36.3636 7.0123 36.3636 7.88288ZM24.2424 4.72973C24.2424 5.60032 25.5994 6.30631 27.2727 6.30631C28.9461 6.30631 30.303 5.60032 30.303 4.72973C30.303 3.85914 28.9461 3.15315 27.2727 3.15315C25.5994 3.15315 24.2424 3.85914 24.2424 4.72973ZM12.1212 7.88288C12.1212 8.75347 13.4782 9.45946 15.1515 9.45946C16.8248 9.45946 18.1818 8.75347 18.1818 7.88288C18.1818 7.0123 16.8248 6.30631 15.1515 6.30631C13.4782 6.30631 12.1212 7.0123 12.1212 7.88288Z" fill="#FD0B7D" />
                            </svg>
                            <h5>Activity Notifications</h5>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros elementum <br /> tristique.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="box">
                            <svg width="73" height="35" viewBox="0 0 73 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3215 19.3133L31.061 13.9592L4.44 0.687582C-1.48 3.63893 -1.48 8.43488 4.44 11.3862L20.3215 19.3133ZM46.0697 15.8795C51.8569 17.2322 60.0349 16.2768 66.0687 13.2687C73.3359 9.64569 74.721 4.47137 69.1615 1.69974C63.5831 -1.07188 53.1851 -0.381337 45.9369 3.24164C39.9031 6.24974 38.0056 10.3268 40.7 13.2119C32.2564 17.4119 3.64308 31.6768 3.64308 31.6768L9.01282 34.3538L35.1215 21.3376L61.2303 34.3538L66.6 31.6768L40.4913 18.6606L46.0697 15.8795Z" fill="#FD0B7D" />
                            </svg>
                            <h5>Custom Timing</h5>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros elementum <br /> tristique.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="box">
                            <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 35V0H10.4409V35H0ZM14.3563 35V6.48148H24.7972V35H14.3563ZM28.7125 35V11.6667H39.1534V35H28.7125Z" fill="#FD0B7D" />
                            </svg>
                            <h5>Mobile Optimized</h5>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Suspendisse varius enim in eros elementum <br /> tristique.</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Auther
