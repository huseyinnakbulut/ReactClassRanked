import React, { Component } from 'react'
import Categories from '../categories/Categories'
import { Row, Col } from 'reactstrap'
import Products from '../products/Products'
export default class Mainpage extends Component {
  render() {
    return (
      <Row>
        <Col sm="4">
          <Categories />
        </Col>
        <Col sm="8">
          <Products />
        </Col>
      </Row>
    )
  }
}
