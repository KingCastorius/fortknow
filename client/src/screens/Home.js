import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class HomePage extends React.Component{


  render() {
    return(
      <div>
        <Container>
          <Row>
            <Col is="desktop-12" >
              <a href="/home">Home  </a>
              <h1>Fortknow</h1>
              <p>Stay in the Know</p>
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
