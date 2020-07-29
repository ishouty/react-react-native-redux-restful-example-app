import React, { Component } from 'react'
import { useQuery } from '@apollo/client'

import { Banner } from '../Common/Common'
import { Row, Col } from 'react-bootstrap'
import { GET_PRODUCTS } from '../../gql/Products'

const Product = (data) => {
  const { description, title, price } = data.product

  return (
    <Col className="user-container">
      <Row>
        <div>
          <h3>{title}</h3>
          <div>{description}</div>

          <div>{price}</div>
        </div>
      </Row>
    </Col>
  )
}

const ProductList = () => {
  const results = useQuery(GET_PRODUCTS)

  const { loading, error, data } = results

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  if (data.products) {
    return data.products.map((product, index) => {
      return <Product product={product} key={index} />
    })
  }
}

export default class Products extends Component {
  render() {
    return (
      <div className="one-col-container">
        <Col sm={12} className="main-container">
          <Banner />
          <h2>{this.props.route.title}</h2>
          <div>
            <ProductList />
          </div>
        </Col>
      </div>
    )
  }
}
