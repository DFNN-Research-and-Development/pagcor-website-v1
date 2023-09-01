import React from 'react'
import AppNavBar from '../components/AppNavBar';
import { Col, Form, Card, Row, Button, Container } from "react-bootstrap"
import BG from "../assets/BG.png";
import num1 from "../assets/num1.png";
import num2 from "../assets/num2.png";
import num3 from "../assets/num3.png";


function Home() {
  return (
    <div>
      <AppNavBar/>
      <div className='mb-5'>
        <Row>
          <Col className='test1 ms-5'>
            <h3 className='ms-3'>PLAY AND HAVE FUN</h3>
            <p className='ms-3'>Welcome to PAGCOR Gaming Website, where excitement and fortune await you around every virtual corner. Indulge in a world of exhilarating games, from classic card tables to cutting-edge slots, all within a secure and regulated online environment. Join us today to experience the thrill of winning while enjoying the peace of mind that comes with a fully authorized and trustworthy gaming platform.</p>
          </Col>
          <Col className='test'>
            <img src={BG} alt="" />
          </Col>
        </Row>
      </div>
      <div className='test2'>
        <h1 className='ahoy pt-5'>EXPERIENCE REAL ONLINE CASINO GAMING WITH PAGCOR </h1>
          <div className='number pt-5'>
            <img src={num1} alt="" />
            <img src={num2} alt="" />
            <img src={num3} alt="" />
          </div>
      </div>
    </div>

  )
}

export default Home