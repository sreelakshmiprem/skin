import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './card.css';

export default function App() {
  const [counter, setCounter] = useState(0);

  var districts = [
    {
      id: 1,
      title: 'Natural Baby Soap',
      descrption: 'MRP - 60',
      image: 'https://files.themomsco.com/site-images/800x800/FOP_39.jpg',
    },
    {
      id: 2,
      title: 'Natural Face Toner',
      descrption: 'MRP - 300',
      image:
        'https://cdn.shopify.com/s/files/1/0023/9953/5204/products/Skin-Brightening-Listing-20220118-1.jpg?v=1655701668&width=800',
    },
    {
      id: 3,
      title: 'Natural Sunscreen',
      descrption: 'MRP - 275',
      image: 'https://files.themomsco.com/site-images/800x800/FOP-WITH-INGREDIENTS-(1).jpg',
    },
    {
      id: 4,
      title: 'Natural Under Eye Cream',
      descrption: 'MRP - 400',
      image: 'https://www.o3plus.com/pub/media/catalog/product/cache/dd0499f648c07c35a3a4972369e82147/p/r/product_copy_1_10.jpg',
    },
    {
      id: 5,
      title: 'Natural Body Wash',
      descrption: 'MRP - 230',
      image: 'https://files.stbotanica.com/site-images/800x800/d338f200-1fbc-11ec-83b7-c7f6905fb422.jpg',
    },
    {
      id: 6,
      title: 'Natural Face Cream',
      descrption: 'MRP - 350',
      image: 'https://d1iuscsovtvj4y.cloudfront.net/__sized__/products/C-glow_face_cream-01-thumbnail-1080x1080-70.jpg',
    },
    {
      id: 7,
      title: 'Natural Face Mist',
      descrption: 'MRP - 170',
      image: 'https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/264350/pilgrim-alcohol-free-hydrating-face-mist-and-toner-100ml_2_display_1637055801_4b93f13f.jpg',
    },
    {
      id: 8,
      title: 'Natural Mosquito repellent',
      descrption: 'MRP - 200',
      image: 'https://images.mamaearth.in/catalog/product/m/g/mg_6805_probs_kx4asg2xuppec3db.jpg?fit=contain&width=332',
    },
  ];

  return (
    <div className="bg">
      <Container>
        <h1 style={{ color: 'black', textAlign: 'center' }}>
          <br />
           Products
          <br />
        </h1>
        <Row>
          {districts.map((district, index) => {
            return (
              <Col sm={3} key={index}>
                <Card className="mt-3" style={{ background: 'white', height: '30rem' }}>
                  <Card.Img style={{ height: '20rem' }} variant="top" src={district.image} />

                  <Card.Body style={{ height: '1rem', width: '18rem', textAlign: 'center' }}>
                    <Card.Title>{district.title}</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>{district.descrption}</Card.Text>
                    <div className="text-center">
                      <Button
                        variant="outline-success"
                        size="1g"
                        className="mt-2"
                        onClick={() => setCounter(counter + 1)}
                      >
                        Add To Cart 
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <h2 style={{ color: 'white', textAlign: 'center' }} className='hi'>
          <br />
           Total No. Of Items - {counter}
          <br />
        </h2>
      </Container>
    </div>
    
  );
}