import React, { Component } from 'react'
import { Table, Button, Row, Col } from 'reactstrap'
export default class Orders extends Component {
  render() {
    const { orders } = this.props
    const { user } = this.props
    return (
      <div>
        <Row>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Order Details(Order Id ex.)</th>
                <th>Products</th>
                <th>Product Quantities</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                ;<tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {order.orderId} User Name:{order.user.userName} User Id:
                    {order.user.id}
                  </td>
                  <td>
                    <ul>
                      {order.products.map((item) => (
                        <li>{item.product.productName}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {order.products.map((item) => (
                        <li>{item.quantity}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              })}
            </tbody>
          </Table>
        </Row>
      </div>
    )
  }
}
