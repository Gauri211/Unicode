import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Card, ListGroup} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navigation';
const News = () => {

      const {title} = useParams();
      
      const [MyData,setMyData] = useState([]);
      
  
  useEffect(() => {
    
    axios.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
    .then(res => setMyData(res.data.articles))
    
  },[])
    
  console.log(useParams());

      const getNews = MyData.find((card) => card.title === title);
      console.log(getNews);
  
    return (
      
      MyData.length===0?
      <div></div>:

      <body>
        <Navbar/>
      <Card style={{ width: '50rem' }} >
      
      <Card.Body>
        <Card.Title>{getNews.title}</Card.Title>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>{getNews.author}</ListGroup.Item>
        <ListGroup.Item>{getNews.publishedAt}</ListGroup.Item>
        
      </ListGroup>
        <Card.Text>
          {getNews.description}
        </Card.Text>
        <Card.Img src={getNews.urlToImage} />
        <Card.Text>
          {getNews.content}
        </Card.Text>
      </Card.Body>
          
    </Card>
    </body>
    );

  }



export default News;