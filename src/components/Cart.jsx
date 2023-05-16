import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';
const Cart = () => {
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const removeFromCart = (id) => {
      // dispatch remove action
      dispatch(remove(id))   
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
              <Button variant="danger" onClick={()=> removeFromCart(product.id)}>Remove</Button>
            </Card.Footer>
          </Card>
        </div>
      ))
  return (
    <>
       <div className='row'>
        {cards}
       </div>
    </>
  )
}

export default Cart