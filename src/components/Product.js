import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import {add} from '../store/cartSlice'
import {getProducts} from '../store/productSlice';
import  Alert  from 'react-bootstrap/Alert';
import StatusCode from '../Utils/StatusCode';
const Product = () => {
  const dispatch = useDispatch(); 
  const { data: products, status} = useSelector(state => state.products)
  useEffect(()=> {
    // api
    // fetch("https://fakestoreapi.com/products")
    // .then(data => data.json())
    // .then(result => getProducts(result))

    //dispatch action from fetchProducts
    dispatch(getProducts())
  }, [dispatch]);

  const addToCart = (product) => {
    // dispatch add action
    dispatch(add(product))
  }

  if(status === StatusCode.LOADING){
    return <Alert action="warning" variant="warning">Loading....</Alert>
  }

  if(status === StatusCode.ERROR){
    return <Alert action="danger" variant='danger' >Something went wrong ! Please try again later.</Alert>
  }


  const cards = products.map(product => (
    <div className='col-12 col-md-3' style={{ marginBottom:'10px' }}>
      <Card style={{ width: '18rem'}} className='h-100' key={product.id}>
        <div className="text-center" style={{ margin: '10px' }}>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height:'130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            TK. {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="primary" onClick={()=> addToCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ))
  return (
    <>
        <h1>This is React Redux Toolkit</h1>
        <div className='row'>
          {cards}
        </div>
    </>
  )
}

export default Product