import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {  Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Rating from '../components/Rating'

function ProductView({ match }) {
    const [product, setProduct] = useState({})

    useEffect(()=>{
        async function fetchProduct(){
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }

        fetchProduct()
    }, [match])
    
    return (
        <>
           <Link className="btn btn-dark my-3" to="/">
               Back
            </Link>
            <Row>
                <Col md={6}>
                    {/*fluid to stop the img from go out of its container*/}
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                   <ListGroup variant="flush">
                        <ListGroup.Item >
                            <h3>{product.name}</h3>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <strong>Price:</strong> $ {product.price}
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <strong>Description:</strong> {product.description}
                       </ListGroup.Item>
                   </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <strong>Price: </strong>
                                    </Col>
                                    <Col>
                                        <strong>$ {product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <strong>Status: </strong>
                                    </Col>
                                    <Col>
                                        <strong>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <LinkContainer to="/cart">
                                    <Button 
                                            type="button" 
                                            className="btn-block" 
                                            disabled={product.countInStock === 0}
                                    >
                                        Add To Cart
                                    </Button>
                                </LinkContainer>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductView
