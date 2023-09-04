import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppNavBar from '../components/AppNavBar';
import Footer from '../components/footer';
import { Col, Form, Card, Row, Button, Container } from "react-bootstrap"
import BG from "../assets/BG.png";
import num1 from "../assets/num1.png";
import num2 from "../assets/num2.png";
import num3 from "../assets/num3.png";
import LG1 from "../assets/latest-games/blackjack.png"
import LG2 from "../assets/latest-games/color-game.png"
import LG3 from "../assets/latest-games/mariachi.png"
import LG4 from "../assets/latest-games/mortal-fortune.png"
import LG5 from "../assets/latest-games/Recurso.png"
import SG1 from "../assets/slot-games/basketballpro.png"
import SG2 from "../assets/slot-games/Codex.png"
import SG3 from "../assets/slot-games/LuckyFruit.png"
import SG4 from "../assets/slot-games/royalDiamond.png"
import SG5 from "../assets/slot-games/torchoffire.png"
import BG1 from "../assets/bingo-games/bingolicia.png"
import BG2 from "../assets/bingo-games/candy.png"
import BG3 from "../assets/bingo-games/ace-mania.png"
import BG4 from "../assets/bingo-games/bingocup.png"
import BG5 from "../assets/bingo-games/tripleBonus.png"
import GP1 from "../assets/gaming-partners/caleta.png"
import GP2 from "../assets/gaming-partners/vibra.png"
import GP3 from "../assets/gaming-partners/alfastreet.png"
import GP4 from "../assets/gaming-partners/zitro.png"
import GP5 from "../assets/gaming-partners/mxfair.png"
import iconNew from "../assets/icons/New.png"
import iconRolette from "../assets/icons/Roulette.png"


