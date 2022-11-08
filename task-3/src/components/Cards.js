import * as React from 'react';
import {Card} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link } from 'react-router-dom';

    const Cards = ({MyData, loading}) => {
        if(loading) {
            return<h2>Loading..</h2>; 
        }
        return (
            <div>
              <Row xs={1} md={3} className="g-4">
               {MyData.map((card) => {
             return (
                <Col>
                 <Card stle={{width: '20rem'}} key={card.title}> 
                  <Card.Img variant="top" src={card.urlToImage} /> 
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <ListGroup className="list-group-flush">
                   <ListGroup.Item>{card.author}</ListGroup.Item>
                   <ListGroup.Item>{card.publishedAt}</ListGroup.Item>
                 </ListGroup>
                   <Card.Text>
                     {card.description}
                   </Card.Text> 
                  </Card.Body>
                  <Card.Body>
                    <Link to={`/news/${card.title}`}>Learn More</Link>
                  </Card.Body>
                </Card>
              </Col> 
             )})}
             </Row>
          
     </div>
             );
              }

  
  export default Cards;