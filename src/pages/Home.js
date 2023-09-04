import React from 'react'
import AppNavBar from '../components/AppNavBar';
import Footer from '../components/footer';
import { Col, Form, Card, Row, Button, Container } from "react-bootstrap"
import BG from "../assets/BG.png";
import num1 from "../assets/num1.png";
import num2 from "../assets/num2.png";
import num3 from "../assets/num3.png";


function Home() {
  return (
    <div>
      <AppNavBar/>
      <div className='mb-5 carousel-header-bg'>
        <Row className=''>
          <Col className='header-text-format ms-5'>
            <div className=''>
              <h3 className='ms-3'>PLAY AND HAVE FUN</h3>
              <p className='ms-3'>Welcome to PAGCOR Gaming Website, where excitement and fortune await you around every virtual corner. Indulge in a world of exhilarating games, from classic card tables to cutting-edge slots, all within a secure and regulated online environment. Join us today to experience the thrill of winning while enjoying the peace of mind that comes with a fully authorized and trustworthy gaming platform.</p>
            </div>
          </Col>
          <Col className='test'>
            <img src={BG} alt="" />
          </Col>
        </Row>
      </div>
      <Container>
        <div className='section-one my-5'>
          <h1>
            ASIA'S FRIENDLIEST
          </h1>
          <p>Casino Filipino is committed to helping boost the Philippines' tourism industry by providing homegrown fun and entertainment. Operated by the Philippine Amusement and Gaming Corporation (PAGCOR), Casino Filipino currently has 43 casino sites all over the country.Majority of Casino Filipino's revenues goes to the National Treasury, making it a key partner of the government in nation building.</p>
        </div>
        <div className='section-two'>
          <h1 className='pt-3'>EXPERIENCE REAL ONLINE CASINO GAMING WITH PAGCOR </h1>
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
        <div className='section-one my-5'>
          <h1>
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