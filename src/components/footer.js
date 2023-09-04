import React from 'react'
import { Col, Form, Card, Row, Button, Container } from "react-bootstrap"
// import { Box, Grid, Typography, Container, Divider } from '@mui/material'
import PAGCOR from '../assets/pagcor-logo.png'
// import gaming421 from '../assets/img/21+.png'
import { BsGeoAltFill, BsPhoneVibrateFill, BsSendFill, BsTelephoneFill, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
    const d = new Date()
    const privacy = () => {
        // window.open('https://go.fastwin.com.ph/register/privacy.aspx', '_blank')
    }
    const responsible = () => {
        // window.open('/responsible-gaming', '_self')
    }
    const terms = () => {
        // window.open('/terms-and-conditions', '_self')
    }
    const self = () => {
        // window.open('https://go.fastwin.com.ph/register/SelfService.aspx', '_blank')
    }
    const facebook = () => {
        // window.open('https://www.facebook.com/fastwinphofficial', '_blank')
    }
    const twitter = () => {
        // window.open('https://twitter.com/fastwinph', '_blank')
    }
    const instagram = () => {
        // window.open('https://www.instagram.com/fastwinph', '_blank')
    }
    return (
        // <Box sx={{ flexGrow: 1, p: 3 }} className='footer-background'>
        //     <Container>
        //         <Grid container direction='row'>
        //             <Grid item xs={12} md={12} lg={3} sx={{ mb: 2 }}>
        //                 <Typography sx={{ fontSize: 18, mb: 2 }} className='cursor'>Quick Links</Typography>
        //                 <Typography sx={{ fontSize: 14, mb: 1 }} className='cursor' onClick={privacy}>Privacy Policy</Typography>
        //                 <Typography sx={{ fontSize: 14, mb: 1 }} className='cursor' onClick={responsible}>Responsible Gaming</Typography>
        //                 <Typography sx={{ fontSize: 14, mb: 1 }} className='cursor' onClick={terms}>Terms and Conditions</Typography>
        //                 <Typography sx={{ fontSize: 14, mb: 1 }} className='cursor' onClick={self}>Self Service</Typography>
        //             </Grid>

        //             <Grid item xs={12} md={12} lg={6} sx={{ mb: 2 }}>
        //                 <Typography sx={{ mb: 2, fontSize: 18 }}>Contact Us</Typography>
        //                 <Box sx={{ display: 'flex', mb: 2, mr: 2 }}>
        //                     <BsGeoAltFill color='#0E1B51' size={20} />
        //                     <Typography sx={{ fontSize: 14, mx: 2 }}>5F PDCP Bank Center Herrera St. Salcedo Village, Makati City, Philippines, 1227</Typography>
        //                 </Box>
        //                 <Box sx={{ display: 'flex', mb: 2, mr: 2 }}>
        //                     <BsTelephoneFill color='#0E1B51' size={17} />
        //                     <Typography sx={{ fontSize: 14, mx: 2 }}>(02) 8-2451-213</Typography>
        //                 </Box>
        //                 <Box sx={{ display: 'flex', mb: 2, mr: 2 }}>
        //                     <BsPhoneVibrateFill color='#0E1B51' size={25} />
        //                     <Typography sx={{ fontSize: 14, mx: 2 }}>+63 960 926 2544 / +63 947 405 7544</Typography>
        //                 </Box>
        //                 <Box sx={{ display: 'flex', mb: 2, mr: 2 }}>
        //                     <BsSendFill color='#0E1B51' size={20} />
        //                     <Typography sx={{ fontSize: 14, mx: 2 }}>support@fastwin.ph</Typography>
        //                 </Box>
        //             </Grid>
                    
        //             <Grid item xs={12} md={12} lg={3} sx={{ mb: 2 }}>
        //                 <Typography sx={{ mb: 2, fontSize: 18 }}>Licensed by PAGCOR</Typography>
        //                 <Box sx={{ display: 'flex', mb: 4, mr: 3 }}>
        //                     <img src={PAGCOR} alt='PAGCOR Logo' width={100} />
        //                     {/* <img src={gaming421} alt='Game Responsibly Logo' width={200} height={40} /> */}
        //                 </Box>
        //                 <Typography sx={{ mb: 2, fontSize: 18 }}>Follow Us</Typography>
        //                 <Box sx={{ display: 'flex', mb: 2, mr: 3 }}>
        //                     <Box sx={{ mr: 3 }}>
        //                         <BsFacebook color='#4267B2' size={25} sx={{ px: 1 }} className='cursor' onClick={facebook}/>
        //                     </Box>
        //                     <Box sx={{ mr: 3 }}>
        //                         <BsTwitter color='#00ACEE' size={25} className='cursor' onClick={twitter}/>
        //                     </Box>
        //                     <Box sx={{ mr: 3 }}>
        //                         <BsInstagram color='#d62976' size={25} className='cursor' onClick={instagram}/>
        //                     </Box>
        //                 </Box>
        //             </Grid>
        //         </Grid>
        //         <Divider sx={{ my: 3 }}/>
        //         <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        //             <Typography>Copyright &copy; {d.toISOString().split('-')[0]}</Typography>
        //             <Typography>All Right Reserved</Typography>
        //         </Grid>
        //     </Container>
            
        // </Box>
        <>
            <div className='footer-background'>
                <Row className="p-4">
                    <Col lg={8}>
                        <Row>
                            <Col lg={4} sm={12}>
                                <h3>Casino Offers</h3>
                                <ul>
                                    <li>Promotions</li>
                                    <li>Events</li>
                                    <li>Tournaments</li>
                                    <li>Rewards</li>
                                    <li>Gaming Guide</li>
                                </ul>
                            </Col>
                            <Col lg={8} sm={12}>
                                <h3>Quick Links</h3>
                                <Row>
                                    <Col lg={4}>
                                        <ul>
                                            <li>About Us</li>
                                            <li>Branches</li>
                                            <li>Partners</li>
                                            <li>Enterntainment</li>
                                            <li>Responsible Gaming</li>
                                        </ul>
                                    </Col>
                                    <Col lg={8}>
                                        <ul>
                                            <li>Contact Us</li>
                                            <li>CSR</li>
                                            <li>Data Privacy</li>
                                            <li>Careers</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} sm={12}>
                                <h3>Social Links</h3>
                                <div>images</div>
                            </Col>
                            <Col lg={8} sm={12}>
                                <ul>
                                    <li>Email: support@casinofilipino.ph </li>
                                    <li>Landline (02)8-1234-567</li>
                                    <li>Mobile Number: +63 912 345 6789 </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <div>
                            <h3>Payment Channels</h3>
                            <div>
                                <p>© 2023 Casino Filipino Online
                                All Rights Reserved</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Footer