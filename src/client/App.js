import { compose } from 'recompose';
import React from 'react';
import { Container, Row, Col, Nav, Button, Navbar, Carousel, Card, FormControl, Form } from 'react-bootstrap';
import aakashgangaaLogo from './AakashGangaaMainLogo.png';
import indraV1 from './indra_v1.png';
import makeInIndiaImage from './make-in-india.png';
import taglineBackgroundImage from './tagline-mars-new.jpg';
import moon from './0127_moon.jpg'
import futureMoonImage from './0127_moon.jpg';
import indraBackground from './indra-background.png';
import backgrnd from  './andromeda-back-new.jpg'
import { FcGlobe } from 'react-icons/fc';
import { FaUserAstronaut } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { IconContext } from "react-icons";


const App = ({
}) => (
    <Container style={{ maxWidth: 'inherit', padding: 0 }}>
      
      <Row>
        <Col>
        <Navbar collapseOnSelect expand="lg" style={{ padding: '20px 10px 0px 10px', backgroundColor: "#363838" }} >
          <Navbar.Brand href="#home"><img src={aakashgangaaLogo} style={{alt: ""}} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav style={{ paddingRight: '40px'}}>
              <Nav.Link href="/"><span style={{color:"white", fontWeight:980, fontSize: '27px', fontFamily: 'Playfair Display' }}>ABOUT</span></Nav.Link>
              <Nav.Link href="#"><span style={{color:"white", fontWeight:980, fontSize: '27px', fontFamily: 'Playfair Display'}}>CAREERS</span></Nav.Link>
              <Nav.Link eventKey={2} href="#"><span style={{color:"white", fontWeight:980, fontSize: '27px', fontFamily: 'Playfair Display'}}>CONTACTS</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </Col>
      </Row>
      
      <Container fluid style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.9)', width: 'inherit' }}>
        
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item style={{width: '100%'}}>
                <img className="d-block w-100" src={taglineBackgroundImage}  alt="First slide"/>
                <Carousel.Caption>
                  <span style={{color:"white", fontWeight:980, fontSize: '50px', fontFamily: 'Playfair Display' }}>Lets Colonize The Future</span>
                  <p><span style={{color:"white", fontWeight:400, fontSize: '30px', fontFamily: 'Playfair Display' }}>Our robust software and hardware enables us to open the doors of the future of colonization of planets</span></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={taglineBackgroundImage}/>
                <Carousel.Caption>
                  <span style={{color:"white", fontWeight:980, fontSize: '50px', fontFamily: 'Playfair Display' }}>Second slide label</span>
                  <p><span style={{color:"white", fontWeight:400, fontSize: '30px', fontFamily: 'Playfair Display' }}>Our robust software and hardware enables us to open the doors of the future of colonization of planets</span></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={taglineBackgroundImage}/>
                <Carousel.Caption>
                  <span style={{color:"white", fontWeight:980, fontSize: '50px', fontFamily: 'Playfair Display' }}>Third slide label</span>
                  <p><span style={{color:"white", fontWeight:400, fontSize: '30px', fontFamily: 'Playfair Display' }}>Our robust software and hardware enables us to open the doors of the future of colonization of planets</span></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row style={{marginTop:'40px'}}>
         <Col><p className="text-center"><span style={{color:"white", fontWeight:990, fontSize: '48px', fontFamily: 'Bungee Outline' }}>Propel Humankind To Future</span></p></Col>
        </Row>  

        <Row style={{ padding: '20px 10px 20px 10px', marginLeft:'120px', marginRight: '30px'}}>
          <Col className="text-center">
            <Card className="text-center rounded-circle" style={{ width: '18rem',backgroundColor: "#363838", border: 'solid', borderColor:'#a8aeb3' }}>
              <IconContext.Provider value={{ color: "#ffb703", size: '80px' }}>
                <div><FaUserAstronaut /></div>
              </IconContext.Provider>
              <Card.Body>
                <Card.Title><span style={{color: '#ebf0f7', fontWeight:650, fontSize: '26px', fontFamily: 'Playfair Display'  }}><strong>MODULARITY</strong></span></Card.Title>
                <Card.Text><span style={{fontWeight:650, fontSize: '23px', fontFamily: 'Playfair Display'}}><strong>Easy To Integrate Parts</strong></span></Card.Text>
                <Button variant="primary" size="sm" style={{backgroundColor: 'rgb(168, 174, 179)', borderColor: 'black' }} ><span style={{color: 'black', fontWeight:900, fontSize: '15px', fontFamily: 'Playfair Display' }}>Learn More</span></Button>
              </Card.Body>
              </Card>
          </Col>
          <Col className="text-center">
            <Card className="text-center rounded-circle" style={{ width: '18rem',backgroundColor: "#363838", border: 'solid', borderColor:'#a8aeb3'}}>
              <IconContext.Provider value={{ size: '80px' }}>
                <div><FcGlobe /></div>
              </IconContext.Provider>   
              <Card.Body>
                <Card.Title><span style={{color: '#ebf0f7', fontWeight:650, fontSize: '26px', fontFamily: 'Playfair Display'  }}><strong>GLOBAL REACH</strong></span></Card.Title>
                <Card.Text><span style={{fontWeight:650, fontSize: '23px', fontFamily: 'Playfair Display'}}><strong>Anywhere Communication</strong></span></Card.Text>
                <Button variant="primary" size="sm" style={{backgroundColor: 'rgb(168, 174, 179)',  borderColor: 'black' }}><span style={{color: 'black', fontWeight:900, fontSize: '15px', fontFamily: 'Playfair Display' }}>Learn More</span></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-center">
            <Card className="text-center rounded-circle" style={{ width: '18rem',backgroundColor: "#363838", border: 'solid', borderColor:'#a8aeb3' }}>
              <IconContext.Provider value={{ color: "#e603ff", size: '80px' }}>
                <div><IoIosRocket /></div>
              </IconContext.Provider>  
              <Card.Body>
                <Card.Title><span style={{color: '#ebf0f7', fontWeight:650, fontSize: '26px', fontFamily: 'Playfair Display'  }}><strong>REUSABLE ROCKETS</strong></span></Card.Title>
                <Card.Text><span style={{fontWeight:650, fontSize: '23px', fontFamily: 'Playfair Display'}}><strong>Capable Of Landing</strong></span></Card.Text>
                <Button variant="primary" size="sm" style={{backgroundColor: 'rgb(168, 174, 179)', borderColor: 'black' }}><span style={{color: 'black', fontWeight:900, fontSize: '15px', fontFamily: 'Playfair Display' }}>Learn More</span></Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>  
                      
        <Row style={{marginTop:'60px'}}>
          <Col>
            <p className="text-center"><span style={{color:"white", fontWeight:990, fontSize: '48px', /*fontFamily:'Playfair Display'*/ fontFamily: 'Bungee Outline' }}>Exhaust Nebula That Works!!</span></p>
          </Col>                
        </Row>

        <Row style={{ padding: '20px 10px 0px 10px', backgroundColor: "#363838", marginLeft:'50px', marginRight: '50px', borderRadius: '5px', backgroundImage:`url(${backgrnd})` }}>
          <Col className="text-center">
            <img src={indraV1} style={{height: 400, width:200}} />
          </Col>  
          <Col>
            <p className="text-center"><span style={{color:"white", fontWeight:800, fontSize: '30px',fontFamily: 'Playfair Display' }}>Height - 23m</span></p>
            <p className="text-center"><span style={{color:"white", fontWeight:800, fontSize: '30px',fontFamily: 'Playfair Display' }}>Payload - 800kmSSO</span></p>
            <p className="text-center"><span style={{color:"white", fontWeight:800, fontSize: '30px',fontFamily: 'Playfair Display' }}>150kg Payload Capacity</span></p>
            <p className="text-center"><span style={{color:"white", fontWeight:800, fontSize: '30px',fontFamily: 'Playfair Display' }}>2 - Stage 3D Printed Engine</span></p>
          </Col>
          <Col className="text-center">
            <img src={indraV1} style={{height: 400, width:200}} />
          </Col>                
        </Row>


        <Row style={{ padding: '20px 10px 0px 10px', backgroundColor: "#777b7e", marginTop:'40px', marginBottom:'50px', marginLeft:'150px', marginRight: '150px', borderRadius: '32px', border: 'double', borderColor: 'white' }}>
          <Col>
            <p className="text-center"><span style={{color:"white", fontWeight:850, fontSize: '30px', fontFamily: 'Playfair Display' }}>JOIN US!!</span></p>
          </Col>
          <Col>
            <Form inline>
              <FormControl type="email" placeholder="Your Email" className=" mr-sm-2" style={{backgroundColor: "#d1d4d8"}} />
                <Button size="sm"  variant="success" type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>

        <Row style={{paddingTop: '40px', paddingBottom: '10px', marginLeft:'inherit', marginRight: 'inherit'}} >
          <Col className="text-center">
            <img src={makeInIndiaImage} className="img-fluid" style={{ height:150, width: 200}} />
              <p className="text-center text-muted"><span style={{color:"#535454", fontWeight:170, fontSize: '20px',fontFamily: 'Playfair Display' }}>All Copy Rights Reserved</span></p>
            </Col>
        </Row>


      </Container>

    </Container>
);

export default compose(App);
