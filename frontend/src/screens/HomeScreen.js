import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'
// import products from '../products'
// import axios from 'axios'

const HomeScreen = () => {
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {   
        // const fetchProducts = async () => {
        //     const {data} =  await axios.get('/api/products')
        //     // console.log(data);

        //     setProducts(data)
        // }
        // fetchProducts()
        dispatch(listProducts())
    },[dispatch])

    // const products = []

  return (
   <>
    <h1>Latest Products</h1>
    {loading ? ( <Loader /> ): error ? (
    <Message variant='danger'>{error}</Message>
    ) : (
        <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}  
    </Row>
    )}
   </>
  )
}

export default HomeScreen