import React from 'react'
import AppNavBar from '../components/AppNavBar';
import { Carousel, Col, Row } from "react-bootstrap"
import BG from "../assets/BG.png";
import num1 from "../assets/num1.png";
import num2 from "../assets/num2.png";
import num3 from "../assets/num3.png";
import icon from "../assets/New.png";
import upDown from "../assets/7 UP-DOWN_CN_NEW 1.png";
import bubble from "../assets/Bubble Beauty_EN 1.png";
import colorGame from "../assets/Color Game_500x500 1.png";
import chin from "../assets/Chin Shi Huang_EN 1.png";
import crazy from "../assets/CrazySeven_EN 1.png";


function Home() {
  return (
    <div>
      <AppNavBar/>
      <Carousel interval={3000}>
      <Carousel.Item>
        <div className='mb-5'>
          <Row>
            <Col className='test1 p-5'>
              <h3>PLAY AND HAVE FUN</h3>
              <p>Welcome to PAGCOR Gaming Website, where excitement and fortune await you around every virtual corner. Indulge in a world of exhilarating games, from classic card tables to cutting-edge slots, all within a secure and regulated online environment. Join us today to experience the thrill of winning while enjoying the peace of mind that comes with a fully authorized and trustworthy gaming platform.</p>
            </Col>
            <Col className='test'>
              <img src={BG} alt="" />
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='mb-5'>
          <Row>
            <Col className='test1 p-5'>
              <h3>PLAY AND HAVE FUN2</h3>
              <p>Welcome to PAGCOR Gaming Website, where excitement and fortune await you around every virtual corner. Indulge in a world of exhilarating games, from classic card tables to cutting-edge slots, all within a secure and regulated online environment. Join us today to experience the thrill of winning while enjoying the peace of mind that comes with a fully authorized and trustworthy gaming platform.</p>
            </Col>
            <Col className='test'>
              <img src={BG} alt="" />
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='mb-5'>
          <Row>
            <Col className='test1 p-5'>
              <h3>PLAY AND HAVE FUN3</h3>
              <p>Welcome to PAGCOR Gaming Website, where excitement and fortune await you around every virtual corner. Indulge in a world of exhilarating games, from classic card tables to cutting-edge slots, all within a secure and regulated online environment. Join us today to experience the thrill of winning while enjoying the peace of mind that comes with a fully authorized and trustworthy gaming platform.</p>
            </Col>
            <Col className='test'>
              <img src={BG} alt="" />
            </Col>
          </Row>
        </div>
      </Carousel.Item>
    </Carousel>
      <div className='test2 p-5'>
        <h1 className='ahoy'>EXPERIENCE REAL ONLINE CASINO GAMING WITH PAGCOR </h1>
          <div className='number pt-5'>
            <Row>
              <Col>
                <img src={num1} alt="num1" />
                <h1 className='mt-3'>REGISTER</h1>
                <h3>Secure your spot in the game - register now!</h3>
              </Col>
              <Col>
                <img className='img-fluid' src={num2} alt="num2" />
                <h1 className='mt-3'>DEPOSIT</h1>
                <h3>Get ready to dive into the action - ensure your playtime by making a deposit today!</h3>
              </Col>
              <Col>
                <img src={num3} alt="num3" />
                <h1 className='mt-3'>PLAY!</h1>
                <h3>The wait is over - unleash the excitement and start playing now!</h3>
              </Col>
            </Row>
          </div>
      </div>
      <div className='p-5'>
         <div>
            <h1><span className='pe-3'><img src={icon} alt="" /></span>New Games</h1>
         </div>
         <div className='newGames'>
            <Row>
                <Col className='p-5'>
                  <img src={upDown} alt="" />
                </Col>
                <Col className='p-5'>
                  <img src={bubble} alt="" />
                </Col>
                <Col className='p-5'>
                  <img src={colorGame} alt="" />
                </Col>
                <Col className='p-5'>
                  <img src={chin} alt="" />
                </Col>
                <Col className='p-5'>
                  <img src={crazy} alt="" />
                </Col>
            </Row>
         </div> 
      </div>
    </div>

  )
}

export default Home