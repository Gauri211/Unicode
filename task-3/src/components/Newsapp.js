import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Cards from './Cards';
import Pagination from './Pagination';


let Newsapp = () => {

  const [MyData,setMyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
    setLoading(true);
    axios.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
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
        
        <h1 className="text-center">News App</h1>        
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