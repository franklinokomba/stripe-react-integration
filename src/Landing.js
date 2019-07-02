import React, { Component } from 'react'
import MyStoreCheckout from './MyStoreCheckout'
import { Container, Row, Col, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
class Landing extends Component {
  state = {
    redirect: false,
    plan: ''
  }
  subscribe = plan => {
    this.setState({ redirect: true, plan: plan })
  }

  render () {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: '/subscribe',
            subscription_plan: { plan: this.state.plan }
          }}
        />
      )
    } else {
      return (
        <Container>
          <h1 className='text-center pt-3'>Welcome to Glady's</h1>
          <Row>
            <Col>
              <div style={{ backgroundColor: '#73FBD3', height: '400px' }}>
                <h2 className='text-center pt-3'>Option 1</h2>

                <div className='text-center' style={{ fontWeight: 'bold' }}>
                  <h4 className='pl-1'>50$</h4>
                  <p>Basic</p>
                  <p>
                    Battery recycling service for less than 10 batteries a month
                  </p>
                </div>

                <div className='text-center' style={{ fontWeight: 'bold' }}>
                  <Button
                    onClick={() => this.subscribe('basic')}
                    className='#74FBD3'
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </Col>
            <Col>
              <div style={{ backgroundColor: '#44E5E7', height: '400px' }}>
                <h2 className='text-center pt-3'>Option 2</h2>

                <div className='text-center' style={{ fontWeight: 'bold' }}>
                  <h4 className='pl-1'>100$</h4>

                  <p>Medium</p>
                  <p>
                    Battery recycling service for less than 10 to 20 batteries a
                    month
                  </p>
                </div>
                <div className='text-center'>
                  <Button
                    onClick={() => this.subscribe('medium')}
                    className='#74FBD3'
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </Col>

            <Col>
              <div style={{ backgroundColor: '#59D2FE', height: '400px' }}>
                <h2 className='text-center pt-3'>Option 3</h2>

                <div className='text-center' style={{ fontWeight: 'bold' }}>
                  <h4 className='pl-1'>150$</h4>

                  <p>Premium</p>
                  <p>
                    Battery recycling service for less than 20 plus batteries a
                    month
                  </p>
                </div>
                <div className='text-center'>
                  <Button
                    onClick={() => this.subscribe('premium')}
                    className='#74FBD3'
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

export default Landing