function Home() {
  const latestGames =[LG1,LG2,LG3,LG4,LG5]
  const slotGames =[SG1,SG2,SG3,SG4,SG5]
  const bingoGames =[BG1,BG2,BG3,BG4,BG5]
  const gamingPartners =[GP1,GP2,GP3,GP4,GP5]
  var latestGameSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 2
          }
      }

    ]
  };
  return (
    <div className='img-bg'>
      <AppNavBar/>
      <div className='mb-5 carousel-header-bg'>
        <Row className=''>
          <Col lg={4} className='header-text-format ms-5 py-5'>
            <div className=''>
              <h3 className='ms-3'>PLAY AND HAVE FUN</h3>
              <p className='ms-3'>Welcome to PAGCOR Gaming Website, where excitement and fortune await you around every virtual corner. Indulge in a world of exhilarating games, from classic card tables to cutting-edge slots, all within a secure and regulated online environment. Join us today to experience the thrill of winning while enjoying the peace of mind that comes with a fully authorized and trustworthy gaming platform.</p>
            </div>
          </Col>
          {/* <Col className='test'>
            <img src={BG} alt="" />
          </Col> */}
        </Row>
      </div>
      <Container>
        <div className='section-one my-5'>
          <h1 className='global-head'>
            ASIA'S FRIENDLIEST
          </h1>
          <p>Casino Filipino is committed to helping boost the Philippines' tourism industry by providing homegrown fun and entertainment. Operated by the Philippine Amusement and Gaming Corporation (PAGCOR), Casino Filipino currently has 43 casino sites all over the country.Majority of Casino Filipino's revenues goes to the National Treasury, making it a key partner of the government in nation building.</p>
        </div>
        <div className='section-two'>
          <h2 className='pt-3'>EXPERIENCE REAL ONLINE CASINO GAMING WITH PAGCOR </h2>
            <div className='number pt-5'>
              <div className='number-info'>
                <img src={num1} alt="" />
                <h1>register</h1>
                <p>Secure your spot in the game – register now!</p>
              </div>
              <div className='number-info'>
                <img src={num2} alt="" />
                <h1>deposit</h1>
                <p>Get ready to dive into the action – ensure your playtime by making a deposit today!</p>
              </div>
              <div className='number-info'>
                <img src={num3} alt="" />
                <h1>play!</h1>
                <p>The wait is over – unleash the excitement and start playing now!</p>
              </div>
            </div>
        </div>
        {/* Games */}
        <div className='my-4'>
          <div>
            <h2 className='text-light d-flex align-items-center mx-4'><img src={iconNew}/>Latest Games</h2>
            <Slider {...latestGameSettings} className="text-light">
                {latestGames.map((latest) => (
                <div className='d-flex justify-content-center'>
                  <img className='img-fluid w-75' src={latest}/>
                </div>
                ))}
            </Slider>
            <button className='btn btn-danger rounded-4 m-4'>See All Games</button>
          </div>
          <div>
            <h2 className='text-light d-flex align-items-center mx-4'><img src={iconRolette}/>Slot Games</h2>
            <Slider {...latestGameSettings} className="text-light">
                {slotGames.map((slot) => (
                <div className='d-flex justify-content-center'>
                  <img className='img-fluid w-75' src={slot}/>
                </div>
                ))}
            </Slider>
            <button className='btn btn-danger rounded-4 m-4'>See All Games</button>
          </div>
          <div>
            <h2 className='text-light d-flex align-items-center mx-4'><img src={iconRolette}/>Bingo Games</h2>
            <Slider {...latestGameSettings} className="text-light">
                {bingoGames.map((bingo) => (
                <div className='d-flex justify-content-center'>
                  <img className='img-fluid w-75' src={bingo}/>
                </div>
                ))}
            </Slider>
            <button className='btn btn-danger rounded-4 m-4'>See All Games</button>
          </div>
        </div>
        {/* Promotions */}
        <div>
            <hr/>
            <h1 className='global-head'>PROMOTIONS</h1>
            <div>
              <Row>
                <Col lg={4} className="my-4">
                  <div className='promotion-box'>

                  </div>
                </Col>
                <Col lg={4} className="my-4">
                  <div className='promotion-box'>

                  </div>
                </Col>
                <Col lg={4} className="my-4">
                  <div className='promotion-box'>

                  </div>
                </Col>
              </Row>
            </div>
        </div>
        {/* Gaming Partners */}
        <div>
          <h1 className='global-head my-4 mt-5'>GAMING PARTNERS</h1>
          <Row className="d-flex justify-content-center align-items-center">
          {gamingPartners.map((partners) => (
            <Col lg={2} sm={6} className="column-partners">
              <img className='img-fluid w-100' src={partners}/>
            </Col>
              ))}
          </Row>
        </div>
        <div className='section-one my-5'>
          <h1 className='global-head'>
            PUBLIC WARNING
          </h1>
          <p>Fraudsters are taking advantage of social media and the uncertainties brought by the COVID19 Pandemic to scam your money, steal your financial information, and use your identity for illegal purposes.The Philippine Amusement and Gaming Corporation (PAGCOR) has received information that certain persons have been organizing illegal Bingo games and internet/ online gambling and using Facebook to promote such illegal activities. The public is warned not to patronize such schemes due to the risk of being scammed, identity theft, and credit card fraud. Betting on such illegal gambling activities is also a crime. PAGCOR is responsible for licensing and regulating persons primarily engaged in gambling and their allied businesses. No person other than those licensed by PAGCOR and other Government agencies may operate gambling in the Philippines. It is illegal for any person other than those referred to in the preceding sentence to in any manner, directly or indirectly take part in any unauthorized gambling activities, including online, internet, or remote gambling. (PD1602 in relation to RA10175, see also EO13 s. 2017). PAGCOR is committed to the prosecution of persons involved in such illegal activities, because of the strong link between illegal gambling and organized crime who are also engaged in credit card fraud, identity theft, money laundering, among others. If you encounter persons who may be promoting illegal gambling on social media like Facebook or know the identities of those committing these illegal gambling activities, please contact PAGCOR through info@pagcor.ph</p>
        </div>
      </Container>
      <Footer/>
    </div>

  )
}

export default Home