import './Pagination.css';

function Pagination() {
  return (
    <ul className="pagination">
        <li className="pagination__item"><span className="pagination__dot"></span></li>
        <li className="pagination__item"><span className="pagination__dot pagination__dot-active"></span></li>
        <li className="pagination__item"><span className="pagination__dot"></span></li>
    </ul>
  )
}

export default Pagination