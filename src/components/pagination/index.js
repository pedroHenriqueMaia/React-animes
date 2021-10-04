import './pagination.css';

function Pagination({limit, total, offset, setOffset}) {
    const MAX_ITEMS = 9;
    const MAX_LEFT = (MAX_ITEMS - 1) / 2;
    const current = offset ? (offset / limit) + 1 : 1;
    const page = Math.ceil(total / limit);
    const first = Math.max(current - MAX_LEFT, 1);
  
    return (
  <div className="text-xs-center">
     <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
      {Array.from({ length: MAX_ITEMS })
      .map((_, index) => index + first )
      .map((page) => (
          <li key={page} className={page === current ? "page-item active": "page-item"}> <a className="page-link"
           onClick={() => setOffset((page - 1) * limit)}>{page}</a></li>
      ))}
        <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
        </a>
        </li>
    </ul>
  </div>
  );
}

export default Pagination;