import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNos = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNos.push(i);
    }
    return (
       <nav>
            <ul className="pagination">
                {pageNos.map(number => {
                    return (
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                    )
                })}
            </ul>
        </nav>
        )
}

export default Pagination;