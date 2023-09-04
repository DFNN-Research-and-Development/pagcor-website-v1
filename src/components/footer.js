import React from 'react'
import { Col, Form, Card, Row, Button, Container } from "react-bootstrap"
// import { Box, Grid, Typography, Container, Divider } from '@mui/material'
import PAGCOR from '../assets/pagcor-logo.png'
// import gaming421 from '../assets/img/21+.png'
import { BsGeoAltFill, BsPhoneVibrateFill, BsSendFill, BsTelephoneFill, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';
import PC1 from "../assets/payment-channels/fortunepay.png";
import PC2 from "../assets/payment-channels/GCash.png";
import PC3 from "../assets/payment-channels/MAYA.png";
import PC4 from "../assets/payment-channels/QRPHh.png";
import PC5 from "../assets/payment-channels/instapay.png";

const Footer = () => {
    const paymentChannels =[PC1,PC2,PC3,PC4,PC5]
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
        <>
            <div className='footer-background px-5'>
                <Row className="p-4">
                    <Col lg={8}>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <h3>Casino Offers</h3>
                                <ul>
                                    <li><a href='/'>Promotions</a></li>
                                    <li><a href='/'>Events</a></li>
                                    <li><a href='/'>Tournaments</a></li>
                                    <li><a href='/'>Rewards</a></li>
                                    <li><a href='/'>Gaming Guide</a></li>
                                </ul>
                            </Col>
                            <Col lg={8} md={6} sm={12}>
                                <h3>Quick Links</h3>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <ul>
                                            <li><a href='/'>About Us</a></li>
                                            <li><a href='/'>Branches</a></li>
                                            <li><a href='/'>Partners</a></li>
                                            <li><a href='/'>Enterntainment</a></li>
                                            <li><a href='/'>Responsible Gaming</a></li>
                                        </ul>
                                    </Col>
                                    <Col lg={8} md={6}>
                                        <ul>
                                            <li><a href='/'>Contact Us</a></li>
                                            <li><a href='/'>CSR</a></li>
                                            <li><a href='/'>Data Privacy</a></li>
                                            <li><a href='/'>Careers</a></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} sm={12}>
                                <h3>Social Links</h3>
                                <div>
                                    {/* <FontAwesomeIcon icon="check-square" /> */}
                                    <a href='/'><Facebook className='social-links'/></a>
                                    <a href='/'><Instagram className='social-links'/></a>
                                    <a href='/'><Twitter className='social-links'/></a>
                                </div>
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
                    <Col lg={4} md={6}>
                        <div>
                            <h3>Payment Channels</h3>
                                <div>
                                    <Row className="d-flex justify-content-center align-items-center">
                                        {paymentChannels.map((payment) => (
                                            <Col lg={4} sm={6} className="column-partners">
                                            <img className='img-fluid w-75' src={payment}/>
                                            </Col>
                                            ))}
                                    </Row>
                                </div>
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