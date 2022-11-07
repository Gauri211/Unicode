import * as React from 'react';
import {Card} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

    const Cards = ({MyData, loading}) => {
        if(loading) {
            return<h2>Loading..</h2>; 
        }
        return (
            <div>
             {MyData.map((card) => {
              console.log("Hello");
             return (
                 <Card style={{ width: '20rem'}} >
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
                    <Card.Link href="#">Learn More</Card.Link>
                  </Card.Body>
                </Card>  
             )
               })}   
     </div>
             );
             }

  
  export default Cards;