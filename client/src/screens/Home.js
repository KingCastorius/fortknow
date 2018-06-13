import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Styles from '../styles'
const Fortnite = require("fortnite-api");

let fortniteAPI = new Fortnite(

  
    [
        "malizakzorz@gmail.com",
        "Lolwat77",
        "MzRhMDJjZjhmNDQxNGUyOWIxNTkyMTg3NmRhMzZmOWE6ZGFhZmJjY2M3Mzc3NDUwMzlkZmZlNTNkOTRmYzc2Y2Y=Decoded Username:Password= 34a02cf8f4414e29b15921876da36f9a:daafbccc737745039dffe53d94fc76cf",
        "FORTNITE CLIENT TOKEN"
    ],
    {
        debug: true
    }
);

class HomePage extends React.Component{


  render() {
    return(
      <div>
        <Container>
          <Row>
            
            <Col is="desktop-12" style={Styles.bgColor} >
              <a href="/home">Home  </a>
              <h1 style={Styles.pageHeader}>Fortknow</h1>
              <p>Stay in the Know</p>
              <div>
              "https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/storefront/v2/catalog"
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col is="desktop-12" >
                <form>


                  <input
                    name="playerInfo"
                    type="text"
                    placeholder="search player by EPIC ID"
                />
                <div>
                    <Button color="danger" type="submit" >Submit</Button>
                </div>
            </form>
            </Col>
          </Row>
        </Container>

      </div>

    )
  }
}

export default HomePage;
