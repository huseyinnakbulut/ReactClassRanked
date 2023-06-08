import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as cartActions from '../../redux/actions/cartActions'
import { Button, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
class Payment extends Component {
  //   totalPrice() {
  //     let totalPrice = 0
  //     this.props.cart.map(
  //       (cartItem) => (totalPrice += cartItem.product.price * cartItem.quantity)
  //     )
  //     return totalPrice
  //   }

  changeCardNumber() {
    var cardDisplayNumber = document.getElementById('cardNumber')
    var cardInputNumber = document.getElementById('inputCardNumber')
    cardDisplayNumber.innerHTML = cardInputNumber.value
  }
  changeCCV() {
    var cardDisplayCCV = document.getElementById('CCV')
    var cardInputCCV = document.getElementById('inputCCV')
    cardDisplayCCV.innerHTML = cardInputCCV.value
  }
  changeName() {
    var cardDisplayName = document.getElementById('NameSurname')
    var cardInputName = document.getElementById('inputName')
    cardDisplayName.innerHTML = 'Name: ' + cardInputName.value
  }
  changeDate() {
    var cardDisplayDate = document.getElementById('date')
    var cardInputDate = document.getElementById('inputDate')
    cardDisplayDate.innerHTML = 'Expiry date: ' + cardInputDate.value
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Row>
            <Col sm="3"></Col>
            <Col sm="6">
              <div>
                <div className="card p-3">
                  <div className="img-box">
                    <img
                      src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                      //src="/visa2.png"
                      height="100px"
                      width="200px"
                      alt=""
                    />
                  </div>
                  <div className="number">
                    <label className="fw-bold" id="cardNumber">
                      ** ** ** 1060
                    </label>
                  </div>
                  <span className="fw-bold" id="NameSurname">
                    Name:
                  </span>
                  <div className="d-flex align-items-center justify-content-between">
                    <small>
                      <span className="fw-bold" id="date">
                        Expiry date:
                      </span>
                    </small>
                    <small>
                      <span>
                        <b id="CCV">CVV</b>
                      </span>
                    </small>
                  </div>
                </div>
              </div>
            </Col>

            <Col sm="3"></Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <div className="col-12">
              <div className="card p-3">
                <div className="card-body border p-0">
                  <div className="collapse p-3 pt-0" id="collapseExample">
                    <div className="row">
                      <div className="col-8">
                        <p className="mb-0">
                          <span className="fw-bold">Price:</span>
                          {/* <span className="c-green">{this.totalPrice()}</span> */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body border p-0">
                  <p>
                    <a
                      className="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="true"
                      aria-controls="collapseExample"
                    >
                      <span className="fw-bold">Credit Card</span>
                      <span className>
                        <span className="fab fa-cc-amex" />
                        <span className="fab fa-cc-mastercard" />
                        <span className="fab fa-cc-discover" />
                      </span>
                    </a>
                  </p>
                  <div className="collapse show p-3 pt-0" id="collapseExample">
                    <div className="row">
                      <div className="col-lg-5 mb-lg-0 mb-3">
                        <p className="mb-0">
                          <span className="fw-bold">Price:</span>
                          {/* <span className="c-green">:{this.totalPrice()} TL</span> */}
                        </p>
                      </div>
                      <div className="col-lg-7">
                        <form action className="form">
                          <div className="row">
                            <div className="col-12">
                              <div className="form__div">
                                <label htmlFor className="form__label">
                                  Card Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=" "
                                  id="inputCardNumber"
                                  maxLength={16}
                                  onChange={this.changeCardNumber}
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form__div">
                                <label htmlFor className="form__label">
                                  Exp Date MM / yy
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=" "
                                  id="inputDate"
                                  onChange={this.changeDate}
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form__div">
                                <label htmlFor className="form__label">
                                  CVV
                                </label>
                                <input
                                  type="password"
                                  maxLength={3}
                                  className="form-control"
                                  placeholder=" "
                                  id="inputCCV"
                                  onChange={this.changeCCV}
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form__div">
                                <label htmlFor className="form__label">
                                  Name On The Card
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=" "
                                  id="inputName"
                                  onChange={this.changeName}
                                />
                              </div>
                            </div>

                            <div
                              className="col-12"
                              style={{ marginTop: '10px' }}
                            >
                              <div className="btn btn-primary w-100">
                                Confirm Payment
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    )
  }
}
// function mapStateToProps(state) {
//   return {
//     cart: state.cartReducer,
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       totalPrice: bindActionCreators(cartActions.totalPrice, dispatch),
//     },
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Payment)
export default Payment
