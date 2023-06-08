import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from '../../redux/actions/productActions'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { Button, Col, CardGroup } from 'reactstrap'
import * as cartActions from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'
import './Product.css'

class Products extends Component {
  componentDidMount() {
    this.props.actions.getProducts()
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product })
    alertify.success(product.productName + ' added to cart!', 2)
  }

  render() {
    return (
      <div>
        <CardGroup>
          {this.props.products.map((product) => (
            <Col xs="3">
              <div className="height d-flex justify-content-center align-items-center">
                <div className="card p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mt-2" key={product.id}>
                      <h4 className="text-uppercase">{product.productName}</h4>
                      <div className="mt-5">
                        <h5 className="text-uppercase mb-0"></h5>
                        <h1 className="main-heading mt-0"></h1>
                        <div className="d-flex flex-row user-ratings">
                          <div className="ratings">
                            <i className="fa fa-star">*</i>
                            <i className="fa fa-star">*</i>
                            <i className="fa fa-star">*</i>
                            <i className="fa fa-star">*</i>
                          </div>
                          <h6 className="text-muted ml-1">4/5</h6>
                        </div>
                      </div>
                    </div>
                    <div className="image">
                      <img src="" width="200" alt="Product" />
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                    <span>Available colors</span>
                    <div className="colors">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2 mb-2"></div>

                  <p>{product.desc}</p>

                  <button className="btn btn-danger">Add to cart</button>
                </div>
              </div>
            </Col>
          ))}
        </CardGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productsReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
