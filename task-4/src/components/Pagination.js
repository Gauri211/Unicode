import React from 'react';
import {Link} from 'react-router-dom';
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
                        <Link className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </nav>
        )
}

export default Pagination;