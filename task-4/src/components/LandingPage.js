import React from 'react'
import '../App.css';

const LandingPage = () => {
    let container = document.querySelector('.container');
    for(let i=1; i<=100; i++) {
        let dot = document.createElement('div');
        dot.classList.add('element');
        container.appendChild(dot);
    }
  return (
    <body>
        <header>
            <a href='#' className='logo'>Bloggers Side</a>
            <ul>
                <li><a href='#' className='active'>Home</a></li>
                <li><a href='#'>MyBlogs</a></li>
                <li><a href='#'>Write</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </header>
        <section>
            <div className='content'>
                <h2>Level up your website with <a href='#'>Anime.js</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                </p>
                <a href='#' className='btn'>Learn More</a>
            </div>
            <div className='container'></div>
        </section>
    </body>
  )
}

export default LandingPage