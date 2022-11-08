import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Newsapp from './components/Newsapp';
import News from './components/Newspg';

let App = () => {
    return (
      <Routes>
            <Route path = '/' element = {<Newsapp />} />
            <Route path = '/news/:title' element = {<News />} />                  
      </Routes>
    )
}
export default App;

