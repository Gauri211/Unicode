import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Cards from './Cards';
import Pagination from './Pagination';
import Apple from './Apple';
import Navbar from './Navigation';
let Newsapp = () => {

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
        <Navbar/>
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
export default Newsapp;