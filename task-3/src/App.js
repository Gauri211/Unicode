// import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';
// import {Card} from 'react-bootstrap';
// import ListGroup from 'react-bootstrap/ListGroup';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import Pagination from './components/Pagination';
let App = () => {

  const [MyData,setMyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
    setLoading(true);
    axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=552ba76d50764eb89b9ec6b80f39107b')
    .then(res => setMyData(res.data.articles))
    setLoading(false);
  },[])
  
        
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = MyData.slice(firstPostIndex, lastPostIndex);

  //Change Page
  const paginate = pageNos => setCurrentPage(pageNos);
  return (
    <div className="app"> 
      <h1>News App</h1>
      <Cards MyData={currentPosts} loading={loading} />  
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={MyData.length} 
        paginate={paginate}
      />
</div>
  )
}
export default App;

